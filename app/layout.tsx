import type { Metadata } from "next";
import { Poppins, League_Spartan } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Footer from "./components/Footer";
import ConditionalNavbar from "./components/ConditionalNavbar";
import JsonLd from "./components/JsonLd";
import { LanguageProvider } from "./i18n/LanguageProvider";
import { getLocale } from "./i18n/getLocale";
import { getTranslations } from "./i18n/getTranslation";
import type { Locale } from "./i18n/config";

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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.caribe-ia.com'),
  title: {
    default: "Caribe-IA 2026",
    template: "%s | Caribe-IA"
  },
  description:
    "Caribe-IA 2026: El programa de innovación abierta que lleva equipos del Caribe desde una idea hasta una startup financiada. Hackatones de IA, 12 semanas de aceleración y Demo Day ante inversionistas en TechCaribe Fest. Respaldado por Caribe Ventures.",
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
    "aceleración startups IA",
    "aceleradora startups inteligencia artificial",
    "programa aceleración IA Colombia",
    "Demo Day TechCaribe Fest",
    "startups IA Caribe",
    "emprendimiento inteligencia artificial",
    "innovación tecnológica Caribe",
    "comunidad tecnológica Barranquilla",
    "eventos tecnología IA",
    "mentoría startups IA",
    "inversión startups inteligencia artificial",
    "innovación abierta IA",
    "Costa Digital",
    "TechCaribe Fest",
    "Tech Caribe Weekend",
    "Caribe Ventures",
    "capital pre-seed Caribe",
    "fondo inversión IA Colombia",
    "prototipo a startup",
    "hackathon AI Colombia",
    "AI startups Caribbean",
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
      "De la idea al capital, en el Caribe. Hackatones de IA, 12 semanas de aceleración y Demo Day ante inversionistas. Respaldado por Caribe Ventures.",
    siteName: "Caribe-IA",
    images: [
      {
        url: "https://www.caribe-ia.com/caribe-ia-og.png",
        width: 960,
        height: 540,
        alt: "Caribe-IA - Innovación abierta con Inteligencia Artificial desde el Caribe",
        type: "image/png",
      },
    ],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caribe-IA 2026",
    description: "De la idea al capital, en el Caribe. Hackatones de IA, aceleración y Demo Day ante inversionistas en TechCaribe Fest.",
    images: ["https://www.caribe-ia.com/caribe-ia-og.png"],
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
  logo: "https://www.caribe-ia.com/caribe-ia-og.png",
  description: "Programa de innovación abierta que lleva equipos del Caribe desde una idea hasta una startup financiada a través de hackatones de IA, aceleración y Demo Day.",
  foundingOrganization: {
    "@type": "Organization",
    name: "Caribe Ventures",
    url: "https://www.linkedin.com/company/caribe-ventures",
  },
  sameAs: [
    "https://www.instagram.com/caribe.ventures",
    "https://www.linkedin.com/company/caribe-ventures",
    "https://www.instagram.com/codigoabierto.tech/",
    "https://twitter.com/CodigoAbiertoBQ",
    "https://www.facebook.com/profile.php?id=61562090332916",
  ],
};

const LOCALE_HTML: Record<Locale, string> = {
  es: "es",
  en: "en",
  pt: "pt",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = (await getLocale()) as Locale;
  const initialTranslations = await getTranslations(locale);
  return (
    <html lang={LOCALE_HTML[locale] || "es"} className="overflow-x-clip scroll-smooth">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_KEY || ""} />
      <body
        className={`${poppins.variable} ${leagueSpartan.variable} font-sans relative w-full overflow-x-clip`}
        style={{ scrollBehavior: 'smooth' }}
      >
        <LanguageProvider locale={locale} initialTranslations={initialTranslations}>
          <JsonLd data={organizationSchema} />
          <ConditionalNavbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
