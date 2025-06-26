
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useUsuarios } from "@/contexts/UsuariosContext";

const NotificationBadge = () => {
  const { pendingCount } = useUsuarios();

  if (pendingCount === 0) return null;

  return (
    <div className="relative">
      <Button variant="outline" size="sm" className="relative">
        <Bell className="w-4 h-4" />
        <Badge 
          className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-[1.25rem] h-5 flex items-center justify-center rounded-full"
        >
          {pendingCount > 99 ? '99+' : pendingCount}
        </Badge>
      </Button>
    </div>
  );
};

export default NotificationBadge;
