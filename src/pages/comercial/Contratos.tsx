import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Shield, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contratos = () => {
  const modelosContratos = [
    "Contrato de Prestação de Serviços",
    "Contrato de Compra e Venda",
    "Contrato de Locação Comercial",
    "Contrato de Confidencialidade (NDA)",
    "Contrato de Parceria Comercial",
    "Contrato de Distribuição"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />
      <SubHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Início &gt; Comercial &gt; <span className="text-foreground font-medium">Contratos</span>
            </p>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Modelos de Contratos Comerciais</h1>
            <p className="text-lg text-muted-foreground">
              Modelos prontos e orientações para elaboração de contratos empresariais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Modelos Disponíveis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {modelosContratos.map((modelo, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">{modelo}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Baixar
                    </Button>
                  </div>
                ))}

                <Card className="border-l-4 border-l-orange-500 bg-orange-50 mt-6">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5" />
                      <div>
                        <p className="font-semibold text-orange-900">Atenção Legal</p>
                        <p className="text-sm text-orange-800 mt-1">
                          Os modelos são orientativos. Recomenda-se revisão jurídica antes da assinatura de qualquer contrato.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white">
                <CardContent className="p-6 text-center">
                  <Shield className="w-8 h-8 mb-3 mx-auto" />
                  <h3 className="font-bold mb-2">Assessoria Jurídica</h3>
                  <p className="text-sm text-blue-50 mb-4">
                    Precisa de ajuda profissional?
                  </p>
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                    Falar com Especialista
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cláusulas Importantes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>• Qualificação das partes</div>
                  <div>• Objeto do contrato</div>
                  <div>• Prazo e renovação</div>
                  <div>• Valores e forma de pagamento</div>
                  <div>• Multas e penalidades</div>
                  <div>• Rescisão contratual</div>
                  <div>• Foro competente</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contratos;
