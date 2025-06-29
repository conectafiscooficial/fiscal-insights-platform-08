
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface SolicitacaoOrcamentoFormProps {
  isOpen: boolean;
  onClose: () => void;
  servico?: string;
}

const SolicitacaoOrcamentoForm = ({ isOpen, onClose, servico }: SolicitacaoOrcamentoFormProps) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    descricao_necessidade: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('solicitacoes_orcamento')
        .insert({
          user_id: user?.id || null,
          servico: servico || 'Consultoria Geral',
          ...formData
        });

      if (error) throw error;

      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Entraremos em contato em breve para apresentar nossa proposta."
      });

      onClose();
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        descricao_necessidade: ''
      });
    } catch (error) {
      console.error('Erro ao enviar solicitação:', error);
      toast({
        title: "Erro ao enviar solicitação",
        description: "Tente novamente ou entre em contato conosco.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            {servico ? `Solicitar Orçamento - ${servico}` : 'Solicitar Orçamento - Consultoria Especializada'}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="nome">Nome Completo *</Label>
            <Input
              id="nome"
              value={formData.nome}
              onChange={(e) => setFormData({...formData, nome: e.target.value})}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="telefone">Telefone</Label>
            <Input
              id="telefone"
              value={formData.telefone}
              onChange={(e) => setFormData({...formData, telefone: e.target.value})}
              placeholder="(11) 99999-9999"
            />
          </div>
          
          <div>
            <Label htmlFor="empresa">Empresa</Label>
            <Input
              id="empresa"
              value={formData.empresa}
              onChange={(e) => setFormData({...formData, empresa: e.target.value})}
            />
          </div>
          
          <div>
            <Label htmlFor="descricao">Descreva sua necessidade *</Label>
            <Textarea
              id="descricao"
              value={formData.descricao_necessidade}
              onChange={(e) => setFormData({...formData, descricao_necessidade: e.target.value})}
              placeholder="Conte-nos sobre o que você precisa..."
              rows={4}
              required
            />
          </div>
          
          <div className="flex space-x-2">
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? 'Enviando...' : 'Enviar Solicitação'}
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SolicitacaoOrcamentoForm;
