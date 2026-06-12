import Summary from "./sections/Summary";
import BackedByRibbon from "./components/BackedByRibbon";
import VideoHighlight from "./sections/VideoHighlight";
import HeroSection from "./sections/HeroSection";
import HowItWorks from "./sections/HowItWorks";
import Phases from "./sections/Phases";
import AccelerationTeams from "./sections/AccelerationTeams";
import CaribeVenturesCapitalSection from "./sections/CaribeVenturesCapitalSection";
import AudienceSection from "./sections/AudienceSection";
import PoweredByCV from "./sections/PoweredByCV";
import Organizers from "./sections/Organizers";
import FAQ from "./sections/FAQ";
import ApplicationSection from "./sections/ApplicationSection";
import { FAQS_CARIBE_IA } from "./utils/FAQS_CARIBE_IA";
import type { Metadata } from "next";
import JsonLd from "./components/JsonLd";
import { getLocale } from "./i18n/getLocale";
import { getTranslations, createT } from "./i18n/getTranslation";
import type { Locale } from "./i18n/config";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const translations = await getTranslations(locale);
  const t = createT(translations);
  return {
    title: t("metadata.siteTitle"),
    description: t("metadata.siteDescription"),
    openGraph: {
      title: t("metadata.siteOgTitle"),
      description: t("metadata.siteOgDescription"),
      url: "https://www.caribe-ia.com",
      images: [
        {
          url: "https://www.caribe-ia.com/caribe-ia-og.png",
          width: 960,
          height: 540,
          alt: t("metadata.siteOgAlt"),
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("metadata.siteOgTitle"),
      description: t("metadata.siteOgDescription"),
      images: ["https://www.caribe-ia.com/caribe-ia-og.png"],
    },
    alternates: {
      canonical: "/",
    },
  };
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Caribe-IA",
  url: "https://www.caribe-ia.com",
  description: "Programa de innovación abierta que lleva equipos del Caribe desde una idea hasta una startup financiada. Hackatones de IA, 12 semanas de aceleración y Demo Day ante inversionistas en TechCaribe Capital Summit.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.caribe-ia.com/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const educationalOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Caribe-IA",
  url: "https://www.caribe-ia.com",
  description: "Programa de innovación abierta del Caribe colombiano que convierte talento regional en startups de IA a través de un pipeline de tres fases: hackatones, aceleración y Demo Day.",
  educationalCredentialAwarded: "Certificado de participación",
  hasProgram: [
    {
      "@type": "EducationalProgram",
      name: "Hackatones de IA (Hack)",
      description: "Prototipado intensivo de 48 horas donde equipos multidisciplinarios construyen soluciones con IA para retos reales de la región. La edición 2026 reunió a 300 participantes y produjo 70 proyectos.",
    },
    {
      "@type": "EducationalProgram",
      name: "Aceleración Caribe-IA (Build)",
      description: "12 semanas de acompañamiento estratégico y técnico para convertir prototipos en startups listas para el mercado. 10 cupos abiertos a equipos del hackatón y proyectos externos.",
    },
    {
      "@type": "EducationalProgram",
      name: "Demo Day en TechCaribe Capital Summit (Show)",
      description: "Presentación pública ante inversionistas, aliados y comunidad en TechCaribe Capital Summit, la cita de capital del Caribe colombiano en octubre.",
    },
  ],
};

// Generate FAQPage schema from FAQS_CARIBE_IA
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS_CARIBE_IA.flatMap((group) =>
    group.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }))
  ),
};

export default function Home() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={educationalOrganizationSchema} />
      <JsonLd data={faqPageSchema} />
      <main className="min-h-screen flex flex-col">
      {/* 1. HeroSection (dramatico, sin 3D) - estado: aceleración en curso */}
      <HeroSection landing='default' />

      {/* 2. Summary / "Que es Caribe-IA?" (manifesto + fases con estado) - fondo foto con tinte */}
      <Summary landing='default' />

      {/* 2b. Backed by ribbon */}
      <BackedByRibbon />

      {/* 3. Aceleración: 70 equipos del hackatón, 10 cupos (abierto a externos) */}
      <AccelerationTeams />

      {/* 3b. Video highlight */}
      <VideoHighlight />

      {/* 4. HowItWorks (Hack/Build/Show) - EL PROGRAMA con fondo hero */}
      <HowItWorks landing='default' />

      {/* 5. Phases / Así fue Barranqui-IA 2026 (fondo foto) */}
      <Phases landing='default' />

      {/* 5b. Caribe Ventures - Capital real (con fondo hero) */}
      <CaribeVenturesCapitalSection landing='default' />

      {/* 5. AudienceSection - Si construyes, aquí es. (fondo foto) */}
      <AudienceSection landing='default' />

      {/* 6. PoweredByCV (nuevo -- brand bridge) */}
      <div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
        <PoweredByCV landing='default' />
      </div>

      {/* 7. Organizers (reescrito con labels) */}
      {/* <div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
        <Organizers landing='default' />
      </div> */}

      {/* 8. FAQ (tabs) */}
      <FAQ data={FAQS_CARIBE_IA} landing='default' />

      {/* 9. ApplicationSection (nuevo -- conversion) */}
      {/* <div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
        <ApplicationSection landing='default' />
      </div> */}
      </main>
    </>
  );
}
