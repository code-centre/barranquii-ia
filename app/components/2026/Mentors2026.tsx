"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTranslation } from "@/app/i18n/useTranslation";

const MENTOR_FILES: string[] = [
  "ADRIAN requena.jpg",
  "ANGEL ZAMBRANO.jpg",
  "Alejandro Ospina.jpg",
  "Andres Salcedo.jpg",
  "Betzabé SALAS.jpg",
  "Caio Carneloz.jpg",
  "Carlos orozco.jpg",
  "Cristian  Torres.jpg",
  "Danelly Castaño Zapata.jpg",
  "Diego García.jpg",
  "Diego Ramirez.jpg",
  "Eduardo Manrique.jpg",
  "Henry requena.jpg",
  "JESUS BARROS.jpg",
  "Jorge Aguilar.jpg",
  "Melissa Escobar.jpg",
  "Merlys Solorzano.jpg",
  "Nathalia GONZÁLEZ.jpg",
  "Paulo Estrada.jpg",
  "Santiago Carrillo.jpg",
  "Vanessa Aristizabal.jpg",
  "Victor Julio.jpg",
  "Winston Percybrooks.jpg",
  "ZULLY DE LA ROSA.jpg",
  "anuar harb.jpg",
  "felipe gonzalez.jpg",
  "natalia avendaño.jpg",
];

const prettifyName = (file: string): string =>
  file
    .replace(/\.jpg$/i, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/(^|\s)\S/g, (match) => match.toUpperCase());

const mentorImagePath = (file: string): string =>
  `/mentores-2026/${encodeURI(file)}`;

type Mentor = {
  file: string;
  name: string;
  src: string;
};

const MENTORS: Mentor[] = MENTOR_FILES.map((file) => ({
  file,
  name: prettifyName(file),
  src: mentorImagePath(file),
})).sort((a, b) => a.name.localeCompare(b.name, "es"));

export default function Mentors2026() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const closeModal = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, closeModal]);

  const openMentor = openIndex !== null ? MENTORS[openIndex] : null;

  return (
    <section
      id="mentores-2026"
      className="text-white relative overflow-hidden scroll-mt-28"
      aria-labelledby="mentors-2026-heading"
    >
      <div
        className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-500/15 rounded-full mix-blend-multiply filter blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-500/15 rounded-full mix-blend-multiply filter blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <header className="text-center mb-10">
          <p className="uppercase tracking-[0.28em] text-purple-300/80 text-[10px] sm:text-xs font-semibold mb-2">
            {t("mentors2026.label")}
          </p>
          <h2
            id="mentors-2026-heading"
            className="text-4xl md:text-5xl font-bold mb-3"
          >
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {t("mentors2026.title")}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            {t("mentors2026.subtitle")}
          </p>
        </header>

        <ul
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4"
          role="list"
        >
          {MENTORS.map((mentor, index) => (
            <motion.li
              key={mentor.file}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, delay: (index % 12) * 0.03 }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={t("mentors2026.openCard", { name: mentor.name })}
                className="group block w-full rounded-lg overflow-hidden border border-purple-500/30 bg-purple-950/20 hover:border-purple-400/80 hover:shadow-lg hover:shadow-purple-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all"
              >
                <figure className="m-0">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-900">
                    <Image
                      src={mentor.src}
                      alt={t("mentors2026.cardAlt", { name: mentor.name })}
                      fill
                      sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 16vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="px-2 py-1.5 text-[11px] sm:text-xs text-center text-gray-200 truncate border-t border-purple-500/20 bg-purple-950/30">
                    {mentor.name}
                  </figcaption>
                </figure>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {openMentor && (
          <motion.div
            key="mentor-modal"
            role="dialog"
            aria-modal="true"
            aria-label={t("mentors2026.modalLabel")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
            onClick={closeModal}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label={t("mentors2026.closeModal")}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              <X size={22} aria-hidden="true" />
            </button>

            <motion.figure
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative m-0 max-h-[92vh] max-w-[min(90vw,560px)] w-full"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative w-full" style={{ aspectRatio: "4 / 5" }}>
                <Image
                  src={openMentor.src}
                  alt={t("mentors2026.cardAlt", { name: openMentor.name })}
                  fill
                  sizes="(max-width: 640px) 90vw, 560px"
                  className="object-contain rounded-xl shadow-2xl shadow-purple-900/40"
                  priority
                />
              </div>
              <figcaption className="sr-only">{openMentor.name}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
