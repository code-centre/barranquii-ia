'use client'
import React from 'react'
import Link from 'next/link'
import ScrollAnimation from '../components/2026/ScrollAnimation'
import { Laptop, Rocket, Building2, ArrowRight } from 'lucide-react'
import { THEME_LANDINGS } from '../utils/theme'
import { useTranslation } from '@/app/i18n/useTranslation'

interface Props {
  landing?: string
}

const HACKATHON_URL = '/barranqui-ia/2026'

const audienceConfig = [
  { id: 'talento', icon: Laptop, titleKey: 'talento', descKey: 'talentoDesc', ctaKey: 'ctaHackathon', ctaLink: HACKATHON_URL },
  { id: 'emprendedores', icon: Rocket, titleKey: 'emprendedores', descKey: 'emprendedoresDesc', ctaKey: 'ctaHackathon', ctaLink: HACKATHON_URL },
  { id: 'empresas', icon: Building2, titleKey: 'empresas', descKey: 'empresasDesc', ctaKey: 'ctaReto', ctaLink: '/propon-un-reto' }
]

export default function AudienceSection({ landing = 'default' }: Props) {
  const { t } = useTranslation()
  const theme = THEME_LANDINGS[landing]
  const isDefault = landing === 'default'

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const accent = isDefault ? '#FF97EF' : theme.principal

  return (
    <section
      aria-label={t('audience.title')}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background image with black tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/FOTOSBARRANQUI-IA/10.webp)',
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
      <ScrollAnimation delay={0.1}>
        <p
          className='text-xs font-semibold tracking-wider uppercase mb-3'
          style={{ color: accent }}
        >
          {t('audience.tag')}
        </p>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4'>
          {t('audience.headline')}
        </h2>
        <p className='text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mb-12'>
          {t('audience.subtitle')}
        </p>
      </ScrollAnimation>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
        {audienceConfig.map((audience, index) => {
          const Icon = audience.icon
          const isEmpresas = audience.id === 'empresas'

          return (
            <ScrollAnimation key={audience.id} delay={index * 0.1} direction="up">
              <div
                id={isEmpresas ? 'empresas' : undefined}
                className="venture-card p-6 lg:p-8 flex flex-col"
                style={{
                  backgroundColor: isDefault ? 'rgba(28, 31, 46, 0.95)' : 'rgba(0, 0, 0, 0.85)',
                  border: `2px solid ${isDefault ? 'rgba(255, 151, 239, 0.5)' : `${theme.principal}50`}`,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                }}
              >
                {/* Icon */}
                <div className='mb-4'>
                  <div
                    className='inline-flex p-4 rounded-xl'
                    style={{
                      background: isDefault 
                        ? 'rgba(255, 151, 239, 0.15)'
                        : `${theme.principal}15`,
                      border: `2px solid ${isDefault ? 'rgba(255, 151, 239, 0.3)' : `${theme.principal}30`}`
                    }}
                  >
                    <Icon
                      size={28}
                      style={{
                        color: isDefault ? '#FF97EF' : theme.principal
                      }}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className='text-xl lg:text-2xl font-bold text-white mb-3'>
                  {t(`audience.${audience.titleKey}`)}
                </h3>

                {/* Description */}
                <p className='text-white/80 text-sm lg:text-base mb-6 leading-relaxed flex-1'>
                  {t(`audience.${audience.descKey}`)}
                </p>

                {/* CTA */}
                {audience.ctaLink.startsWith('/') ? (
                  <Link
                    href={audience.ctaLink}
                    className="btn-secondary text-sm w-full inline-flex items-center justify-center gap-2"
                    style={{
                      borderColor: isDefault ? '#FF97EF' : theme.principal,
                      color: isDefault ? '#FF97EF' : theme.principal
                    }}
                  >
                    {t(`audience.${audience.ctaKey}`)}
                    <ArrowRight size={16} />
                  </Link>
                ) : (
                  <button
                    onClick={() => handleScrollTo(audience.ctaLink)}
                    className="btn-secondary text-sm w-full inline-flex items-center justify-center gap-2"
                    style={{
                      borderColor: isDefault ? '#FF97EF' : theme.principal,
                      color: isDefault ? '#FF97EF' : theme.principal
                    }}
                  >
                    {t(`audience.${audience.ctaKey}`)}
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </ScrollAnimation>
          )
        })}
      </div>
      </div>
    </section>
  )
}
