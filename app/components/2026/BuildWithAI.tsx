"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@/app/i18n/useTranslation";

const WORKSHOP_SLOTS = 6;

export default function BuildWithAI() {
  const { t } = useTranslation();

  return (
    <section
      id="build-with-ai"
      className="pb-16 text-white relative overflow-hidden"
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
          <h2 id="build-with-ai-heading" className="text-4xl md:text-5xl font-bold mb-3">
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
            <div className="flex flex-wrap items-center gap-3 gap-y-2 pt-1">
              <span className="text-sm text-purple-200/90">{t("buildWithAI.poweredBy")}</span>
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

        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            {t("buildWithAI.workshopsHeading")}
          </h3>
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            role="list"
          >
            {Array.from({ length: WORKSHOP_SLOTS }, (_, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div
                  className="h-full min-h-[100px] rounded-xl border-2 border-dashed border-purple-500/50 bg-purple-950/20 px-4 py-5 flex flex-col items-center justify-center text-center animate-pulse"
                  style={{ animationDuration: "3s" }}
                >
                  <span className="text-xs uppercase tracking-wider text-purple-400 mb-1">
                    {t("buildWithAI.workshopSlotLabel", { num: String(i + 1) })}
                  </span>
                  <span className="text-lg font-medium text-gray-400">
                    {t("buildWithAI.workshopTba")}
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
