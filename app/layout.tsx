import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Banner from "./components/Banner";
import BackgroundImages from "./components/BackgroundImages";
import Footer from "./components/Footer";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barranqui-IA",
  description: "Primer hackatón de IA en el Caribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="overflow-x-hidden">
      <GoogleTagManager gtmId={process.env.GTM_KEY || ""} />
      <body
        className={`${jakarta.className} ${noto.className} relative overflow-hidden `}
      >
        <BackgroundImages />
        {/* <Banner /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
