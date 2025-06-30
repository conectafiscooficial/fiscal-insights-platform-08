
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Building } from "lucide-react";
import { Link } from "react-router-dom";
import SolicitacaoOrcamentoForm from "@/components/forms/SolicitacaoOrcamentoForm";

const IssMunicipal = () => {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  const beneficios = [
    "Consultoria especializada em ISS municipal",
    "Orientação sobre local de prestação do serviço",
    "Análise de alíquotas municipais",
    "Regularização de débitos em ISS",
    "Planejamento para redução da carga tributária"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/icms-iss-ipi" className="text-purple-600 hover:text-purple-800 text-sm">
            ← Voltar para ICMS/ISS/IPI
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            ISS Municipal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ISS Municipal
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-purple-100">
            Consultoria Especializada em Tributação Municipal de Serviços!
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Está com dúvidas sobre ISS? 🏢 A tributação municipal pode ser complexa!
            <br /><br />
            Nossa equipe oferece consultoria completa em ISS municipal, desde definição 
            do local de prestação até estratégias de otimização tributária.
            <br /><br />
            ➡️ Simplifique sua tributação municipal!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            Quero Otimizar Meu ISS
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Building className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Não deixe o ISS virar problema!
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nossa consultoria especializada organiza sua tributação municipal com eficiência.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            Solicitar Consultoria ISS
          </Button>
        </div>
      </section>

      <SolicitacaoOrcamentoForm
        isOpen={quoteFormOpen}
        onClose={() => setQuoteFormOpen(false)}
        servico="Consultoria ISS Municipal"
      />
    </div>
  );
};

export default IssMunicipal;
