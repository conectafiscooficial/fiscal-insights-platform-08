
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Calendar, Crown } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import AssinaturaPremiumForm from "@/components/forms/AssinaturaPremiumForm";

const Publicacoes = () => {
  const [premiumFormOpen, setPremiumFormOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleDownload = (isPremium: boolean) => {
    if (!user) {
      navigate('/auth');
      return;
    }
    if (isPremium) {
      setPremiumFormOpen(true);
      return;
    }
    // Download gratuito
    console.log('Download iniciado');
  };

  const publicacoes = [
    {
      id: 1,
      titulo: "Manual do eSocial 2024",
      descricao: "Guia completo sobre o eSocial atualizado para 2024",
      tipo: "PDF",
      tamanho: "2.5MB",
      premium: true,
      downloads: 1247
    },
    {
      id: 2,
      titulo: "Guia SPED Fiscal",
      descricao: "Orientações sobre escrituração fiscal digital",
      tipo: "PDF",
      tamanho: "1.8MB",
      premium: false,
      downloads: 892
    },
    {
      id: 3,
      titulo: "Tabela de Códigos NCM",
      descricao: "Lista completa de códigos NCM atualizados",
      tipo: "Excel",
      tamanho: "3.2MB",
      premium: true,
      downloads: 2134
    },
    {
      id: 4,
      titulo: "Modelos de DARF",
      descricao: "Templates para preenchimento de DARF",
      tipo: "Word",
      tamanho: "0.5MB",
      premium: false,
      downloads: 567
    }
  ];

  const legislacoesRecentes = [
    {
      id: 1,
      numero: "Lei nº 14.020/2024",
      titulo: "Nova regulamentação do eSocial",
      data: "10/01/2024",
      tipo: "Lei",
      premium: true
    },
    {
      id: 2,
      numero: "IN RFB nº 2.201/2024",
      titulo: "Alterações no SPED Fiscal",
      data: "08/01/2024",
      tipo: "IN",
      premium: false
    },
    {
      id: 3,
      numero: "Portaria ME nº 15/2024",
      titulo: "Novos códigos de receita",
      data: "05/01/2024",
      tipo: "Portaria",
      premium: true
    }
  ];

  const topicsEmAlta = [
    "eSocial versão 2.5",
    "PIX no SPED",
    "Marco do Saneamento",
    "LGPD Fiscal"
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
        <Header />
        <SubHeader />
        
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Publicações
            </Badge>
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Publicações e Legislações
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Acesse manuais, guias e legislações atualizadas para se manter sempre informado.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Publicações Principais */}
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span>Publicações Disponíveis</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {publicacoes.map((pub) => (
                      <div key={pub.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold">{pub.titulo}</h3>
                              {pub.premium && <Crown className="w-4 h-4 text-yellow-500" />}
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{pub.descricao}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span>{pub.tipo} • {pub.tamanho}</span>
                              <span>{pub.downloads} downloads</span>
                            </div>
                          </div>
                          <Button
                            onClick={() => handleDownload(pub.premium)}
                            variant={pub.premium ? "default" : "outline"}
                            size="sm"
                            className={pub.premium ? "bg-blue-600 hover:bg-blue-700" : ""}
                          >
                            <Download className="w-4 h-4 mr-1" />
                            {pub.premium ? "👑" : "Baixar"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Legislações Recentes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <span>Legislações Recentes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {legislacoesRecentes.map((leg) => (
                      <div key={leg.id} className="border rounded-lg p-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <Badge variant="outline" className="text-xs">{leg.tipo}</Badge>
                              <span className="text-sm font-medium">{leg.numero}</span>
                              {leg.premium && <span className="text-xs">👑</span>}
                            </div>
                            <p className="text-sm text-gray-700 mb-1">{leg.titulo}</p>
                            <p className="text-xs text-gray-500">{leg.data}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDownload(leg.premium)}
                          >
                            Ler {leg.premium && "👑"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tópicos em Alta */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Em Alta 👑</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {topicsEmAlta.map((topic, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA Premium */}
              <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <CardContent className="p-6 text-center">
                  <Crown className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                  <h3 className="font-semibold mb-2">Acesso Premium</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Acesse todo o conteúdo exclusivo e mantenha-se sempre atualizado
                  </p>
                  <Button
                    onClick={() => setPremiumFormOpen(true)}
                    className="bg-white text-blue-600 hover:bg-gray-100"
                  >
                    Assinar Agora
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <AssinaturaPremiumForm
        isOpen={premiumFormOpen}
        onClose={() => setPremiumFormOpen(false)}
      />
    </>
  );
};

export default Publicacoes;
