const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const GATEWAY_URL = 'https://ai.gateway.lovable.dev/v1/chat/completions';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('Supabase credentials not configured');
    }

    const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2');
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    console.log('Generating updated legislation content via AI...');

    // Generate fresh content with AI
    const aiResponse = await fetch(GATEWAY_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-3-flash-preview',
        messages: [
          {
            role: 'system',
            content: `Você é um especialista em legislação brasileira (trabalhista, previdenciária, contábil e fiscal). 
Gere conteúdos REAIS e ATUALIZADOS sobre legislação brasileira vigente em março de 2026.
Responda APENAS com um JSON válido, sem markdown, sem code blocks.
O JSON deve ter a estrutura: { "conteudos": [...], "prazos": [...] }`
          },
          {
            role: 'user',
            content: `Gere 12 conteúdos de legislação brasileira atualizados (3 por categoria: Trabalhista, Previdenciaria, Contabil, Fiscal) e 10 prazos de obrigações fiscais/trabalhistas para abril e maio de 2026.

Para cada conteúdo use esta estrutura JSON:
{
  "titulo": "string - título da norma ou artigo",
  "tipo": "legislacao ou artigo",
  "categoria": "Trabalhista ou Previdenciaria ou Contabil ou Fiscal",
  "orgao_emissor": "string",
  "numero_norma": "string ou null",
  "data_publicacao": "2026-03-XX",
  "resumo_executivo": "string - 2 frases",
  "comentario_tecnico": "string - análise técnica detalhada",
  "exemplo_pratico": "string - exemplo de aplicação ou null",
  "tags": ["tag1", "tag2"],
  "nivel_acesso": "gratuito ou premium",
  "destaque": true/false (4 destaques no total),
  "status": "publicado"
}

Para cada prazo:
{
  "titulo": "string",
  "descricao": "string",
  "data_vencimento": "2026-04-XX ou 2026-05-XX",
  "recorrencia": "Mensal ou Anual",
  "categoria": "Trabalhista ou Previdenciaria ou Contabil ou Fiscal",
  "orgao_responsavel": "string",
  "nivel_acesso": "gratuito"
}

Use normas e prazos reais do Brasil (eSocial, DCTF, EFD, DAS, GFIP, ECD, DIRPF, GPS, FGTS, etc.). Datas de vencimento devem ser realistas.`
          }
        ],
        temperature: 0.7,
        max_tokens: 4000,
      }),
    });

    if (!aiResponse.ok) {
      const errText = await aiResponse.text();
      throw new Error(`AI Gateway error [${aiResponse.status}]: ${errText}`);
    }

    const aiData = await aiResponse.json();
    const rawContent = aiData.choices?.[0]?.message?.content;
    
    if (!rawContent) {
      throw new Error('No content returned from AI');
    }

    console.log('Parsing AI response...');
    
    // Clean potential markdown code blocks
    let cleanContent = rawContent.trim();
    if (cleanContent.startsWith('```')) {
      cleanContent = cleanContent.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
    }
    
    const parsed = JSON.parse(cleanContent);
    const { conteudos, prazos } = parsed;

    if (!Array.isArray(conteudos) || !Array.isArray(prazos)) {
      throw new Error('Invalid AI response structure');
    }

    console.log(`Got ${conteudos.length} conteudos and ${prazos.length} prazos`);

    // Upsert conteudos - delete old and insert new
    const { error: deleteConteudosError } = await supabase
      .from('conteudos')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // delete all

    if (deleteConteudosError) {
      console.error('Error deleting old conteudos:', deleteConteudosError);
    }

    const { error: insertConteudosError } = await supabase
      .from('conteudos')
      .insert(conteudos.map((c: Record<string, unknown>) => ({
        titulo: c.titulo,
        tipo: c.tipo || 'artigo',
        categoria: c.categoria,
        orgao_emissor: c.orgao_emissor,
        numero_norma: c.numero_norma,
        data_publicacao: c.data_publicacao,
        resumo_executivo: c.resumo_executivo,
        comentario_tecnico: c.comentario_tecnico,
        exemplo_pratico: c.exemplo_pratico,
        tags: c.tags || [],
        nivel_acesso: c.nivel_acesso || 'gratuito',
        destaque: c.destaque || false,
        visualizacoes: Math.floor(Math.random() * 3000),
        status: 'publicado',
      })));

    if (insertConteudosError) {
      throw new Error(`Error inserting conteudos: ${insertConteudosError.message}`);
    }

    // Upsert prazos
    const { error: deletePrazosError } = await supabase
      .from('prazos_obrigacoes')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000');

    if (deletePrazosError) {
      console.error('Error deleting old prazos:', deletePrazosError);
    }

    const { error: insertPrazosError } = await supabase
      .from('prazos_obrigacoes')
      .insert(prazos.map((p: Record<string, unknown>) => ({
        titulo: p.titulo,
        descricao: p.descricao,
        data_vencimento: p.data_vencimento,
        recorrencia: p.recorrencia || 'Mensal',
        categoria: p.categoria,
        orgao_responsavel: p.orgao_responsavel,
        nivel_acesso: p.nivel_acesso || 'gratuito',
      })));

    if (insertPrazosError) {
      throw new Error(`Error inserting prazos: ${insertPrazosError.message}`);
    }

    console.log('Content updated successfully!');

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Updated ${conteudos.length} conteudos and ${prazos.length} prazos`,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error updating content:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
