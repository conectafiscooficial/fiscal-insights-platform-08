
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

interface ContratacaoSoftwareFormProps {
  isOpen: boolean;
  onClose: () => void;
  software: {
    nome: string;
    preco: string;
  } | null;
  tipoSolicitacao: 'contratacao' | 'teste';
}

const ContratacaoSoftwareForm = ({ isOpen, onClose, software, tipoSolicitacao }: ContratacaoSoftwareFormProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    tipoPessoa: 'juridica',
    documento: '',
    observacoes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Aqui você pode integrar com o Supabase para salvar a solicitação
      console.log('Dados da solicitação:', {
        ...formData,
        software: software?.nome,
        preco: software?.preco,
        tipo: tipoSolicitacao
      });

      toast({
        title: `Solicitação de ${tipoSolicitacao === 'contratacao' ? 'Contratação' : 'Teste Grátis'} enviada!`,
        description: "Entraremos em contato em breve para prosseguir com sua solicitação."
      });

      // Reset form
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        tipoPessoa: 'juridica',
        documento: '',
        observacoes: ''
      });
      
      onClose();
    } catch (error) {
      console.error('Erro ao enviar solicitação:', error);
      toast({
        title: "Erro ao enviar solicitação",
        description: "Tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const titulo = tipoSolicitacao === 'contratacao' 
    ? `Contratar ${software?.nome}` 
    : `Teste Grátis - ${software?.nome}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{titulo}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {tipoSolicitacao === 'contratacao' && software && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800">{software.nome}</h3>
              <p className="text-blue-600">{software.preco}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="telefone">Telefone *</Label>
              <Input
                id="telefone"
                value={formData.telefone}
                onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                placeholder="(11) 99999-9999"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="empresa">Empresa *</Label>
              <Input
                id="empresa"
                value={formData.empresa}
                onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                required
              />
            </div>
          </div>
          
          <div>
            <Label>Tipo de Pessoa</Label>
            <RadioGroup
              defaultValue={formData.tipoPessoa}
              onValueChange={(value: 'fisica' | 'juridica') => setFormData({...formData, tipoPessoa: value})}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fisica" id="pf" />
                <Label htmlFor="pf">Pessoa Física</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="juridica" id="pj" />
                <Label htmlFor="pj">Pessoa Jurídica</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label htmlFor="documento">
              {formData.tipoPessoa === 'fisica' ? 'CPF *' : 'CNPJ *'}
            </Label>
            <Input
              id="documento"
              value={formData.documento}
              onChange={(e) => setFormData({...formData, documento: e.target.value})}
              placeholder={formData.tipoPessoa === 'fisica' ? '000.000.000-00' : '00.000.000/0000-00'}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="observacoes">Observações</Label>
            <Textarea
              id="observacoes"
              value={formData.observacoes}
              onChange={(e) => setFormData({...formData, observacoes: e.target.value})}
              placeholder="Informe qualquer observação adicional sobre sua necessidade..."
              rows={3}
            />
          </div>

          <div className="flex space-x-4">
            <Button 
              type="submit" 
              className="flex-1" 
              disabled={loading}
            >
              {loading ? 'Enviando...' : `Solicitar ${tipoSolicitacao === 'contratacao' ? 'Contratação' : 'Teste Grátis'}`}
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

export default ContratacaoSoftwareForm;
