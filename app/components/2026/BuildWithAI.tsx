"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { useTranslation } from "@/app/i18n/useTranslation";

type Workshop = {
  src: string;
  title: string;
  speaker: string;
  role: string;
  time: string;
};

const WORKSHOPS_2026: Workshop[] = [
  {
    src: "/talleres-2026/2.jpg",
    title:
      "Crea una app con IA desde cero y sin código: login, base de datos y backend en vivo",
    speaker: "Marian Villa",
    role: "DevRel en Interledger · Cofundadora de PionerasDev · GDE Web",
    time: "10:00 a. m.",
  },
  {
    src: "/talleres-2026/3.jpg",
    title:
      "Visión Agéntica: Construcción de Prototipos de Visión Artificial Full-Stack con OpenCode y MediaPipe",
    speaker: "Winston Percybrooks",
    role: "CTO de Clevertwin · PhD Georgia Institute of Technology",
    time: "11:00 a. m.",
  },
  {
    src: "/talleres-2026/4.jpg",
    title:
      "Del Vibe Coding al Desarrollo Orientado por Especificaciones: cómo construir software de calidad con IA",
    speaker: "Santiago Carrillo",
    role: "CEO ADA School · Google Developer Expert",
    time: "2:00 p. m.",
  },
  {
    src: "/talleres-2026/5.jpg",
    title:
      "Web MCP: enséñale a la IA el contexto de tu app y depura como nunca",
    speaker: "Vanessa Aristizabal",
    role: "Senior Frontend Engineer · React, Next.js, Angular",
    time: "3:00 p. m.",
  },
  {
    src: "/talleres-2026/6.jpg",
    title: "Skills-Driven Agents: Construye agentes de IA autónomos",
    speaker: "Victor Julio",
    role: "CTO de Guama · Ex Nubank · Agentes de IA",
    time: "4:00 p. m.",
  },
  {
    src: "/talleres-2026/7.jpg",
    title:
      "IA Híbrida en Acción: Potenciando Agentes de Gemini con Algoritmos de Machine Learning",
    speaker: "Diego Ramirez",
    role: "Director Financiero Naowee",
    time: "5:00 p. m.",
  },
];

export default function BuildWithAI() {
  const { t } = useTranslation();

  return (
    <section
      id="build-with-ai"
      className="pb-16 text-white relative overflow-hidden scroll-mt-28"
      aria-labelledby="build-with-ai-heading"
    >
      <div className="absolute inset-0 z-0 opacity-5" aria-hidden="true">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>
      <div
        className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <header className="text-center mb-12">
          <h2
            id="build-with-ai-heading"
            className="text-4xl md:text-5xl font-bold mb-3"
          >
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {t("buildWithAI.title")}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t("buildWithAI.subtitle")}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-14">
          <motion.figure
            className="relative w-full rounded-xl overflow-hidden border border-purple-500/30 bg-gray-900/40 shadow-lg shadow-purple-900/20 m-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/build-with-ai.png"
                alt={t("buildWithAI.imageAlt")}
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </motion.figure>

          <motion.article
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg font-semibold text-cyan-300 border border-cyan-500/40 rounded-lg px-4 py-3 bg-cyan-950/30 text-center lg:text-left">
              {t("buildWithAI.dateTime")}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t("buildWithAI.description")}
            </p>
            <ul className="flex flex-col gap-2 text-sm text-gray-200" role="list">
              <li className="flex items-center gap-2">
                <MapPin
                  size={16}
                  className="text-cyan-300 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>{t("buildWithAI.venue")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Calendar
                  size={16}
                  className="text-cyan-300 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>{t("buildWithAI.entry")}</span>
              </li>
            </ul>
            <div className="flex flex-wrap items-center gap-3 gap-y-2 pt-1">
              <span className="text-sm text-purple-200/90">
                {t("buildWithAI.poweredBy")}
              </span>
              <Image
                src="/logos/google.png"
                alt={t("buildWithAI.googleLogoAlt")}
                width={90}
                height={30}
                className="h-7 w-auto object-contain object-left opacity-95"
              />
            </div>
          </motion.article>
        </div>

        <section aria-labelledby="workshops-schedule-heading">
          <h3
            id="workshops-schedule-heading"
            className="text-2xl font-bold text-center mb-8 text-white"
          >
            {t("buildWithAI.workshopsHeading")}
          </h3>
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
          >
            {WORKSHOPS_2026.map((workshop, i) => (
              <motion.li
                key={workshop.src}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <article className="group h-full rounded-xl border border-purple-500/40 bg-purple-950/20 overflow-hidden hover:border-purple-400/80 hover:shadow-lg hover:shadow-purple-900/30 transition-all">
                  <figure className="m-0 flex flex-col h-full">
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-900">
                      <Image
                        src={workshop.src}
                        alt={`Taller "${workshop.title}" con ${workshop.speaker} (${workshop.role}). Sábado 23 de mayo a las ${workshop.time}.`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <figcaption className="px-4 py-3 flex items-center justify-between gap-2 text-sm border-t border-purple-500/30 bg-purple-950/40">
                      <span
                        className="font-semibold text-white truncate"
                        title={workshop.speaker}
                      >
                        {workshop.speaker}
                      </span>
                      <time className="text-cyan-300 whitespace-nowrap font-medium">
                        {workshop.time}
                      </time>
                    </figcaption>
                  </figure>
                </article>
              </motion.li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
