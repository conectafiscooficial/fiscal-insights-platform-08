import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, AlertCircle, Calculator, BookOpen, Download } from "lucide-react";
import { useState } from "react";
import SolicitacaoOrcamentoForm from "@/components/forms/SolicitacaoOrcamentoForm";

const SubstituicaoTributaria = () => {
  const [orcamentoOpen, setOrcamentoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />
      <SubHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Início &gt; ICMS/ISS/IPI &gt; <span className="text-foreground font-medium">Substituição Tributária</span>
            </p>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Substituição Tributária</h1>
            <p className="text-lg text-muted-foreground">
              Entenda as regras de ST aplicáveis ao ICMS, ISS e IPI
            </p>
          </div>

          {/* Alertas */}
          <Card className="mb-6 border-l-4 border-l-orange-500 bg-orange-50">
            <CardContent className="p-4">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5" />
                <div>
                  <p className="font-semibold text-orange-900">Atenção: Regras estaduais divergentes</p>
                  <p className="text-sm text-orange-800 mt-1">
                    As regras de substituição tributária variam por estado. Consulte sempre a legislação específica do seu estado e dos estados de destino.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conteúdo principal */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>O que é Substituição Tributária?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A Substituição Tributária (ST) é um regime de tributação que atribui a responsabilidade de recolhimento do imposto a um terceiro, geralmente o fabricante ou importador, ao invés do comerciante ou prestador final.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-blue-600" />
                    ICMS-ST (Substituição Tributária)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    O substituto tributário recolhe o ICMS devido nas operações subsequentes até o consumidor final.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <span>Aplicável a produtos específicos definidos por estado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <span>Base de cálculo: valor da operação + MVA (Margem de Valor Agregado)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <span>Convênios e protocolos interestaduais regulam a ST</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Calculator className="w-5 h-5 mr-2 text-emerald-600" />
                    Principais Produtos Sujeitos à ST
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm mt-3">
                    <Badge variant="outline">Combustíveis</Badge>
                    <Badge variant="outline">Bebidas</Badge>
                    <Badge variant="outline">Cigarros</Badge>
                    <Badge variant="outline">Medicamentos</Badge>
                    <Badge variant="outline">Autopeças</Badge>
                    <Badge variant="outline">Cosméticos</Badge>
                    <Badge variant="outline">Materiais de Construção</Badge>
                    <Badge variant="outline">Eletrônicos</Badge>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Cálculo da ST</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Fórmula básica:</strong></p>
                    <code className="block bg-white p-3 rounded border text-xs">
                      ST = [(Valor da Operação × (1 + MVA)) × Alíquota interna] - ICMS próprio
                    </code>
                    <p className="text-muted-foreground mt-2">
                      Onde MVA é a Margem de Valor Agregado definida pela legislação estadual
                    </p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-3">Obrigações do Substituto Tributário</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">1.</span>
                      <span>Inscrição estadual no estado de destino (quando exigido)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">2.</span>
                      <span>Apuração e recolhimento do ICMS-ST até consumidor final</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">3.</span>
                      <span>Emissão de NF-e com destaque correto da ST</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">4.</span>
                      <span>Escrituração fiscal adequada (GIA-ST, SINTEGRA, EFD)</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Documentos e Ferramentas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Tabela MVA por Estado
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculadora de ST
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    Convênios ICMS
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Guia Prático ST
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold mb-2">Consultoria Especializada</h3>
                  <p className="text-sm mb-4 text-blue-50">
                    Precisa de ajuda com substituição tributária?
                  </p>
                  <Button 
                    onClick={() => setOrcamentoOpen(true)}
                    className="w-full bg-white text-blue-600 hover:bg-blue-50"
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <SolicitacaoOrcamentoForm
        isOpen={orcamentoOpen}
        onClose={() => setOrcamentoOpen(false)}
      />
    </div>
  );
};

export default SubstituicaoTributaria;
