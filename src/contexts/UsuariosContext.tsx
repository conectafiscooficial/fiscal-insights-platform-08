
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Usuario } from '@/types/admin';
import { supabase } from '@/integrations/supabase/client';

interface UsuariosContextType {
  usuarios: Usuario[];
  setUsuarios: (usuarios: Usuario[]) => void;
  adicionarUsuario: (usuario: Omit<Usuario, 'id'>) => void;
  atualizarUsuario: (id: string, dados: Partial<Usuario>) => void;
  removerUsuario: (id: string) => void;
  bloquearUsuario: (id: string) => void;
  desbloquearUsuario: (id: string) => void;
  alterarPlano: (id: string, novoPlano: Usuario['plano']) => void;
  carregarUsuarios: () => Promise<void>;
}

const UsuariosContext = createContext<UsuariosContextType | undefined>(undefined);

export const useUsuarios = () => {
  const context = useContext(UsuariosContext);
  if (!context) {
    throw new Error('useUsuarios deve ser usado dentro de UsuariosProvider');
  }
  return context;
};

export const UsuariosProvider = ({ children }: { children: ReactNode }) => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const carregarUsuarios = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*');
      
      if (error) throw error;
      
      const usuariosFormatados = data.map(profile => ({
        id: profile.id,
        nome: profile.nome_completo || profile.email || 'Usuário sem nome',
        email: profile.email || 'Email não informado',
        plano: (profile.plano || 'gratuito') as Usuario['plano'],
        status: (profile.status || 'ativo') as Usuario['status'],
        dataRegistro: profile.created_at || new Date().toISOString(),
        ultimoAcesso: profile.updated_at || new Date().toISOString()
      }));
      
      setUsuarios(usuariosFormatados);
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    }
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  const adicionarUsuario = (usuario: Omit<Usuario, 'id'>) => {
    const novoUsuario: Usuario = {
      ...usuario,
      id: Date.now().toString()
    };
    setUsuarios(prev => [...prev, novoUsuario]);
  };

  const atualizarUsuario = async (id: string, dados: Partial<Usuario>) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          nome_completo: dados.nome,
          status: dados.status,
          plano: dados.plano,
          updated_at: new Date().toISOString()
        })
        .eq('id', id);
      
      if (error) throw error;
      
      setUsuarios(prev => prev.map(usuario => 
        usuario.id === id ? { ...usuario, ...dados } : usuario
      ));
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  };

  const removerUsuario = (id: string) => {
    setUsuarios(prev => prev.filter(usuario => usuario.id !== id));
  };

  const bloquearUsuario = (id: string) => {
    atualizarUsuario(id, { status: 'bloqueado' });
  };

  const desbloquearUsuario = (id: string) => {
    atualizarUsuario(id, { status: 'ativo' });
  };

  const alterarPlano = (id: string, novoPlano: Usuario['plano']) => {
    atualizarUsuario(id, { plano: novoPlano });
  };

  const value: UsuariosContextType = {
    usuarios,
    setUsuarios,
    adicionarUsuario,
    atualizarUsuario,
    removerUsuario,
    bloquearUsuario,
    desbloquearUsuario,
    alterarPlano,
    carregarUsuarios
  };

  return (
    <UsuariosContext.Provider value={value}>
      {children}
    </UsuariosContext.Provider>
  );
};
