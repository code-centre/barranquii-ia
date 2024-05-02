import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import BackgroundImages from "./components/BackgroundImages";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barranqui-IA",
  description: "Barranqui-IA 2024: Un evento único en Barranquilla dedicado a la innovación y la tecnología. Únete a nosotros para experimentar talleres interactivos, un emocionante hackatón y la oportunidad de conectar con líderes en inteligencia artificial y desarrollo tecnológico. Aprende, innova y crea con los mejores en el campo.",
  authors: [{name: 'Fundación Código Abierto', url: 'https://fundacioncodigoabierto.com/'}],
  keywords: ['Barranqui-IA', 'hackatón en Barranquilla', 'taller de tecnología', 'inteligencia artificial', 'innovación tecnológica', 'evento de TI', 'desarrollo de software', 'comunidad tecnológica'],
  openGraph: {
    type: "website",
    url: "https://www.barranquiia.com",
    title: "Barranqui-IA 2024",
    description: "Participa en el principal evento de tecnología e inteligencia artificial en Barranquilla. Talleres, hackatón y mucho más.",
    siteName: "Barranqui-IA",
    images: [{
      url: "https://www.barranquiia.com/opengraph-image.jpg",
    }],
    locale: "es_ES"
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="overflow-x-hidden scroll-smooth">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_KEY || ""} />
      <body
        className={`${jakarta.className} ${noto.className} relative overflow-hidden `}
      >
        <BackgroundImages />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
