'use client'
import React from 'react'
import ScrollAnimation from '../components/2026/ScrollAnimation'
import Image from 'next/image'
import { THEME_LANDINGS } from '../utils/theme'
import { useTranslation } from '@/app/i18n/useTranslation'

interface Props {
  landing?: string
}

export default function PoweredByCV({ landing = 'default' }: Props) {
  const { t } = useTranslation()
  const theme = THEME_LANDINGS[landing]
  const isDefault = landing === 'default'

  return (
    <section className='py-20 md:py-28'>
      <ScrollAnimation delay={0.1}>
        <div
          className="venture-card p-8 lg:p-12"
          style={{
            borderWidth: '2px',
            borderColor: isDefault ? 'rgba(255, 151, 239, 0.4)' : `${theme.principal}66`,
            background: isDefault
              ? 'linear-gradient(135deg, rgba(148, 163, 184, 0.18) 0%, rgba(100, 116, 139, 0.22) 100%)'
              : `linear-gradient(135deg, ${theme.principal}08 0%, ${theme.gradient.via}08 100%)`
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column: Tech Caribe image */}
            <div className="relative aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/techcaribe.jpg"
                alt="Tech Caribe Fest"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right Column: Card content */}
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <div className="mb-6">
                <Image
                  src="/logos/costa-digital.png"
                  alt="Costa Digital"
                  width={180}
                  height={58}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {t('poweredByCV.title')}
              </h3>
              <p className='text-white/70 text-base lg:text-lg mb-6 leading-relaxed'>
                {t('poweredByCV.para')}
              </p>
              <a
                href="https://www.costadigital.org/"
                target="_blank"
                rel="noopener noreferrer"
                className='btn-secondary inline-block text-center w-fit'
                style={{
                  borderColor: isDefault ? '#FF97EF' : theme.principal,
                  color: isDefault ? '#FF97EF' : theme.principal
                }}
              >
                {t('poweredByCV.cta')}
              </a>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}
