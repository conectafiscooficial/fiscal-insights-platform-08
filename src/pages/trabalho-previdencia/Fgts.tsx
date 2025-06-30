
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Banknote } from "lucide-react";
import { Link } from "react-router-dom";
import SolicitacaoOrcamentoForm from "@/components/forms/SolicitacaoOrcamentoForm";

const Fgts = () => {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  const beneficios = [
    "Gestão completa do FGTS empresarial",
    "Cálculo correto das contribuições",
    "Orientação sobre conectividade social",
    "Regularização de débitos em FGTS",
    "Assessoria em questões trabalhistas relacionadas"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/trabalho-previdencia" className="text-teal-600 hover:text-teal-800 text-sm">
            ← Voltar para Trabalho e Previdência
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            FGTS
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            FGTS - Fundo de Garantia
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-teal-100">
            Mantenha Sua Empresa em Dia com o FGTS!
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Está com dificuldades na gestão do FGTS? 💼 O FGTS é obrigatório para todas as empresas!
            <br /><br />
            Nossa equipe especializada oferece gestão completa do FGTS, desde cálculos 
            corretos até regularização de pendências.
            <br /><br />
            ➡️ Mantenha-se em conformidade trabalhista!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-teal-600 hover:bg-teal-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            Quero Regularizar Meu FGTS
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

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Banknote className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Não deixe o FGTS virar problema!
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nossa consultoria especializada mantém sua empresa em conformidade com o FGTS.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-teal-600 hover:bg-teal-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            Solicitar Consultoria FGTS
          </Button>
        </div>
      </section>

      <SolicitacaoOrcamentoForm
        isOpen={quoteFormOpen}
        onClose={() => setQuoteFormOpen(false)}
        servico="Consultoria FGTS"
      />
    </div>
  );
};

export default Fgts;
