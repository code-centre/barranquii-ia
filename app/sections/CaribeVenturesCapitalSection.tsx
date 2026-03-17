'use client'
import React from 'react'
import Image from 'next/image'
import ScrollAnimation from '../components/2026/ScrollAnimation'
import { THEME_LANDINGS } from '../utils/theme'
import { useTranslation } from '@/app/i18n/useTranslation'
import { Target, Globe, TrendingUp, ArrowRight } from 'lucide-react'

interface Props {
  landing?: string
}

const featureConfig = [
  {
    icon: Target,
    titleKey: 'capitalSection.feature1Title',
    descKey: 'capitalSection.feature1Desc',
  },
  {
    icon: Globe,
    titleKey: 'capitalSection.feature2Title',
    descKey: 'capitalSection.feature2Desc',
  },
  {
    icon: TrendingUp,
    titleKey: 'capitalSection.feature3Title',
    descKey: 'capitalSection.feature3Desc',
  },
]

const metricConfig = [
  { valueKey: 'capitalSection.metric1Value', labelKey: 'capitalSection.metric1Label' },
  { valueKey: 'capitalSection.metric2Value', labelKey: 'capitalSection.metric2Label' },
  { valueKey: 'capitalSection.metric3Value', labelKey: 'capitalSection.metric3Label' },
  { valueKey: 'capitalSection.metric4Value', labelKey: 'capitalSection.metric4Label' },
]

export default function CaribeVenturesCapitalSection({ landing = 'default' }: Props) {
  const { t } = useTranslation()
  const theme = THEME_LANDINGS[landing]
  const isDefault = landing === 'default'
  const accent = isDefault ? '#FF97EF' : theme.principal

  return (
    <section
      aria-label={t('capitalSection.ariaLabel')}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        backgroundColor: isDefault ? theme.bgBase || '#1C1F2E' : undefined
      }}
    >
      {/* Hero-style background (same as HeroSection) */}
      {isDefault && (
        <>
          {/* Texture Background */}
          <div
            className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: 'url(/texture-bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          {/* Animated Gradient Orbs */}
          <div
            className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-float"
            style={{
              background: 'radial-gradient(circle, rgba(255, 151, 239, 0.4) 0%, transparent 70%)',
              animationDelay: '0s'
            }}
          />
          <div
            className="absolute top-40 right-20 w-80 h-80 rounded-full blur-3xl animate-float"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
              animationDelay: '2s'
            }}
          />
          <div
            className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full blur-3xl animate-float animate-pulse-glow"
            style={{
              background: 'radial-gradient(circle, rgba(109, 14, 173, 0.4) 0%, transparent 70%)',
              animationDelay: '4s'
            }}
          />
          <div
            className="absolute bottom-40 right-1/3 w-64 h-64 rounded-full blur-3xl animate-float"
            style={{
              background: 'radial-gradient(circle, rgba(255, 151, 239, 0.3) 0%, transparent 70%)',
              animationDelay: '1s'
            }}
          />
          {/* Radial Gradient Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, transparent 0%, rgba(28, 31, 46, 0.8) 100%)'
            }}
          />
        </>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="flex flex-col">
            <ScrollAnimation delay={0.1}>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3"
                style={{
                  backgroundColor: `${accent}20`,
                  color: accent,
                  border: `1px solid ${accent}40`,
                }}
              >
                {t('capitalSection.tag')}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {(() => {
                  const headline = t('capitalSection.headline')
                  const highlight = t('capitalSection.headlineHighlight')
                  const parts = headline.split(new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'i'))
                  return parts.map((part, i) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                      <span key={i} style={{ color: accent }}>{part}</span>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )
                })()}
              </h2>
              <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-8">
                {t('capitalSection.intro')}
              </p>
            </ScrollAnimation>

            <ul className="space-y-6">
              {featureConfig.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <ScrollAnimation key={feature.titleKey} delay={0.15 + index * 0.1} direction="up">
                    <li className="flex gap-4">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: `${accent}15`,
                          border: `2px solid ${accent}30`,
                        }}
                      >
                        <Icon size={20} style={{ color: accent }} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">
                          {t(feature.titleKey)}
                        </h3>
                        <p className="text-white/70 text-sm lg:text-base leading-relaxed">
                          {t(feature.descKey)}
                        </p>
                      </div>
                    </li>
                  </ScrollAnimation>
                )
              })}
            </ul>
          </div>

          {/* Right Column - Dark Card */}
          <ScrollAnimation delay={0.2} direction="up">
            <div
              className="venture-card p-6 lg:p-8 flex flex-col relative overflow-hidden"
              style={{
                background: isDefault
                  ? 'linear-gradient(135deg, rgba(28, 31, 46, 0.95) 0%, rgba(20, 22, 35, 0.98) 100%)'
                  : `linear-gradient(135deg, ${theme.principal}08 0%, ${theme.gradient.from}08 100%)`,
                border: `2px solid ${accent}40`,
                boxShadow: isDefault
                  ? '0 10px 40px -10px rgba(255, 151, 239, 0.2)'
                  : `0 10px 40px -10px ${theme.principal}30`,
              }}
            >
              {/* Subtle orb decoration */}
              <div
                className="absolute bottom-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${accent} 0%, transparent 70%)`,
                }}
              />

              <p
                className="text-xs font-semibold tracking-wider uppercase mb-2 text-white/60"
              >
                {t('capitalSection.cardHeader')}
              </p>
              <div className="mb-4 relative z-10">
                <Image
                  src="/images/sponsors/caribe-ventures.png"
                  alt="Caribe Ventures"
                  width={200}
                  height={56}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-6 relative z-10">
                {t('capitalSection.cardDesc')}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-12 relative z-10">
                {metricConfig.map((metric) => (
                  <div
                    key={metric.valueKey}
                    className="p-4 rounded-xl"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 151, 239, 0.2)',
                    }}
                  >
                    <p
                      className="font-bold text-lg mb-1"
                      style={{ color: accent }}
                    >
                      {t(metric.valueKey)}
                    </p>
                    <p className="text-white/70 text-sm">
                      {t(metric.labelKey)}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="https://caribe.ventures"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2 w-full text-center relative z-10"
                style={{
                  borderColor: accent,
                  color: accent,
                }}
              >
                {t('capitalSection.cta')}
                <ArrowRight size={18} />
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
