import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Eye, Pencil, Search, Filter, Globe } from "lucide-react";

interface PaginaConteudo {
  id: string;
  nome: string;
  titulo: string;
  url: string;
  categoria: string;
  status: 'ativo' | 'inativo';
  conteudo: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    beneficios: string[];
    servicos?: string[];
    diferenciais?: string[];
    depoimento?: {
      texto: string;
      autor: string;
    };
  };
  created_at: string;
  updated_at: string;
}

const PaginasManager = () => {
  const [paginas, setPaginas] = useState<PaginaConteudo[]>([
    {
      id: '1',
      nome: 'Desenquadramento',
      titulo: 'Desenquadramento de Empresas',
      url: '/desenquadramento',
      categoria: 'Simples Nacional',
      status: 'ativo',
      conteudo: {
        heroTitle: 'Desenquadramento de Empresas',
        heroSubtitle: 'Regularize Sua Situação Tributária com Segurança!',
        heroDescription: 'Somos especialistas em Desenquadramento de MEI, Simples Nacional, ME e EPP...',
        beneficios: [
          'Atendimento Rápido e Personalizado',
          'Transição Segura para o Novo Regime',
          'Equipe Especializada em Legislação Atualizada'
        ]
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: '2',
      nome: 'Optantes',
      titulo: 'Optantes Simples Nacional',
      url: '/optantes',
      categoria: 'Simples Nacional',
      status: 'ativo',
      conteudo: {
        heroTitle: 'Simples Nacional',
        heroSubtitle: 'Descubra se Sua Empresa Pode se Beneficiar!',
        heroDescription: 'Nós ajudamos microempresas e empresas de pequeno porte...',
        beneficios: [
          'Pagamento de impostos em guia única (DAS)',
          'Redução da carga tributária',
          'Burocracia reduzida'
        ]
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: '3',
      nome: 'Sublimites',
      titulo: 'Sublimites Simples Nacional',
      url: '/sublimites',
      categoria: 'Simples Nacional',
      status: 'ativo',
      conteudo: {
        heroTitle: 'Sublimites do Simples Nacional',
        heroSubtitle: 'Entenda os Sublimites e Evite Problemas com o Fisco!',
        heroDescription: 'Orientação sobre sublimites do Simples Nacional...',
        beneficios: [
          'Análise personalizada do faturamento',
          'Verificação de obrigações estaduais e municipais',
          'Planejamento tributário estratégico'
        ]
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: '4',
      nome: 'Anexos',
      titulo: 'Anexos Simples Nacional',
      url: '/anexos',
      categoria: 'Simples Nacional',
      status: 'ativo',
      conteudo: {
        heroTitle: 'Anexos do Simples Nacional',
        heroSubtitle: 'Descubra em Qual Anexo Sua Empresa se Enquadra!',
        heroDescription: 'Identificação do anexo correto para sua empresa...',
        beneficios: [
          'Identificação correta do anexo',
          'Cálculo exato dos tributos',
          'Orientação sobre Fator "r"'
        ]
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: '5',
      nome: 'Calculo',
      titulo: 'Cálculo Simples Nacional',
      url: '/calculo',
      categoria: 'Simples Nacional',
      status: 'ativo',
      conteudo: {
        heroTitle: 'Cálculo do Simples Nacional',
        heroSubtitle: 'Aprenda Como Calcular Corretamente!',
        heroDescription: 'Orientação sobre cálculo do Simples Nacional...',
        beneficios: [
          'Cálculo correto conforme tabela oficial',
          'Simulação de tributos',
          'Análise do Fator "r"'
        ]
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: '6',
      nome: 'IR',
      titulo: 'Imposto de Renda',
      url: '/ir',
      categoria: 'IR',
      status: 'ativo',
      conteudo: {
        heroTitle: 'Imposto de Renda',
        heroSubtitle: 'Declare Seu IR com Segurança!',
        heroDescription: 'Especialistas em Declaração de IR para PF e PJ...',
        beneficios: [
          'Cálculo correto do Imposto de Renda devido',
          'Planejamento tributário para redução legal',
          'Assessoria completa para PF e PJ'
        ]
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: '7',
      nome: 'PIS/COFINS',
      titulo: 'PIS/COFINS',
      url: '/pis-cofins',
      categoria: 'PIS/COFINS',
      status: 'ativo',
      conteudo: {
        heroTitle: 'PIS/COFINS',
        heroSubtitle: 'Otimize Sua Apuração e Aproveite Todos os Créditos!',
        heroDescription: 'Especialistas em apuração de PIS e COFINS...',
        beneficios: [
          'Cálculo correto do PIS e COFINS devido',
          'Identificação de créditos tributários',
          'Orientação sobre regime cumulativo e não-cumulativo'
        ]
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: '8',
      nome: 'ICMS/ISS/IPI',
      titulo: 'ICMS/ISS/IPI',
      url: '/icms-iss-ipi',
      categoria: 'ICMS/ISS/IPI',
      status: 'ativo',
      conteudo: {
        heroTitle: 'ICMS/ISS/IPI',
        heroSubtitle: 'Domine os Impostos com Nossa Consultoria!',
        heroDescription: 'Especialistas em tributação estadual, municipal e federal...',
        beneficios: [
          'Cálculo correto de ICMS, ISS e IPI',
          'Aproveitamento de créditos tributários',
          'Orientação sobre substituição tributária'
        ]
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: '9',
      nome: 'Trabalho e Previdência',
      titulo: 'Trabalho e Previdência',
      url: '/trabalho-previdencia',
      categoria: 'Trabalho e Previdência',
      status: 'ativo',
      conteudo: {
        heroTitle: 'Trabalho e Previdência',
        heroSubtitle: 'Mantenha Sua Empresa em Dia com as Obrigações!',
        heroDescription: 'Especialistas em gestão trabalhista e previdenciária...',
        beneficios: [
          'Gestão completa do eSocial',
          'Cálculo correto de FGTS e contribuições',
          'Folha de pagamento sem erros'
        ]
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: '10',
      nome: 'Comercial',
      titulo: 'Gestão Comercial',
      url: '/comercial',
      categoria: 'Comercial',
      status: 'ativo',
      conteudo: {
        heroTitle: 'Gestão Comercial',
        heroSubtitle: 'Organize Sua Documentação Comercial!',
        heroDescription: 'Especialistas em gestão comercial e documentação fiscal...',
        beneficios: [
          'Gestão completa de documentos fiscais',
          'Orientação sobre contratos comerciais',
          'Regularização de notas fiscais'
        ]
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: '11',
      nome: 'SPED',
      titulo: 'SPED',
      url: '/sped',
      categoria: 'SPED',
      status: 'ativo',
      conteudo: {
        heroTitle: 'SPED - Sistema Público de Escrituração Digital',
        heroSubtitle: 'Mantenha Todas as Obrigações SPED em Dia!',
        heroDescription: 'Especialistas em todas as modalidades do SPED...',
        beneficios: [
          'Escrituração fiscal digital completa',
          'Gestão de todas as obrigações SPED',
          'Validação de arquivos antes do envio'
        ]
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: '12',
      nome: 'Declarações',
      titulo: 'Gestão de Declarações',
      url: '/declaracoes',
      categoria: 'Declarações',
      status: 'ativo',
      conteudo: {
        heroTitle: 'Gestão de Declarações',
        heroSubtitle: 'Mantenha Todas as Declarações em Dia!',
        heroDescription: 'Especialistas em gestão de declarações fiscais...',
        beneficios: [
          'Gestão completa de todas as declarações',
          'Cálculo correto de tributos devidos',
          'Entrega sempre dentro dos prazos'
        ]
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ]);

  const [filteredPaginas, setFilteredPaginas] = useState<PaginaConteudo[]>(paginas);
  const [selectedPagina, setSelectedPagina] = useState<PaginaConteudo | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("todas");
  const [formData, setFormData] = useState({
    nome: "",
    titulo: "",
    heroTitle: "",
    heroSubtitle: "",
    heroDescription: "",
    beneficios: "",
    servicos: "",
    diferenciais: "",
    depoimentoTexto: "",
    depoimentoAutor: ""
  });

  // Filtros
  useEffect(() => {
    let filtered = paginas;

    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.titulo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter !== "todas") {
      filtered = filtered.filter(p => p.categoria === categoryFilter);
    }

    setFilteredPaginas(filtered);
  }, [searchTerm, categoryFilter, paginas]);

  const handleEdit = (pagina: PaginaConteudo) => {
    setSelectedPagina(pagina);
    setFormData({
      nome: pagina.nome,
      titulo: pagina.titulo,
      heroTitle: pagina.conteudo.heroTitle,
      heroSubtitle: pagina.conteudo.heroSubtitle,
      heroDescription: pagina.conteudo.heroDescription,
      beneficios: pagina.conteudo.beneficios.join('\n'),
      servicos: pagina.conteudo.servicos?.join('\n') || '',
      diferenciais: pagina.conteudo.diferenciais?.join('\n') || '',
      depoimentoTexto: pagina.conteudo.depoimento?.texto || '',
      depoimentoAutor: pagina.conteudo.depoimento?.autor || ''
    });
    setEditOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedPagina) {
      const updatedPagina: PaginaConteudo = {
        ...selectedPagina,
        nome: formData.nome,
        titulo: formData.titulo,
        conteudo: {
          heroTitle: formData.heroTitle,
          heroSubtitle: formData.heroSubtitle,
          heroDescription: formData.heroDescription,
          beneficios: formData.beneficios.split('\n').filter(b => b.trim()),
          servicos: formData.servicos ? formData.servicos.split('\n').filter(s => s.trim()) : undefined,
          diferenciais: formData.diferenciais ? formData.diferenciais.split('\n').filter(d => d.trim()) : undefined,
          depoimento: formData.depoimentoTexto ? {
            texto: formData.depoimentoTexto,
            autor: formData.depoimentoAutor
          } : undefined
        },
        updated_at: new Date().toISOString()
      };

      setPaginas(prev => prev.map(p => p.id === selectedPagina.id ? updatedPagina : p));
      toast({ title: "Página atualizada com sucesso!" });
      setEditOpen(false);
    }
  };

  const toggleStatus = (id: string) => {
    setPaginas(prev => prev.map(p => 
      p.id === id ? { ...p, status: p.status === 'ativo' ? 'inativo' : 'ativo' } : p
    ));
    toast({ title: "Status da página atualizado!" });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Atualizar o Select de categorias para incluir todas as novas categorias
  const categorias = ["todas", "Simples Nacional", "IR", "PIS/COFINS", "ICMS/ISS/IPI", "Trabalho e Previdência", "Comercial", "SPED", "Declarações"];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gestão de Páginas</h2>
        <Badge variant="outline" className="text-lg px-3 py-1">
          {filteredPaginas.length} páginas
        </Badge>
      </div>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar por nome ou título..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-48">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filtrar por categoria" />
          </SelectTrigger>
          <SelectContent>
            {categorias.map(categoria => (
              <SelectItem key={categoria} value={categoria}>
                {categoria === "todas" ? "Todas as categorias" : categoria}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Lista de Páginas */}
      <div className="grid gap-4">
        {filteredPaginas.map((pagina) => (
          <Card key={pagina.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-lg">{pagina.titulo}</h3>
                    <Badge 
                      className={pagina.status === 'ativo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                    >
                      {pagina.status}
                    </Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                    <p><strong>URL:</strong> {pagina.url}</p>
                    <p><strong>Categoria:</strong> {pagina.categoria}</p>
                    <p><strong>Última atualização:</strong> {formatDate(pagina.updated_at)}</p>
                    <p><strong>Benefícios:</strong> {pagina.conteudo.beneficios.length} itens</p>
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2">
                    {pagina.conteudo.heroDescription}
                  </p>
                </div>
                <div className="flex flex-col gap-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedPagina(pagina);
                      setDetailsOpen(true);
                    }}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Visualizar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(pagina)}
                  >
                    <Pencil className="w-4 h-4 mr-1" />
                    Editar
                  </Button>
                  <Button
                    variant={pagina.status === 'ativo' ? 'destructive' : 'default'}
                    size="sm"
                    onClick={() => toggleStatus(pagina.id)}
                  >
                    {pagina.status === 'ativo' ? 'Desativar' : 'Ativar'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPaginas.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-gray-500">Nenhuma página encontrada.</p>
          </CardContent>
        </Card>
      )}

      {/* Modal de Detalhes */}
      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Detalhes da Página</DialogTitle>
          </DialogHeader>
          {selectedPagina && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-1">Nome</h4>
                  <p className="text-gray-700">{selectedPagina.nome}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Título</h4>
                  <p className="text-gray-700">{selectedPagina.titulo}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">URL</h4>
                  <p className="text-gray-700">{selectedPagina.url}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Categoria</h4>
                  <Badge>{selectedPagina.categoria}</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Conteúdo Hero</h4>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <p><strong>Título:</strong> {selectedPagina.conteudo.heroTitle}</p>
                  <p><strong>Subtítulo:</strong> {selectedPagina.conteudo.heroSubtitle}</p>
                  <p><strong>Descrição:</strong> {selectedPagina.conteudo.heroDescription}</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Benefícios</h4>
                <ul className="list-disc list-inside space-y-1">
                  {selectedPagina.conteudo.beneficios.map((beneficio, index) => (
                    <li key={index} className="text-gray-700">{beneficio}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Modal de Edição */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Editar Página</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nome</label>
                <Input
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Título</label>
                <Input
                  value={formData.titulo}
                  onChange={(e) => setFormData({...formData, titulo: e.target.value})}
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Título Hero</label>
              <Input
                value={formData.heroTitle}
                onChange={(e) => setFormData({...formData, heroTitle: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Subtítulo Hero</label>
              <Input
                value={formData.heroSubtitle}
                onChange={(e) => setFormData({...formData, heroSubtitle: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Descrição Hero</label>
              <Textarea
                value={formData.heroDescription}
                onChange={(e) => setFormData({...formData, heroDescription: e.target.value})}
                rows={3}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Benefícios (um por linha)</label>
              <Textarea
                value={formData.beneficios}
                onChange={(e) => setFormData({...formData, beneficios: e.target.value})}
                rows={5}
                placeholder="Digite cada benefício em uma nova linha"
              />
            </div>
            
            <div className="flex space-x-2">
              <Button type="submit" className="flex-1">
                Salvar Alterações
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setEditOpen(false)}
              >
                Cancelar
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PaginasManager;
