"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@/app/i18n/useTranslation";

type SponsorEntry = {
  name: string;
  logo: string;
  link?: string;
  noGrayscale?: boolean;
  /**
   * Solo comunidades/instituciones: escala respecto al tamaño base (1 = igual que organizadores).
   * Útil cuando el PNG tiene mucho aire en blanco o proporción muy extrema.
   */
  partnersScale?: number;
  /** Solo organizadores: logo y tarjeta al tamaño “principal” (ej. Costa Digital) */
  organizerPrimary?: boolean;
};

/** Huella base del logo (comunidades + organizador principal) */
const ORGANIZER_LOGO_SLOT_CLASS =
  "mx-auto flex min-h-[140px] w-full min-w-0 max-w-[280px] items-center justify-center sm:min-h-[158px]";
/** Tarjeta de organizador secundario: más compacta */
const ORGANIZER_CARD_SLOT_COMPACT =
  "mx-auto flex min-h-[104px] w-full min-w-0 max-w-[200px] items-center justify-center sm:min-h-[118px] sm:max-w-[220px]";
/** Instituciones: más ancho para marcas dobles o muy horizontales */
const PARTNER_INSTITUTIONAL_SLOT_CLASS =
  "mx-auto flex min-h-[156px] w-full min-w-0 max-w-[min(100%,24rem)] items-center justify-center sm:min-h-[172px] sm:max-w-[26rem]";
const ORGANIZER_LOGO_IMG_CLASS =
  "h-16 sm:h-20 md:h-[5.25rem] w-auto max-w-[210px] sm:max-w-[250px] md:max-w-[270px] group-hover:scale-110 transition-all duration-500";
const ORGANIZER_LOGO_IMG_COMPACT_CLASS =
  "h-11 sm:h-14 md:h-16 w-auto max-w-[130px] sm:max-w-[160px] md:max-w-[180px] group-hover:scale-110 transition-all duration-500";

const organizers: SponsorEntry[] = [
  {
    name: "Costa Digital",
    logo: "/logos/costa-digital.png",
    link: "https://costadigital.org",
    noGrayscale: true,
    organizerPrimary: true,
  },
  {
    name: "FCA",
    logo: "/images/sponsors/fca.webp",
    link: "https://codigoabierto.tech",
  },
  {
    name: "Caribe Ventures",
    logo: "/images/sponsors/caribe-ventures.png",
    link: "https://caribe.ventures",
  },
  {
    name: "Google Developer Groups",
    logo: "/logos/gdg-logo-blanco.png",
    link: "https://gdg.community.dev/gdg-barranquilla/",
    noGrayscale: true,
  },
];

const sponsors: SponsorEntry[] = [
  {
    name: "Banco Serfinanza",
    logo: "/logos/serfinanza.png",
    link: "https://bancoserfinanza.com/",
    noGrayscale: true,
  },
  {
    name: "Flash Olímpica",
    logo: "/logos/Flash-Olimpica.jpg",
    link: "https://www.flasholimpica.com/",
    noGrayscale: true,
  },
  {
    name: "EPAM",
    logo: "/logos/epam-blanco.png",
    link: "https://www.epam.com",
    noGrayscale: true,
  },
  {
    name: "Tech Centre",
    logo: "/images/sponsors/tech-centre.png",
    link: "https://techcentre.co",
    noGrayscale: true,
  },
  {
    name: "Ciudad Inmersiva",
    logo: "/logos/ciudad-inmersiva.png",
    link: "https://ciudadinmersiva.com",
    noGrayscale: true,
  },
  {
    name: "CooWeb",
    logo: "/logos/Logo_Cooweb_White.webp",
    link: "https://www.cooweb.ai/",
    noGrayscale: true,
  },
  {
    name: "Macondo Lab",
    logo: "/logos/macondo-lab.png",
    link: "https://macondolab.com/",
    noGrayscale: true,
  },
  {
    name: "Universidad Libre",
    logo: "/logos/universidad-libre.png",
    link: "https://www.unilibre.edu.co/barranquilla/",
    noGrayscale: true,
  },
  {
    name: "Zumati",
    logo: "/logos/zumati.png",
    link: "https://zumati.co/",
    noGrayscale: true,
  },
  {
    name: "GOyn",
    logo: "/logos/goyn.png",
    link: "https://goynbarranquilla.com/",
    noGrayscale: true,
  },
  {
    name: "ACOPI",
    logo: "/logos/acopi.png",
    link: "https://acopi.org.co/",
    noGrayscale: true,
  },
  {
    name: "Sonia-IA",
    logo: "/logos/sonia-ia.png",
    noGrayscale: true,
  },
];

