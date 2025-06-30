
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import SolicitacaoOrcamentoForm from "@/components/forms/SolicitacaoOrcamentoForm";

const IcmsEstadual = () => {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  const beneficios = [
    "Consultoria especializada em ICMS estadual",
    "Análise de créditos tributários",
    "Planejamento de substituição tributária",
    "Orientação sobre benefícios fiscais estaduais",
    "Regularização de débitos em ICMS"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/icms-iss-ipi" className="text-green-600 hover:text-green-800 text-sm">
            ← Voltar para ICMS/ISS/IPI
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            ICMS Estadual
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ICMS Estadual
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-green-100">
            Otimize Sua Tributação Estadual com Nossa Consultoria Especializada!
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Está com dificuldades na apuração do ICMS? 📊 O ICMS é um dos impostos mais complexos do país!
            <br /><br />
            Nossa equipe especializada oferece consultoria completa em ICMS estadual, desde apuração 
            básica até estratégias avançadas de planejamento tributário.
            <br /><br />
            ➡️ Transforme complexidade em economia fiscal!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            Quero Otimizar Meu ICMS
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Calculator className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Não deixe o ICMS virar problema!
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nossa consultoria especializada otimiza sua apuração de ICMS com segurança e eficiência.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            Solicitar Consultoria ICMS
          </Button>
        </div>
      </section>

      <SolicitacaoOrcamentoForm
        isOpen={quoteFormOpen}
        onClose={() => setQuoteFormOpen(false)}
        servico="Consultoria ICMS Estadual"
      />
    </div>
  );
};

export default IcmsEstadual;
