
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Shield, Calculator, TrendingUp, Phone, Database } from "lucide-react";
import { Link } from "react-router-dom";
import SolicitacaoOrcamentoForm from "@/components/forms/SolicitacaoOrcamentoForm";

const Sped = () => {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);

  const beneficios = [
    "Escrituração fiscal digital completa",
    "Gestão de todas as obrigações SPED",
    "Validação de arquivos antes do envio",
    "Acompanhamento de prazos e obrigações",
    "Suporte em retificações e correções"
  ];

  const servicos = [
    "ECD - Escrituração Contábil Digital",
    "ECF - Escrituração Contábil Fiscal",
    "EFD-Contribuições",
    "EFD-ICMS/IPI",
    "Reinf - Retenções e Informações",
    "eSocial - Escrituração Digital das Obrigações Fiscais"
  ];

  const diferenciais = [
    "Especialistas em todas as modalidades SPED",
    "Tecnologia avançada para validação",
    "Acompanhamento de mudanças na legislação",
    "Suporte técnico especializado",
    "Entrega sempre dentro dos prazos"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-slate-600 hover:text-slate-800 text-sm">
            ← Voltar para Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-600 to-gray-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            SPED
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            SPED - Sistema Público de Escrituração Digital
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-slate-100">
            Mantenha Todas as Obrigações SPED em Dia com Nossa Expertise Técnica!
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Está com dificuldades no SPED? 💾 As obrigações digitais exigem conhecimento técnico especializado!
            <br /><br />
            Somos especialistas em todas as modalidades do SPED, desde ECD até eSocial, garantindo que sua empresa 
            cumpra todas as obrigações digitais dentro dos prazos e sem erros.
            <br /><br />
            ➡️ Simplifique suas obrigações digitais com nossa expertise!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-slate-600 hover:bg-slate-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            Quero Regularizar Meu SPED
          </Button>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Benefícios em Destaque
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{beneficio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Database className="w-8 h-8 text-slate-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-800">Serviços Inclusos</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {servicos.map((servico, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                    <p className="text-gray-700">{servico}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-800">
              Por que escolher nossos serviços?
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((diferencial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-gray-700">{diferencial}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-slate-600 to-gray-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Database className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Não deixe o SPED virar dor de cabeça!
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nossa consultoria especializada cuida de todas as obrigações digitais para você focar no seu negócio.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-slate-600 hover:bg-slate-50 text-lg px-8 py-3"
            onClick={() => setQuoteFormOpen(true)}
          >
            Solicitar Consultoria SPED
          </Button>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <SolicitacaoOrcamentoForm
        isOpen={quoteFormOpen}
        onClose={() => setQuoteFormOpen(false)}
        servico="SPED"
      />
    </div>
  );
};

export default Sped;