const institutionalAllies: SponsorEntry[] = [
  {
    name: "Alcaldía de Barranquilla",
    logo: "/logos/alcaldia-baq-logo.png",
    link: "https://www.barranquilla.gov.co/",
    noGrayscale: true,
    partnersScale: 1.2,
  },
  {
    name: "Founder Institute",
    logo: "/logos/fi-blanco.png",
    link: "https://fi.co",
    noGrayscale: true,
  },
];

const techCommunities: SponsorEntry[] = [
  {
    name: "Shelv",
    logo: "/logos/shelv.png",
    noGrayscale: true,
    partnersScale: 0.72,
  },
  {
    name: "Synergy",
    logo: "/logos/synergy-blanco.png",
    noGrayscale: true,
    partnersScale: 1.14,
  },
  {
    name: "IEEE CUC Student Branch",
    logo: "/logos/ieee-blanco.png",
    noGrayscale: true,
    partnersScale: 1.3,
  },
  {
    name: "AWS",
    logo: "/logos/aws-blanco.png",
    noGrayscale: true,
    partnersScale: 1.5,
  },
  {
    name: "ACM Uninorte",
    logo: "/logos/Logo-ACM-uninorte.webp",
    noGrayscale: true,
    partnersScale: 1.4,
  },
  {
    name: "Tech Queens",
    logo: "/logos/tech-queens.png",
    noGrayscale: true,
    partnersScale: 1.3,
  },
  {
    name: "Notion",
    logo: "/logos/notion-blanco.png",
    noGrayscale: true,
    partnersScale: 0.92,
  },
  {
    name: "Life Your Coaching",
    logo: "/logos/life-your-coaching.jpg",
    noGrayscale: true,
  },
  {
    name: "Boyacá Dev",
    logo: "/logos/boyaca-dev-blanco.png",
    noGrayscale: true,
    partnersScale: 0.8,
  },
  {
    name: "GDG Boyacá",
    logo: "/logos/gdg-boyaca.jpg",
    noGrayscale: true,
  },
  {
    name: "Java",
    logo: "/logos/java.png",
    noGrayscale: true,
  },
];

