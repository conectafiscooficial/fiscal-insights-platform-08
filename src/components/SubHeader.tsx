
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import AssinaturaPremiumForm from "./forms/AssinaturaPremiumForm";

const SubHeader = () => {
  const [premiumFormOpen, setPremiumFormOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleMenuClick = (requiresAuth: boolean, requiresPremium: boolean, path?: string) => {
    if (requiresAuth && !user) {
      navigate('/auth');
      return;
    }
    
    if (path) {
      navigate(path);
      return;
    }
    
    if (requiresPremium) {
      setPremiumFormOpen(true);
    }
  };

  const menuItems = [
    {
      title: "SIMPLES",
      items: [
        { name: "Optantes", path: "/optantes" },
        { name: "Desenquadramento", path: "/desenquadramento" },
        { name: "Sublimites", path: "/sublimites" },
        { name: "Anexos", path: "/anexos" },
        { name: "Cálculo", path: "/calculo" }
      ]
    },
    {
      title: "IR",
      path: "/ir",
      items: ["Pessoa Física", "Pessoa Jurídica", "Lucro Real", "Lucro Presumido", "Declarações"]
    },
    {
      title: "PIS/COFINS",
      path: "/pis-cofins",
      items: ["Cumulativo", "Não Cumulativo", "Substituição Tributária", "Créditos", "Retenções"]
    },
    {
      title: "ICMS/ISS/IPI",
      path: "/icms-iss-ipi",
      items: ["ICMS Estadual", "ISS Municipal", "IPI Federal", "Substituição Tributária", "Benefícios"]
    },
    {
      title: "Trabalho e Previdência",
      path: "/trabalho-previdencia",
      items: ["eSocial", "FGTS", "Contribuições", "Folha de Pagamento", "Benefícios"]
    },
    {
      title: "Comercial",
      path: "/comercial",
      items: ["Notas Fiscais", "Contratos", "Documentos", "Importação/Exportação"]
    },
    {
      title: "SPED",
      path: "/sped",
      items: ["ECD", "ECF", "EFD-Contribuições", "EFD-ICMS/IPI", "Reinf"]
    },
    {
      title: "Declarações",
      path: "/declaracoes",
      items: ["DARF", "GFIP", "DIRF", "DME", "Outras Declarações"]
    },
    {
      title: "Contabilidade",
      items: ["Balanço", "DRE", "Plano de Contas", "Conciliações", "Auditoria"]
    },
    {
      title: "Reforma da Previdência",
      items: ["Novas Regras", "Transição", "Cálculos", "Impactos", "Orientações"]
    }
  ];

  const menusComPremium = ["Contabilidade", "Reforma da Previdência"];

  return (
    <>
      <div className="bg-gradient-to-r from-slate-700 to-slate-800 border-b border-slate-600">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-1 overflow-x-auto py-3">
            {menuItems.map((menu, index) => (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-slate-600 hover:text-white whitespace-nowrap text-sm font-medium flex items-center space-x-1 px-3 py-2"
                    onClick={() => {
                      if (menu.path) {
                        navigate(menu.path);
                      }
                    }}
                  >
                    <span>{menu.title}</span>
                    <ChevronDown className="w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white shadow-lg border border-slate-200">
                  {menu.items.map((item, itemIndex) => {
                    const itemData = typeof item === 'object' ? item : { name: item };
                    return (
                      <DropdownMenuItem
                        key={itemIndex}
                        className="hover:bg-blue-50 hover:text-blue-700 cursor-pointer"
                        onClick={() => {
                          handleMenuClick(
                            true, 
                            menusComPremium.includes(menu.title) && !itemData.path,
                            itemData.path
                          );
                        }}
                      >
                        {itemData.name}
                        {menusComPremium.includes(menu.title) && !itemData.path && (
                          <span className="ml-auto text-xs text-blue-600">👑</span>
                        )}
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </nav>
        </div>
      </div>

      <AssinaturaPremiumForm
        isOpen={premiumFormOpen}
        onClose={() => setPremiumFormOpen(false)}
      />
    </>
  );
};

export default SubHeader;
