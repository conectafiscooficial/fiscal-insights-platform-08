
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SolicitacaoOrcamentoForm from "@/components/forms/SolicitacaoOrcamentoForm";

const ESocial = () => {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  const beneficios = [
    "Implementação completa do eSocial",
    "Gestão de eventos trabalhistas",
    "Integração com folha de pagamento",
    "Monitoramento de obrigações",
    "Suporte em fiscalizações"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/trabalho-previdencia" className="text-teal-600 hover:text-teal-800 text-sm">
            ← Voltar para Trabalho e Previdência
          </Link>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            eSocial
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            eSocial - Escrituração Digital
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Implemente e gerencie o eSocial da sua empresa com nossa expertise. 
            Garantimos conformidade total com as obrigações trabalhistas digitais.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-teal-600 hover:bg-teal-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            <Users className="w-5 h-5 mr-2" />
            Implementar eSocial
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
        servico="eSocial"
      />
    </div>
  );
};

export default ESocial;
