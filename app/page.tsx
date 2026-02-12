import Summary from "./sections/Summary";
import HeroSection from "./sections/HeroSection";
import HowItWorks from "./sections/HowItWorks";
import Phases from "./sections/Phases";
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
  description: "El programa de innovación abierta que transforma talento del Caribe en startups de IA listas para el mercado",
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
  description: "Programa de incubación y aceleración de startups de inteligencia artificial en el Caribe colombiano",
  educationalCredentialAwarded: "Certificado de participación",
  hasProgram: [
    {
      "@type": "EducationalProgram",
      name: "Hackatones de IA",
      description: "Eventos de prototipado intensivo durante un fin de semana",
    },
    {
      "@type": "EducationalProgram",
      name: "Incubación Caribe-IA",
      description: "Programa de incubación de 12 semanas para startups de IA",
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
      {/* 1. HeroSection (dramatico, sin 3D) */}
      <HeroSection landing='default' />

      {/* 2. Summary / "Que es Caribe-IA?" (manifesto + 3 cards) */}
      <div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
        <Summary landing='default' />
      </div>

      {/* 3. HowItWorks (nuevo -- Hack/Build/Show) */}
      <div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
        <HowItWorks landing='default' />
      </div>

      {/* 4. Phases / HackatonCards (reescrito -- 3 event cards) */}
      <div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
        <Phases landing='default' />
      </div>

      {/* 5. AudienceSection (nuevo -- "Para quien es?") */}
      <div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
        <AudienceSection landing='default' />
      </div>

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
