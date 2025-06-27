
-- Criar tabela para planos de assinatura
CREATE TABLE public.planos_assinatura (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  descricao TEXT,
  preco DECIMAL(10,2),
  tipo TEXT NOT NULL CHECK (tipo IN ('fixo', 'orcamento')),
  ativo BOOLEAN DEFAULT true,
  recursos JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Inserir os planos solicitados
INSERT INTO public.planos_assinatura (nome, descricao, preco, tipo, recursos) VALUES
('Calendário Fiscal de Obrigações', 'Acesso completo ao calendário fiscal com todas as obrigações mensais', 65.00, 'fixo', '{"calendario_fiscal": true, "planilha_mensal": true, "notificacoes": true}'),
('Consultoria Especializada', 'Consultoria personalizada com especialistas fiscais', null, 'orcamento', '{"consultoria": true, "atendimento_personalizado": true}');

-- Adicionar coluna para controlar se usuário está habilitado
ALTER TABLE public.profiles ADD COLUMN habilitado BOOLEAN DEFAULT true;

-- Criar tabela para arquivos de planilhas mensais
CREATE TABLE public.planilhas_mensais (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  mes INTEGER NOT NULL,
  ano INTEGER NOT NULL,
  arquivo_url TEXT NOT NULL,
  descricao TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(mes, ano)
);

-- Criar tabela para solicitações de orçamento
CREATE TABLE public.solicitacoes_orcamento (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id),
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT,
  empresa TEXT,
  descricao_necessidade TEXT NOT NULL,
  status TEXT DEFAULT 'pendente' CHECK (status IN ('pendente', 'analisando', 'respondido', 'fechado')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Habilitar RLS nas novas tabelas
ALTER TABLE public.planos_assinatura ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.planilhas_mensais ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.solicitacoes_orcamento ENABLE ROW LEVEL SECURITY;

-- Políticas para planos (públicos para visualização)
CREATE POLICY "Todos podem ver planos ativos" ON public.planos_assinatura
  FOR SELECT USING (ativo = true);

-- Políticas para planilhas (apenas usuários autenticados com plano adequado)
CREATE POLICY "Usuários do plano calendário podem ver planilhas" ON public.planilhas_mensais
  FOR SELECT TO authenticated 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() 
      AND plano IN ('basico', 'premium', 'corporativo')
      AND status = 'ativo'
      AND habilitado = true
    )
  );

-- Políticas para solicitações de orçamento
CREATE POLICY "Usuários podem criar solicitações de orçamento" ON public.solicitacoes_orcamento
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuários podem ver suas próprias solicitações" ON public.solicitacoes_orcamento
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);
