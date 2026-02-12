"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from '@/app/i18n/useTranslation';

export default function AboutBarranquiIA() {
  const { t } = useTranslation();
  return (
    <section id="que-es" className="text-white relative overflow-hidden py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <header>
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {t('about.title')}
            </span>
          </h2>
          <p className="text-xl mb-12 mx-auto">
            {t('about.intro')}
          </p>
        </header>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 list-none">
          <motion.li
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-purple-500">
              <Image
                src="/FOTOSBARRANQUI-IA/verano.jpg"
                alt={t('about.altStep1')}
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start gap-4 w-full">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <p className="text-lg text-left">
                {t('about.step1')}
              </p>
            </div>
          </motion.li>

          <motion.li
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-pink-500">
              <Image
                src="/FOTOSBARRANQUI-IA/9.webp"
                alt={t('about.altStep2')}
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start gap-4 w-full">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <p className="text-lg text-left">
                {t('about.step2')}
              </p>
            </div>
          </motion.li>

          <motion.li
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-purple-500">
              <Image
                src="/ganadores/alumbra.jpg"
                alt={t('about.altStep3')}
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start gap-4 w-full">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <p className="text-lg text-left">
                {t('about.step3')}
              </p>
            </div>
          </motion.li>
        </ol>

        <motion.aside
          className="bg-purple-900/30 border-2 border-pink-500 rounded-xl p-6 md:p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-center">
            {t('about.caribeNote')}
          </p>
        </motion.aside>
      </div>
    </section>
  );
}