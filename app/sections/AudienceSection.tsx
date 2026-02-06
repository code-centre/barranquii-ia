'use client'
import React from 'react'
import Title from '../components/Title'
import ScrollAnimation from '../components/2026/ScrollAnimation'
import { Code, Lightbulb, Building2, TrendingUp, ArrowRight } from 'lucide-react'
import { THEME_LANDINGS } from '../utils/theme'

interface Props {
  landing?: string
}

const audiences = [
  {
    id: 'talento',
    icon: Code,
    title: 'Talento',
    description: 'Desarrolladores, científicos de datos, diseñadores y creativos que quieren construir con IA.',
    cta: 'Quiero participar',
    ctaLink: '#postulate'
  },
  {
    id: 'emprendedores',
    icon: Lightbulb,
    title: 'Emprendedores',
    description: 'Con o sin idea, busca convertir tu visión en una startup de IA escalable.',
    cta: 'Quiero participar',
    ctaLink: '#postulate'
  },
  {
    id: 'empresas',
    icon: Building2,
    title: 'Empresas',
    description: 'Innovación abierta, propón retos y accede a soluciones de IA desarrolladas por talento del Caribe.',
    cta: 'Quiero proponer un reto',
    ctaLink: '#empresas'
  },
  // {
  //   id: 'inversionistas',
  //   icon: TrendingUp,
  //   title: 'Inversionistas',
  //   description: 'Accede a dealflow filtrado de startups de IA con alto potencial, validadas y listas para escalar.',
  //   cta: 'Quiero invertir',
  //   ctaLink: '#inversionistas'
  // }
]

export default function AudienceSection({ landing = 'default' }: Props) {
  const theme = THEME_LANDINGS[landing]
  const isDefault = landing === 'default'

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section aria-label="¿Para quién es Caribe-IA?" className='py-20 md:py-28'>
      <Title title="¿Para quién es Caribe-IA?" landing={landing} />
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12'>
        {audiences.map((audience, index) => {
          const Icon = audience.icon
          const isEmpresas = audience.id === 'empresas'
          const isInversionistas = audience.id === 'inversionistas'
          
          return (
            <ScrollAnimation key={audience.id} delay={index * 0.1} direction="up">
              <div
                id={isEmpresas ? 'empresas' : isInversionistas ? 'inversionistas' : undefined}
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
                  {audience.title}
                </h3>

                {/* Description */}
                <p className='text-white/80 text-sm lg:text-base mb-6 leading-relaxed flex-1'>
                  {audience.description}
                </p>

                {/* CTA */}
                <button
                  onClick={() => handleScrollTo(audience.ctaLink.replace('#', ''))}
                  className='btn-secondary text-sm w-full inline-flex items-center justify-center gap-2'
                  style={{
                    borderColor: isDefault ? '#FF97EF' : theme.principal,
                    color: isDefault ? '#FF97EF' : theme.principal
                  }}
                >
                  {audience.cta}
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
