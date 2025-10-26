import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Briefcase, Baby } from "lucide-react";

const Beneficios = () => {
  const beneficios = [
    {
      icon: Shield,
      titulo: "Aposentadoria por Idade",
      descricao: "65 anos (homens) e 62 anos (mulheres) com mínimo de 15 anos de contribuição",
      categoria: "Aposentadoria"
    },
    {
      icon: Briefcase,
      titulo: "Aposentadoria por Tempo de Contribuição",
      descricao: "35 anos (homens) e 30 anos (mulheres) - regras de transição aplicáveis",
      categoria: "Aposentadoria"
    },
    {
      icon: Heart,
      titulo: "Auxílio-Doença",
      descricao: "Benefício concedido ao segurado impedido de trabalhar por doença ou acidente por mais de 15 dias",
      categoria: "Saúde"
    },
    {
      icon: Baby,
      titulo: "Salário-Maternidade",
      descricao: "120 dias de licença remunerada para gestantes e adotantes",
      categoria: "Família"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />
      <SubHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Início &gt; Trabalho e Previdência &gt; <span className="text-foreground font-medium">Benefícios</span>
            </p>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Benefícios Previdenciários</h1>
            <p className="text-lg text-muted-foreground">
              Conheça os principais benefícios do INSS e seus requisitos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{beneficio.titulo}</CardTitle>
                        <Badge className="mt-1">{beneficio.categoria}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{beneficio.descricao}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Beneficios;
