"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from '@/app/i18n/useTranslation';

export default function HowToLiveHackaton() {
  const { t } = useTranslation();
  return (
    <section id="experiencia" className="pb-16 text-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0 opacity-5" aria-hidden="true">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
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

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <header className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {t('howToLive.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-300">{t('howToLive.subtitle')}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Schedule Section */}
          <article className="space-y-8">
            {/* Friday */}
            <motion.section
              className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-4">{t('howToLive.friday')}</h3>
              <ul className="space-y-3" role="list">
                <li className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-gray-300">{t('howToLive.fridayChallenges')}</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-gray-300">{t('howToLive.fridayTeams')}</p>
                </li>
              </ul>
            </motion.section>

            {/* Saturday */}
            <motion.section
              className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-4">{t('howToLive.saturday')}</h3>
              <ul className="space-y-3" role="list">
                <li className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-gray-300">{t('howToLive.saturdayProject')}</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-gray-300">{t('howToLive.saturdayWorkshops')}</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-gray-300">{t('howToLive.saturdayMentors')}</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-gray-300">{t('howToLive.saturdayRecommendation')}</p>
                </li>
              </ul>
            </motion.section>

            {/* Sunday */}
            <motion.section
              className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-4">{t('howToLive.sunday')}</h3>
              <ul className="space-y-3" role="list">
                <li className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-gray-300">{t('howToLive.sundayPresent')}</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-gray-300">{t('howToLive.sundayAwards')}</p>
                </li>
              </ul>
            </motion.section>
          </article>

          {/* Video Section */}
          <motion.aside
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden border border-purple-500/30">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/rM5mmrb0bVk?start=2"
                title={t('howToLive.videoTitle')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="text-center">
              <p className="text-gray-300 mb-2">{t('howToLive.exploreEditions')}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/barranqui-ia/2025"
                  className="text-purple-400 hover:text-purple-300 font-medium underline underline-offset-2 transition-colors"
                >
                  {t('howToLive.barranqui2025')}
                </Link>
                <span className="text-gray-500">·</span>
                <Link
                  href="/barranqui-ia/2024"
                  className="text-purple-400 hover:text-purple-300 font-medium underline underline-offset-2 transition-colors"
                >
                  {t('howToLive.barranqui2024')}
                </Link>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}