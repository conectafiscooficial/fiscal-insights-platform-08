
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface MatriculaFormProps {
  isOpen: boolean;
  onClose: () => void;
  tipoCurso: 'ead' | 'presencial' | 'incompany';
  nomeCurso?: string;
}

const MatriculaForm = ({ isOpen, onClose, tipoCurso, nomeCurso }: MatriculaFormProps) => {
  const [formData, setFormData] = useState({
    nome_completo: '',
    email: '',
    telefone: '',
    tipo_pessoa: 'fisica',
    documento: '',
    empresa: '',
    curso_interesse: nomeCurso || '',
    observacoes: ''
  });

  const { toast } = useToast();
  const { user } = useAuth();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Erro",
        description: "Você precisa estar logado para se matricular.",
        variant: "destructive"
      });
      return;
    }

    try {
      const { error } = await supabase.from('matriculas').insert({
        user_id: user.id,
        tipo_curso: tipoCurso,
        nome_curso: formData.curso_interesse,
        dados_matricula: formData
      });

      if (error) throw error;

      toast({
        title: "Matrícula Enviada!",
        description: "Sua solicitação de matrícula foi recebida. Entraremos em contato em breve.",
      });

      // Reset form
      setFormData({
        nome_completo: '',
        email: '',
        telefone: '',
        tipo_pessoa: 'fisica',
        documento: '',
        empresa: '',
        curso_interesse: nomeCurso || '',
        observacoes: ''
      });
      
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Erro ao enviar matrícula:', error);
      toast({
        title: "Erro",
        description: "Não foi possível enviar sua matrícula. Tente novamente.",
        variant: "destructive"
      });
    }
  };

  const getTitulo = () => {
    switch (tipoCurso) {
      case 'ead': return 'Matrícula - Curso EAD';
      case 'presencial': return 'Matrícula - Curso Presencial';
      case 'incompany': return 'Matrícula - Treinamento In Company';
      default: return 'Matrícula';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <GraduationCap className="w-5 h-5 text-blue-500" />
            <span>{getTitulo()}</span>
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="nome_completo">Nome Completo *</Label>
              <Input
                id="nome_completo"
                value={formData.nome_completo}
                onChange={(e) => handleInputChange('nome_completo', e.target.value)}
                placeholder="Seu nome completo"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="seu@email.com"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="telefone">Telefone *</Label>
              <Input
                id="telefone"
                value={formData.telefone}
                onChange={(e) => handleInputChange('telefone', e.target.value)}
                placeholder="(15) 99999-9999"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="tipo_pessoa">Tipo de Pessoa *</Label>
              <Select value={formData.tipo_pessoa} onValueChange={(value) => handleInputChange('tipo_pessoa', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fisica">Pessoa Física</SelectItem>
                  <SelectItem value="juridica">Pessoa Jurídica</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="documento">{formData.tipo_pessoa === 'fisica' ? 'CPF' : 'CNPJ'} *</Label>
              <Input
                id="documento"
                value={formData.documento}
                onChange={(e) => handleInputChange('documento', e.target.value)}
                placeholder={formData.tipo_pessoa === 'fisica' ? '000.000.000-00' : '00.000.000/0000-00'}
                required
              />
            </div>
            
            {formData.tipo_pessoa === 'juridica' && (
              <div>
                <Label htmlFor="empresa">Nome da Empresa</Label>
                <Input
                  id="empresa"
                  value={formData.empresa}
                  onChange={(e) => handleInputChange('empresa', e.target.value)}
                  placeholder="Nome da empresa"
                />
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="curso_interesse">Curso de Interesse *</Label>
            <Input
              id="curso_interesse"
              value={formData.curso_interesse}
              onChange={(e) => handleInputChange('curso_interesse', e.target.value)}
              placeholder="Nome do curso"
              required
            />
          </div>

          <div>
            <Label htmlFor="observacoes">Observações</Label>
            <Textarea
              id="observacoes"
              value={formData.observacoes}
              onChange={(e) => handleInputChange('observacoes', e.target.value)}
              placeholder="Informações adicionais, horários de preferência, etc."
              className="min-h-[100px]"
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700"
            >
              <Send className="w-4 h-4 mr-2" />
              Matricular-se
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default MatriculaForm;
