"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from '@/app/i18n/useTranslation';

export default function SponsorsSection2026() {
  const { t } = useTranslation();
  const mainSponsors = [
    { name: 'FCA', logo: '/images/sponsors/fca.webp', link: 'https://codigoabierto.tech' },
    { name: 'Tech Centre', logo: '/images/sponsors/tech-centre.png', link: 'https://techcentre.co' },
    { name: 'Caribe Ventures', logo: '/images/sponsors/caribe-ventures.png', link: 'https://caribe.ventures' },
    { name: 'Ciudad Inmersiva', logo: '/images/sponsors/ciudad-inmersiva.png', link: 'https://ciudadinmersiva.com' },
  ];

  return (
    <section className="py-16 text-white relative overflow-hidden">
      {/* Background subtle glow */}
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

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {t('sponsors.title')}
            </span>
          </h2>
        </header>

        {/* Main Sponsors */}
        <article>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center mb-12" role="list">
            {mainSponsors.map((sponsor, index) => (
              <motion.li
                key={sponsor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center p-4 group"
                  aria-label={t('sponsors.visitSite', { name: sponsor.name })}
                >
                  <Image
                    src={sponsor.logo}
                    alt={t('sponsors.logoOf', { name: sponsor.name })}
                    width={150}
                    height={80}
                    className="object-contain h-20 grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}