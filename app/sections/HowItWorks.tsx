'use client'
import React from 'react'
import ScrollAnimation from '../components/2026/ScrollAnimation'
import { THEME_LANDINGS } from '../utils/theme'
import { useTranslation } from '@/app/i18n/useTranslation'
import { ArrowRight } from 'lucide-react'

interface Props {
  landing?: string
}

const stepConfig = [
  {
    num: '01',
    dateKey: 'pipelineStep1Date',
    titleKey: 'pipelineStep1Title',
    descKey: 'pipelineStep1Desc',
    bullets: ['pipelineStep1_1', 'pipelineStep1_2', 'pipelineStep1_3', 'pipelineStep1_4'],
    id: 'hack',
  },
  {
    num: '02',
    dateKey: 'pipelineStep2Date',
    titleKey: 'pipelineStep2Title',
    descKey: 'pipelineStep2Desc',
    bullets: ['pipelineStep2_1', 'pipelineStep2_2', 'pipelineStep2_3', 'pipelineStep2_4'],
    id: 'build',
  },
  {
    num: '03',
    dateKey: 'pipelineStep3Date',
    titleKey: 'pipelineStep3Title',
    descKey: 'pipelineStep3Desc',
    bullets: ['pipelineStep3_1', 'pipelineStep3_2', 'pipelineStep3_3', 'pipelineStep3_4'],
    id: 'show',
  },
]

export default function HowItWorks({ landing = 'default' }: Props) {
  const { t } = useTranslation()
  const theme = THEME_LANDINGS[landing]
  const isDefault = landing === 'default'
  const accent = isDefault ? '#FF97EF' : theme.principal

  return (
    <section
      aria-label={t('howItWorks.title')}
      className='relative py-20 md:py-28 overflow-hidden'
      style={{
        backgroundColor: isDefault ? theme.bgBase || '#1C1F2E' : undefined
      }}
    >
      {/* Hero-style background (same as HeroSection) */}
      {isDefault && (
        <>
          {/* Texture Background */}
          <div
            className='absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none'
            style={{
              backgroundImage: 'url(/texture-bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          {/* Animated Gradient Orbs */}
          <div
            className='absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-float'
            style={{
              background: 'radial-gradient(circle, rgba(255, 151, 239, 0.4) 0%, transparent 70%)',
              animationDelay: '0s'
            }}
          />
          <div
            className='absolute top-40 right-20 w-80 h-80 rounded-full blur-3xl animate-float'
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
              animationDelay: '2s'
            }}
          />
          <div
            className='absolute bottom-20 left-1/4 w-72 h-72 rounded-full blur-3xl animate-float animate-pulse-glow'
            style={{
              background: 'radial-gradient(circle, rgba(109, 14, 173, 0.4) 0%, transparent 70%)',
              animationDelay: '4s'
            }}
          />
          <div
            className='absolute bottom-40 right-1/3 w-64 h-64 rounded-full blur-3xl animate-float'
            style={{
              background: 'radial-gradient(circle, rgba(255, 151, 239, 0.3) 0%, transparent 70%)',
              animationDelay: '1s'
            }}
          />
          {/* Radial Gradient Overlay */}
          <div
            className='absolute inset-0 pointer-events-none'
            style={{
              background: 'radial-gradient(circle at center, transparent 0%, rgba(28, 31, 46, 0.8) 100%)'
            }}
          />
        </>
      )}

      <div className='relative z-10 max-w-6xl mx-auto px-5 lg:px-10 w-full'>
        {/* Header */}
        <ScrollAnimation delay={0.1}>
          <p className='text-xs font-semibold tracking-wider text-white/60 uppercase mb-3'>
            {t('howItWorks.pipelineLabel')}
          </p>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4'>
            {(() => {
              const title = t('howItWorks.pipelineTitle')
              const highlight = t('howItWorks.pipelineTitleHighlight')
              const parts = title.split(new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'i'))
              return parts.map((part, i) =>
                part.toLowerCase() === highlight.toLowerCase() ? (
                  <span key={i} style={{ color: accent }}>{part}</span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )
            })()}
          </h2>
          <p className='text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl'>
            {t('howItWorks.pipelineSubtitle')}
          </p>
        </ScrollAnimation>

        {/* Three columns */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-12'>
          {stepConfig.map((step, index) => (
            <ScrollAnimation key={step.id} delay={0.15 + index * 0.1} direction="up">
              <div
                id={step.id}
                className='venture-card p-6 lg:p-8 flex flex-col relative overflow-hidden'
              >
                {/* Large faint number */}
                <div
                  className='absolute top-4 right-4 text-7xl md:text-8xl font-bold opacity-[0.07] select-none'
                  style={{ color: accent }}
                >
                  {step.num}
                </div>

                {/* Date */}
                <p
                  className='text-xs font-bold tracking-wider uppercase mb-3'
                  style={{ color: accent }}
                >
                  {t(`howItWorks.${step.dateKey}`)}
                </p>

                {/* Title */}
                <h3 className='text-xl lg:text-2xl font-bold text-white mb-4 relative z-10'>
                  {t(`howItWorks.${step.titleKey}`)}
                </h3>

                {/* Description */}
                <p className='text-white/70 text-sm lg:text-base leading-relaxed mb-6 relative z-10'>
                  {t(`howItWorks.${step.descKey}`)}
                </p>

                {/* Bullets with arrow */}
                <ul className='flex-1 space-y-2 relative z-10'>
                  {step.bullets.map((bulletKey) => (
                    <li
                      key={bulletKey}
                      className='flex items-start gap-2 text-white/80 text-sm lg:text-base'
                    >
                      <ArrowRight
                        size={16}
                        className='mt-0.5 flex-shrink-0'
                        style={{ color: accent }}
                      />
                      <span className='leading-relaxed'>{t(`howItWorks.${bulletKey}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
