import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Kit de prensa — Hackatón Barranqui-IA 2026",
  description:
    "Recursos para medios: resumen ejecutivo, cifras, comunicado de prensa, logos, flyers y fotos descargables del Hackatón Barranqui-IA 2026.",
  alternates: {
    canonical: "https://barranquiia.com/prensa",
  },
};

export default function PrensaLayout({ children }: { children: ReactNode }) {
  return children;
}
