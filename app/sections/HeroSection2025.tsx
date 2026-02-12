"use client";

import React from 'react';
import { useTranslation } from '@/app/i18n/useTranslation';

interface HeroSection2025Props {
  landing: string;
}

export default function HeroSection2025({ landing }: HeroSection2025Props) {
  const { t } = useTranslation();
  return (
    <header className="relative py-32 min-h-[600px] md:min-h-[700px]" id="hero">
      {/* Background abstract shapes */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute top-0 left-15 w-96 h-96 bg-purple-400/40 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400/40 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDuration: '16s' }}
        />
      </div>

      {/* Main Content */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4">
        <p className="text-lg text-center mb-4" style={{ fontFamily: 'var(--font-poppinss)' }}>
          {t('hero2025.edition')}
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-center mb-6 relative" style={{ minHeight: '120px' }}>
          <span className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent bg-[length:300%_auto] animate-gradient-shift drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            {t('hero2025.title')}
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer pointer-events-none">
            {t('hero2025.title')}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white text-center mb-12 max-w-3xl" style={{ fontFamily: 'var(--font-poppinss)' }}>
          {t('hero2025.subtitle')}
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <a
            href="#galeria"
            className="px-8 py-3 border-2 border-purple-600 hover:border-purple-500 hover:bg-purple-600/10 text-white rounded-lg font-semibold transition-all duration-300 inline-block text-center"
            style={{ fontFamily: 'var(--font-poppinss)' }}
            aria-label={t('hero2025.viewGallery')}
          >
            {t('hero2025.viewGallery')}
          </a>
          <a
            href="#resultados"
            className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold transition-colors inline-block text-center"
            style={{ fontFamily: 'var(--font-poppinss)' }}
            aria-label={t('hero2025.viewResults')}
          >
            {t('hero2025.viewResults')}
          </a>
        </div>
      </section>
    </header>
  );
}
