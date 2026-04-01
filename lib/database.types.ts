/**
 * Supabase database type definitions.
 *
 * The `waitlist_signups` table was created via the SQL migration in:
 *   drizzle/0000_dapper_radioactive_man.sql
 *
 * You can regenerate this file with the Supabase CLI:
 *   npx supabase gen types typescript --project-id <project-id> > lib/database.types.ts
 */

// Generic JSON value type — mirrors what Supabase cli generates for jsonb columns.
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      waitlist_signups: {
        Row: {
          id: string;
          created_at: string;
          email: string;
          full_name: string;
          company: string | null;
          role: string | null;
          source: string;
          notes: string | null;
          metadata: Json | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          email: string;
          full_name: string;
          company?: string | null;
          role?: string | null;
          source?: string;
          notes?: string | null;
          metadata?: Json | null;
        };
        Update: Partial<Database["public"]["Tables"]["waitlist_signups"]["Insert"]>;
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type WaitlistSignup = Database["public"]["Tables"]["waitlist_signups"]["Row"];
export type NewWaitlistSignup = Database["public"]["Tables"]["waitlist_signups"]["Insert"];

