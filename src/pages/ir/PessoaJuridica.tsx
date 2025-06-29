
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Building } from "lucide-react";
import { Link } from "react-router-dom";
import SolicitacaoOrcamentoForm from "@/components/forms/SolicitacaoOrcamentoForm";

const PessoaJuridica = () => {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  const beneficios = [
    "Declaração de IR Pessoa Jurídica",
    "Apuração correta do lucro tributável",
    "Otimização da carga tributária",
    "Planejamento tributário estratégico",
    "Conformidade com obrigações acessórias"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/ir" className="text-indigo-600 hover:text-indigo-800 text-sm">
            ← Voltar para IR
          </Link>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Imposto de Renda Pessoa Jurídica
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Imposto de Renda Pessoa Jurídica
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Mantenha sua empresa em conformidade fiscal com nossa consultoria especializada em IR-PJ. 
            Cuidamos de toda apuração e planejamento tributário para sua empresa.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-indigo-600 hover:bg-indigo-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            <Building className="w-5 h-5 mr-2" />
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
        servico="IR Pessoa Jurídica"
      />
    </div>
  );
};

export default PessoaJuridica;
