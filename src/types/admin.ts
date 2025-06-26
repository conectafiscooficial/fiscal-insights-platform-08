
export interface Usuario {
  id: string;
  nome: string;
  email: string;
  plano: 'gratuito' | 'basico' | 'premium' | 'corporativo';
  status: 'ativo' | 'pendente' | 'bloqueado' | 'rejeitado';
  dataRegistro: string;
  ultimoAcesso: string;
}

export interface Artigo {
  id: string;
  titulo: string;
  conteudo: string;
  categoria: string;
  autor: string;
  dataPublicacao: string;
  status: 'rascunho' | 'publicado' | 'arquivado';
  visualizacoes: number;
}

export interface LinkExterno {
  id: string;
  titulo: string;
  url: string;
  categoria: string;
  descricao: string;
  dataAdicao: string;
}

export interface IndiceEconomico {
  id: string;
  nome: string;
  valor: number;
  dataAtualizacao: string;
  fonte: string;
  categoria: string;
  unidade: string;
  variacao?: number;
}

export interface Curso {
  id: string;
  nome: string;
  descricao: string;
  categoria: string;
  preco: number;
  duracao: string;
  instrutor: string;
  status: 'ativo' | 'inativo';
  dataLancamento: string;
  totalAlunos: number;
}

export interface Venda {
  id: string;
  produto: string;
  cliente: string;
  valor: number;
  data: string;
  status: 'pendente' | 'pago' | 'cancelado';
  formaPagamento: string;
}

export interface Configuracao {
  id: string;
  chave: string;
  valor: string;
  descricao: string;
  categoria: string;
}
