"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/app/i18n/useTranslation";

export default function VideoSection2025() {
  const { t } = useTranslation();
  return (
    <section id="video" className="pb-16 text-white relative overflow-hidden">
      {/* Background grid pattern */}
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

      {/* Background glow elements */}
      <div
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <header className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {t('video2025.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            {t('video2025.subtitle')}
          </p>
        </header>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/N69_eNtJ9HQ"
              title="Barranqui-IA 2025 - Hackatón de IA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
