
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, AlertTriangle } from "lucide-react";
import { useState } from "react";
import SolicitacaoOrcamentoForm from "@/components/forms/SolicitacaoOrcamentoForm";

const Sublimites = () => {
  const [formOpen, setFormOpen] = useState(false);

  const beneficios = [
    "Análise personalizada do faturamento e limites da empresa",
    "Verificação de obrigações estaduais e municipais",
    "Orientação prática sobre ICMS e ISS fora do DAS",
    "Planejamento tributário estratégico para o Simples Nacional",
    "Atendimento completo em todo o Brasil"
  ];

  const sublimitesTabela = [
    {
      faturamento: "Até R$ 360 mil",
      situacao: "Simples completo, tudo incluso no DAS"
    },
    {
      faturamento: "Até R$ 1,8 milhão",
      situacao: "Estados com sublimite podem exigir ICMS/ISS fora do DAS"
    },
    {
      faturamento: "Até R$ 3,6 milhões",
      situacao: "Recolhimento separado de ICMS/ISS em alguns estados"
    },
    {
      faturamento: "Até R$ 4,8 milhões",
      situacao: "Simples permitido, mas ICMS/ISS fora do DAS em todo o Brasil"
    }
  ];

  const quemPrecisa = [
    "Empresas em crescimento que ultrapassam R$ 360 mil ou R$ 1,8 milhão de faturamento anual",
    "Empresas do setor de comércio, indústria ou serviços",
    "Empresários que querem evitar autuações e manter o Simples corretamente aplicado"
  ];

  const diferenciais = [
    "Profissionais atualizados com as legislações estadual e federal",
    "Atendimento rápido e claro, via WhatsApp ou e-mail",
    "Acompanhamento completo para evitar multas e problemas fiscais",
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
            Sublimites do Simples Nacional
          </h1>
          <h2 className="text-2xl text-blue-600 mb-8">
            Entenda os Sublimites do Simples Nacional e Evite Problemas com o Fisco!
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto mb-8">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Sua empresa já ultrapassou os sublimites do Simples Nacional? Sabia que isso pode exigir o pagamento separado de ICMS ou ISS, além de novas obrigações fiscais?
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Evite multas e complicações: Nós te orientamos sobre os sublimites e ajustamos sua empresa com segurança e eficiência.
            </p>
            <p className="text-xl font-semibold text-emerald-600 mb-8">
              ➡️ Fale com nossos especialistas e garanta o enquadramento correto da sua empresa.
            </p>
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg"
              onClick={() => setFormOpen(true)}
            >
              Quero Analisar Minha Situação
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

        {/* O que são sublimites */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
              🔎 O Que São os Sublimites do Simples Nacional?
            </h3>
            <div className="space-y-4 text-slate-700">
              <p>
                Os sublimites determinam se, ao ultrapassar certos faturamentos, sua empresa pode continuar no Simples Nacional, mas precisa pagar ICMS ou ISS separadamente, fora da guia única (DAS).
              </p>
              <p className="font-semibold text-emerald-600">
                Isso evita erros no recolhimento de tributos e garante a regularidade da sua empresa.
              </p>
            </div>
          </div>
        </section>

        {/* Tabela de Sublimites */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">
            Tabela Resumo dos Sublimites
          </h3>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Faturamento Anual</th>
                    <th className="px-6 py-4 text-left font-bold">Situação Tributária</th>
                  </tr>
                </thead>
                <tbody>
                  {sublimitesTabela.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-slate-800">{item.faturamento}</td>
                      <td className="px-6 py-4 text-slate-700">{item.situacao}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <p className="text-yellow-800">
                <strong>Atenção:</strong> Estados e municípios têm autonomia para definir sublimites. Consulte sempre a legislação local.
              </p>
            </div>
          </div>
        </section>

        {/* Quem precisa se atentar */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg p-8 text-white">
            <h3 className="text-3xl font-bold mb-6">
              ⚠️ Quem Precisa se Atentar aos Sublimites?
            </h3>
            <div className="space-y-3">
              {quemPrecisa.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-200 mt-1 flex-shrink-0" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Intermediário */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              🚀 Não corra riscos com o Fisco!
            </h3>
            <p className="text-lg mb-6">
              Nossa equipe faz a análise do seu faturamento e obrigações para garantir o enquadramento correto no Simples Nacional.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold"
              onClick={() => setFormOpen(true)}
            >
              Solicitar Minha Análise Gratuita
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
              "A equipe da Conecta Fisco me ajudou a entender os sublimites e ajustou minha empresa. Hoje, pago os impostos corretamente e sem surpresas."
            </blockquote>
            <p className="text-center text-slate-600 mt-4">— Cliente Satisfeito</p>
          </div>
        </section>
      </main>

      <SolicitacaoOrcamentoForm
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
        servico="Consultoria Sublimites Simples Nacional"
      />
    </div>
  );
};

export default Sublimites;
