'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslation } from '@/app/i18n/useTranslation'

const BACKERS = [
  { name: 'FCA', logo: '/images/sponsors/fca.webp', link: 'https://codigoabierto.tech' },
  { name: 'Tech Centre', logo: '/logos/tech-centre-dark.png', link: 'https://techcentre.co' },
  { name: 'Shelv', logo: '/logos/shelv.png', link: 'https://shelv.ai' },
  { name: 'Synergy', logo: '/logos/logo-synergy-fondo.png', link: 'https://www.synergytech.com.co' },
  { name: 'Ciudad Inmersiva', logo: '/logos/ciudad-inmersiva.png', link: 'https://ciudadinmersiva.com', invert: true },
]

function LogoItem({
  backer,
  t,
}: {
  backer: (typeof BACKERS)[0]
  t: (key: string, opts?: { name: string }) => string
}) {
  return (
    <a
      href={backer.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity flex-shrink-0 px-6 md:px-8"
      aria-label={t('sponsors.visitSite', { name: backer.name })}
    >
      <Image
        src={backer.logo}
        alt={t('sponsors.logoOf', { name: backer.name })}
        width={120}
        height={48}
        className={`object-contain w-auto h-10 md:h-12 ${backer.invert ? 'invert' : ''}`}
      />
    </a>
  )
}

export default function BackedByRibbon() {
  const { t } = useTranslation()

  return (
    <section
      className="my-12 md:my-16 py-8 md:py-10 border-y border-white/10 overflow-hidden"
      aria-label={t('backedByRibbon.ariaLabel')}
    >
      <div className="flex flex-col gap-6 w-full">
        <div className="flex justify-center">
          <span className="text-white/70 text-sm md:text-base font-medium whitespace-nowrap">
            {t('backedByRibbon.label')}
          </span>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-ribbon-scroll">
            {[...BACKERS, ...BACKERS, ...BACKERS, ...BACKERS].map((backer, i) => (
              <LogoItem key={`${backer.name}-${i}`} backer={backer} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
