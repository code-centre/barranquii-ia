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
};

const organizers: SponsorEntry[] = [
  {
    name: "Costa Digital",
    logo: "/logos/costa-digital.png",
    link: "https://costadigital.org",
    noGrayscale: true,
  }, {
    name: "FCA",
    logo: "/images/sponsors/fca.webp",
    link: "https://codigoabierto.tech",
  }, {
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
    name: "EPAM",
    logo: "/logos/epam-blanco.png",
    link: "https://www.epam.com",
    noGrayscale: true,
  },{
    name: "CooWeb",
    logo: "/logos/Logo_Cooweb_White.webp",
    link: "https://www.epam.com",
    noGrayscale: true,
  },
];

const communities: SponsorEntry[] = [
  { name: "Shelv", logo: "/logos/shelv.png", noGrayscale: true },
  { name: "Synergy", logo: "/logos/synergy-blanco.png", noGrayscale: true },
  {
    name: "IEEE CUC Student Branch",
    logo: "/logos/ieee-blanco.png",
    noGrayscale: true,
  }, {
    name: "Audacia",
    logo: "/logos/LOGO-UNISIMON-AUDACIA-BLANCO.webp",
    noGrayscale: true,
  }, {
    name: "AWS",
    logo: "/logos/aws.webp",
    noGrayscale: true,
  }, {
    name: "Red Team",
    logo: "/logos/rtb.jpg",
    noGrayscale: true,
  }, {
    name: "ACM Uninorte",
    logo: "/logos/Logo-ACM-uninorte.webp",
    noGrayscale: true,
  }, {
    name: "Tech Queens",
    logo: "/logos/tech-queens.png",
    noGrayscale: true,
  }, {
    name: "Notion",
    logo: "/logos/notion-blanco.png",
    noGrayscale: true,
  }, {
    name: "Life Your Coaching",
    logo: "/logos/life-your-coaching.jpg",
    noGrayscale: true,
  },
];

function SponsorImage({
  sponsor,
  className,
  t,
}: {
  sponsor: SponsorEntry;
  className: string;
  t: (key: string, values?: Record<string, string>) => string;
}) {
  const img = (
    <Image
      src={sponsor.logo}
      alt={t("sponsors.logoOf", { name: sponsor.name })}
      width={220}
      height={120}
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

export default function SponsorsSection2026() {
  const { t } = useTranslation();

  return (
    <div className="py-20 text-white relative overflow-hidden">
      {/* ── Organizadores ── */}
      <section
        className="max-w-6xl mx-auto px-4 mb-24"
        aria-labelledby="sponsors-org-heading"
      >
        <motion.header
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.3em] text-purple-400 text-xs font-semibold mb-3">
            {t("sponsors.organizersLabel")}
          </p>
          <h2
            id="sponsors-org-heading"
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
          >
            {t("sponsors.organizersTitle")}
          </h2>
        </motion.header>

        <ul className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-12" role="list">
          {organizers.map((org, i) => (
            <motion.li
              key={org.name}
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Animated gradient border card */}
              <div className="relative p-[1px] rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 animate-spin-slow"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #ec4899, #a855f7, #6366f1, #ec4899)",
                    animationDuration: "4s",
                  }}
                />
                <div className="relative bg-[#0a0a0a] rounded-2xl px-10 py-8 flex items-center justify-center min-h-[120px] min-w-[200px]">
                  <SponsorImage
                    sponsor={org}
                    className="h-14 sm:h-16 w-auto max-w-[180px] group-hover:scale-110"
                    t={t}
                  />
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* ── Patrocinadores ── */}
      <section
        className="max-w-5xl mx-auto px-4 mb-24"
        aria-labelledby="sponsors-patrons-heading"
      >
        <motion.header
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.3em] text-purple-400/70 text-xs font-semibold mb-2">
            {t("sponsors.patronsLabel")}
          </p>
          <h2
            id="sponsors-patrons-heading"
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
          >
            {t("sponsors.patronsTitle")}
          </h2>
        </motion.header>

        <ul className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8" role="list">
          {sponsors.map((sp, i) => (
            <motion.li
              key={sp.name}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
            >
              <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl px-10 py-8 flex items-center justify-center min-h-[130px] min-w-[220px] hover:bg-white/[0.08] hover:border-purple-500/30 transition-all duration-300">
                <SponsorImage
                  sponsor={sp}
                  className="h-16 sm:h-20 w-auto max-w-[200px] group-hover:scale-105"
                  t={t}
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* ── Aliados – ribbon carousel ── */}
      <section
        className="px-4"
        aria-labelledby="sponsors-allied-heading"
      >
        <motion.header
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="sponsors-allied-heading"
            className="text-lg md:text-xl font-medium text-gray-400 tracking-wide"
          >
            {t("sponsors.alliedCommunitiesTitle")}
          </h2>
          <div
            className="mt-2 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
            aria-hidden="true"
          />
        </motion.header>

        {/* Fade edges */}
        <div className="relative overflow-hidden max-w-5xl mx-auto">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent"
            aria-hidden="true"
          />

          <div
            className="flex w-max animate-scroll hover:[animation-play-state:paused]"
            style={{ "--animation-duration": "20s" } as React.CSSProperties}
          >
            {[...communities, ...communities].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="flex-shrink-0 mx-10 flex items-center justify-center"
              >
                <SponsorImage
                  sponsor={c}
                  className="h-16 sm:h-20 w-auto max-w-[180px] opacity-80 group-hover:opacity-100 brightness-110 group-hover:brightness-125 transition-all duration-300"
                  t={t}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
