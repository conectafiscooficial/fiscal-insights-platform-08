import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet, Calculator, FileText, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contribuicoes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />
      <SubHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Início &gt; Trabalho e Previdência &gt; <span className="text-foreground font-medium">Contribuições Previdenciárias</span>
            </p>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center">
              <Wallet className="w-10 h-10 mr-3 text-blue-600" />
              Contribuições Previdenciárias
            </h1>
            <p className="text-lg text-muted-foreground">
              Entenda as contribuições previdenciárias para empregados, empresas e autônomos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Tipos de Contribuições</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Calculator className="w-5 h-5 mr-2 text-blue-600" />
                    Contribuição do Empregado
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Descontada mensalmente da folha de pagamento conforme tabela progressiva do INSS.
                  </p>
                  <div className="bg-white p-3 rounded space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Até R$ 1.412,00</span>
                      <Badge>7,5%</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>De R$ 1.412,01 a R$ 2.666,68</span>
                      <Badge>9%</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>De R$ 2.666,69 a R$ 4.000,03</span>
                      <Badge>12%</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>De R$ 4.000,04 a R$ 7.786,02</span>
                      <Badge>14%</Badge>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Contribuição Patronal</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    A empresa deve recolher sobre a folha de pagamento:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span><strong>20%</strong> sobre a remuneração dos segurados empregados</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span><strong>1%, 2% ou 3%</strong> para financiamento de aposentadoria especial e benefícios de riscos ambientais (RAT)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span><strong>Sistema "S":</strong> contribuições para SESI, SENAI, SESC, etc. (varia conforme atividade)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Contribuinte Individual (Autônomo)</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Profissionais autônomos e empresários recolhem diretamente ao INSS.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between items-center">
                      <span>Alíquota padrão (com direito a aposentadoria por tempo)</span>
                      <Badge>20%</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Plano simplificado (salário mínimo)</span>
                      <Badge>11%</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Microempreendedor Individual (MEI)</span>
                      <Badge>5%</Badge>
                    </li>
                  </ul>
                </div>

                <Card className="border-l-4 border-l-orange-500 bg-orange-50">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5" />
                      <div>
                        <p className="font-semibold text-orange-900">Prazo de Recolhimento</p>
                        <p className="text-sm text-orange-800 mt-1">
                          As contribuições previdenciárias devem ser recolhidas até o dia 20 do mês seguinte ao da competência.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white">
                <CardContent className="p-6">
                  <Calculator className="w-8 h-8 mb-3" />
                  <h3 className="font-bold mb-2">Calculadora INSS</h3>
                  <p className="text-sm text-blue-50 mb-4">
                    Calcule suas contribuições previdenciárias
                  </p>
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                    Calcular Contribuição
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Documentos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center text-sm">
                    <FileText className="w-4 h-4 mr-2 text-blue-600" />
                    <span>Tabela INSS 2024</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FileText className="w-4 h-4 mr-2 text-blue-600" />
                    <span>Guia GPS</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FileText className="w-4 h-4 mr-2 text-blue-600" />
                    <span>Manual eSocial</span>
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

export default Contribuicoes;
