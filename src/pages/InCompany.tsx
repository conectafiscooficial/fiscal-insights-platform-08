
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Calendar, MapPin, Clock, Award, Target, TrendingUp, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import MatriculaForm from "@/components/forms/MatriculaForm";

const InCompany = () => {
  const [matriculaOpen, setMatriculaOpen] = useState(false);
  const [cursoSelecionado, setCursoSelecionado] = useState('');

  const handleMatricula = (nomeCurso: string) => {
    setCursoSelecionado(nomeCurso);
    setMatriculaOpen(true);
  };

  const treinamentosInCompany = [
    {
      id: 1,
      titulo: "eSocial para Equipes",
      descricao: "Treinamento completo de eSocial customizado para sua empresa e equipe.",
      duracao: "16-40 horas",
      participantes: "5-50 pessoas",
      modalidade: "Presencial ou Online",
      preco: "A partir de R$ 4.999",
      categoria: "Trabalho e Previdência",
      beneficios: [
        "Conteúdo customizado para sua empresa",
        "Horários flexíveis",
        "Certificados para todos os participantes",
        "Material personalizado",
        "Suporte pós-treinamento"
      ]
    },
    {
      id: 2,
      titulo: "SPED Completo Corporativo",
      descricao: "Capacitação completa em SPED Fiscal e Contábil para sua equipe fiscal.",
      duracao: "24-48 horas",
      participantes: "5-30 pessoas",
      modalidade: "Presencial ou Online",
      preco: "A partir de R$ 7.999",
      categoria: "SPED",
      beneficios: [
        "Análise prévia da empresa",
        "Cases específicos do setor",
        "Implementação prática",
        "Consultoria inclusa",
        "Acompanhamento 30 dias"
      ]
    },
    {
      id: 3,
      titulo: "Planejamento Tributário",
      descricao: "Workshop estratégico de planejamento tributário para empresas.",
      duracao: "8-16 horas",
      participantes: "3-20 pessoas",
      modalidade: "Presencial",
      preco: "A partir de R$ 2.999",
      categoria: "Tributário",
      beneficios: [
        "Análise da situação atual",
        "Estratégias personalizadas",
        "Plano de ação específico",
        "Acompanhamento trimestral",
        "Relatório executivo"
      ]
    },
    {
      id: 4,
      titulo: "Compliance Fiscal Total",
      descricao: "Programa completo de compliance fiscal para grandes empresas.",
      duracao: "40-80 horas",
      participantes: "10-100 pessoas",
      modalidade: "Presencial ou Híbrido",
      preco: "A partir de R$ 15.999",
      categoria: "Compliance",
      beneficios: [
        "Diagnóstico completo",
        "Programa de compliance",
        "Treinamento em etapas",
        "Auditoria interna",
        "Acompanhamento anual"
      ]
    }
  ];

  const vantagens = [
    {
      icon: Target,
      titulo: "Customização Total",
      descricao: "Conteúdo específico para sua empresa e necessidades"
    },
    {
      icon: Users,
      titulo: "Equipe Unificada",
      descricao: "Todos os colaboradores com o mesmo nível de conhecimento"
    },
    {
      icon: TrendingUp,
      titulo: "ROI Garantido",
      descricao: "Retorno sobre investimento comprovado"
    },
    {
      icon: Award,
      titulo: "Certificação Corporativa",
      descricao: "Certificados válidos para toda a equipe"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Building className="w-4 h-4" />
            <span>Treinamentos Corporativos</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Treinamentos In Company
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Capacite sua equipe com treinamentos personalizados. Conteúdo exclusivo, horários flexíveis e resultados mensuráveis.
          </p>
        </div>

        {/* Vantagens */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {vantagens.map((vantagem, index) => {
            const IconComponent = vantagem.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{vantagem.titulo}</h3>
                <p className="text-slate-600 text-sm">{vantagem.descricao}</p>
              </div>
            );
          })}
        </div>

        {/* Lista de Treinamentos */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {treinamentosInCompany.map((treinamento) => (
            <Card key={treinamento.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {treinamento.categoria}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    In Company
                  </Badge>
                </div>
                <CardTitle className="text-lg">{treinamento.titulo}</CardTitle>
                <p className="text-slate-600 text-sm">{treinamento.descricao}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-2 text-sm text-slate-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Duração: {treinamento.duracao}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>Participantes: {treinamento.participantes}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Modalidade: {treinamento.modalidade}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-slate-800 mb-3">Benefícios inclusos:</h4>
                    <ul className="text-sm text-slate-600 space-y-2">
                      {treinamento.beneficios.map((beneficio, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{beneficio}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-lg font-bold text-slate-800">
                      {treinamento.preco}
                    </div>
                    <Button 
                      onClick={() => handleMatricula(treinamento.titulo)}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      Solicitar Orçamento
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Processo */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Como Funciona Nosso Processo
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Diagnóstico</h3>
              <p className="text-slate-600 text-sm">Analisamos suas necessidades e equipe</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Personalização</h3>
              <p className="text-slate-600 text-sm">Criamos conteúdo específico para você</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Execução</h3>
              <p className="text-slate-600 text-sm">Realizamos o treinamento na sua empresa</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Acompanhamento</h3>
              <p className="text-slate-600 text-sm">Suporte contínuo e avaliação de resultados</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            Pronto para Capacitar Sua Equipe?
          </h2>
          <p className="text-lg mb-6">
            Entre em contato conosco e receba uma proposta personalizada para sua empresa.
          </p>
          <Button 
            onClick={() => handleMatricula("Treinamento In Company Personalizado")}
            className="bg-white text-purple-600 hover:bg-slate-100"
          >
            Solicitar Proposta
          </Button>
        </div>
      </div>

      <MatriculaForm 
        isOpen={matriculaOpen}
        onClose={() => setMatriculaOpen(false)}
        tipoCurso="incompany"
        nomeCurso={cursoSelecionado}
      />
    </div>
  );
};

export default InCompany;
