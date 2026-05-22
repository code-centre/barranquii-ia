"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from '@/app/i18n/useTranslation';

type LineSponsor = {
  name: string;
  logo: string;
  alt: string;
  href?: string;
};

type RevealedLine = {
  id: string;
  status: 'revealed';
  title: string;
  description: string;
  sponsors?: LineSponsor[];
};

type IncognitoLine = {
  id: string;
  status: 'coming';
};

type ThematicLine = RevealedLine | IncognitoLine;

export default function ThematicLines() {
  const { t } = useTranslation();

  const lines: ThematicLine[] = [
    {
      id: 'fintech',
      status: 'revealed',
      title: t('thematicLines.fintechTitle'),
      description: t('thematicLines.fintechDescription'),
      sponsors: [
        {
          name: t('thematicLines.fintechSponsor'),
          logo: '/logos/serfinanza.png',
          alt: t('thematicLines.fintechSponsorAlt'),
          href: 'https://bancoserfinanza.com/',
        },
      ],
    },
    {
      id: 'health',
      status: 'revealed',
      title: t('thematicLines.healthTitle'),
      description: t('thematicLines.healthDescription'),
      sponsors: [
        {
          name: t('thematicLines.healthSponsor'),
          logo: '/logos/incapacidades.png',
          alt: t('thematicLines.healthSponsorAlt'),
          href: 'https://incapacidades.ai/',
        },
      ],
    },
    {
      id: 'sustainability',
      status: 'revealed',
      title: t('thematicLines.sustainabilityTitle'),
      description: t('thematicLines.sustainabilityDescription'),
      sponsors: [
        {
          name: t('thematicLines.sustainabilitySponsor'),
          logo: '/logos/ultracem.webp',
          alt: t('thematicLines.sustainabilitySponsorAlt'),
          href: 'https://ultracem.co/',
        },
      ],
    },
    {
      id: 'youth-income',
      status: 'revealed',
      title: t('thematicLines.youthIncomeTitle'),
      description: t('thematicLines.youthIncomeDescription'),
      sponsors: [
        {
          name: t('thematicLines.youthSponsorMacondo'),
          logo: '/logos/macondo-lab.png',
          alt: t('thematicLines.youthSponsorMacondoAlt'),
          href: 'https://macondolab.com/',
        },
        {
          name: t('thematicLines.youthSponsorGoyn'),
          logo: '/logos/goyn.png',
          alt: t('thematicLines.youthSponsorGoynAlt'),
          href: 'https://goynbarranquilla.com/',
        },
        {
          name: t('thematicLines.youthSponsorAcopi'),
          logo: '/logos/acopi.png',
          alt: t('thematicLines.youthSponsorAcopiAlt'),
          href: 'https://acopi.org.co/',
        },
      ],
    },
  ];

  return (
    <section
      id="lineas-tematicas"
      className="text-white relative overflow-hidden pt-4 pb-16 scroll-mt-28"
      aria-labelledby="thematic-lines-title"
    >
      <div className="absolute inset-0 z-0 opacity-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <header className="text-center mb-8">
          <h2
            id="thematic-lines-title"
            className="text-4xl md:text-5xl font-bold"
          >
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {t('thematicLines.title')}
            </span>
          </h2>
        </header>

        <motion.p
          className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('thematicLines.intro')}
        </motion.p>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none mb-10"
          role="list"
        >
          {lines.map((line, index) => (
            <motion.li
              key={line.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="h-full"
            >
              {line.status === 'revealed' ? (
                <article className="h-full flex flex-col bg-gradient-to-br from-pink-500/15 to-purple-600/15 backdrop-blur-sm rounded-xl p-6 border-2 border-pink-500/60 shadow-[0_0_25px_rgba(255,151,239,0.15)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="w-2 h-2 rounded-full bg-[#FF97EF] animate-pulse"
                      aria-hidden="true"
                    />
                    <span className="text-xs uppercase tracking-widest text-[#FF97EF] font-semibold">
                      {t('thematicLines.revealedTag')}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {line.title}
                  </h3>
                  <p className={`text-gray-200 text-sm leading-relaxed flex-grow ${line.sponsors?.length ? 'mb-6' : ''}`}>
                    {line.description}
                  </p>

                  {line.sponsors && line.sponsors.length > 0 && (
                    <footer className="mt-auto border-t border-pink-500/30 pt-4">
                      <p className="text-[10px] uppercase tracking-widest text-pink-300/80 mb-3">
                        {t('thematicLines.poweredBy')}
                      </p>
                      <ul
                        className={`grid gap-2 list-none ${line.sponsors.length > 1 ? 'grid-cols-1' : ''}`}
                        role="list"
                      >
                        {line.sponsors.map((sponsor) => (
                          <li key={sponsor.name}>
                            {sponsor.href ? (
                              <a
                                href={sponsor.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={sponsor.name}
                                className="flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-lg p-2 transition-colors"
                              >
                                <Image
                                  src={sponsor.logo}
                                  alt={sponsor.alt}
                                  width={200}
                                  height={80}
                                  className={`w-auto object-contain ${line.sponsors!.length > 1 ? 'h-9' : 'h-12'}`}
                                />
                              </a>
                            ) : (
                              <div className="flex items-center justify-center bg-white/5 rounded-lg p-2">
                                <Image
                                  src={sponsor.logo}
                                  alt={sponsor.alt}
                                  width={200}
                                  height={80}
                                  className={`w-auto object-contain ${line.sponsors!.length > 1 ? 'h-9' : 'h-12'}`}
                                />
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </footer>
                  )}
                </article>
              ) : (
                <article className="h-full flex flex-col bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="w-2 h-2 rounded-full bg-purple-400"
                      aria-hidden="true"
                    />
                    <span className="text-xs uppercase tracking-widest text-purple-300 font-semibold">
                      {t('thematicLines.comingTag')}
                    </span>
                  </div>

                  <div className="flex-grow flex flex-col items-center justify-center text-center py-6">
                    <span
                      aria-hidden="true"
                      className="text-5xl font-bold text-purple-300/70 mb-3"
                    >
                      ?
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {t('thematicLines.incognitoTitle')}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {t('thematicLines.incognitoDescription')}
                    </p>
                  </div>
                </article>
              )}
            </motion.li>
          ))}
        </ul>

        <motion.aside
          className="bg-purple-900/30 border-2 border-pink-500 rounded-xl p-5 md:p-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm md:text-base text-center text-gray-100">
            {t('thematicLines.extraPrizeNote')}
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
