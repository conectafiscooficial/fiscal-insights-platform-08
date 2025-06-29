
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, Users, FileText, Database } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import CalculadoraINSSForm from "@/components/forms/CalculadoraINSSForm";
import SimuladorSimplesForm from "@/components/forms/SimuladorSimplesForm";

const FerramentasUteis = () => {
  const [calculadoraOpen, setCalculadoraOpen] = useState(false);
  const [simuladorOpen, setSimuladorOpen] = useState(false);

  const ferramentas = [
    {
      id: 1,
      titulo: "Calculadora de INSS",
      descricao: "Calcule as contribuições previdenciárias de forma rápida e precisa",
      icon: Calculator,
      popular: true,
      onClick: () => setCalculadoraOpen(true)
    },
    {
      id: 2,
      titulo: "Simulador Simples Nacional",
      descricao: "Simule os tributos do Simples Nacional para sua empresa",
      icon: FileText,
      popular: true,
      onClick: () => setSimuladorOpen(true)
    },
    {
      id: 3,
      titulo: "Custo de Funcionário",
      descricao: "Calcule o custo total de um funcionário incluindo encargos",
      icon: Users,
      popular: false,
      link: "/ferramentas/custo-funcionario"
    },
    {
      id: 4,
      titulo: "Alíquotas por Estado",
      descricao: "Consulte as alíquotas de ICMS, ISS e outros tributos por estado",
      icon: Database,
      popular: false,
      link: "/ferramentas/aliquotas-estado"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
        <Header />
        <SubHeader />
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Ferramentas
            </Badge>
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Ferramentas Úteis
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Acesse nossas calculadoras e simuladores para facilitar seu trabalho fiscal e contábil.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ferramentas.map((ferramenta) => {
              const IconComponent = ferramenta.icon;
              return (
                <Card key={ferramenta.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                        <CardTitle className="text-xl">{ferramenta.titulo}</CardTitle>
                      </div>
                      {ferramenta.popular && (
                        <Badge className="bg-green-100 text-green-800">Popular</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{ferramenta.descricao}</p>
                    {ferramenta.onClick ? (
                      <Button 
                        onClick={ferramenta.onClick}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        Usar Ferramenta
                      </Button>
                    ) : (
                      <Link to={ferramenta.link || "#"}>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          Usar Ferramenta
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <CalculadoraINSSForm
        isOpen={calculadoraOpen}
        onClose={() => setCalculadoraOpen(false)}
      />

      <SimuladorSimplesForm
        isOpen={simuladorOpen}
        onClose={() => setSimuladorOpen(false)}
      />
    </>
  );
};

export default FerramentasUteis;
