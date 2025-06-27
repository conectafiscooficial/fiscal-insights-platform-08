import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NotificationRequest {
  tipo: 'nova-solicitacao' | 'aprovacao' | 'rejeicao' | 'planilha-fiscal';
  dadosUsuario: {
    nome: string;
    email: string;
    plano?: string;
    documento?: string;
    empresa?: string;
    telefone?: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { tipo, dadosUsuario }: NotificationRequest = await req.json();

    let emailData;

    switch (tipo) {
      case 'nova-solicitacao':
        // Email para administrador sobre nova solicitação
        emailData = {
          from: "Conecta Fisco <noreply@conectafisco.com.br>",
          to: ["admin@conectafisco.com.br"],
          subject: "Nova Solicitação de Assinatura - Conecta Fisco",
          html: `
            <h1>Nova Solicitação de Assinatura</h1>
            <p><strong>Nome:</strong> ${dadosUsuario.nome}</p>
            <p><strong>Email:</strong> ${dadosUsuario.email}</p>
            <p><strong>Plano:</strong> ${dadosUsuario.plano}</p>
            <p><strong>Documento:</strong> ${dadosUsuario.documento}</p>
            <p><strong>Empresa:</strong> ${dadosUsuario.empresa}</p>
            <p><strong>Telefone:</strong> ${dadosUsuario.telefone}</p>
            <p>Acesse o painel administrativo para aprovar ou rejeitar esta solicitação.</p>
          `
        };
        break;

      case 'aprovacao':
        // Email para usuário sobre aprovação
        emailData = {
          from: "Conecta Fisco <noreply@conectafisco.com.br>",
          to: [dadosUsuario.email],
          subject: "Assinatura Aprovada - Conecta Fisco",
          html: `
            <h1>Parabéns, ${dadosUsuario.nome}!</h1>
            <p>Sua assinatura do plano <strong>${dadosUsuario.plano}</strong> foi aprovada!</p>
            <p>Agora você tem acesso completo aos recursos da plataforma Conecta Fisco.</p>
            <p>Faça login em nossa plataforma para começar a usar todos os recursos disponíveis.</p>
            <p>Qualquer dúvida, entre em contato conosco.</p>
            <p>Bem-vindo ao Conecta Fisco!</p>
          `
        };
        break;

      case 'rejeicao':
        // Email para usuário sobre rejeição
        emailData = {
          from: "Conecta Fisco <noreply@conectafisco.com.br>",
          to: [dadosUsuario.email],
          subject: "Solicitação de Assinatura - Conecta Fisco",
          html: `
            <h1>Olá, ${dadosUsuario.nome}</h1>
            <p>Infelizmente, sua solicitação de assinatura não pôde ser aprovada neste momento.</p>
            <p>Entre em contato conosco pelo telefone (15) 3013-7302 ou email suporte@conectafisco.com.br para mais informações.</p>
            <p>Estamos à disposição para esclarecer qualquer dúvida.</p>
          `
        };
        break;

      case 'planilha-fiscal':
        // Email com planilha fiscal do mês atual
        const mesAtual = new Date().getMonth() + 1;
        const anoAtual = new Date().getFullYear();
        const nomeMes = new Date().toLocaleDateString('pt-BR', { month: 'long' });
        
        emailData = {
          from: "Conecta Fisco <noreply@conectafisco.com.br>",
          to: [dadosUsuario.email],
          subject: `Calendário Fiscal ${nomeMes.charAt(0).toUpperCase() + nomeMes.slice(1)}/${anoAtual} - Conecta Fisco`,
          html: `
            <h1>Bem-vindo ao Calendário Fiscal, ${dadosUsuario.nome}!</h1>
            <p>Sua assinatura foi ativada com sucesso!</p>
            <p>Em anexo você encontrará o calendário fiscal completo de <strong>${nomeMes}/${anoAtual}</strong> com todas as obrigações e vencimentos.</p>
            <h3>O que está incluído:</h3>
            <ul>
              <li>✅ Todas as obrigações fiscais do mês</li>
              <li>✅ Datas de vencimento detalhadas</li>
              <li>✅ Códigos de receita</li>
              <li>✅ Observações importantes</li>
            </ul>
            <p>Acesse nossa plataforma para baixar planilhas de outros meses e utilizar nossas ferramentas fiscais.</p>
            <p>Qualquer dúvida, estamos à disposição!</p>
            <p><strong>Equipe Conecta Fisco</strong><br>
            Telefone: (15) 3013-7302<br>
            Email: suporte@conectafisco.com.br</p>
          `,
          attachments: [
            {
              filename: `calendario-fiscal-${nomeMes}-${anoAtual}.pdf`,
              content: "JVBERi0xLjMKJcfs..." // Base64 do PDF (placeholder)
            }
          ]
        };
        break;

      default:
        throw new Error('Tipo de notificação não reconhecido');
    }

    const emailResponse = await resend.emails.send(emailData);
    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });

  } catch (error: any) {
    console.error("Error in send-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
