'use client'
import React from 'react'
import Title from '../components/Title'
import ScrollAnimation from '../components/2026/ScrollAnimation'
import { Code2, Users, TrendingUp } from 'lucide-react'
import { THEME_LANDINGS } from '../utils/theme'
import { useTranslation } from '@/app/i18n/useTranslation'

interface Props {
  landing: string
}

const outcomeCardKeys = [
  { icon: Code2, titleKey: 'card1Title', descKey: 'card1Desc' },
  { icon: Users, titleKey: 'card2Title', descKey: 'card2Desc' },
  { icon: TrendingUp, titleKey: 'card3Title', descKey: 'card3Desc' }
]

export default function Summary({ landing }: Props) {
  const { t } = useTranslation()
  const theme = THEME_LANDINGS[landing]
  const isDefault = landing === 'default'

  return (
    <section id="que-es" aria-label={t('summaryMain.title')} className='flex flex-col gap-10 pt-20 md:pt-28'>
      <Title title={t('summaryMain.title')} landing={landing} />
      
      {/* Manifesto */}
      <ScrollAnimation delay={0.1}>
        <div className='mx-auto'>
          <p className='text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed'>
            {t('summaryMain.manifesto')}
          </p>
        </div>
      </ScrollAnimation>

      {/* Outcome Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12'>
        {outcomeCardKeys.map((card, index) => {
          const Icon = card.icon
          return (
            <ScrollAnimation key={index} delay={0.2 + index * 0.1} direction="up">
              <div className='venture-card p-6 lg:p-8 flex flex-col items-center text-center'>
                <div
                  className='mb-4 p-4 rounded-full'
                  style={{
                    backgroundColor: isDefault ? 'rgba(255, 151, 239, 0.1)' : `rgba(${theme.principal}, 0.1)`,
                    border: `2px solid ${isDefault ? 'rgba(255, 151, 239, 0.3)' : `${theme.principal}40`}`
                  }}
                >
                  <Icon
                    size={32}
                    style={{
                      color: isDefault ? '#FF97EF' : theme.principal
                    }}
                  />
                </div>
                <h3 className='text-xl font-bold text-white mb-3'>{t(`summaryMain.${card.titleKey}`)}</h3>
                <p className='text-white/70 text-sm lg:text-base leading-relaxed'>{t(`summaryMain.${card.descKey}`)}</p>
              </div>
            </ScrollAnimation>
          )
        })}
      </div>
    </section>
  )
}
