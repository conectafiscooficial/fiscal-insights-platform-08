import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, AlertCircle, CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotasFiscais = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />
      <SubHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Início &gt; Comercial &gt; <span className="text-foreground font-medium">Notas Fiscais</span>
            </p>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center">
              <FileText className="w-10 h-10 mr-3 text-blue-600" />
              Notas Fiscais Eletrônicas
            </h1>
            <p className="text-lg text-muted-foreground">
              Guia completo sobre emissão, tipos e obrigatoriedades de NF-e e NFS-e
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Tipos de Notas Fiscais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-blue-600" />
                    NF-e (Nota Fiscal Eletrônica)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Documento fiscal digital utilizado para registrar operações de circulação de mercadorias.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                      <span>Obrigatória para operações comerciais com produtos</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                      <span>Validade jurídica garantida por assinatura digital</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                      <span>Armazenamento em ambiente nacional (SEFAZ)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                      <span>Prazo de emissão: até o momento da saída da mercadoria</span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">NFS-e (Nota Fiscal de Serviços Eletrônica)</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Documento fiscal digital para prestação de serviços, regulado por cada município.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                      <span>Emitida através do sistema da prefeitura municipal</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                      <span>Cada município possui regras específicas</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                      <span>Base de cálculo para ISS</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">NFC-e (Nota Fiscal ao Consumidor Eletrônica)</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Substitui o cupom fiscal para operações de varejo presencial.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Utilizada em vendas no balcão</li>
                    <li>• Emissão em contingência offline permitida</li>
                    <li>• QR Code para consulta pelo consumidor</li>
                    <li>• Dispensa impressão do DANFE para o cliente</li>
                  </ul>
                </div>

                <Card className="border-l-4 border-l-orange-500 bg-orange-50">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5" />
                      <div>
                        <p className="font-semibold text-orange-900">Prazo de Cancelamento</p>
                        <p className="text-sm text-orange-800 mt-1">
                          NF-e pode ser cancelada em até 24 horas após autorização. NFS-e varia conforme município.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-3">Requisitos para Emissão</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">1.</span>
                      <span>Certificado Digital (A1 ou A3) válido</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">2.</span>
                      <span>Credenciamento junto à SEFAZ do estado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">3.</span>
                      <span>Software emissor de NF-e homologado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">4.</span>
                      <span>Conexão com internet para envio ao SEFAZ</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ações Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Baixar XML
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    Consultar NF-e
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Validar Nota
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white">
                <CardContent className="p-6 text-center">
                  <FileText className="w-8 h-8 mb-3 mx-auto" />
                  <h3 className="font-bold mb-2">Precisa de Software?</h3>
                  <p className="text-sm text-blue-50 mb-4">
                    Conheça nossas soluções de emissão de NF-e
                  </p>
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                    Ver Softwares
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Legislação</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>Ajuste SINIEF 07/2005</div>
                  <div>NT 2023.003</div>
                  <div>Manual de Integração</div>
                  <div>Schemas XML vigentes</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotasFiscais;
