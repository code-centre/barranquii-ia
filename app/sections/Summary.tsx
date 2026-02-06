'use client'
import React from 'react'
import Title from '../components/Title'
import ScrollAnimation from '../components/2026/ScrollAnimation'
import { Code2, Users, TrendingUp } from 'lucide-react'
import { THEME_LANDINGS } from '../utils/theme'

interface Props {
  landing: string
}

const outcomeCards = [
  {
    icon: Code2,
    title: 'Construye un MVP funcional',
    description: 'Desarrolla un producto mínimo viable con tecnologías de IA de vanguardia.'
  },
  {
    icon: Users,
    title: 'Valida con mentores y usuarios',
    description: 'Obtén feedback de expertos y usuarios reales para refinar tu solución.'
  },
  {
    icon: TrendingUp,
    title: 'Prepárate para inversión y pilotos',
    description: 'Accede a oportunidades de financiamiento y pilotos con empresas aliadas.'
  }
]

export default function Summary({ landing }: Props) {
  const theme = THEME_LANDINGS[landing]
  const isDefault = landing === 'default'

  return (
    <section id="que-es" className='flex flex-col gap-10 pt-20 md:pt-28'>
      <Title title="¿Qué es Caribe-IA?" landing={landing} />
      
      {/* Manifesto */}
      <ScrollAnimation delay={0.1}>
        <div className='mx-auto'>
          <p className='text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed'>
            Es un sistema para crear startups de base tecnológica potenciadas por inteligencia artificial desde el Caribe colombiano con una proyección internacional.
          </p>
        </div>
      </ScrollAnimation>

      {/* Outcome Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12'>
        {outcomeCards.map((card, index) => {
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
                <h3 className='text-xl font-bold text-white mb-3'>{card.title}</h3>
                <p className='text-white/70 text-sm lg:text-base leading-relaxed'>{card.description}</p>
              </div>
            </ScrollAnimation>
          )
        })}
      </div>
    </section>
  )
}
