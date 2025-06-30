
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { AdminProvider } from "@/contexts/AdminContext";
import { UsuariosProvider } from "@/contexts/UsuariosContext";
import AdminDashboard from "./admin/AdminDashboard";

const AdminPanelContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="p-6 border-b bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar ao Site</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CF</span>
                </div>
                <span className="text-lg font-semibold text-slate-800">Conecta Fisco</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <AdminDashboard />
      </div>
    </div>
  );
};

const AdminPanel = () => {
  return (
    <AdminProvider>
      <UsuariosProvider>
        <AdminPanelContent />
      </UsuariosProvider>
    </AdminProvider>
  );
};

export default AdminPanel;
