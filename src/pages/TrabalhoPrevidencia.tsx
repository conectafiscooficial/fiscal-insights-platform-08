
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Shield, Calculator, TrendingUp, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import SolicitacaoOrcamentoForm from "@/components/forms/SolicitacaoOrcamentoForm";

const TrabalhoPrevidencia = () => {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  const beneficios = [
    "Gestão completa do eSocial",
    "Cálculo correto de FGTS e contribuições",
    "Folha de pagamento sem erros",
    "Orientação sobre direitos trabalhistas",
    "Regularização previdenciária"
  ];

  const servicos = [
    "Implementação e gestão do eSocial",
    "Cálculo e recolhimento de FGTS",
    "Folha de pagamento completa",
    "Cálculo de contribuições previdenciárias",
    "Orientação sobre benefícios trabalhistas",
    "Regularização de pendências trabalhistas"
  ];

  const diferenciais = [
    "Especialistas em legislação trabalhista",
    "Tecnologia avançada para folha de pagamento",
    "Acompanhamento das mudanças na legislação",
    "Suporte em fiscalizações trabalhistas",
    "Atendimento personalizado por setor"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-teal-600 hover:text-teal-800 text-sm">
            ← Voltar para Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Trabalho e Previdência
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Trabalho e Previdência
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-teal-100">
            Mantenha Sua Empresa em Dia com as Obrigações Trabalhistas e Previdenciárias!
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Está preocupado com o eSocial, FGTS e folha de pagamento? 👥 As obrigações trabalhistas exigem atenção especial!
            <br /><br />
            Somos especialistas em gestão trabalhista e previdenciária, oferecendo soluções completas para manter 
            sua empresa regularizada e seus funcionários com todos os direitos garantidos.
            <br /><br />
            ➡️ Garanta conformidade trabalhista e evite passivos!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-teal-600 hover:bg-teal-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            Quero Regularizar Minhas Obrigações
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
            <Users className="w-8 h-8 text-teal-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-800">Serviços Inclusos</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {servicos.map((servico, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
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
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Proteja sua empresa e seus funcionários!
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nossa consultoria especializada garante que todas as obrigações trabalhistas sejam cumpridas corretamente.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-teal-600 hover:bg-teal-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            Solicitar Consultoria Trabalhista
          </Button>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <SolicitacaoOrcamentoForm
        isOpen={quoteFormOpen}
        onClose={() => setQuoteFormOpen(false)}
        servico="Trabalho e Previdência"
      />
    </div>
  );
};

export default TrabalhoPrevidencia;
