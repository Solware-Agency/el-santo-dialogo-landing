export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      a_usuarios: {
        Row: {
          automatizaciones_sugeridas: string[] | null
          historial: Json | null
          nombre_cliente: string | null
          tipo_negocio: string | null
          user_id: string
        }
        Insert: {
          automatizaciones_sugeridas?: string[] | null
          historial?: Json | null
          nombre_cliente?: string | null
          tipo_negocio?: string | null
          user_id: string
        }
        Update: {
          automatizaciones_sugeridas?: string[] | null
          historial?: Json | null
          nombre_cliente?: string | null
          tipo_negocio?: string | null
          user_id?: string
        }
        Relationships: []
      }
      allowed_emails: {
        Row: {
          email: string
          full_name: string | null
          hfm_id: string | null
          notes: string | null
          plan: string | null
          status: string | null
        }
        Insert: {
          email: string
          full_name?: string | null
          hfm_id?: string | null
          notes?: string | null
          plan?: string | null
          status?: string | null
        }
        Update: {
          email?: string
          full_name?: string | null
          hfm_id?: string | null
          notes?: string | null
          plan?: string | null
          status?: string | null
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          areas: string[] | null
          company: string | null
          created_at: string | null
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          sector: string | null
        }
        Insert: {
          areas?: string[] | null
          company?: string | null
          created_at?: string | null
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          sector?: string | null
        }
        Update: {
          areas?: string[] | null
          company?: string | null
          created_at?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          sector?: string | null
        }
        Relationships: []
      }
      documents: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      GTR: {
        Row: {
          age: string | null
          best_time_to_trade: string | null
          contactar: string | null
          country: string | null
          created_at: string
          email: string | null
          expires_at: string | null
          fecha_primer_correo: string | null
          fecha_registro: string | null
          financial_goals: string | null
          full_name: string | null
          hfm_id: string | null
          id: string
          is_active: boolean | null
          last_used_at: string | null
          license_expires_at: string | null
          license_key: string | null
          operating_time: string | null
          phone: string | null
          "public.allowed_emails": string | null
          risk_knowledge: string | null
          starting_capital: string | null
          status: string | null
          traded_assets: string | null
          trading_session: string | null
          trading_style: string | null
          updated_at: string | null
          verificado: string | null
        }
        Insert: {
          age?: string | null
          best_time_to_trade?: string | null
          contactar?: string | null
          country?: string | null
          created_at?: string
          email?: string | null
          expires_at?: string | null
          fecha_primer_correo?: string | null
          fecha_registro?: string | null
          financial_goals?: string | null
          full_name?: string | null
          hfm_id?: string | null
          id?: string
          is_active?: boolean | null
          last_used_at?: string | null
          license_expires_at?: string | null
          license_key?: string | null
          operating_time?: string | null
          phone?: string | null
          "public.allowed_emails"?: string | null
          risk_knowledge?: string | null
          starting_capital?: string | null
          status?: string | null
          traded_assets?: string | null
          trading_session?: string | null
          trading_style?: string | null
          updated_at?: string | null
          verificado?: string | null
        }
        Update: {
          age?: string | null
          best_time_to_trade?: string | null
          contactar?: string | null
          country?: string | null
          created_at?: string
          email?: string | null
          expires_at?: string | null
          fecha_primer_correo?: string | null
          fecha_registro?: string | null
          financial_goals?: string | null
          full_name?: string | null
          hfm_id?: string | null
          id?: string
          is_active?: boolean | null
          last_used_at?: string | null
          license_expires_at?: string | null
          license_key?: string | null
          operating_time?: string | null
          phone?: string | null
          "public.allowed_emails"?: string | null
          risk_knowledge?: string | null
          starting_capital?: string | null
          status?: string | null
          traded_assets?: string | null
          trading_session?: string | null
          trading_style?: string | null
          updated_at?: string | null
          verificado?: string | null
        }
        Relationships: []
      }
      json: {
        Row: {
          Categoria: string | null
          Comentario: string | null
          Ejemplo: string | null
          ID: string
          Nodos: string | null
          Nombre: string | null
          Price: string | null
          Score: number | null
          Solucion: string | null
          Tipo: string | null
        }
        Insert: {
          Categoria?: string | null
          Comentario?: string | null
          Ejemplo?: string | null
          ID: string
          Nodos?: string | null
          Nombre?: string | null
          Price?: string | null
          Score?: number | null
          Solucion?: string | null
          Tipo?: string | null
        }
        Update: {
          Categoria?: string | null
          Comentario?: string | null
          Ejemplo?: string | null
          ID?: string
          Nodos?: string | null
          Nombre?: string | null
          Price?: string | null
          Score?: number | null
          Solucion?: string | null
          Tipo?: string | null
        }
        Relationships: []
      }
      n8n_chat_histories: {
        Row: {
          id: number
          message: Json
          session_id: string
        }
        Insert: {
          id?: number
          message: Json
          session_id: string
        }
        Update: {
          id?: number
          message?: Json
          session_id?: string
        }
        Relationships: []
      }
      pitchQuestions: {
        Row: {
          created_at: string
          id: number
          name: string
          pregunta: string
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string
          pregunta?: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          pregunta?: string
        }
        Relationships: []
      }
      "Tips Asesores": {
        Row: {
          "¿Enviado a Telegram?": boolean | null
          Fecha: string | null
          "Fuente (RSS)": string | null
          id: number
          "ID del artículo": string | null
          "Tip generado": string | null
        }
        Insert: {
          "¿Enviado a Telegram?"?: boolean | null
          Fecha?: string | null
          "Fuente (RSS)"?: string | null
          id?: number
          "ID del artículo"?: string | null
          "Tip generado"?: string | null
        }
        Update: {
          "¿Enviado a Telegram?"?: boolean | null
          Fecha?: string | null
          "Fuente (RSS)"?: string | null
          id?: number
          "ID del artículo"?: string | null
          "Tip generado"?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      citext: {
        Args: { "": boolean } | { "": string } | { "": unknown }
        Returns: string
      }
      citext_hash: {
        Args: { "": string }
        Returns: number
      }
      citextin: {
        Args: { "": unknown }
        Returns: string
      }
      citextout: {
        Args: { "": string }
        Returns: unknown
      }
      citextrecv: {
        Args: { "": unknown }
        Returns: string
      }
      citextsend: {
        Args: { "": string }
        Returns: string
      }
      generar_gtr_license_key: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generar_license_key: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: string
      }
      match_documents: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_documents_chatbot2: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_documents_demo: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_documents_demo_vectorstore: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_documents_solwy: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_solwy_documents: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      search_people: {
        Args: { q: string }
        Returns: {
          age: string
          email: string
          full_name: string
          hfm_id: string
          id: string
          phone: string
          status: string
        }[]
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
