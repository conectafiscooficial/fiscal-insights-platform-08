import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, FileText, Users, DollarSign } from "lucide-react";

const FolhaPagamento = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />
      <SubHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Início &gt; Trabalho e Previdência &gt; <span className="text-foreground font-medium">Folha de Pagamento</span>
            </p>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center">
              <Users className="w-10 h-10 mr-3 text-emerald-600" />
              Folha de Pagamento
            </h1>
            <p className="text-lg text-muted-foreground">
              Processamento, encargos e obrigações da folha de pagamento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Componentes da Folha</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-emerald-600" />
                    Proventos
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Salário base</span>
                      <Badge variant="outline">Fixo</Badge>
                    </li>
                    <li className="flex justify-between">
                      <span>Horas extras</span>
                      <Badge variant="outline">Variável</Badge>
                    </li>
                    <li className="flex justify-between">
                      <span>Adicional noturno</span>
                      <Badge variant="outline">Variável</Badge>
                    </li>
                    <li className="flex justify-between">
                      <span>Comissões</span>
                      <Badge variant="outline">Variável</Badge>
                    </li>
                    <li className="flex justify-between">
                      <span>DSR sobre variáveis</span>
                      <Badge variant="outline">Calculado</Badge>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Descontos</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>INSS (7,5% a 14%)</span>
                      <Badge className="bg-red-100 text-red-800">Obrigatório</Badge>
                    </li>
                    <li className="flex justify-between">
                      <span>IRRF (0% a 27,5%)</span>
                      <Badge className="bg-red-100 text-red-800">Obrigatório</Badge>
                    </li>
                    <li className="flex justify-between">
                      <span>Vale transporte (até 6%)</span>
                      <Badge className="bg-orange-100 text-orange-800">Opcional</Badge>
                    </li>
                    <li className="flex justify-between">
                      <span>Vale alimentação</span>
                      <Badge className="bg-orange-100 text-orange-800">Opcional</Badge>
                    </li>
                    <li className="flex justify-between">
                      <span>Pensão alimentícia</span>
                      <Badge className="bg-blue-100 text-blue-800">Judicial</Badge>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Calculator className="w-5 h-5 mr-2 text-blue-600" />
                    Encargos Patronais
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>INSS Patronal</span>
                      <Badge>20%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>RAT (Risco Ambiental do Trabalho)</span>
                      <Badge>1% a 3%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>Terceiros (Sistema S, INCRA, Salário Educação)</span>
                      <Badge>5,8%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>FGTS</span>
                      <Badge>8%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>Provisão 13º salário</span>
                      <Badge>8,33%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>Provisão férias + 1/3</span>
                      <Badge>11,11%</Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    <strong>Total aproximado de encargos:</strong> 54% a 60% sobre a folha bruta
                  </p>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-3">Prazos e Obrigações</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">1.</span>
                      <span><strong>Até dia 5:</strong> Pagamento de salário do mês anterior (ou 1º dia útil seguinte)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">2.</span>
                      <span><strong>Até dia 7:</strong> Envio dos eventos não-periódicos ao eSocial</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">3.</span>
                      <span><strong>Até dia 15:</strong> Envio da folha de pagamento ao eSocial (eventos S-1200, S-1210)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">4.</span>
                      <span><strong>Até dia 20:</strong> Recolhimento do FGTS e contribuições previdenciárias</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-emerald-600 to-blue-600 text-white">
                <CardContent className="p-6">
                  <FileText className="w-8 h-8 mb-3" />
                  <h3 className="font-bold mb-2">Modelos e Documentos</h3>
                  <p className="text-sm text-emerald-50 mb-3">
                    Acesse modelos de holerites, recibos e formulários
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white/20 p-2 rounded">Holerite padrão</div>
                    <div className="bg-white/20 p-2 rounded">Recibo de férias</div>
                    <div className="bg-white/20 p-2 rounded">Termo de rescisão</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Legislação</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>CLT - Arts. 457 a 467</div>
                  <div>Lei 8.212/91 (Custeio)</div>
                  <div>IN RFB 2.110/2022</div>
                  <div>Manual eSocial</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FolhaPagamento;
