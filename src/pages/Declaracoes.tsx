
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Shield, Calculator, TrendingUp, Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import SolicitacaoOrcamentoForm from "@/components/forms/SolicitacaoOrcamentoForm";

const Declaracoes = () => {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  const beneficios = [
    "Gestão completa de todas as declarações",
    "Cálculo correto de tributos devidos",
    "Entrega sempre dentro dos prazos",
    "Acompanhamento de pendências e retificações",
    "Orientação sobre obrigações acessórias"
  ];

  const servicos = [
    "DARF - Documento de Arrecadação de Receitas Federais",
    "GFIP - Guia de Recolhimento do FGTS",
    "DIRF - Declaração do Imposto de Renda Retido na Fonte",
    "DME - Declaração de Serviços Médicos",
    "DCTF - Declaração de Débitos e Créditos Tributários Federais",
    "Outras declarações específicas por setor"
  ];

  const diferenciais = [
    "Conhecimento de todas as declarações obrigatórias",
    "Controle rigoroso de prazos e obrigações",
    "Tecnologia para cálculos precisos",
    "Acompanhamento personalizado",
    "Suporte em fiscalizações e autuações"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-emerald-600 hover:text-emerald-800 text-sm">
            ← Voltar para Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Declarações
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Gestão de Declarações
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-emerald-100">
            Mantenha Todas as Declarações em Dia e Evite Multas e Complicações!
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Está perdendo prazos de declarações? 📄 Cada declaração tem suas particularidades e prazos específicos!
            <br /><br />
            Somos especialistas em gestão de declarações fiscais, desde DARF até DIRF, garantindo que sua empresa 
            cumpra todas as obrigações acessórias dentro dos prazos e sem erros.
            <br /><br />
            ➡️ Nunca mais perca um prazo de declaração!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            Quero Organizar Minhas Declarações
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
            <FileText className="w-8 h-8 text-emerald-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-800">Serviços Inclusos</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {servicos.map((servico, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
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
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <FileText className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Não deixe as declarações acumularem!
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nossa consultoria especializada organiza e entrega todas as suas declarações sempre em dia.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            Solicitar Gestão de Declarações
          </Button>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <SolicitacaoOrcamentoForm
        isOpen={quoteFormOpen}
        onClose={() => setQuoteFormOpen(false)}
        servico="Gestão de Declarações"
      />
    </div>
  );
};

export default Declaracoes;
