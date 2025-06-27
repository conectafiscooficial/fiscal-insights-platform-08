
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from '@/integrations/supabase/client';
import { PlanoAssinatura } from '@/types/admin';

interface PlanSelectionProps {
  selectedPlan: string;
  onPlanChange: (plan: string) => void;
}

const PlanSelection = ({ selectedPlan, onPlanChange }: PlanSelectionProps) => {
  const [planos, setPlanos] = useState<PlanoAssinatura[]>([]);

  useEffect(() => {
    const carregarPlanos = async () => {
      try {
        const { data, error } = await supabase
          .from('planos_assinatura')
          .select('*')
          .eq('ativo', true)
          .order('preco', { ascending: true });
        
        if (error) throw error;
        setPlanos(data || []);
      } catch (error) {
        console.error('Erro ao carregar planos:', error);
      }
    };

    carregarPlanos();
  }, []);

  const formatarPreco = (preco: number | null, tipo: string) => {
    if (tipo === 'orcamento') return 'Solicitar Orçamento';
    return `R$ ${preco?.toFixed(2).replace('.', ',')}`;
  };

  return (
    <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
      <CardHeader>
        <CardTitle className="text-purple-800">Escolha seu Plano</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {planos.map((plano) => (
          <div key={plano.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-white/50 cursor-pointer">
            <input
              type="radio"
              name="plano"
              value={plano.id}
              checked={selectedPlan === plano.id}
              onChange={(e) => onPlanChange(e.target.value)}
              className="w-4 h-4"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{plano.nome}</h4>
                  <p className="text-sm text-gray-600">{plano.descricao}</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-lg">{formatarPreco(plano.preco, plano.tipo)}</span>
                  {plano.nome === 'Calendário Fiscal de Obrigações' && (
                    <Badge className="ml-2 bg-gradient-to-r from-green-500 to-emerald-500">
                      Mais Popular
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PlanSelection;
