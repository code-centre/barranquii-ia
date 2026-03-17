'use client'
import React from 'react'
import ScrollAnimation from '../components/2026/ScrollAnimation'
import { THEME_LANDINGS } from '../utils/theme'
import { useTranslation } from '@/app/i18n/useTranslation'
import { ChevronUp } from 'lucide-react'

interface Props {
  landing: string
}

const phases = [
  { num: '01', titleKey: 'phase1Title', descKey: 'phase1Desc', statusKey: 'statusOpen', isOpen: true },
  { num: '02', titleKey: 'phase2Title', descKey: 'phase2Desc', statusKey: 'statusNext', isOpen: false },
  { num: '03', titleKey: 'phase3Title', descKey: 'phase3Desc', statusKey: 'statusNext', isOpen: false },
]

export default function Summary({ landing }: Props) {
  const { t } = useTranslation()
  const theme = THEME_LANDINGS[landing]
  const isDefault = landing === 'default'
  const accent = isDefault ? '#FF97EF' : theme.principal

  const headline = t('summaryMain.headline')
  const highlight = t('summaryMain.headlineHighlight')
  const headlineParts = headline.split(new RegExp(`(${highlight})`, 'i'))

  return (
    <section
      id="que-es"
      aria-label={t('summaryMain.title')}
      className="relative flex flex-col gap-10 pt-20 md:pt-28 pb-20 md:pb-28 overflow-hidden"
    >
      {/* Background image with black tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/FOTOSBARRANQUI-IA/12.webp)',
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Title + Subtitle */}
          <ScrollAnimation delay={0.1}>
            <div className="flex flex-col gap-6">
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight'>
              {headlineParts.map((part, i) =>
                part.toLowerCase() === highlight.toLowerCase() ? (
                  <span key={i} style={{ color: accent }}>{part}</span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </h2>
            <p className='text-lg md:text-xl text-white/80 leading-relaxed'>
              {t('summaryMain.subtitle')}
            </p>
            </div>
          </ScrollAnimation>

          {/* Right: Phases Card */}
          <ScrollAnimation delay={0.2} direction="up">
            <div
              className="venture-card p-6 lg:p-8 flex flex-col relative overflow-hidden"
              style={{
                backgroundColor: isDefault ? 'rgba(28, 31, 46, 0.95)' : `rgba(0, 0, 0, 0.85)`,
                border: `2px solid ${accent}50`,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              }}
            >
            {/* Decorative orb */}
            <div
              className='absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-40'
              style={{ background: `radial-gradient(circle, ${accent} 0%, transparent 70%)` }}
            />
              <p className="text-xs font-semibold tracking-wider text-white/60 uppercase mb-6">
              {t('summaryMain.programHeader')}
            </p>
              <div className="flex flex-col divide-y divide-white/10">
              {phases.map((phase) => (
                <div key={phase.num} className='py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
                  <div className='flex gap-4 items-start'>
                    <span
                      className='text-2xl font-bold tabular-nums'
                      style={{ color: accent }}
                    >
                      {phase.num}
                    </span>
                    <div>
                      <h3 className='font-bold text-white text-lg'>{t(`summaryMain.${phase.titleKey}`)}</h3>
                      <p className='text-white/60 text-sm mt-0.5'>{t(`summaryMain.${phase.descKey}`)}</p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold shrink-0 w-fit ${
                      phase.isOpen ? 'text-white' : 'bg-white/10 text-white/80'
                    }`}
                    style={phase.isOpen ? { backgroundColor: accent } : {}}
                  >
                    {t(`summaryMain.${phase.statusKey}`)}
                  </span>
                </div>
              ))}
              </div>
              <div className="flex items-center gap-2 mt-6 pt-6 border-t border-white/10 text-white/60 text-sm">
              <ChevronUp size={16} style={{ color: '#22c55e' }} />
                <span>{t('summaryMain.backedBy')}</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
