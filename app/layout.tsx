import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Noto_Sans,
  Poppins,
  League_Spartan,
} from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Footer from "./components/Footer";
import ConditionalNavbar from "./components/ConditionalNavbar";
import JsonLd from "./components/JsonLd";

// Definimos los pesos para las fuentes
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppinss",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league_spartan",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const noto = Noto_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.caribe-ia.com'),
  title: {
    default: "Caribe-IA 2026",
    template: "%s | Caribe-IA"
  },
  description:
    "Caribe-IA 2026: El programa que transforma talento del Caribe en startups de IA listas para el mercado. Hackatones, incubación y Demo Day en TechCaribe Fest.",
  authors: [
    {
      name: "Caribe Ventures",
      url: "https://www.caribe-ia.com",
    },
    {
      name: "Fundación Código Abierto",
      url: "https://fundacioncodigoabierto.com/",
    },
  ],
  keywords: [
    "Caribe-IA",
    "Barranqui-IA",
    "Cartagen-IA",
    "Samar-IA",
    "hackatón inteligencia artificial",
    "hackatón IA Barranquilla",
    "hackatón IA Caribe colombiano",
    "incubación startups IA",
    "aceleradora startups inteligencia artificial",
    "programa incubación IA Colombia",
    "Demo Day TechCaribe Fest",
    "startups IA Caribe",
    "emprendimiento inteligencia artificial",
    "innovación tecnológica Caribe",
    "comunidad tecnológica Barranquilla",
    "eventos tecnología IA",
    "mentoría startups IA",
    "inversión startups inteligencia artificial",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.caribe-ia.com",
    title: "Caribe-IA 2026",
    description:
      "El programa que transforma talento del Caribe en startups de IA listas para el mercado. Hackatones, incubación y Demo Day.",
    siteName: "Caribe-IA",
    images: [
      {
        url: "https://www.caribe-ia.com/portada-caribe.png",
        width: 1200,
        height: 630,
        alt: "Caribe-IA 2026 - Programa de startups de IA",
      },
    ],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caribe-IA 2026",
    description: "El programa que transforma talento del Caribe en startups de IA listas para el mercado.",
    images: ["https://www.caribe-ia.com/portada-caribe.png"],
  },
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Caribe-IA",
  url: "https://www.caribe-ia.com",
  logo: "https://www.caribe-ia.com/portada-caribe.png",
  description: "Programa que transforma talento del Caribe en startups de IA listas para el mercado",
  foundingOrganization: {
    "@type": "Organization",
    name: "Caribe Ventures",
  },
  sameAs: [
    // Add social media URLs when available
    // "https://twitter.com/caribeia",
    // "https://www.linkedin.com/company/caribe-ia",
    // "https://www.instagram.com/caribeia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="overflow-x-hidden scroll-smooth">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_KEY || ""} />
      <body
        className={`${poppins.variable} ${leagueSpartan.variable} font-sans relative w-full overflow-x-hidden`}
      >
        <JsonLd data={organizationSchema} />
        <ConditionalNavbar />
        {children}
        {/* <GalacticCursorEffect /> */}
        <Footer />
      </body>
    </html>
  );
}
