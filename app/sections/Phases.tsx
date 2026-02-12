'use client'
import React from 'react'
import Title from '../components/Title'
import ScrollAnimation from '../components/2026/ScrollAnimation'
import Link from 'next/link'
import { THEME_LANDINGS } from '../utils/theme'
import { useTranslation } from '@/app/i18n/useTranslation'

interface Props {
  landing?: string
}

const hackathons = [
  { id: 'barranqui-ia', name: 'Barranqui-IA', date: '1-3 Mayo', status: 'active', descKey: 'barranquiDesc', link: '/barranqui-ia/2026' },
  { id: 'cartagen-ia', name: 'Cartagen-IA', date: '15-17 Mayo', status: 'coming-soon', descKey: 'cartagenDesc', link: '#' },
  { id: 'samar-ia', name: 'Samar-IA', date: '29-31 Mayo', status: 'coming-soon', descKey: 'samarDesc', link: '#' }
]

export default function Phases({ landing = 'default' }: Props) {
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
    <section id="hack" aria-label={t('phases.title')} className='py-20 md:py-28'>
      <Title title={t('phases.title')} landing={landing} />
      
      
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
        {hackathons.map((hackathon, index) => (
          <ScrollAnimation key={hackathon.id} delay={index * 0.1} direction="up">
          <div className='venture-card p-6 lg:p-8 flex flex-col'>
            {/* Status Badge */}
            <div className='mb-4'>
              {hackathon.status === 'active' ? (
                <span
                  className='inline-block px-3 py-1 rounded-full text-xs font-semibold'
                  style={{
                    backgroundColor: isDefault ? '#FFFFFF' : theme.accent || theme.principal,
                    color: isDefault ? '#000000' : theme.accent || theme.principal
                  }}
                >
                  {t('phases.active')}
                </span>
              ) : (
                <span className='inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/70 border border-white/20'>
                  {t('phases.comingSoon')}
                </span>
              )}
            </div>

            {/* City Name */}
            <h3 className='text-2xl lg:text-3xl font-bold text-white mb-2'>
              {hackathon.name}
            </h3>

            {/* Date */}
            <p
              className='text-lg mb-4'
              style={{
                color: theme.principal
              }}
            >
              {hackathon.date}
            </p>

            {/* Description */}
            <p className='text-white/80 text-sm lg:text-base mb-6 leading-relaxed flex-1'>
              {t(`phases.${hackathon.descKey}`)}
            </p>

            {/* CTA */}
            {hackathon.status === 'active' ? (
              <Link
                href={hackathon.link}
                className='btn-primary text-center text-sm'
                style={{
                  backgroundColor: isDefault ? '#FFFFFF' : theme.accent || theme.principal,
                  color: isDefault ? '#000000' : 'white'
                }}
              >
                {t('phases.inscribe')}
              </Link>
            ) : (
              <button
                disabled
                className='btn-secondary text-center text-sm opacity-50 cursor-not-allowed'
                style={{
                  borderColor: isDefault ? '#FF97EF' : theme.principal,
                  color: isDefault ? '#FF97EF' : theme.principal
                }}
              >
                {t('phases.comingSoon')}
              </button>
            )}
            
            {/* Helper Text */}
            <p className='text-white/50 text-xs mt-3 text-center'>
              {t('phases.helperText')}
            </p>
          </div>
        </ScrollAnimation>
        ))}

      </div>
        {/* Outcomes Panel */}
      <ScrollAnimation delay={0.05} direction="up">
        <div className='venture-card p-6 lg:p-8 mt-8 mb-8'>
          <h3 className='text-xl font-bold text-white mb-3'>
            {t('phases.afterHackTitle')}
          </h3>
          <p className='text-white/80 mb-4 leading-relaxed'>
            {t('phases.afterHackPara')}
          </p>
          <ul className='space-y-2 mb-4 text-white/80'>
            <li className='flex items-start gap-2'>
              <span style={{ color: isDefault ? '#FF97EF' : theme.principal }} className='mt-1.5'>•</span>
              <span>{t('phases.afterHack_1')}</span>
            </li>
            <li className='flex items-start gap-2'>
              <span style={{ color: isDefault ? '#FF97EF' : theme.principal }} className='mt-1.5'>•</span>
              <span>{t('phases.afterHack_2')}</span>
            </li>
          </ul>
          <p className='text-white/50 text-sm mb-4'>
            {t('phases.afterHackNote')}
          </p>
          <div className='flex flex-wrap gap-4 mt-4'>
            <button
              onClick={() => handleScrollTo('build')}
              className='btn-tertiary text-sm'
              style={{
                color: isDefault ? '#FF97EF' : theme.principal
              }}
            >
              {t('phases.knowIncubation')}
            </button>
            <button
              onClick={() => handleScrollTo('empresas')}
              className='btn-tertiary text-sm'
              style={{
                color: isDefault ? '#FF97EF' : theme.principal
              }}
            >
              {t('phases.empresaReto')}
            </button>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}
