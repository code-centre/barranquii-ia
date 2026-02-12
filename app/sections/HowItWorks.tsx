'use client'
import React from 'react'
import Title from '../components/Title'
import ScrollAnimation from '../components/2026/ScrollAnimation'
import { THEME_LANDINGS } from '../utils/theme'
import { useTranslation } from '@/app/i18n/useTranslation'

interface Props {
  landing?: string
}

const stepConfig = [
  { labelKey: 'step1Label', titleKey: 'step1Title', bullets: ['step1_1', 'step1_2', 'step1_3', 'step1_4'], ctaKey: 'step1Cta', ctaLink: '#hack' },
  { labelKey: 'step2Label', titleKey: 'step2Title', bullets: ['step2_1', 'step2_2', 'step2_3', 'step2_4'], ctaKey: 'step2Cta', ctaLink: '#que-es', helperKey: 'step2Helper' },
  { labelKey: 'step3Label', titleKey: 'step3Title', bullets: ['step3_1', 'step3_2', 'step3_3'], ctaKey: 'step3Cta', ctaLink: '#faqs' }
]

export default function HowItWorks({ landing = 'default' }: Props) {
  const { t } = useTranslation()
  const theme = THEME_LANDINGS[landing]
  const isDefault = landing === 'default'

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section aria-label={t('howItWorks.title')} className='py-20 md:py-28'>
      <Title title={t('howItWorks.title')} landing={landing} />
      
      <div className='mt-12 relative'>

        {/* Steps */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10'>
          {stepConfig.map((step, index) => {
            const isBuild = step.labelKey === 'step2Label'
            const stepNumber = String(index + 1).padStart(2, '0')
            
            return (
              <ScrollAnimation key={index} delay={index * 0.15} direction="up">
                <div 
                  id={isBuild ? 'build' : undefined}
                  className='venture-card p-6 lg:p-8 flex flex-col relative'
                  style={isBuild ? {
                    border: `2px solid ${isDefault ? 'rgba(255, 151, 239, 0.5)' : `${theme.principal}80`}`,
                    boxShadow: isDefault 
                      ? '0 10px 30px -5px rgba(255, 151, 239, 0.2)'
                      : `0 10px 30px -5px ${theme.principal}20`
                  } : {}}
                >
                  {/* Step Number */}
                  <div 
                    className='absolute top-4 right-4 text-6xl font-bold opacity-10'
                    style={{
                      color: isDefault ? '#FF97EF' : theme.principal
                    }}
                  >
                    {stepNumber}
                  </div>

                  {/* Selección Limitada Badge (BUILD only) */}
                  {isBuild && (
                    <div className='mb-4'>
                      <span
                        className='inline-block px-3 py-1 rounded-full text-xs font-semibold'
                        style={{
                          backgroundColor: isDefault ? 'rgba(255, 151, 239, 0.2)' : `${theme.principal}20`,
                          color: isDefault ? '#FF97EF' : theme.principal,
                          border: `1px solid ${isDefault ? 'rgba(255, 151, 239, 0.4)' : `${theme.principal}40`}`
                        }}
                      >
                        {t('howItWorks.limitedSelection')}
                      </span>
                    </div>
                  )}

                  {/* Step Label */}
                  <div className='mb-2'>
                    <span
                      className='text-sm font-bold tracking-wider uppercase'
                      style={{
                        color: isDefault ? '#FF97EF' : theme.principal
                      }}
                    >
                      {t(`howItWorks.${step.labelKey}`)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className='text-xl lg:text-2xl font-bold text-white mb-6'>
                    {t(`howItWorks.${step.titleKey}`)}
                  </h3>

                  {/* Helper Line (BUILD only) */}
                  {isBuild && step.helperKey && (
                    <p className='text-white/60 text-sm mb-4 italic'>
                      {t(`howItWorks.${step.helperKey}`)}
                    </p>
                  )}

                  {/* Bullets */}
                  <ul className='flex-1 space-y-3 mb-6'>
                    {step.bullets.map((bulletKey, bulletIndex) => (
                      <li key={bulletIndex} className='flex items-start gap-2 text-white/80 text-sm lg:text-base'>
                        <span
                          className='mt-1.5 flex-shrink-0'
                          style={{
                            color: isDefault ? '#FF97EF' : theme.principal
                          }}
                        >
                          •
                        </span>
                        <span className='leading-relaxed'>{t(`howItWorks.${bulletKey}`)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => handleScrollTo(step.ctaLink.replace('#', ''))}
                    className='btn-secondary text-sm w-full'
                    style={{
                      borderColor: isDefault ? '#FF97EF' : theme.principal,
                      color: isDefault ? '#FF97EF' : theme.principal
                    }}
                  >
                    {t(`howItWorks.${step.ctaKey}`)}
                  </button>
                </div>
              </ScrollAnimation>
            )
          })}
        </div>
      </div>
    </section>
  )
}
