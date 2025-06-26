
import { useState } from "react";
import { Users, Plus, Pencil, Trash2, Search, Filter, Check, X, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useUsuarios } from "@/contexts/UsuariosContext";
import { Usuario } from "@/types/admin";
import { toast } from "@/hooks/use-toast";

const UsuariosManager = () => {
  const { usuarios, adicionarUsuario, atualizarUsuario, removerUsuario } = useUsuarios();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPlano, setFilterPlano] = useState("todos");
  const [filterStatus, setFilterStatus] = useState("todos");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<Usuario | null>(null);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    plano: "gratuito" as Usuario['plano'],
    status: "ativo" as Usuario['status']
  });

  const usuariosFiltrados = usuarios.filter(usuario => {
    const matchesSearch = usuario.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         usuario.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterPlano === "todos" || usuario.plano === filterPlano;
    const matchesStatus = filterStatus === "todos" || usuario.status === filterStatus;
    return matchesSearch && matchesFilter && matchesStatus;
  });

  // Separar usuários pendentes para destaque
  const usuariosPendentes = usuariosFiltrados.filter(u => u.status === "pendente");
  const usuariosAtivos = usuariosFiltrados.filter(u => u.status !== "pendente");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingUser) {
      atualizarUsuario(editingUser.id, formData);
      toast({ title: "Usuário atualizado com sucesso!" });
    } else {
      adicionarUsuario({
        ...formData,
        dataRegistro: new Date().toISOString(),
        ultimoAcesso: new Date().toISOString()
      });
      toast({ title: "Usuário adicionado com sucesso!" });
    }
    
    setIsDialogOpen(false);
    setEditingUser(null);
    setFormData({ nome: "", email: "", plano: "gratuito", status: "ativo" });
  };

  const handleEdit = (usuario: Usuario) => {
    setEditingUser(usuario);
    setFormData({
      nome: usuario.nome,
      email: usuario.email,
      plano: usuario.plano,
      status: usuario.status
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja remover este usuário?")) {
      removerUsuario(id);
      toast({ title: "Usuário removido com sucesso!" });
    }
  };

  const handleApprove = (id: string) => {
    atualizarUsuario(id, { status: "ativo" });
    toast({ title: "Usuário aprovado com sucesso!" });
  };

  const handleReject = (id: string) => {
    if (confirm("Tem certeza que deseja rejeitar esta solicitação?")) {
      atualizarUsuario(id, { status: "rejeitado" });
      toast({ title: "Solicitação rejeitada." });
    }
  };

  const resetForm = () => {
    setEditingUser(null);
    setFormData({ nome: "", email: "", plano: "gratuito", status: "ativo" });
  };

  const getStatusBadge = (status: Usuario['status']) => {
    switch (status) {
      case "ativo":
        return <Badge className="bg-green-100 text-green-800">Ativo</Badge>;
      case "pendente":
        return <Badge className="bg-yellow-100 text-yellow-800">Pendente</Badge>;
      case "bloqueado":
        return <Badge className="bg-red-100 text-red-800">Bloqueado</Badge>;
      case "rejeitado":
        return <Badge className="bg-gray-100 text-gray-800">Rejeitado</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
          <Users className="w-5 h-5" />
          <span>Gestão de Usuários</span>
          {usuariosPendentes.length > 0 && (
            <Badge className="bg-yellow-100 text-yellow-800 ml-2">
              {usuariosPendentes.length} pendente{usuariosPendentes.length > 1 ? 's' : ''}
            </Badge>
          )}
        </h2>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="w-4 h-4 mr-2" />
              Novo Usuário
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingUser ? "Editar Usuário" : "Novo Usuário"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="plano">Plano</Label>
                <Select
                  value={formData.plano}
                  onValueChange={(value: Usuario['plano']) => 
                    setFormData({...formData, plano: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gratuito">Gratuito</SelectItem>
                    <SelectItem value="basico">Básico</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="corporativo">Corporativo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value: Usuario['status']) => 
                    setFormData({...formData, status: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ativo">Ativo</SelectItem>
                    <SelectItem value="pendente">Pendente</SelectItem>
                    <SelectItem value="bloqueado">Bloqueado</SelectItem>
                    <SelectItem value="rejeitado">Rejeitado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex space-x-2">
                <Button type="submit" className="flex-1">
                  {editingUser ? "Atualizar" : "Criar"}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filtros */}
      <div className="flex space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input
            placeholder="Buscar por nome ou email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterPlano} onValueChange={setFilterPlano}>
          <SelectTrigger className="w-48">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos os Planos</SelectItem>
            <SelectItem value="gratuito">Gratuito</SelectItem>
            <SelectItem value="basico">Básico</SelectItem>
            <SelectItem value="premium">Premium</SelectItem>
            <SelectItem value="corporativo">Corporativo</SelectItem>
          </SelectContent>
        </Select>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos Status</SelectItem>
            <SelectItem value="ativo">Ativo</SelectItem>
            <SelectItem value="pendente">Pendente</SelectItem>
            <SelectItem value="bloqueado">Bloqueado</SelectItem>
            <SelectItem value="rejeitado">Rejeitado</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Solicitações Pendentes */}
      {usuariosPendentes.length > 0 && (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardHeader>
            <CardTitle className="flex items-center text-yellow-800">
              <Clock className="w-5 h-5 mr-2" />
              Solicitações de Assinatura Pendentes ({usuariosPendentes.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Plano Solicitado</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {usuariosPendentes.map((usuario) => (
                  <TableRow key={usuario.id} className="bg-white">
                    <TableCell className="font-medium">{usuario.nome}</TableCell>
                    <TableCell>{usuario.email}</TableCell>
                    <TableCell>
                      <Badge variant={usuario.plano === "premium" ? "default" : "secondary"}>
                        {usuario.plano}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(usuario.dataRegistro).toLocaleDateString('pt-BR')}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => handleApprove(usuario.id)}
                        >
                          <Check className="w-3 h-3 mr-1" />
                          Aprovar
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-600 border-red-200 hover:bg-red-50"
                          onClick={() => handleReject(usuario.id)}
                        >
                          <X className="w-3 h-3 mr-1" />
                          Rejeitar
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {/* Tabela de Usuários */}
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Plano</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data Registro</TableHead>
                <TableHead>Último Acesso</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usuariosAtivos.map((usuario) => (
                <TableRow key={usuario.id}>
                  <TableCell className="font-medium">{usuario.nome}</TableCell>
                  <TableCell>{usuario.email}</TableCell>
                  <TableCell>
                    <Badge variant={usuario.plano === "premium" ? "default" : "secondary"}>
                      {usuario.plano}
                    </Badge>
                  </TableCell>
                  <TableCell>{getStatusBadge(usuario.status)}</TableCell>
                  <TableCell>
                    {new Date(usuario.dataRegistro).toLocaleDateString('pt-BR')}
                  </TableCell>
                  <TableCell>
                    {new Date(usuario.ultimoAcesso).toLocaleDateString('pt-BR')}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(usuario)}
                      >
                        <Pencil className="w-3 h-3" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(usuario.id)}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default UsuariosManager;
