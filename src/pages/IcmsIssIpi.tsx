
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Shield, Calculator, TrendingUp, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import SolicitacaoOrcamentoForm from "@/components/forms/SolicitacaoOrcamentoForm";

const IcmsIssIpi = () => {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  const beneficios = [
    "Cálculo correto de ICMS, ISS e IPI",
    "Aproveitamento de créditos tributários",
    "Orientação sobre substituição tributária",
    "Regularização de pendências estaduais e municipais",
    "Planejamento tributário especializado"
  ];

  const servicos = [
    "Apuração mensal de ICMS estadual",
    "Cálculo de ISS municipal",
    "Orientação sobre IPI federal",
    "Análise de substituição tributária",
    "Escrituração fiscal (SPED ICMS/IPI)",
    "Consultoria em benefícios fiscais"
  ];

  const diferenciais = [
    "Conhecimento das legislações estaduais e municipais",
    "Experiência em substituição tributária",
    "Tecnologia para cálculos complexos",
    "Acompanhamento personalizado por região",
    "Suporte em fiscalizações e autuações"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-orange-600 hover:text-orange-800 text-sm">
            ← Voltar para Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            ICMS/ISS/IPI
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ICMS/ISS/IPI
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-orange-100">
            Domine os Impostos Estaduais, Municipais e Federais com Nossa Consultoria Especializada!
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Está enfrentando dificuldades com ICMS, ISS ou IPI? 🏛️ Cada esfera tem suas regras específicas!
            <br /><br />
            Somos especialistas em tributação estadual, municipal e federal, oferecendo consultoria completa 
            para garantir que sua empresa esteja em conformidade e aproveite todos os benefícios disponíveis.
            <br /><br />
            ➡️ Simplifique sua gestão tributária com nossa expertise!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            Quero Regularizar Meus Impostos
          </Button>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Benefícios em Destaque
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{beneficio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Calculator className="w-8 h-8 text-orange-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-800">Serviços Inclusos</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {servicos.map((servico, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <p className="text-gray-700">{servico}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-800">
              Por que escolher nossos serviços?
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((diferencial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-gray-700">{diferencial}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Não deixe impostos complexos atrapalharem seu negócio!
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nossa equipe domina as particularidades de cada esfera tributária para você focar no que importa.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            Solicitar Consultoria Tributária
          </Button>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <SolicitacaoOrcamentoForm
        isOpen={quoteFormOpen}
        onClose={() => setQuoteFormOpen(false)}
        servico="ICMS/ISS/IPI"
      />
    </div>
  );
};

export default IcmsIssIpi;
