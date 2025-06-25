
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { nome, email, telefone, assunto, mensagem, tipo } = await req.json()

    const emailData = {
      from: 'Conecta Fisco <noreply@conectafisco.com>',
      to: ['ramos660@hotmail.com'],
      subject: `${tipo ? `[${tipo}] ` : ''}${assunto || 'Novo contato do site'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">Novo contato do site Conecta Fisco</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Informações do Contato:</h3>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${telefone ? `<p><strong>Telefone:</strong> ${telefone}</p>` : ''}
            ${assunto ? `<p><strong>Assunto:</strong> ${assunto}</p>` : ''}
            ${tipo ? `<p><strong>Tipo:</strong> ${tipo}</p>` : ''}
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #10b981; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Mensagem:</h3>
            <p style="white-space: pre-wrap;">${mensagem}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          
          <p style="color: #64748b; font-size: 14px;">
            Este email foi enviado automaticamente pelo sistema do site Conecta Fisco.
          </p>
        </div>
      `
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify(emailData)
    })

    if (res.ok) {
      return new Response(
        JSON.stringify({ success: true, message: 'Email enviado com sucesso!' }),
        { 
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    } else {
      const error = await res.text()
      console.error('Erro ao enviar email:', error)
      return new Response(
        JSON.stringify({ success: false, error: 'Erro ao enviar email' }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }
  } catch (error) {
    console.error('Erro:', error)
    return new Response(
      JSON.stringify({ success: false, error: 'Erro interno do servidor' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
