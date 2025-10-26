import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Package, FileText, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ImportacaoExportacao = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />
      <SubHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Início &gt; Comercial &gt; <span className="text-foreground font-medium">Importação e Exportação</span>
            </p>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center">
              <Globe className="w-10 h-10 mr-3 text-blue-600" />
              Importação e Exportação
            </h1>
            <p className="text-lg text-muted-foreground">
              Guia completo sobre comércio exterior e procedimentos aduaneiros
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Importação</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Processo de trazer mercadorias do exterior para o Brasil
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Documentos Necessários:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">•</Badge>
                      <span>Licença de Importação (LI)</span>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">•</Badge>
                      <span>Declaração de Importação (DI)</span>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">•</Badge>
                      <span>Conhecimento de Embarque</span>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">•</Badge>
                      <span>Fatura Comercial (Invoice)</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-sm">
                  <strong>Impostos:</strong> II, IPI, PIS, COFINS, ICMS
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle>Exportação</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Processo de enviar mercadorias brasileiras para o exterior
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Documentos Necessários:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">•</Badge>
                      <span>Registro de Exportação (RE)</span>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">•</Badge>
                      <span>Declaração de Exportação (DE)</span>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">•</Badge>
                      <span>Nota Fiscal de Exportação</span>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">•</Badge>
                      <span>Certificado de Origem</span>
                    </div>
                  </div>
                </div>
                <div className="bg-emerald-50 p-3 rounded-lg text-sm">
                  <strong>Benefício:</strong> Isenção de IPI, PIS e COFINS
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-purple-600" />
                  Modalidades de Importação/Exportação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Por Conta Própria</h4>
                    <p className="text-sm text-muted-foreground">
                      Empresa realiza todo o processo diretamente
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Por Encomenda</h4>
                    <p className="text-sm text-muted-foreground">
                      Terceiros realizam a operação em nome da empresa
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Trading Company</h4>
                    <p className="text-sm text-muted-foreground">
                      Empresa especializada em comércio exterior
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ImportacaoExportacao;
