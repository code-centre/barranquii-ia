"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@/app/i18n/useTranslation";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Cubo+de+Cristal+Plaza+de+la+Paz+Barranquilla+Colombia";

export default function Location2026() {
  const { t } = useTranslation();

  return (
    <section
      id="lugar"
      className="pb-16 text-white relative overflow-hidden"
      aria-labelledby="lugar-heading"
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
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <header className="text-center mb-12">
          <h2 id="lugar-heading" className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {t("location2026.title")}
            </span>
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.figure
            className="relative w-full min-h-[240px] aspect-[4/3] rounded-xl overflow-hidden border border-purple-500/30 bg-black/40"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/mapa.png"
              alt={t("location2026.mapAlt")}
              fill
              className="object-contain p-4"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
          </motion.figure>

          <motion.article
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <figure className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-purple-500/30 shadow-lg shadow-purple-900/20">
              <Image
                src="/cubo.jpg"
                alt={t("location2026.venueImageAlt")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </figure>
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-300">
                {t("location2026.venueName")}
              </h3>
              <address className="not-italic text-lg text-gray-300 leading-relaxed">
                {t("location2026.address")}
              </address>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white transition-all duration-300 w-fit"
              >
                {t("location2026.mapsCta")}
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
