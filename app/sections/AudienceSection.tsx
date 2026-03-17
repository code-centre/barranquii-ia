'use client'
import React from 'react'
import ScrollAnimation from '../components/2026/ScrollAnimation'
import { Laptop, Rocket, Building2, ArrowRight } from 'lucide-react'
import { THEME_LANDINGS } from '../utils/theme'
import { useTranslation } from '@/app/i18n/useTranslation'

interface Props {
  landing?: string
}

const audienceConfig = [
  { id: 'talento', icon: Laptop, titleKey: 'talento', descKey: 'talentoDesc', ctaKey: 'ctaHackathon', ctaLink: 'hack' },
  { id: 'emprendedores', icon: Rocket, titleKey: 'emprendedores', descKey: 'emprendedoresDesc', ctaKey: 'ctaProgram', ctaLink: 'phases' },
  { id: 'empresas', icon: Building2, titleKey: 'empresas', descKey: 'empresasDesc', ctaKey: 'ctaReto', ctaLink: 'empresas' }
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
    <section aria-label={t('audience.title')} className='py-20 md:py-28'>
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
                className='venture-card p-6 lg:p-8 flex flex-col'
                style={isEmpresas ? {
                  border: `2px solid ${isDefault ? 'rgba(255, 151, 239, 0.5)' : `${theme.principal}80`}`,
                  boxShadow: isDefault 
                    ? '0 10px 30px -5px rgba(255, 151, 239, 0.2)'
                    : `0 10px 30px -5px ${theme.principal}20`
                } : {}}
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
                <button
                  onClick={() => handleScrollTo(audience.ctaLink)}
                  className='btn-secondary text-sm w-full inline-flex items-center justify-center gap-2'
                  style={{
                    borderColor: isDefault ? '#FF97EF' : theme.principal,
                    color: isDefault ? '#FF97EF' : theme.principal
                  }}
                >
                  {t(`audience.${audience.ctaKey}`)}
                  <ArrowRight size={16} />
                </button>
              </div>
            </ScrollAnimation>
          )
        })}
      </div>
    </section>
  )
}
