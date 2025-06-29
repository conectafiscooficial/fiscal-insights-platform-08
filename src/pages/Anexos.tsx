
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, AlertCircle } from "lucide-react";
import { useState } from "react";
import SolicitacaoOrcamentoForm from "@/components/forms/SolicitacaoOrcamentoForm";

const Anexos = () => {
  const [formOpen, setFormOpen] = useState(false);

  const beneficios = [
    "Identificação correta do anexo da sua empresa",
    "Cálculo exato dos tributos conforme o Simples Nacional",
    "Orientação sobre Fator 'r' para redução de alíquota",
    "Consultoria tributária especializada para ME e EPP",
    "Regularização e prevenção de autuações fiscais"
  ];

  const anexosTabela = [
    {
      anexo: "Anexo I",
      atividade: "Comércio",
      aliquota: "A partir de 4%"
    },
    {
      anexo: "Anexo II",
      atividade: "Indústria",
      aliquota: "A partir de 4,5%"
    },
    {
      anexo: "Anexo III",
      atividade: "Serviços gerais",
      aliquota: "A partir de 6%"
    },
    {
      anexo: "Anexo IV",
      atividade: "Construção civil, segurança, outros",
      aliquota: "A partir de 4,5%"
    },
    {
      anexo: "Anexo V",
      atividade: "Serviços técnicos, consultoria, TI",
      aliquota: "A partir de 15,5%"
    }
  ];

  const quemPrecisa = [
    "Empresários que querem reduzir tributos no Simples",
    "Empresas prestadoras de serviços, comércio ou indústria",
    "Negócios em crescimento ou que mudaram de atividade",
    "Contadores ou gestores buscando segurança tributária"
  ];

  const diferenciais = [
    "Equipe especializada no Simples Nacional e Planejamento Tributário",
    "Atendimento rápido e direto via WhatsApp ou e-mail",
    "Relatório personalizado sobre o anexo e simulação de tributos",
    "Orientação prática sobre Fator 'r' para empresas de serviços",
    "Atuação em todo o Brasil"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />
      <SubHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Anexos do Simples Nacional
          </h1>
          <h2 className="text-2xl text-blue-600 mb-8">
            Descubra em Qual Anexo do Simples Nacional Sua Empresa se Enquadra e Pague Menos Impostos!
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto mb-8">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Você sabia que entender o Anexo do Simples Nacional correto pode reduzir sua carga tributária e evitar erros fiscais?
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Cada atividade tem um enquadramento diferente, e escolher o anexo certo garante que sua empresa esteja regular e pagando apenas o necessário.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Nós ajudamos você a identificar o anexo ideal e a planejar sua tributação de forma estratégica e segura.
            </p>
            <p className="text-xl font-semibold text-emerald-600 mb-8">
              ➡️ Fale agora com um especialista e evite surpresas no Simples Nacional!
            </p>
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg"
              onClick={() => setFormOpen(true)}
            >
              Quero Descobrir Meu Anexo
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

        {/* O que são anexos */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
              🔎 O Que São os Anexos do Simples Nacional?
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              Os anexos do Simples Nacional definem as alíquotas e tributos que a sua empresa deve pagar, de acordo com a atividade exercida:
            </p>
          </div>
        </section>

        {/* Tabela de Anexos */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">
            Tabela dos Anexos
          </h3>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Anexo</th>
                    <th className="px-6 py-4 text-left font-bold">Atividade</th>
                    <th className="px-6 py-4 text-left font-bold">Alíquota Inicial</th>
                  </tr>
                </thead>
                <tbody>
                  {anexosTabela.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-slate-800">{item.anexo}</td>
                      <td className="px-6 py-4 text-slate-700">{item.atividade}</td>
                      <td className="px-6 py-4 text-emerald-600 font-semibold">{item.aliquota}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-blue-800">
                <strong>Atenção:</strong> Serviços do Anexo V podem migrar para o Anexo III se a folha de pagamento for igual ou superior a 28% do faturamento (Fator "r").
              </p>
            </div>
          </div>
        </section>

        {/* Quem precisa entender */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-8 text-white">
            <h3 className="text-3xl font-bold mb-6">
              🎯 Quem Precisa Entender os Anexos?
            </h3>
            <div className="space-y-3">
              {quemPrecisa.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-200 mt-1 flex-shrink-0" />
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
              🚀 Não arrisque pagar mais impostos do que o necessário!
            </h3>
            <p className="text-lg mb-6">
              Conte com nossos especialistas para analisar o anexo da sua empresa e otimizar sua carga tributária com segurança.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold"
              onClick={() => setFormOpen(true)}
            >
              Quero Analisar Meu Enquadramento
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
              "Com o suporte da Conecta Fisco, descobri que podia pagar menos impostos mudando o anexo da minha empresa. Hoje estou regular e economizando!"
            </blockquote>
            <p className="text-center text-slate-600 mt-4">— Cliente Satisfeito</p>
          </div>
        </section>
      </main>

      <SolicitacaoOrcamentoForm
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
        servico="Consultoria Anexos Simples Nacional"
      />
    </div>
  );
};

export default Anexos;
