
-- Criar tabela de perfis de usuário
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  nome_completo TEXT,
  email TEXT,
  telefone TEXT,
  tipo_pessoa TEXT CHECK (tipo_pessoa IN ('fisica', 'juridica')),
  documento TEXT, -- CPF ou CNPJ
  empresa TEXT,
  status TEXT DEFAULT 'ativo' CHECK (status IN ('ativo', 'bloqueado')),
  plano TEXT DEFAULT 'gratuito' CHECK (plano IN ('gratuito', 'basico', 'premium', 'corporativo')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Criar tabela de matrículas em cursos
CREATE TABLE public.matriculas (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  tipo_curso TEXT NOT NULL CHECK (tipo_curso IN ('ead', 'presencial', 'incompany')),
  nome_curso TEXT NOT NULL,
  valor DECIMAL(10,2),
  status TEXT DEFAULT 'pendente' CHECK (status IN ('pendente', 'confirmada', 'cancelada')),
  dados_matricula JSONB, -- Para armazenar dados específicos da matrícula
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.matriculas ENABLE ROW LEVEL SECURITY;

-- Políticas para profiles
CREATE POLICY "Usuários podem ver próprio perfil"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Usuários podem atualizar próprio perfil"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Usuários podem inserir próprio perfil"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Políticas para matrículas
CREATE POLICY "Usuários podem ver próprias matrículas"
  ON public.matriculas FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem criar próprias matrículas"
  ON public.matriculas FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Função para criar perfil automaticamente
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, nome_completo)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'nome_completo', NEW.email)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger para criar perfil automaticamente
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
