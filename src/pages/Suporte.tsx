import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle, MessageSquare, Phone } from "lucide-react";

const Suporte = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-semibold text-slate-800">Central de Suporte</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Como podemos ajudar?</h2>
          <p className="text-slate-600">
            Encontre respostas para as perguntas mais frequentes ou entre em contato conosco diretamente.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Canais de Atendimento */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>Canais de Atendimento</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <h4 className="font-medium">Telefone</h4>
                  <p className="text-slate-600">(15) 3013-7302</p>
                  <p className="text-sm text-slate-500">Seg a Sex, 8h às 18h</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg">
                <MessageCircle className="w-5 h-5 text-green-600" />
                <div>
                  <h4 className="font-medium">WhatsApp</h4>
                  <p className="text-slate-600">(15) 99876-5432</p>
                  <p className="text-sm text-slate-500">Seg a Sex, 8h às 18h</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg">
                <Mail className="w-5 h-5 text-purple-600" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-slate-600">suporte@conectafisco.com.br</p>
                  <p className="text-sm text-slate-500">Resposta em até 24h</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Perguntas Frequentes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>Perguntas Frequentes</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Como emitir uma nota fiscal?</h4>
                <p className="text-slate-600">
                  Para emitir uma nota fiscal, acesse o painel do emissor, preencha os dados e confirme a emissão.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Qual o prazo para pagamento de impostos?</h4>
                <p className="text-slate-600">
                  O prazo para pagamento de impostos varia conforme o tipo de imposto e o regime tributário da empresa.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Como funciona a emissão de boletos?</h4>
                <p className="text-slate-600">
                  A emissão de boletos é feita através do nosso sistema, onde você pode personalizar os dados e gerar o boleto.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Expandido */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">FAQ - Perguntas Frequentes</h2>
          <div className="space-y-4">
            <details className="border border-slate-200 rounded-lg p-4">
              <summary className="font-medium text-slate-800 cursor-pointer">
                Quais os tipos de suporte oferecidos?
              </summary>
              <p className="text-slate-600 mt-2">
                Oferecemos suporte técnico, fiscal e contábil através de telefone, email e chat.
              </p>
            </details>

            <details className="border border-slate-200 rounded-lg p-4">
              <summary className="font-medium text-slate-800 cursor-pointer">
                Como funciona o suporte técnico?
              </summary>
              <p className="text-slate-600 mt-2">
                O suporte técnico está disponível para auxiliar na configuração e uso das ferramentas.
              </p>
            </details>

            <details className="border border-slate-200 rounded-lg p-4">
              <summary className="font-medium text-slate-800 cursor-pointer">
                Qual o tempo de resposta do suporte?
              </summary>
              <p className="text-slate-600 mt-2">
                Nosso tempo de resposta é de até 24 horas para email e imediato para telefone e chat.
              </p>
            </details>
          </div>
        </section>

        {/* Contato Adicional */}
        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Precisa de ajuda extra?</h2>
          <p className="text-slate-600">
            Entre em contato conosco para suporte personalizado.
          </p>
          <div className="mt-4">
            <Button variant="outline">Fale Conosco</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Suporte;
