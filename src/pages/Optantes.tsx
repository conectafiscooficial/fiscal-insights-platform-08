
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import SolicitacaoOrcamentoForm from "@/components/forms/SolicitacaoOrcamentoForm";

const Optantes = () => {
  const [formOpen, setFormOpen] = useState(false);

  const beneficios = [
    "Pagamento de impostos em guia única (DAS)",
    "Redução da carga tributária em muitos casos",
    "Burocracia reduzida e mais facilidade no dia a dia",
    "Possibilidade de participar de licitações públicas",
    "Cálculo simplificado e progressivo conforme o faturamento"
  ];

  const quemPode = [
    "ME e EPP com faturamento dentro do limite",
    "Empresas sem débitos fiscais ou pendências jurídicas",
    "Atividades permitidas conforme legislação vigente"
  ];

  const quemNaoPode = [
    "Empresas com sócios estrangeiros residentes no exterior",
    "Atividades vedadas, como instituições financeiras",
    "Empresas que ultrapassam o faturamento permitido"
  ];

  const diferenciais = [
    "Especialistas atualizados com a legislação",
    "Atendimento rápido e direto via WhatsApp ou e-mail",
    "Acompanhamento completo na adesão ou mudança de regime",
    "Suporte contínuo para manter sua empresa regularizada"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />
      <SubHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Simples Nacional
          </h1>
          <h2 className="text-2xl text-blue-600 mb-8">
            Descubra se Sua Empresa Pode se Beneficiar do Regime Tributário Mais Simples do Brasil!
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto mb-8">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Você sabia que ser optante do Simples Nacional pode reduzir a carga tributária e simplificar o dia a dia da sua empresa?
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Nós ajudamos microempresas e empresas de pequeno porte a entender, aderir e aproveitar todas as vantagens desse regime, com segurança e transparência.
            </p>
            <p className="text-xl font-semibold text-emerald-600 mb-8">
              ➡️ Quer saber se sua empresa pode ser optante do Simples Nacional? Fale com um especialista agora!
            </p>
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg"
              onClick={() => setFormOpen(true)}
            >
              Verificar Minha Situação Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Benefícios */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">
            Vantagens do Simples Nacional
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

        {/* O que é o Simples */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
              🔎 O Que é Ser Optante do Simples Nacional?
            </h3>
            <div className="space-y-4 text-slate-700">
              <p>
                O Simples Nacional é um regime tributário voltado para ME (Microempresas) e EPP (Empresas de Pequeno Porte), com faturamento anual de até R$ 4,8 milhões.
              </p>
              <p>
                Unifica impostos municipais, estaduais e federais, oferecendo simplicidade e economia.
              </p>
              <p className="font-semibold text-emerald-600">
                Aderir ao Simples pode ser o caminho ideal para o crescimento seguro do seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* Quem pode e quem não pode */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-6">
                  ✔️ Quem Pode Ser Optante?
                </h3>
                <div className="space-y-3">
                  {quemPode.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-green-700">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-800 mb-6">
                  ❌ Quem Não Pode?
                </h3>
                <div className="space-y-3">
                  {quemNaoPode.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <p className="text-red-700">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Intermediário */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              🚀 Está em dúvida se o Simples Nacional é o ideal para sua empresa?
            </h3>
            <p className="text-lg mb-6">
              Nós analisamos gratuitamente o seu caso e orientamos você no melhor caminho tributário.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold"
              onClick={() => setFormOpen(true)}
            >
              Solicitar Análise Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">
            Diferenciais da Nossa Consultoria
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {diferenciais.map((diferencial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <p className="text-slate-800 font-semibold">{diferencial}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Depoimento */}
        <section className="mb-12">
          <div className="bg-slate-100 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
              O que nossos clientes dizem
            </h3>
            <blockquote className="text-lg text-slate-700 italic text-center">
              "Depois que a Conecta Fisco cuidou do Simples Nacional da minha empresa, tudo ficou muito mais fácil. Hoje tenho mais controle, menos burocracia e tributos reduzidos."
            </blockquote>
            <p className="text-center text-slate-600 mt-4">— Cliente Satisfeito</p>
          </div>
        </section>
      </main>

      <SolicitacaoOrcamentoForm
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
        servico="Consultoria Simples Nacional - Optantes"
      />
    </div>
  );
};

export default Optantes;
