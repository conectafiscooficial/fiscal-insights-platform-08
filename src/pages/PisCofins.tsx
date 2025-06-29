
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Shield, Calculator, TrendingUp, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import SolicitacaoOrcamentoForm from "@/components/forms/SolicitacaoOrcamentoForm";

const PisCofins = () => {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  const beneficios = [
    "Cálculo correto do PIS e COFINS devido",
    "Identificação de créditos tributários",
    "Orientação sobre regime cumulativo e não-cumulativo",
    "Planejamento para redução da carga tributária",
    "Regularização de inconsistências fiscais"
  ];

  const servicos = [
    "Apuração mensal de PIS e COFINS",
    "Análise de regime tributário (cumulativo/não-cumulativo)",
    "Cálculo e apropriação de créditos",
    "Orientação sobre base de cálculo",
    "Escrituração fiscal digital (EFD-Contribuições)",
    "Consultoria para aproveitamento de créditos"
  ];

  const diferenciais = [
    "Especialistas em legislação PIS/COFINS",
    "Tecnologia avançada para cálculos precisos",
    "Acompanhamento mensal personalizado",
    "Identificação de oportunidades de economia",
    "Suporte completo em fiscalizações"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-purple-600 hover:text-purple-800 text-sm">
            ← Voltar para Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            PIS/COFINS
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            PIS/COFINS
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-purple-100">
            Otimize Sua Apuração de PIS e COFINS e Aproveite Todos os Créditos Permitidos!
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Está perdendo dinheiro com PIS e COFINS mal calculados? 💰 Muitas empresas pagam mais do que deveriam!
            <br /><br />
            Somos especialistas em apuração de PIS e COFINS, tanto no regime cumulativo quanto não-cumulativo, 
            garantindo que você aproveite todos os créditos e pague apenas o devido.
            <br /><br />
            ➡️ Otimize sua carga tributária e recupere créditos perdidos!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            Quero Otimizar Meu PIS/COFINS
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
            <Calculator className="w-8 h-8 text-purple-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-800">Serviços Inclusos</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {servicos.map((servico, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Pare de pagar PIS e COFINS em excesso!
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nossa consultoria especializada garante que você aproveite todos os benefícios e créditos disponíveis.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            Solicitar Consultoria Especializada
          </Button>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <SolicitacaoOrcamentoForm
        isOpen={quoteFormOpen}
        onClose={() => setQuoteFormOpen(false)}
        servico="PIS/COFINS"
      />
    </div>
  );
};

export default PisCofins;
