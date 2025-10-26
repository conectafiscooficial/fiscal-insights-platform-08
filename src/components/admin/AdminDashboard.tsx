
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { 
  Users, 
  FileText, 
  Settings, 
  Plus, 
  Edit, 
  Trash2,
  Save,
  X
} from "lucide-react";

type TipoUsuario = 'admin' | 'premium' | 'gratuito';
type StatusUsuario = 'ativo' | 'inativo';
type StatusArtigo = 'publicado' | 'rascunho';

interface Usuario {
  id: string;
  nome: string;
  email: string;
  tipo: TipoUsuario;
  status: StatusUsuario;
  dataCadastro: string;
}

interface Artigo {
  id: string;
  titulo: string;
  resumo: string;
  categoria: string;
  autor: string;
  status: StatusArtigo;
  dataPublicacao: string;
}

const AdminDashboard = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([
    {
      id: '1',
      nome: 'João Silva',
      email: 'joao@exemplo.com',
      tipo: 'premium',
      status: 'ativo',
      dataCadastro: '2024-01-15'
    },
    {
      id: '2',
      nome: 'Maria Santos',
      email: 'maria@exemplo.com',
      tipo: 'gratuito',
      status: 'ativo',
      dataCadastro: '2024-02-10'
    }
  ]);

  const [artigos, setArtigos] = useState<Artigo[]>([
    {
      id: '1',
      titulo: 'Novas Regras do Simples Nacional 2024',
      resumo: 'Principais mudanças na legislação',
      categoria: 'Simples Nacional',
      autor: 'Admin',
      status: 'publicado',
      dataPublicacao: '2024-01-20'
    }
  ]);

  const [selectedUser, setSelectedUser] = useState<Usuario | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Artigo | null>(null);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [articleModalOpen, setArticleModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [userForm, setUserForm] = useState<{
    nome: string;
    email: string;
    tipo: TipoUsuario;
    status: StatusUsuario;
  }>({
    nome: '',
    email: '',
    tipo: 'gratuito',
    status: 'ativo'
  });

  const [articleForm, setArticleForm] = useState<{
    titulo: string;
    resumo: string;
    categoria: string;
    status: StatusArtigo;
  }>({
    titulo: '',
    resumo: '',
    categoria: '',
    status: 'rascunho'
  });

  const handleEditUser = (user: Usuario) => {
    setSelectedUser(user);
    setUserForm({
      nome: user.nome,
      email: user.email,
      tipo: user.tipo,
      status: user.status
    });
    setIsEditing(true);
    setUserModalOpen(true);
  };

  const handleSaveUser = () => {
    if (isEditing && selectedUser) {
      setUsuarios(prev => prev.map(u => 
        u.id === selectedUser.id 
          ? { ...u, ...userForm }
          : u
      ));
      toast({ title: "Usuário atualizado com sucesso!" });
    } else {
      const newUser: Usuario = {
        id: Date.now().toString(),
        ...userForm,
        dataCadastro: new Date().toISOString().split('T')[0]
      };
      setUsuarios(prev => [...prev, newUser]);
      toast({ title: "Usuário criado com sucesso!" });
    }
    
    setUserModalOpen(false);
    setIsEditing(false);
    setUserForm({ nome: '', email: '', tipo: 'gratuito', status: 'ativo' });
  };

  const handleDeleteUser = (id: string) => {
    setUsuarios(prev => prev.filter(u => u.id !== id));
    toast({ title: "Usuário removido com sucesso!" });
  };

  const handleEditArticle = (article: Artigo) => {
    setSelectedArticle(article);
    setArticleForm({
      titulo: article.titulo,
      resumo: article.resumo,
      categoria: article.categoria,
      status: article.status
    });
    setIsEditing(true);
    setArticleModalOpen(true);
  };

  const handleSaveArticle = () => {
    if (isEditing && selectedArticle) {
      setArtigos(prev => prev.map(a => 
        a.id === selectedArticle.id 
          ? { ...a, ...articleForm }
          : a
      ));
      toast({ title: "Artigo atualizado com sucesso!" });
    } else {
      const newArticle: Artigo = {
        id: Date.now().toString(),
        ...articleForm,
        autor: 'Admin',
        dataPublicacao: new Date().toISOString().split('T')[0]
      };
      setArtigos(prev => [...prev, newArticle]);
      toast({ title: "Artigo criado com sucesso!" });
    }
    
    setArticleModalOpen(false);
    setIsEditing(false);
    setArticleForm({ titulo: '', resumo: '', categoria: '', status: 'rascunho' });
  };

  const handleDeleteArticle = (id: string) => {
    setArtigos(prev => prev.filter(a => a.id !== id));
    toast({ title: "Artigo removido com sucesso!" });
  };

  const stats = [
    { label: "Total de Usuários", value: usuarios.length, color: "text-blue-600" },
    { label: "Usuários Premium", value: usuarios.filter(u => u.tipo === 'premium').length, color: "text-emerald-600" },
    { label: "Artigos Publicados", value: artigos.filter(a => a.status === 'publicado').length, color: "text-purple-600" },
    { label: "Artigos em Rascunho", value: artigos.filter(a => a.status === 'rascunho').length, color: "text-orange-600" }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Painel Administrativo</h1>
        <div className="flex space-x-2">
          <Button onClick={() => {
            setIsEditing(false);
            setUserForm({ nome: '', email: '', tipo: 'gratuito', status: 'ativo' });
            setUserModalOpen(true);
          }}>
            <Plus className="w-4 h-4 mr-2" />
            Novo Usuário
          </Button>
          <Button onClick={() => {
            setIsEditing(false);
            setArticleForm({ titulo: '', resumo: '', categoria: '', status: 'rascunho' });
            setArticleModalOpen(true);
          }}>
            <Plus className="w-4 h-4 mr-2" />
            Novo Artigo
          </Button>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="usuarios" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="usuarios">
            <Users className="w-4 h-4 mr-2" />
            Usuários
          </TabsTrigger>
          <TabsTrigger value="artigos">
            <FileText className="w-4 h-4 mr-2" />
            Artigos
          </TabsTrigger>
          <TabsTrigger value="configuracoes">
            <Settings className="w-4 h-4 mr-2" />
            Configurações
          </TabsTrigger>
        </TabsList>

        {/* Gestão de Usuários */}
        <TabsContent value="usuarios">
          <Card>
            <CardHeader>
              <CardTitle>Gestão de Usuários</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {usuarios.map((usuario) => (
                  <div key={usuario.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">{usuario.nome}</h3>
                      <p className="text-sm text-muted-foreground">{usuario.email}</p>
                      <div className="flex space-x-2 mt-2">
                        <Badge className={
                          usuario.tipo === 'premium' ? 'bg-emerald-100 text-emerald-800' :
                          usuario.tipo === 'admin' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }>
                          {usuario.tipo}
                        </Badge>
                        <Badge className={
                          usuario.status === 'ativo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }>
                          {usuario.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditUser(usuario)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteUser(usuario.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Gestão de Artigos */}
        <TabsContent value="artigos">
          <Card>
            <CardHeader>
              <CardTitle>Gestão de Artigos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {artigos.map((artigo) => (
                  <div key={artigo.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">{artigo.titulo}</h3>
                      <p className="text-sm text-muted-foreground">{artigo.resumo}</p>
                      <div className="flex space-x-2 mt-2">
                        <Badge>{artigo.categoria}</Badge>
                        <Badge className={
                          artigo.status === 'publicado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }>
                          {artigo.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditArticle(artigo)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteArticle(artigo.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Configurações */}
        <TabsContent value="configuracoes">
          <Card>
            <CardHeader>
              <CardTitle>Configurações do Sistema</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Configurações Gerais</h3>
                  <p className="text-muted-foreground">Configurações básicas do sistema em desenvolvimento...</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Modal de Usuário */}
      <Dialog open={userModalOpen} onOpenChange={setUserModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditing ? 'Editar Usuário' : 'Novo Usuário'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome</label>
              <Input
                value={userForm.nome}
                onChange={(e) => setUserForm({...userForm, nome: e.target.value})}
                placeholder="Nome do usuário"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input
                type="email"
                value={userForm.email}
                onChange={(e) => setUserForm({...userForm, email: e.target.value})}
                placeholder="email@exemplo.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tipo</label>
              <select
                className="w-full p-2 border rounded-md"
                value={userForm.tipo}
                onChange={(e) => setUserForm({...userForm, tipo: e.target.value as TipoUsuario})}
              >
                <option value="gratuito">Gratuito</option>
                <option value="premium">Premium</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select
                className="w-full p-2 border rounded-md"
                value={userForm.status}
                onChange={(e) => setUserForm({...userForm, status: e.target.value as StatusUsuario})}
              >
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
              </select>
            </div>
            <div className="flex space-x-2">
              <Button onClick={handleSaveUser} className="flex-1">
                <Save className="w-4 h-4 mr-2" />
                Salvar
              </Button>
              <Button variant="outline" onClick={() => setUserModalOpen(false)}>
                <X className="w-4 h-4 mr-2" />
                Cancelar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal de Artigo */}
      <Dialog open={articleModalOpen} onOpenChange={setArticleModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditing ? 'Editar Artigo' : 'Novo Artigo'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Título</label>
              <Input
                value={articleForm.titulo}
                onChange={(e) => setArticleForm({...articleForm, titulo: e.target.value})}
                placeholder="Título do artigo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Resumo</label>
              <Textarea
                value={articleForm.resumo}
                onChange={(e) => setArticleForm({...articleForm, resumo: e.target.value})}
                placeholder="Resumo do artigo"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Categoria</label>
              <Input
                value={articleForm.categoria}
                onChange={(e) => setArticleForm({...articleForm, categoria: e.target.value})}
                placeholder="Categoria do artigo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select
                className="w-full p-2 border rounded-md"
                value={articleForm.status}
                onChange={(e) => setArticleForm({...articleForm, status: e.target.value as StatusArtigo})}
              >
                <option value="rascunho">Rascunho</option>
                <option value="publicado">Publicado</option>
              </select>
            </div>
            <div className="flex space-x-2">
              <Button onClick={handleSaveArticle} className="flex-1">
                <Save className="w-4 h-4 mr-2" />
                Salvar
              </Button>
              <Button variant="outline" onClick={() => setArticleModalOpen(false)}>
                <X className="w-4 h-4 mr-2" />
                Cancelar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
