import { createClient } from "@supabase/supabase-js";

/** Cliente para Route Handlers, Server Components y server actions (nueva instancia por llamada). */
export function createSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error(
      "Faltan NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY en el entorno."
    );
  }
  return createClient(url, anonKey);
}
