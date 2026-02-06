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
  title: "Caribe-IA",
  description:
    "Caribe-IA 2025: Transformando ideas en startups de alto impacto con base en Inteligencia artificial",
  authors: [
    {
      name: "Fundación Código Abierto",
      url: "https://fundacioncodigoabierto.com/",
    },
  ],
  keywords: [
    "Caribe-IA",
    "Barranqui-IA",
    "hackatón en Barranquilla",
    "taller de tecnología",
    "inteligencia artificial",
    "innovación tecnológica",
    "evento de TI",
    "desarrollo de software",
    "comunidad tecnológica",
  ],
  openGraph: {
    type: "website",
    url: "https://www.barranquiia.com",
    title: "Caribe-IA 2025",
    description:
      "Participa en el principal evento de tecnología e inteligencia artificial en el Caribe. Talleres, hackatón y mucho más.",
    siteName: "Caribe-IA 2025",
    images: [
      {
        url: "https://www.barranquiia.com/opengraph-image.jpg",
      },
    ],
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="overflow-x-hidden scroll-smooth">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_KEY || ""} />
      <body
        className={`${poppins.variable} ${leagueSpartan.variable} font-sans relative w-full overflow-hidden`}
      >
        <ConditionalNavbar />
        {children}
        {/* <GalacticCursorEffect /> */}
        <Footer />
      </body>
    </html>
  );
}
