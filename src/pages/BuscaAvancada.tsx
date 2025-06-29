
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Calendar, Building, FileText, Eye } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";

const BuscaAvancada = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!user) {
      navigate('/auth');
      return;
    }
    // Simulação de resultados
    setSearchResults([
      {
        id: 1,
        tipo: "Lei",
        numero: "14.020/2024",
        titulo: "Nova regulamentação do eSocial",
        orgao: "Receita Federal",
        data: "10/01/2024",
        premium: true
      },
      {
        id: 2,
        tipo: "IN",
        numero: "2.201/2024",
        titulo: "Alterações no SPED Fiscal",
        orgao: "Receita Federal",
        data: "08/01/2024",
        premium: false
      }
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />
      <SubHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-blue-100 text-blue-800">
            Busca Avançada
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Busca Avançada de Atos e Legislação
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre rapidamente leis, decretos, portarias e outras normas fiscais com nossa ferramenta de busca avançada.
          </p>
        </div>

        {/* Formulário de Busca */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="w-5 h-5 text-blue-600" />
              <span>Filtros de Busca</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center">
                  <FileText className="w-4 h-4 mr-1" />
                  Tipo de Ato
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lei">Lei</SelectItem>
                    <SelectItem value="decreto">Decreto</SelectItem>
                    <SelectItem value="portaria">Portaria</SelectItem>
                    <SelectItem value="instrucao-normativa">Instrução Normativa</SelectItem>
                    <SelectItem value="resolucao">Resolução</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Número</label>
                <Input placeholder="Ex: 123/2024" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Ano
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Ano" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center">
                  <Building className="w-4 h-4 mr-1" />
                  Órgão Emissor
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Órgão" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="receita-federal">Receita Federal</SelectItem>
                    <SelectItem value="fazenda-sp">Fazenda - SP</SelectItem>
                    <SelectItem value="ministerio-trabalho">Min. do Trabalho</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Palavra-chave</label>
              <div className="flex space-x-2">
                <Input placeholder="Digite palavras-chave para buscar..." className="flex-1" />
                <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
                  <Search className="w-4 h-4 mr-2" />
                  Buscar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resultados */}
        {searchResults.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Resultados da Busca ({searchResults.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {searchResults.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline">{item.tipo}</Badge>
                          <span className="font-semibold">{item.numero}</span>
                          {item.premium && <span className="text-xs">👑</span>}
                        </div>
                        <h3 className="font-medium mb-1">{item.titulo}</h3>
                        <div className="text-sm text-gray-600 space-x-4">
                          <span>Órgão: {item.orgao}</span>
                          <span>Data: {item.data}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        Ver {item.premium && "👑"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BuscaAvancada;
