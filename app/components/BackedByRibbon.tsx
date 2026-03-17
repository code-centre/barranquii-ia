'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslation } from '@/app/i18n/useTranslation'

const BACKERS = [
  { name: 'FCA', logo: '/images/sponsors/fca.webp', link: 'https://codigoabierto.tech' },
  { name: 'Tech Centre', logo: '/logos/tech-centre-dark.png', link: 'https://techcentre.co' },
  { name: 'Shelv', logo: '/logos/shelv.png', link: 'https://shelv.ai' },
  { name: 'Synergy', logo: '/logos/logo-synergy-fondo.png', link: 'https://www.synergytech.com.co', size: 'xl' },
  { name: 'Ciudad Inmersiva', logo: '/logos/ciudad-inmersiva.png', link: 'https://ciudadinmersiva.com', invert: true },
]

export default function BackedByRibbon() {
  const { t } = useTranslation()

  return (
    <section
      className="my-12 md:my-16 py-8 md:py-10 border-y border-white/10"
      aria-label={t('backedByRibbon.ariaLabel')}
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-10 w-full flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
        <span className="text-white/70 text-sm md:text-base font-medium whitespace-nowrap">
          {t('backedByRibbon.label')}
        </span>
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
          {BACKERS.map((backer) => (
            <a
              key={backer.name}
              href={backer.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
              aria-label={t('sponsors.visitSite', { name: backer.name })}
            >
              <Image
                src={backer.logo}
                alt={t('sponsors.logoOf', { name: backer.name })}
                width={backer.size === 'xl' ? 320 : backer.size === 'lg' ? 240 : 120}
                height={backer.size === 'xl' ? 128 : backer.size === 'lg' ? 96 : 48}
                className={`object-contain w-auto ${backer.size === 'xl' ? 'h-28 md:h-32' : backer.size === 'lg' ? 'h-20 md:h-24' : 'h-10 md:h-12'} ${backer.invert ? 'invert' : ''}`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
