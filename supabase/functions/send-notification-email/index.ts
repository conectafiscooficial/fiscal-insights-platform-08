
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
    const { tipo, dadosUsuario, dadosAdmin } = await req.json()

    let emailData
    
    if (tipo === 'nova-solicitacao') {
      // Email para admin sobre nova solicitação
      emailData = {
        from: 'Conecta Fisco <noreply@conectafisco.com>',
        to: ['ramos660@hotmail.com'],
        subject: `Nova Solicitação de Assinatura - ${dadosUsuario.plano}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e40af;">Nova Solicitação de Assinatura</h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #334155;">Dados do Solicitante:</h3>
              <p><strong>Nome:</strong> ${dadosUsuario.nome}</p>
              <p><strong>Email:</strong> ${dadosUsuario.email}</p>
              <p><strong>Telefone:</strong> ${dadosUsuario.telefone || 'Não informado'}</p>
              <p><strong>CPF/CNPJ:</strong> ${dadosUsuario.documento}</p>
              <p><strong>Empresa:</strong> ${dadosUsuario.empresa || 'Não informado'}</p>
              <p><strong>Plano Solicitado:</strong> <span style="color: #10b981; font-weight: bold;">${dadosUsuario.plano}</span></p>
            </div>
            
            <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #92400e;">
                <strong>Ação Necessária:</strong> Acesse o painel administrativo para aprovar ou rejeitar esta solicitação.
              </p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
            
            <p style="color: #64748b; font-size: 14px;">
              Este email foi enviado automaticamente pelo sistema Conecta Fisco.
            </p>
          </div>
        `
      }
    } else if (tipo === 'aprovacao') {
      // Email para usuário sobre aprovação
      emailData = {
        from: 'Conecta Fisco <noreply@conectafisco.com>',
        to: [dadosUsuario.email],
        subject: 'Assinatura Aprovada - Conecta Fisco',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #10b981;">Parabéns! Sua assinatura foi aprovada</h2>
            
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
              <h3 style="color: #065f46; margin-top: 0;">Olá, ${dadosUsuario.nome}!</h3>
              <p style="color: #065f46;">Sua solicitação para o plano <strong>${dadosUsuario.plano}</strong> foi aprovada com sucesso.</p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #334155;">Seus dados de acesso:</h3>
              <p><strong>Email:</strong> ${dadosUsuario.email}</p>
              <p><strong>Plano:</strong> ${dadosUsuario.plano}</p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://conectafisco.com/auth" style="background-color: #10b981; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">
                Acessar Plataforma
              </a>
            </div>
            
            <p style="color: #64748b; font-size: 14px;">
              Se você tiver dúvidas, entre em contato através do suporte@conectafisco.com.br
            </p>
          </div>
        `
      }
    } else if (tipo === 'rejeicao') {
      // Email para usuário sobre rejeição
      emailData = {
        from: 'Conecta Fisco <noreply@conectafisco.com>',
        to: [dadosUsuario.email],
        subject: 'Solicitação de Assinatura - Conecta Fisco',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #dc2626;">Informações sobre sua solicitação</h2>
            
            <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
              <h3 style="color: #991b1b; margin-top: 0;">Olá, ${dadosUsuario.nome}</h3>
              <p style="color: #991b1b;">Infelizmente não foi possível aprovar sua solicitação para o plano <strong>${dadosUsuario.plano}</strong> no momento.</p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #334155;">O que você pode fazer:</h3>
              <ul style="color: #475569;">
                <li>Verifique se todos os dados foram preenchidos corretamente</li>
                <li>Entre em contato conosco para esclarecimentos</li>
                <li>Tente novamente com informações atualizadas</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://conectafisco.com/contato" style="background-color: #6366f1; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">
                Entrar em Contato
              </a>
            </div>
            
            <p style="color: #64748b; font-size: 14px;">
              Nossa equipe está à disposição em suporte@conectafisco.com.br
            </p>
          </div>
        `
      }
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
