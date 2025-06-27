export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      matriculas: {
        Row: {
          created_at: string | null
          dados_matricula: Json | null
          id: string
          nome_curso: string
          status: string | null
          tipo_curso: string
          user_id: string | null
          valor: number | null
        }
        Insert: {
          created_at?: string | null
          dados_matricula?: Json | null
          id?: string
          nome_curso: string
          status?: string | null
          tipo_curso: string
          user_id?: string | null
          valor?: number | null
        }
        Update: {
          created_at?: string | null
          dados_matricula?: Json | null
          id?: string
          nome_curso?: string
          status?: string | null
          tipo_curso?: string
          user_id?: string | null
          valor?: number | null
        }
        Relationships: []
      }
      planilhas_mensais: {
        Row: {
          ano: number
          arquivo_url: string
          created_at: string | null
          descricao: string | null
          id: string
          mes: number
        }
        Insert: {
          ano: number
          arquivo_url: string
          created_at?: string | null
          descricao?: string | null
          id?: string
          mes: number
        }
        Update: {
          ano?: number
          arquivo_url?: string
          created_at?: string | null
          descricao?: string | null
          id?: string
          mes?: number
        }
        Relationships: []
      }
      planos_assinatura: {
        Row: {
          ativo: boolean | null
          created_at: string | null
          descricao: string | null
          id: string
          nome: string
          preco: number | null
          recursos: Json | null
          tipo: string
        }
        Insert: {
          ativo?: boolean | null
          created_at?: string | null
          descricao?: string | null
          id?: string
          nome: string
          preco?: number | null
          recursos?: Json | null
          tipo: string
        }
        Update: {
          ativo?: boolean | null
          created_at?: string | null
          descricao?: string | null
          id?: string
          nome?: string
          preco?: number | null
          recursos?: Json | null
          tipo?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          documento: string | null
          email: string | null
          empresa: string | null
          habilitado: boolean | null
          id: string
          nome_completo: string | null
          plano: string | null
          status: string | null
          telefone: string | null
          tipo_pessoa: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          documento?: string | null
          email?: string | null
          empresa?: string | null
          habilitado?: boolean | null
          id: string
          nome_completo?: string | null
          plano?: string | null
          status?: string | null
          telefone?: string | null
          tipo_pessoa?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          documento?: string | null
          email?: string | null
          empresa?: string | null
          habilitado?: boolean | null
          id?: string
          nome_completo?: string | null
          plano?: string | null
          status?: string | null
          telefone?: string | null
          tipo_pessoa?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      solicitacoes_orcamento: {
        Row: {
          created_at: string | null
          descricao_necessidade: string
          email: string
          empresa: string | null
          id: string
          nome: string
          status: string | null
          telefone: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          descricao_necessidade: string
          email: string
          empresa?: string | null
          id?: string
          nome: string
          status?: string | null
          telefone?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          descricao_necessidade?: string
          email?: string
          empresa?: string | null
          id?: string
          nome?: string
          status?: string | null
          telefone?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "solicitacoes_orcamento_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
