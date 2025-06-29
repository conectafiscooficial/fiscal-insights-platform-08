
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminProvider } from "@/contexts/AdminContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { UsuariosProvider } from "@/contexts/UsuariosContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminPanel from "./components/AdminPanel";
import AuthPage from "./components/auth/AuthPage";
import ProtectedRoute from "./components/ProtectedRoute";
import QuemSomos from "./pages/QuemSomos";
import Softwares from "./pages/Softwares";
import Consultoria from "./pages/Consultoria";
import Ferramentas from "./pages/Ferramentas";
import Cursos from "./pages/Cursos";
import EAD from "./pages/EAD";
import Presencial from "./pages/Presencial";
import InCompany from "./pages/InCompany";
import Contato from "./pages/Contato";
import Newsletter from "./pages/Newsletter";
import Suporte from "./pages/Suporte";
import Desenquadramento from "./pages/Desenquadramento";
import Optantes from "./pages/Optantes";
import Sublimites from "./pages/Sublimites";
import Anexos from "./pages/Anexos";
import Calculo from "./pages/Calculo";
import IR from "./pages/IR";
import PisCofins from "./pages/PisCofins";
import IcmsIssIpi from "./pages/IcmsIssIpi";
import TrabalhoPrevidencia from "./pages/TrabalhoPrevidencia";
import Comercial from "./pages/Comercial";
import Sped from "./pages/Sped";
import Declaracoes from "./pages/Declaracoes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AdminProvider>
        <UsuariosProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/admin" element={
                  <ProtectedRoute>
                    <AdminPanel />
                  </ProtectedRoute>
                } />
                <Route path="/quem-somos" element={<QuemSomos />} />
                <Route path="/softwares" element={<Softwares />} />
                <Route path="/consultoria" element={<Consultoria />} />
                <Route path="/ferramentas" element={<Ferramentas />} />
                <Route path="/cursos" element={<Cursos />} />
                <Route path="/cursos/ead" element={<EAD />} />
                <Route path="/cursos/presencial" element={<Presencial />} />
                <Route path="/cursos/incompany" element={<InCompany />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/newsletter" element={<Newsletter />} />
                <Route path="/suporte" element={<Suporte />} />
                <Route path="/desenquadramento" element={<Desenquadramento />} />
                <Route path="/optantes" element={<Optantes />} />
                <Route path="/sublimites" element={<Sublimites />} />
                <Route path="/anexos" element={<Anexos />} />
                <Route path="/calculo" element={<Calculo />} />
                <Route path="/ir" element={<IR />} />
                <Route path="/pis-cofins" element={<PisCofins />} />
                <Route path="/icms-iss-ipi" element={<IcmsIssIpi />} />
                <Route path="/trabalho-previdencia" element={<TrabalhoPrevidencia />} />
                <Route path="/comercial" element={<Comercial />} />
                <Route path="/sped" element={<Sped />} />
                <Route path="/declaracoes" element={<Declaracoes />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </UsuariosProvider>
      </AdminProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
