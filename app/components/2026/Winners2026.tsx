"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from '@/app/i18n/useTranslation';

type PodiumWinner = {
  name: string;
  placeKey: string;
  descriptionKey: string;
  highlight: boolean;
};

const PODIUM: PodiumWinner[] = [
  {
    name: 'Medora',
    placeKey: 'winners2026.firstPlace',
    descriptionKey: 'winners2026.medoraDescription',
    highlight: true,
  },
  {
    name: 'EcoHackers',
    placeKey: 'winners2026.secondPlace',
    descriptionKey: 'winners2026.ecohackersDescription',
    highlight: false,
  },
  {
    name: 'Signara',
    placeKey: 'winners2026.thirdPlace',
    descriptionKey: 'winners2026.signaraDescription',
    highlight: false,
  },
];

type LineWinner = {
  name: string;
  lineKey: string;
  descriptionKey: string;
  sponsors: { logo: string; alt: string }[];
};

const LINE_WINNERS: LineWinner[] = [
  {
    name: 'Dockers',
    lineKey: 'winners2026.lineFintech',
    descriptionKey: 'winners2026.dockersDescription',
    sponsors: [{ logo: '/logos/serfinanza.png', alt: 'Banco Serfinanza' }],
  },
  {
    name: 'Sigmoides',
    lineKey: 'winners2026.lineHealth',
    descriptionKey: 'winners2026.sigmoidesDescription',
    sponsors: [{ logo: '/logos/incapacidades.png', alt: 'Incapacidades.ai' }],
  },
  {
    name: 'mixnoro',
    lineKey: 'winners2026.lineSustainability',
    descriptionKey: 'winners2026.mixnoroDescription',
    sponsors: [{ logo: '/logos/ultracem.webp', alt: 'Ultracem' }],
  },
  {
    name: 'Salto AI',
    lineKey: 'winners2026.lineYouth',
    descriptionKey: 'winners2026.saltoDescription',
    sponsors: [
      { logo: '/logos/macondo-lab.png', alt: 'MacondoLab' },
      { logo: '/logos/goyn.png', alt: 'GOYN Barranquilla' },
      { logo: '/logos/acopi.png', alt: 'ACOPI' },
    ],
  },
];

const JURY: { name: string; role: string }[] = [
  { name: 'Alexandra Mendoza', role: 'CEO de LIQUITECH · Presidenta de la junta de Colombia Fintech' },
  { name: 'Jorge Hernán Nieto Botero', role: 'CEO de Expedit Capital · LatAm Leader de Founder Institute' },
  { name: 'Luis Iriarte', role: 'Alcaldía de Barranquilla' },
  { name: 'Juan Tobos', role: 'Data e IA · Banco Serfinanza' },
  { name: 'Pedro Antonio Torres', role: 'Ultracem' },
  { name: 'Luis Fuenmayor', role: 'GOYN — Aspen Institute' },
  { name: 'Jorge Castilla', role: 'Head of Engineering en Solum Health (YC)' },
];

export default function Winners2026() {
  const { t } = useTranslation();

  return (
    <section
      id="ganadores"
      className="text-white relative overflow-hidden pb-16 scroll-mt-28"
      aria-labelledby="winners-2026-title"
    >
      <div className="absolute inset-0 z-0 opacity-10" aria-hidden="true">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <header className="text-center mb-12">
          <h2 id="winners-2026-title" className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {t('winners2026.title')}
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t('winners2026.subtitle')}
          </p>
        </header>

        {/* Podium */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none mb-12" role="list">
          {PODIUM.map((winner, index) => (
            <motion.li
              key={winner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <article
                className={`h-full flex flex-col rounded-xl p-6 backdrop-blur-sm ${
                  winner.highlight
                    ? 'bg-gradient-to-br from-pink-500/25 to-purple-600/25 border-2 border-pink-500 shadow-[0_0_30px_rgba(255,151,239,0.25)]'
                    : 'bg-purple-900/20 border border-purple-500/40'
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-widest font-semibold mb-3 ${
                    winner.highlight ? 'text-[#FF97EF]' : 'text-purple-300'
                  }`}
                >
                  {t(winner.placeKey)}
                </p>
                <h3 className="text-3xl font-bold text-white mb-3">{winner.name}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {t(winner.descriptionKey)}
                </p>
              </article>
            </motion.li>
          ))}
        </ol>

        {/* Award ceremony photo */}
        <motion.figure
          className="m-0 mb-14 rounded-xl overflow-hidden border border-purple-500/40"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/2026/galeria/15.jpg"
              alt={t('winners2026.ceremonyImageAlt')}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
          </div>
          <figcaption className="px-4 py-3 text-sm text-gray-300 bg-purple-950/40 border-t border-purple-500/30 text-center">
            {t('winners2026.ceremonyImageCaption')}
          </figcaption>
        </motion.figure>

        {/* Thematic line winners */}
        <section aria-labelledby="line-winners-heading" className="mb-14">
          <h3
            id="line-winners-heading"
            className="text-2xl font-bold text-center mb-3 text-white"
          >
            {t('winners2026.linesTitle')}
          </h3>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-8">
            {t('winners2026.linesIntro')}
          </p>
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none"
            role="list"
          >
            {LINE_WINNERS.map((winner, index) => (
              <motion.li
                key={winner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="h-full"
              >
                <article className="h-full flex flex-col bg-gradient-to-br from-pink-500/15 to-purple-600/15 backdrop-blur-sm rounded-xl p-6 border border-pink-500/50">
                  <p className="text-xs uppercase tracking-widest text-[#FF97EF] font-semibold mb-3">
                    {t(winner.lineKey)}
                  </p>
                  <h4 className="text-xl font-bold text-white mb-3">{winner.name}</h4>
                  <p className="text-gray-200 text-sm leading-relaxed flex-grow mb-5">
                    {t(winner.descriptionKey)}
                  </p>
                  <footer className="mt-auto border-t border-pink-500/30 pt-4">
                    <p className="text-[10px] uppercase tracking-widest text-pink-300/80 mb-3">
                      {t('winners2026.prizeBy')}
                    </p>
                    <ul className="flex flex-col gap-2 list-none" role="list">
                      {winner.sponsors.map((sponsor) => (
                        <li
                          key={sponsor.alt}
                          className="flex items-center justify-center bg-white/5 rounded-lg p-2"
                        >
                          <Image
                            src={sponsor.logo}
                            alt={sponsor.alt}
                            width={200}
                            height={80}
                            className={`w-auto object-contain ${winner.sponsors.length > 1 ? 'h-8' : 'h-11'}`}
                          />
                        </li>
                      ))}
                    </ul>
                  </footer>
                </article>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Jury */}
        <motion.section
          aria-labelledby="jury-heading"
          className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-purple-500/40"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 id="jury-heading" className="text-2xl font-bold text-center mb-3 text-white">
            {t('winners2026.juryTitle')}
          </h3>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-6">
            {t('winners2026.juryIntro')}
          </p>
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 list-none"
            role="list"
          >
            {JURY.map((member) => (
              <li key={member.name} className="text-center sm:text-left">
                <p className="font-semibold text-white">{member.name}</p>
                <p className="text-sm text-gray-400">{member.role}</p>
              </li>
            ))}
          </ul>
        </motion.section>
      </div>
    </section>
  );
}
