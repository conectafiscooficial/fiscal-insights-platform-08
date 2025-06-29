
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Shield, Calculator, TrendingUp, Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import SolicitacaoOrcamentoForm from "@/components/forms/SolicitacaoOrcamentoForm";

const Comercial = () => {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  const beneficios = [
    "Gestão completa de documentos fiscais",
    "Orientação sobre contratos comerciais",
    "Regularização de notas fiscais",
    "Consultoria em operações de importação e exportação",
    "Suporte em documentação comercial"
  ];

  const servicos = [
    "Emissão e gestão de notas fiscais",
    "Análise e elaboração de contratos",
    "Organização de documentação comercial",
    "Consultoria em importação e exportação",
    "Orientação sobre regime tributário comercial",
    "Regularização de pendências documentais"
  ];

  const diferenciais = [
    "Expertise em documentação comercial",
    "Conhecimento em operações internacionais",
    "Tecnologia para gestão documental",
    "Suporte personalizado por segmento",
    "Acompanhamento em fiscalizações comerciais"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-indigo-600 hover:text-indigo-800 text-sm">
            ← Voltar para Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Comercial
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Gestão Comercial
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-indigo-100">
            Organize Sua Documentação Comercial e Garanta Conformidade em Todas as Operações!
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Está enfrentando dificuldades com documentação comercial? 📋 Notas fiscais, contratos e operações internacionais exigem atenção especial!
            <br /><br />
            Somos especialistas em gestão comercial e documentação fiscal, oferecendo soluções completas para manter 
            sua empresa organizada e em conformidade com todas as exigências legais.
            <br /><br />
            ➡️ Simplifique sua gestão comercial com nossa expertise!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-indigo-600 hover:bg-indigo-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            Quero Organizar Minha Documentação
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
            <FileText className="w-8 h-8 text-indigo-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-800">Serviços Inclusos</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {servicos.map((servico, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
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
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <FileText className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Não deixe a documentação comercial virar problema!
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nossa consultoria especializada organiza todos os seus documentos comerciais com segurança e eficiência.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-indigo-600 hover:bg-indigo-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            Solicitar Consultoria Comercial
          </Button>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <SolicitacaoOrcamentoForm
        isOpen={quoteFormOpen}
        onClose={() => setQuoteFormOpen(false)}
        servico="Gestão Comercial"
      />
    </div>
  );
};

export default Comercial;
