
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Phone, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import SolicitacaoOrcamentoForm from "@/components/forms/SolicitacaoOrcamentoForm";

const Desenquadramento = () => {
  const [formOpen, setFormOpen] = useState(false);

  const beneficios = [
    "Atendimento Rápido e Personalizado",
    "Transição Segura para o Novo Regime", 
    "Equipe Especializada em Legislação Atualizada",
    "Evite multas e autuações da Receita Federal",
    "Consultoria Completa Pós-Desenquadramento"
  ];

  const servicos = [
    "Comunicação de Desenquadramento junto à Receita Federal",
    "Alterações contratuais na Junta Comercial (se necessário)",
    "Consultoria para escolha do melhor regime tributário (Lucro Presumido ou Real)",
    "Orientação sobre novas obrigações fiscais e contábeis",
    "Suporte completo em todas as etapas do processo"
  ];

  const diferenciais = [
    "Especialistas com anos de experiência",
    "Atuação em todo o Brasil",
    "Atendimento ágil, via WhatsApp, e-mail ou telefone",
    "Transparência em cada etapa do processo"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />
      <SubHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Desenquadramento de Empresas
          </h1>
          <h2 className="text-2xl text-blue-600 mb-8">
            Regularize Sua Situação Tributária com Segurança!
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto mb-8">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Está crescendo ou mudou as atividades da sua empresa? ⚠️ <strong>Evite multas e problemas com o Fisco!</strong>
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Somos especialistas em Desenquadramento de MEI, Simples Nacional, ME e EPP, garantindo que sua transição para o novo regime seja simples, rápida e 100% regularizada.
            </p>
            <p className="text-xl font-semibold text-emerald-600 mb-8">
              ➡️ Faça o desenquadramento correto e mantenha sua empresa saudável e legalizada!
            </p>
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg"
              onClick={() => setFormOpen(true)}
            >
              Quero Regularizar Minha Empresa
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Benefícios */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">
            Benefícios em Destaque
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <p className="font-semibold text-slate-800">{beneficio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Serviços Inclusos */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
              🔧 Serviços Inclusos
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {servicos.map((servico, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700">{servico}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por que escolher */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg shadow-lg p-8 text-white">
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              🏆 Por que escolher a Conecta Fisco?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {diferenciais.map((diferencial, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-200 mt-1 flex-shrink-0" />
                  <p>{diferencial}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimento */}
        <section className="mb-12">
          <div className="bg-slate-100 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
              O que nossos clientes dizem
            </h3>
            <blockquote className="text-lg text-slate-700 italic text-center">
              "Contei com o suporte da Conecta Fisco e o desenquadramento da minha empresa foi muito tranquilo. Hoje estou regularizado e sem dor de cabeça!"
            </blockquote>
            <p className="text-center text-slate-600 mt-4">— Cliente Satisfeito</p>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Pronto para Regularizar sua Empresa?
            </h3>
            <p className="text-slate-700 mb-6">
              Entre em contato agora e tenha o suporte completo para o desenquadramento da sua empresa.
            </p>
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg"
              onClick={() => setFormOpen(true)}
            >
              Solicitar Orçamento Gratuito
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      <SolicitacaoOrcamentoForm
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
        servico="Desenquadramento de Empresas"
      />
    </div>
  );
};

export default Desenquadramento;
