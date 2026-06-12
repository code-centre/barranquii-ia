"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from '@/app/i18n/useTranslation';

type Stat = {
  value: string;
  labelKey: string;
};

const STATS: Stat[] = [
  { value: '300', labelKey: 'results2026.statParticipants' },
  { value: '70', labelKey: 'results2026.statProjects' },
  { value: '31', labelKey: 'results2026.statCities' },
  { value: '+40', labelKey: 'results2026.statMentors' },
  { value: '+$20M', labelKey: 'results2026.statPrizes' },
  { value: '6', labelKey: 'results2026.statWorkshops' },
];

type Line = {
  nameKey: string;
  count: number;
};

const LINES: Line[] = [
  { nameKey: 'results2026.lineFintech', count: 24 },
  { nameKey: 'results2026.lineHealth', count: 18 },
  { nameKey: 'results2026.lineYouth', count: 10 },
  { nameKey: 'results2026.lineSustainability', count: 9 },
  { nameKey: 'results2026.lineOpenInnovation', count: 9 },
];

const MAX_LINE_COUNT = Math.max(...LINES.map((line) => line.count));

type GrowthRow = {
  metricKey: string;
  y2024: string;
  y2025: string;
  y2026: string;
  delta: string;
};

const GROWTH_ROWS: GrowthRow[] = [
  { metricKey: 'results2026.growthParticipants', y2024: '100', y2025: '140', y2026: '300', delta: '+114%' },
  { metricKey: 'results2026.growthProjects', y2024: '21', y2025: '31', y2026: '70', delta: '+126%' },
  { metricKey: 'results2026.growthTotalPeople', y2024: '150', y2025: '200', y2026: '≈400', delta: '+100%' },
  { metricKey: 'results2026.growthPrizes', y2024: '—', y2025: '+10M', y2026: '+20M', delta: '+100%' },
  { metricKey: 'results2026.growthMentors', y2024: '≈20', y2025: '31', y2026: '+40', delta: '+29%' },
];

export default function Results2026() {
  const { t } = useTranslation();

  return (
    <section
      id="resultados"
      className="text-white relative overflow-hidden pb-16 scroll-mt-28"
      aria-labelledby="results-2026-title"
    >
      <div className="absolute inset-0 z-0 opacity-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <header className="text-center mb-8">
          <h2 id="results-2026-title" className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {t('results2026.title')}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto">
            {t('results2026.intro')}
          </p>
        </header>

        {/* Stat cards */}
        <ul
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 list-none mb-10"
          role="list"
        >
          {STATS.map((stat, index) => (
            <motion.li
              key={stat.labelKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <article className="h-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-pink-500/15 to-purple-600/15 backdrop-blur-sm rounded-xl px-3 py-6 border border-purple-500/40">
                <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-gray-200">{t(stat.labelKey)}</p>
              </article>
            </motion.li>
          ))}
        </ul>

        <motion.p
          className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('results2026.communityNote')}
        </motion.p>

        <motion.figure
          className="m-0 mb-14 rounded-xl overflow-hidden border border-purple-500/40"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full aspect-[21/9]">
            <Image
              src="/2026/galeria/5.jpg"
              alt={t('results2026.venueImageAlt')}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
          </div>
          <figcaption className="px-4 py-3 text-sm text-gray-300 bg-purple-950/40 border-t border-purple-500/30 text-center">
            {t('results2026.venueImageCaption')}
          </figcaption>
        </motion.figure>

        {/* Project distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-14 items-start">
          <section aria-labelledby="results-projects-heading">
            <h3 id="results-projects-heading" className="text-2xl font-bold mb-3 text-white">
              {t('results2026.projectsHeading')}
            </h3>
            <p className="text-gray-300 mb-6">{t('results2026.projectsIntro')}</p>
            <ul className="flex flex-col gap-4 list-none" role="list">
              {LINES.map((line, index) => (
                <li key={line.nameKey}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="font-semibold text-white">{t(line.nameKey)}</span>
                    <span className="text-pink-300 font-bold">{line.count}</span>
                  </div>
                  <div
                    className="h-3 w-full rounded-full bg-purple-950/60 overflow-hidden"
                    role="presentation"
                  >
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(line.count / MAX_LINE_COUNT) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: index * 0.08 }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-400 mt-5">{t('results2026.techTrends')}</p>
          </section>

          {/* Growth table */}
          <section aria-labelledby="results-growth-heading">
            <h3 id="results-growth-heading" className="text-2xl font-bold mb-3 text-white">
              {t('results2026.growthHeading')}
            </h3>
            <p className="text-gray-300 mb-6">{t('results2026.growthIntro')}</p>
            <div className="overflow-x-auto rounded-xl border border-purple-500/40">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-purple-950/50 text-gray-200">
                    <th scope="col" className="px-4 py-3 font-semibold">
                      {t('results2026.growthMetric')}
                    </th>
                    <th scope="col" className="px-3 py-3 font-semibold text-center">2024</th>
                    <th scope="col" className="px-3 py-3 font-semibold text-center">2025</th>
                    <th scope="col" className="px-3 py-3 font-semibold text-center text-pink-300">2026</th>
                    <th scope="col" className="px-3 py-3 font-semibold text-center">25 → 26</th>
                  </tr>
                </thead>
                <tbody>
                  {GROWTH_ROWS.map((row) => (
                    <tr
                      key={row.metricKey}
                      className="border-t border-purple-500/20 odd:bg-purple-950/20"
                    >
                      <th scope="row" className="px-4 py-3 font-medium text-white">
                        {t(row.metricKey)}
                      </th>
                      <td className="px-3 py-3 text-center text-gray-300">{row.y2024}</td>
                      <td className="px-3 py-3 text-center text-gray-300">{row.y2025}</td>
                      <td className="px-3 py-3 text-center font-bold text-pink-300">{row.y2026}</td>
                      <td className="px-3 py-3 text-center text-emerald-300 font-semibold">{row.delta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <motion.aside
          className="bg-purple-900/30 border-2 border-pink-500 rounded-xl p-6 md:p-8"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base md:text-lg text-center text-gray-100">
            {t('results2026.mediaNote')}
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
