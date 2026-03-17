import type { Metadata } from "next";
import { getLocale } from "../i18n/getLocale";
import { getTranslations, createT } from "../i18n/getTranslation";
import type { Locale } from "../i18n/config";
import FAQ from "../sections/FAQ";
import { FAQS_CARIBE_IA } from "../utils/FAQS_CARIBE_IA";
import Title from "../components/Title";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const translations = await getTranslations(locale);
  const t = createT(translations);
  const title = t("pages.demoDay.title");
  const description = t("pages.demoDay.description");
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://www.caribe-ia.com/demo-day",
      images: [
        {
          url: "https://www.caribe-ia.com/caribe-ia-og.png",
          width: 960,
          height: 540,
          alt: title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.caribe-ia.com/caribe-ia-og.png"],
    },
    alternates: {
      canonical: "/demo-day",
    },
  };
}

const FAQ_DEMO_DAY = FAQS_CARIBE_IA.filter(
  (g) => g.title.includes("Demo Day") || g.title.includes("Crowdfunding")
);

export default async function DemoDayPage() {
  const locale = (await getLocale()) as Locale;
  const translations = await getTranslations(locale);
  const t = createT(translations);

  return (
    <main className="min-h-screen flex flex-col">
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: "url(/texture-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-10 w-full text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t("pages.demoDay.title")}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            {t("pages.demoDay.subtitle")}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 lg:px-10 w-full flex flex-col gap-16 pb-20">
        <section className="flex flex-col gap-6">
          <Title title="¿Qué es el Demo Day?" landing="default" />
          <p className="text-lg text-white/80 leading-relaxed max-w-3xl">
            {t("pages.demoDay.description")}
          </p>
        </section>

        <FAQ data={FAQ_DEMO_DAY} landing="default" />
      </div>
    </main>
  );
}
