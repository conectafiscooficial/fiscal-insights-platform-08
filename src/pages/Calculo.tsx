
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Calculator } from "lucide-react";
import { useState } from "react";
import SolicitacaoOrcamentoForm from "@/components/forms/SolicitacaoOrcamentoForm";

const Calculo = () => {
  const [formOpen, setFormOpen] = useState(false);

  const beneficios = [
    "Cálculo correto do Simples conforme a tabela oficial",
    "Identificação do anexo ideal para sua atividade",
    "Simulação de tributos antes de emitir a guia DAS",
    "Análise do Fator 'r' para empresas de serviços",
    "Atendimento especializado para todo o Brasil"
  ];

  const passos = [
    "Descubra seu faturamento acumulado dos últimos 12 meses",
    "Identifique o anexo correto pela atividade",
    "Aplique a fórmula: (Faturamento x Alíquota da tabela) – Parcela a deduzir",
    "Divida pelo faturamento acumulado e aplique ao faturamento do mês"
  ];

  const diferenciais = [
    "Especialistas no Simples Nacional e planejamento tributário",
    "Atendimento ágil por WhatsApp ou e-mail",
    "Simulações personalizadas para sua empresa",
    "Orientação completa sobre Fator 'r' e escolha de anexo",
    "Atuação em todo o território nacional"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />
      <SubHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Cálculo do Simples Nacional
          </h1>
          <h2 className="text-2xl text-blue-600 mb-8">
            Aprenda Como Calcular o Simples Nacional e Pague Apenas o Justo em Impostos!
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto mb-8">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Você tem dúvidas sobre o cálculo do Simples Nacional? ⚠️ <strong>Um erro simples pode gerar multas, juros ou pagamento de tributos indevidos.</strong>
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Nós te ajudamos a entender e calcular corretamente o Simples, conforme o faturamento da sua empresa, atividade e tabelas oficiais.
            </p>
            <p className="text-xl font-semibold text-emerald-600 mb-8">
              ➡️ Evite prejuízos e fique em dia com o Fisco! Solicite uma análise gratuita do cálculo da sua empresa.
            </p>
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg"
              onClick={() => setFormOpen(true)}
            >
              Quero Calcular Corretamente Meu Simples
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Benefícios */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">
            Como Podemos Ajudar
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

        {/* Como funciona o cálculo */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
              🔎 Como Funciona o Cálculo do Simples Nacional?
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              O Simples utiliza uma tabela progressiva, onde as alíquotas variam conforme:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-blue-800">Faturamento acumulado dos últimos 12 meses</p>
                </CardContent>
              </Card>
              <Card className="bg-emerald-50 border-emerald-200">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="font-semibold text-emerald-800">Atividade da empresa (comércio, indústria ou serviços)</p>
                </CardContent>
              </Card>
              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold text-purple-800">Anexo correspondente (I, II, III, IV ou V)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Passo a passo */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">
            Passo a Passo do Cálculo
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {passos.map((passo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-slate-800 font-semibold">{passo}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-2xl font-bold text-emerald-600">Simples, rápido e legal!</p>
          </div>
        </section>

        {/* Exemplo Prático */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg shadow-lg p-8 text-white">
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <Calculator className="w-8 h-8 mr-3" />
              Exemplo Prático
            </h3>
            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">🛍️ Loja de roupas com faturamento de R$ 500 mil/ano</h4>
              <div className="grid md:grid-cols-2 gap-4 text-lg">
                <div>
                  <p><strong>Anexo:</strong> I – Comércio</p>
                  <p><strong>Alíquota:</strong> 7,8%</p>
                  <p><strong>Parcela a deduzir:</strong> R$ 5.940</p>
                </div>
                <div>
                  <p><strong>Cálculo do mês:</strong></p>
                  <p>[(500.000 x 7,8%) – 5.940] ÷ 500.000 = 6,444%</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white bg-opacity-30 rounded-lg">
                <p className="text-xl"><strong>Faturamento do mês:</strong> R$ 50.000</p>
                <p className="text-2xl font-bold"><strong>Total de impostos:</strong> R$ 3.222,00</p>
              </div>
            </div>
            <p className="text-xl font-semibold mt-6 text-center">
              Evite erros, calcule corretamente com nosso apoio!
            </p>
          </div>
        </section>

        {/* CTA Intermediário */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              🚀 Quer ter segurança no cálculo do Simples Nacional?
            </h3>
            <p className="text-lg mb-6">
              Solicite agora uma análise gratuita do seu caso e fique tranquilo quanto à regularização tributária.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold"
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
              "Com o suporte da Conecta Fisco, finalmente entendi como funciona o cálculo do Simples. Estou economizando e em dia com o Fisco!"
            </blockquote>
            <p className="text-center text-slate-600 mt-4">— Cliente Satisfeito</p>
          </div>
        </section>
      </main>

      <SolicitacaoOrcamentoForm
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
        servico="Consultoria Cálculo Simples Nacional"
      />
    </div>
  );
};

export default Calculo;
