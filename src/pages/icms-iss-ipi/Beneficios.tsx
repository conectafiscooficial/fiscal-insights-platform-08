import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, TrendingDown, CheckCircle2, FileText } from "lucide-react";

const Beneficios = () => {
  const beneficios = [
    {
      tipo: "ICMS",
      titulo: "Isenção para Produtos da Cesta Básica",
      descricao: "Isenção de ICMS para produtos essenciais como arroz, feijão, leite e pão",
      vigencia: "Permanente",
      categoria: "Isenção"
    },
    {
      tipo: "ICMS",
      titulo: "Redução de Base de Cálculo",
      descricao: "Redução da base de cálculo do ICMS em operações específicas",
      vigencia: "Conforme regulamento estadual",
      categoria: "Redução"
    },
    {
      tipo: "ISS",
      titulo: "ISS Fixo para Profissionais",
      descricao: "Profissionais autônomos podem optar por ISS fixo mensal",
      vigencia: "Conforme legislação municipal",
      categoria: "Regime Simplificado"
    },
    {
      tipo: "IPI",
      titulo: "Isenção para Exportação",
      descricao: "Produtos destinados à exportação são isentos de IPI",
      vigencia: "Permanente",
      categoria: "Isenção"
    },
    {
      tipo: "ICMS",
      titulo: "Crédito Presumido",
      descricao: "Crédito presumido para empresas de determinados setores",
      vigencia: "Conforme programa estadual",
      categoria: "Incentivo"
    },
    {
      tipo: "IPI",
      titulo: "Redução para Veículos PCD",
      descricao: "Redução de IPI na aquisição de veículos por pessoas com deficiência",
      vigencia: "Permanente",
      categoria: "Redução"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />
      <SubHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Início &gt; ICMS/ISS/IPI &gt; <span className="text-foreground font-medium">Benefícios Fiscais</span>
            </p>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center">
              <Gift className="w-10 h-10 mr-3 text-emerald-600" />
              Benefícios Fiscais
            </h1>
            <p className="text-lg text-muted-foreground">
              Isenções, reduções e incentivos fiscais para ICMS, ISS e IPI
            </p>
          </div>

          {/* Conteúdo */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Principais Benefícios Fiscais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {beneficios.map((beneficio, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{beneficio.tipo}</Badge>
                          <Badge className={
                            beneficio.categoria === 'Isenção' ? 'bg-green-100 text-green-800' :
                            beneficio.categoria === 'Redução' ? 'bg-blue-100 text-blue-800' :
                            beneficio.categoria === 'Incentivo' ? 'bg-purple-100 text-purple-800' :
                            'bg-gray-100 text-gray-800'
                          }>
                            {beneficio.categoria}
                          </Badge>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold mb-2">{beneficio.titulo}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {beneficio.descricao}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <strong>Vigência:</strong> {beneficio.vigencia}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-emerald-600 to-blue-600 text-white">
                <CardContent className="p-6">
                  <TrendingDown className="w-8 h-8 mb-3" />
                  <h3 className="font-bold mb-2">Economia Tributária</h3>
                  <p className="text-sm text-emerald-50">
                    Os benefícios fiscais podem representar economia significativa. Consulte um especialista para verificar sua elegibilidade.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Documentação</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center text-sm">
                    <FileText className="w-4 h-4 mr-2 text-blue-600" />
                    <span>Convênios CONFAZ</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FileText className="w-4 h-4 mr-2 text-blue-600" />
                    <span>Legislação Estadual</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FileText className="w-4 h-4 mr-2 text-blue-600" />
                    <span>Regulamento do IPI</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Beneficios;