function SponsorImage({
  sponsor,
  className,
  t,
  sizes,
}: {
  sponsor: SponsorEntry;
  className: string;
  t: (key: string, values?: Record<string, string>) => string;
  sizes?: string;
}) {
  const img = (
    <Image
      src={sponsor.logo}
      alt={t("sponsors.logoOf", { name: sponsor.name })}
      width={280}
      height={140}
      sizes={sizes}
      className={`object-contain transition-all duration-500 ${className} ${
        sponsor.noGrayscale ? "" : "grayscale group-hover:grayscale-0"
      }`}
    />
  );

  if (sponsor.link) {
    return (
      <a
        href={sponsor.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center"
        aria-label={t("sponsors.visitSite", { name: sponsor.name })}
      >
        {img}
      </a>
    );
  }
  return <div className="group flex items-center justify-center">{img}</div>;
}

type PartnerSubsectionProps = {
  headingId: string;
  title: string;
  entries: SponsorEntry[];
  /** "dense" = muchas celdas; "pair" = pocas logos, fila centrada */
  layout: "dense" | "pair";
  t: (key: string, values?: Record<string, string>) => string;
};

function PartnerSubsection({
  headingId,
  title,
  entries,
  layout,
  t,
}: PartnerSubsectionProps) {
  const gridClass =
    layout === "pair"
      ? "mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 md:gap-12"
      : "mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-7 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5";
  const slotClass =
    layout === "pair" ? PARTNER_INSTITUTIONAL_SLOT_CLASS : ORGANIZER_LOGO_SLOT_CLASS;

  return (
    <section
      className="max-w-6xl mx-auto px-4 mb-20 overflow-x-visible"
      aria-labelledby={headingId}
    >
      <motion.header
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          id={headingId}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
        >
          {title}
        </h2>
      </motion.header>

      <ul className={`${gridClass} overflow-x-visible`} role="list">
        {entries.map((c) => {
          const s = c.partnersScale ?? 1;
          return (
            <li
              key={c.name}
              className="flex min-w-0 w-full items-center justify-center overflow-visible py-4 sm:py-5"
            >
              <div className={slotClass}>
                <div
                  className="flex items-center justify-center"
                  style={
                    s !== 1
                      ? {
                          transform: `scale(${s})`,
                          transformOrigin: "center center",
                        }
                      : undefined
                  }
                >
                  <SponsorImage
                    sponsor={c}
                    className={ORGANIZER_LOGO_IMG_CLASS}
                    t={t}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default function SponsorsSection2026() {
  const { t } = useTranslation();

  return (
    <div className="py-20 text-white relative overflow-x-visible">
      {/* ── Organizadores (jerarquía por debajo de patrocinadores) ── */}
      <section
        className="max-w-6xl mx-auto px-4 mb-20 md:mb-24"
        aria-labelledby="sponsors-org-heading"
      >
        <motion.header
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.28em] text-purple-400/75 text-[10px] sm:text-xs font-semibold mb-2">
            {t("sponsors.organizersLabel")}
          </p>
          <h2
            id="sponsors-org-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500/95 to-purple-600/95 bg-clip-text text-transparent"
          >
            {t("sponsors.organizersTitle")}
          </h2>
        </motion.header>

        <ul className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 mt-10" role="list">
          {organizers.map((org, i) => (
            <motion.li
              key={org.name}
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="relative p-[1px] rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 animate-spin-slow"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #ec4899, #a855f7, #6366f1, #ec4899)",
                    animationDuration: "4s",
                  }}
                />
                <div
                  className={`relative bg-[#0a0a0a] rounded-2xl ${
                    org.organizerPrimary
                      ? `px-8 py-7 ${ORGANIZER_LOGO_SLOT_CLASS}`
                      : `px-6 py-5 ${ORGANIZER_CARD_SLOT_COMPACT}`
                  }`}
                >
                  <SponsorImage
                    sponsor={org}
                    className={
                      org.organizerPrimary
                        ? ORGANIZER_LOGO_IMG_CLASS
                        : ORGANIZER_LOGO_IMG_COMPACT_CLASS
                    }
                    t={t}
                  />
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* ── Patrocinadores (máxima jerarquía visual) ── */}
      <section
        className="max-w-6xl mx-auto px-4 mb-20 md:mb-28"
        aria-labelledby="sponsors-patrons-heading"
      >
        <motion.header
          className="text-center mb-12 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.35em] text-purple-300 text-xs sm:text-sm font-semibold mb-3">
            {t("sponsors.patronsLabel")}
          </p>
          <h2
            id="sponsors-patrons-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent drop-shadow-sm"
          >
            {t("sponsors.patronsTitle")}
          </h2>
        </motion.header>

        <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-7 sm:gap-9" role="list">
          {sponsors.map((sp, i) => (
            <motion.li
              key={sp.name}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
            >
              <div className="bg-white/[0.06] backdrop-blur-sm border border-white/15 rounded-xl px-10 py-9 flex items-center justify-center min-h-[150px] min-w-[240px] sm:min-h-[160px] sm:min-w-[260px] hover:bg-white/[0.1] hover:border-purple-400/40 transition-all duration-300 shadow-lg shadow-purple-950/20">
                <SponsorImage
                  sponsor={sp}
                  className="h-[4.25rem] sm:h-24 md:h-[5.5rem] w-auto max-w-[220px] sm:max-w-[240px] group-hover:scale-105"
                  t={t}
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      <PartnerSubsection
        headingId="sponsors-tech-communities-heading"
        title={t("sponsors.techCommunitiesTitle")}
        entries={techCommunities}
        layout="dense"
        t={t}
      />

      <PartnerSubsection
        headingId="sponsors-institutional-heading"
        title={t("sponsors.institutionalAlliesTitle")}
        entries={institutionalAllies}
        layout="pair"
        t={t}
      />
    </div>
  );
}
