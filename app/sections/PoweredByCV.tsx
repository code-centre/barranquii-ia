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
          className='venture-card p-8 lg:p-12'
          style={{
            borderWidth: '2px',
            borderColor: isDefault ? 'rgba(255, 151, 239, 0.4)' : `${theme.principal}66`,
            background: isDefault
              ? 'linear-gradient(135deg, rgba(109, 14, 173, 0.05) 0%, rgba(255, 151, 239, 0.05) 100%)'
              : `linear-gradient(135deg, ${theme.principal}08 0%, ${theme.gradient.via}08 100%)`
          }}
        >
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            {/* Left Column: Logo + Description */}
            <div className='flex flex-col'>
              <div className='mb-6'>
                <Image
                  src="/images/sponsors/caribe-ventures.png"
                  alt="Caribe Ventures"
                  width={250}
                  height={80}
                  className="h-auto w-auto object-contain"
                />
              </div>
              <p className='text-white/80 text-base lg:text-lg leading-relaxed'>
                {t('poweredByCV.caribeDesc')}
              </p>
            </div>

            {/* Right Column: Program Description */}
            <div className='flex flex-col justify-center'>
              <h3 className='text-2xl lg:text-3xl font-bold text-white mb-4'>
                {t('poweredByCV.title')}
              </h3>
              <p className='text-white/70 text-base lg:text-lg mb-6 leading-relaxed'>
                {t('poweredByCV.para')}
              </p>
              <a
                href="https://caribeventures.com"
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
