'use client'
import React from 'react'
import ScrollAnimation from '../components/2026/ScrollAnimation'
import Link from 'next/link'
import Image from 'next/image'
import { THEME_LANDINGS } from '../utils/theme'
import { useTranslation } from '@/app/i18n/useTranslation'
import { ArrowRight } from 'lucide-react'

interface Props {
  landing?: string
}

const PAST_EVENT_IMAGES = [
  '/FOTOSBARRANQUI-IA/1.webp',
  '/FOTOSBARRANQUI-IA/3.webp',
  '/FOTOSBARRANQUI-IA/6.webp',
  '/FOTOSBARRANQUI-IA/8.webp',
]

export default function Phases({ landing = 'default' }: Props) {
  const { t } = useTranslation()
  const theme = THEME_LANDINGS[landing]
  const isDefault = landing === 'default'

  return (
    <section
      id="phases"
      aria-label={t('phases.titlePrefix') + t('phases.titleBrand') + t('phases.titleSuffix')}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background image with black tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/FOTOSBARRANQUI-IA/2.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-10 w-full">
        {/* Main CTA Card */}
        <ScrollAnimation delay={0.1} direction="up">
          <div
            className="venture-card p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8"
            style={{
              backgroundColor: isDefault ? 'rgba(28, 31, 46, 0.95)' : 'rgba(0, 0, 0, 0.85)',
              border: `2px solid ${isDefault ? 'rgba(255, 151, 239, 0.5)' : `${theme.principal}50`}`,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div className='flex-1'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3'>
                {t('phases.titlePrefix')}
                <span
                  className='bg-clip-text text-transparent'
                  style={{
                    background: `linear-gradient(to right, ${theme.gradient.from}, ${theme.gradient.via}, ${theme.gradient.to})`,
                    WebkitBackgroundClip: 'text',
                    backgroundSize: '200% 100%',
                    animation: isDefault ? 'gradient-shift 6s ease infinite' : undefined
                  }}
                >
                  {t('phases.titleBrand')}
                </span>
                {t('phases.titleSuffix')}
              </h2>
            <p className='text-lg text-white/80 mb-6'>
              {t('phases.subtitle')}
            </p>
            <Link
              href="/barranqui-ia/2026"
              className='btn-primary inline-flex items-center justify-center text-base px-8 py-4 font-semibold'
              style={{
                backgroundColor: isDefault ? '#FFFFFF' : theme.accent || theme.principal,
                color: isDefault ? '#000000' : 'white'
              }}
            >
              {t('phases.cta')}
            </Link>
            </div>
            <div className='flex-1 w-full lg:max-w-md'>
              <div className='grid grid-cols-2 gap-2'>
                {PAST_EVENT_IMAGES.map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={`Barranqui-IA ${i + 1}`}
                      fill
                      className='object-cover'
                      sizes="(max-width: 768px) 50vw, 200px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Reto Card */}
        <ScrollAnimation delay={0.15} direction="up">
          <Link
            href="/propon-un-reto"
            className="venture-card p-6 lg:p-8 mt-6 w-full text-left flex items-center justify-between gap-4 hover:border-[rgba(255,151,239,0.6)] transition-colors group"
            style={{
              backgroundColor: isDefault ? 'rgba(28, 31, 46, 0.95)' : 'rgba(0, 0, 0, 0.85)',
              border: `2px solid ${isDefault ? 'rgba(255, 151, 239, 0.5)' : `${theme.principal}50`}`,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            }}
          >
            <span className="text-lg md:text-xl font-semibold text-white group-hover:text-white/95">
              {t('phases.retoCard')}
            </span>
            <ArrowRight
              size={24}
              className="flex-shrink-0"
              style={{ color: isDefault ? '#FF97EF' : theme.principal }}
            />
          </Link>
        </ScrollAnimation>

      </div>
    </section>
  )
}
