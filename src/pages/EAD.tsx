
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Clock, Users, Star, Play, BookOpen, FileText, Award } from "lucide-react";
import Header from "@/components/Header";
import MatriculaForm from "@/components/forms/MatriculaForm";

const EAD = () => {
  const [matriculaOpen, setMatriculaOpen] = useState(false);
  const [cursoSelecionado, setCursoSelecionado] = useState('');

  const handleMatricula = (nomeCurso: string) => {
    setCursoSelecionado(nomeCurso);
    setMatriculaOpen(true);
  };

  const cursosEAD = [
    {
      id: 1,
      titulo: "eSocial Completo 2024",
      descricao: "Domine todas as funcionalidades do eSocial com este curso completo e atualizado.",
      duracao: "40 horas",
      alunos: "1.2k",
      rating: 4.8,
      preco: "R$ 299,90",
      categoria: "Trabalho e Previdência",
      modulos: 12,
      certificado: true,
      nivel: "Intermediário"
    },
    {
      id: 2,
      titulo: "SPED Fiscal Avançado",
      descricao: "Aprenda a gerar e transmitir corretamente todas as obrigações do SPED Fiscal.",
      duracao: "35 horas",
      alunos: "890",
      rating: 4.9,
      preco: "R$ 249,90",
      categoria: "SPED",
      modulos: 10,
      certificado: true,
      nivel: "Avançado"
    },
    {
      id: 3,
      titulo: "Simples Nacional na Prática",
      descricao: "Tudo sobre o regime tributário mais utilizado pelas pequenas empresas.",
      duracao: "25 horas",
      alunos: "2.1k",
      rating: 4.7,
      preco: "R$ 199,90",
      categoria: "Tributário",
      modulos: 8,
      certificado: true,
      nivel: "Básico"
    },
    {
      id: 4,
      titulo: "Imposto de Renda Pessoa Física",
      descricao: "Curso completo para declaração do IRPF com casos práticos e simulações.",
      duracao: "30 horas",
      alunos: "1.5k",
      rating: 4.6,
      preco: "R$ 179,90",
      categoria: "Imposto de Renda",
      modulos: 9,
      certificado: true,
      nivel: "Básico"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Monitor className="w-4 h-4" />
            <span>Cursos Online</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Cursos EAD
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Aprenda no seu ritmo com nossos cursos online. Acesso ilimitado, certificados reconhecidos e suporte especializado.
          </p>
        </div>

        {/* Vantagens EAD */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Flexibilidade Total</h3>
            <p className="text-slate-600 text-sm">Estude quando e onde quiser</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Certificado Válido</h3>
            <p className="text-slate-600 text-sm">Reconhecido no mercado</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Suporte Especializado</h3>
            <p className="text-slate-600 text-sm">Tire suas dúvidas com experts</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Acesso Vitalício</h3>
            <p className="text-slate-600 text-sm">Revise sempre que precisar</p>
          </div>
        </div>

        {/* Lista de Cursos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursosEAD.map((curso) => (
            <Card key={curso.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {curso.categoria}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {curso.nivel}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{curso.titulo}</CardTitle>
                <p className="text-slate-600 text-sm">{curso.descricao}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{curso.duracao}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{curso.modulos} módulos</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{curso.alunos} alunos</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{curso.rating}</span>
                    </div>
                  </div>

                  {curso.certificado && (
                    <div className="flex items-center space-x-1 text-sm text-emerald-600">
                      <Award className="w-4 h-4" />
                      <span>Certificado incluso</span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-2xl font-bold text-slate-800">
                      {curso.preco}
                    </div>
                    <Button 
                      onClick={() => handleMatricula(curso.titulo)}
                      className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700"
                    >
                      Matricular-se
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Informações Adicionais */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Por que escolher nossos cursos EAD?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 mb-2">Material Atualizado</h3>
              <p className="text-slate-600">Conteúdo sempre atualizado com as últimas mudanças na legislação</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 mb-2">Professores Experientes</h3>
              <p className="text-slate-600">Aprenda com profissionais que atuam no mercado há anos</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-800 mb-2">Certificação Reconhecida</h3>
              <p className="text-slate-600">Certificados válidos e reconhecidos pelos órgãos competentes</p>
            </div>
          </div>
        </div>
      </div>

      <MatriculaForm 
        isOpen={matriculaOpen}
        onClose={() => setMatriculaOpen(false)}
        tipoCurso="ead"
        nomeCurso={cursoSelecionado}
      />
    </div>
  );
};

export default EAD;
