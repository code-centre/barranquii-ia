import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let browserClient: SupabaseClient | undefined;

function getEnv(): { url: string; anonKey: string } {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error(
      "Faltan NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY en el entorno."
    );
  }
  return { url, anonKey };
}

/** Cliente para componentes cliente (reutiliza una instancia en el navegador). */
export function createSupabaseBrowserClient(): SupabaseClient {
  const { url, anonKey } = getEnv();
  if (!browserClient) {
    browserClient = createClient(url, anonKey);
  }
  return browserClient;
}
