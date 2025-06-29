
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import SolicitacaoOrcamentoForm from "@/components/forms/SolicitacaoOrcamentoForm";

const Cumulativo = () => {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  const beneficios = [
    "Apuração PIS/COFINS cumulativo",
    "Cálculo correto das alíquotas",
    "Verificação de regime aplicável",
    "Orientação sobre mudanças",
    "Regularização de pendências"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/pis-cofins" className="text-green-600 hover:text-green-800 text-sm">
            ← Voltar para PIS/COFINS
          </Link>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            PIS/COFINS Cumulativo
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            PIS/COFINS Cumulativo
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Entenda e aplique corretamente o regime cumulativo do PIS/COFINS. 
            Nossa consultoria garante conformidade e otimização tributária.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            <Calculator className="w-5 h-5 mr-2" />
            Solicitar Consultoria
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nossos Serviços
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

      <SolicitacaoOrcamentoForm
        isOpen={quoteFormOpen}
        onClose={() => setQuoteFormOpen(false)}
        servico="PIS/COFINS Cumulativo"
      />
    </div>
  );
};

export default Cumulativo;
