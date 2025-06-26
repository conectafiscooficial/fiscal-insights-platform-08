
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Crown, CreditCard, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import PlanSelection from './PlanSelection';
import PersonalDataForm from './PersonalDataForm';
import AddressForm from './AddressForm';
import ProfessionalDataForm from './ProfessionalDataForm';

interface AssinaturaPremiumFormProps {
  isOpen: boolean;
  onClose: () => void;
  menuTitle?: string;
}

const AssinaturaPremiumForm = ({ isOpen, onClose, menuTitle }: AssinaturaPremiumFormProps) => {
  const [formData, setFormData] = useState({
    // Dados Pessoais
    nome: '',
    cpf: '',
    rg: '',
    dataNascimento: '',
    telefone: '',
    email: '',
    
    // Login
    senha: '',
    confirmarSenha: '',
    
    // Endereço
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    
    // Dados Profissionais
    empresa: '',
    cargo: '',
    crc: '',
    
    // Plano
    plano: 'anual',
    aceiteTermos: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.aceiteTermos) {
      toast({
        title: "Erro",
        description: "É necessário aceitar os termos de uso.",
        variant: "destructive"
      });
      return;
    }

    // Validação básica dos campos obrigatórios
    const camposObrigatorios = ['nome', 'cpf', 'email', 'telefone', 'cep', 'endereco', 'cidade', 'estado', 'senha', 'confirmarSenha'];
    const camposFaltando = camposObrigatorios.filter(campo => !formData[campo as keyof typeof formData]);
    
    if (camposFaltando.length > 0) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Validar senhas
    if (formData.senha !== formData.confirmarSenha) {
      toast({
        title: "Erro",
        description: "As senhas não coincidem.",
        variant: "destructive"
      });
      return;
    }

    if (formData.senha.length < 6) {
      toast({
        title: "Erro",
        description: "A senha deve ter pelo menos 6 caracteres.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Criar conta no Supabase
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.senha,
        options: {
          data: {
            nome_completo: formData.nome,
            telefone: formData.telefone,
            cpf: formData.cpf,
            plano_solicitado: formData.plano
          }
        }
      });

      if (authError) {
        throw authError;
      }

      // Criar registro de assinatura pendente
      if (authData.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .update({
            nome_completo: formData.nome,
            telefone: formData.telefone,
            documento: formData.cpf,
            empresa: formData.empresa,
            plano: formData.plano,
            status: 'pendente' // Status pendente para aprovação do admin
          })
          .eq('id', authData.user.id);

        if (profileError) {
          console.error('Erro ao atualizar perfil:', profileError);
        }
      }

      toast({
        title: "Assinatura Premium Solicitada!",
        description: "Sua conta foi criada e está aguardando aprovação do administrador. Você receberá um e-mail quando for aprovada.",
      });

      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (error: any) {
      console.error('Erro na assinatura:', error);
      toast({
        title: "Erro",
        description: error.message || "Erro ao processar assinatura. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Crown className="w-5 h-5 text-yellow-500" />
            <span>Assinatura Premium</span>
            {menuTitle && <span className="text-sm text-gray-500">- {menuTitle}</span>}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <PlanSelection 
            selectedPlan={formData.plano}
            onPlanChange={(plan) => handleInputChange('plano', plan)}
          />

          <PersonalDataForm 
            formData={{
              nome: formData.nome,
              cpf: formData.cpf,
              rg: formData.rg,
              dataNascimento: formData.dataNascimento,
              telefone: formData.telefone,
              email: formData.email
            }}
            onFieldChange={handleInputChange}
          />

          {/* Dados de Login */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-4">Dados de Login</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="senha">Senha *</Label>
                <div className="relative">
                  <Input
                    id="senha"
                    type={showPassword ? "text" : "password"}
                    value={formData.senha}
                    onChange={(e) => handleInputChange('senha', e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div>
                <Label htmlFor="confirmarSenha">Confirmar Senha *</Label>
                <div className="relative">
                  <Input
                    id="confirmarSenha"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmarSenha}
                    onChange={(e) => handleInputChange('confirmarSenha', e.target.value)}
                    placeholder="Digite novamente a senha"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <AddressForm 
            formData={{
              cep: formData.cep,
              endereco: formData.endereco,
              numero: formData.numero,
              complemento: formData.complemento,
              bairro: formData.bairro,
              cidade: formData.cidade,
              estado: formData.estado
            }}
            onFieldChange={handleInputChange}
          />

          <ProfessionalDataForm 
            formData={{
              empresa: formData.empresa,
              cargo: formData.cargo,
              crc: formData.crc
            }}
            onFieldChange={handleInputChange}
          />

          {/* Termos */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="aceiteTermos"
              checked={formData.aceiteTermos}
              onCheckedChange={(checked) => handleInputChange('aceiteTermos', checked)}
            />
            <Label htmlFor="aceiteTermos" className="text-sm">
              Aceito os <span className="text-blue-600 underline cursor-pointer">termos de uso</span> e 
              <span className="text-blue-600 underline cursor-pointer"> política de privacidade</span> *
            </Label>
          </div>

          {/* Botões */}
          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              disabled={isSubmitting}
            >
              <CreditCard className="w-4 h-4 mr-2" />
              {isSubmitting ? 'Processando...' : 'Solicitar Assinatura'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AssinaturaPremiumForm;
