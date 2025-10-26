import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Folder, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Documentos = () => {
  const categorias = [
    {
      nome: "Documentos Fiscais",
      documentos: ["NF-e", "NFS-e", "CT-e", "MDF-e", "Cupom Fiscal"]
    },
    {
      nome: "Documentos Trabalhistas",
      documentos: ["CTPS", "Contrato de Trabalho", "Termo de Rescisão", "Recibo de Férias"]
    },
    {
      nome: "Documentos Contábeis",
      documentos: ["Balanço Patrimonial", "DRE", "Livro Diário", "Livro Razão"]
    },
    {
      nome: "Documentos Bancários",
      documentos: ["Boleto", "Recibo", "Nota Promissória", "Cheque"]
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
              Início &gt; Comercial &gt; <span className="text-foreground font-medium">Documentos</span>
            </p>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center">
              <Folder className="w-10 h-10 mr-3 text-emerald-600" />
              Gestão de Documentos
            </h1>
            <p className="text-lg text-muted-foreground">
              Organize e gerencie seus documentos comerciais e fiscais
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {categorias.map((categoria, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-blue-600" />
                    {categoria.nome}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categoria.documentos.map((doc, docIndex) => (
                      <div key={docIndex} className="flex items-center justify-between p-2 bg-slate-50 rounded">
                        <span className="text-sm">{doc}</span>
                        <Badge variant="outline">Ativo</Badge>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Baixar Todos
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Documentos;
