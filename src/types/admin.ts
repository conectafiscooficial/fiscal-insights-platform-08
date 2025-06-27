export interface Usuario {
  id: string;
  nome: string;
  email: string;
  plano: 'gratuito' | 'basico' | 'premium' | 'corporativo';
  status: 'ativo' | 'pendente' | 'bloqueado' | 'rejeitado';
  dataRegistro: string;
  ultimoAcesso: string;
  documento?: string;
  empresa?: string;
  telefone?: string;
  habilitado?: boolean;
}

export interface Artigo {
  id: string;
  titulo: string;
  resumo: string;
  conteudo: string;
  categoria: string;
  autor: string;
  dataPublicacao: string;
  status: 'rascunho' | 'publicado' | 'arquivado' | 'revisao';
  visualizacoes: number;
  tags: string[];
  secaoTematica: string;
}

export interface LinkExterno {
  id: string;
  titulo: string;
  url: string;
  categoria: string;
  descricao: string;
  dataAdicao: string;
  ativo: boolean;
}

export interface IndiceEconomico {
  id: string;
  nome: string;
  valor: string;
  dataAtualizacao: string;
  fonte: string;
  categoria: string;
  unidade: string;
  variacao: string;
  tipo: 'alta' | 'baixa' | 'neutro';
}

export interface Curso {
  id: string;
  nome: string;
  titulo: string;
  descricao: string;
  categoria: string;
  preco: number;
  duracao: number;
  instrutor: string;
  status: 'ativo' | 'inativo';
  dataLancamento: string;
  totalAlunos: number;
  alunos: number;
  avaliacoes: number;
}

export interface Venda {
  id: string;
  produto: string;
  cliente: string;
  email: string;
  valor: number;
  data: string;
  dataVenda: string;
  status: 'pendente' | 'pago' | 'cancelado' | 'concluida' | 'cancelada';
  formaPagamento: string;
  tipoProduto: 'curso' | 'consultoria' | 'software' | 'material';
}

export interface Configuracao {
  id: string;
  chave: string;
  valor: string;
  descricao: string;
  categoria: string;
}

export interface MenuItem {
  id: string;
  titulo: string;
  items: string[];
  ordem: number;
  ativo: boolean;
}

export interface ConfiguracaoSistema {
  id: string;
  chave: string;
  valor: string;
  tipo: 'texto' | 'numero' | 'email' | 'url' | 'boolean';
  categoria: string;
  descricao: string;
}

export interface SecaoTematica {
  id: string;
  nome: string;
  titulo: string;
  descricao: string;
  conteudos: string[];
  ativa: boolean;
}

export interface PlanoAssinatura {
  id: string;
  nome: string;
  descricao: string | null;
  preco: number | null;
  tipo: 'fixo' | 'orcamento';
  ativo: boolean;
  recursos: Record<string, any>;
  created_at: string;
}

export interface PlanilhaMensal {
  id: string;
  mes: number;
  ano: number;
  arquivo_url: string;
  descricao: string | null;
  created_at: string;
}

export interface SolicitacaoOrcamento {
  id: string;
  user_id: string | null;
  nome: string;
  email: string;
  telefone: string | null;
  empresa: string | null;
  descricao_necessidade: string;
  status: 'pendente' | 'analisando' | 'respondido' | 'fechado';
  created_at: string;
}
