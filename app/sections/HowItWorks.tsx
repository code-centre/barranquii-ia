'use client'
import React from 'react'
import Title from '../components/Title'
import ScrollAnimation from '../components/2026/ScrollAnimation'
import { THEME_LANDINGS } from '../utils/theme'

interface Props {
  landing?: string
}

const steps = [
  {
    label: 'HACK',
    title: 'Temporada de Hackatones',
    bullets: [
      'Prototipado intensivo durante un fin de semana',
      'Mentoría técnica y de negocio en tiempo real',
      'Presentación ante jurado especializado',
      'Selección de proyectos para incubación'
    ],
    cta: 'Ver fechas',
    ctaLink: '#fechas'
  },
  {
    label: 'BUILD',
    title: 'Incubación (12 semanas)',
    bullets: [
      'Acompañamiento estratégico y técnico',
      'Talleres especializados en IA y negocio',
      'Conexión con mentores y expertos',
      'Preparación para Demo Day'
    ],
    cta: 'Conocer incubación',
    ctaLink: '#que-es'
  },
  {
    label: 'SHOW',
    title: 'Demo Day en TechCaribe Fest',
    bullets: [
      'Presentación pública de tu startup',
      'Conexión con inversionistas y aliados',
      'Oportunidades de pilotos con empresas'
    ],
    cta: 'Ver Demo Day',
    ctaLink: '#faqs'
  }
]

export default function HowItWorks({ landing = 'default' }: Props) {
  const theme = THEME_LANDINGS[landing]
  const isDefault = landing === 'default'

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className=''>
      {/* <Title title="El programa tiene 3 fases" size="sm" landing={landing} /> */}
      
      <div className='mt-4 relative'>

        {/* Steps */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10'>
          {steps.map((step, index) => (
            <ScrollAnimation key={index} delay={index * 0.15} direction="up">
              <div className='venture-card p-6 lg:p-8 flex flex-col'>

                {/* Title */}
                <h3 className='text-xl lg:text-2xl font-bold text-white mb-6'>
                  {step.title}
                </h3>

                {/* Bullets */}
                <ul className='flex-1 space-y-3 mb-6'>
                  {step.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className='flex items-start gap-2 text-white/80 text-sm lg:text-base'>
                    <span
                      className='mt-1.5 flex-shrink-0'
                      style={{
                        color: isDefault ? '#FF97EF' : theme.principal
                      }}
                    >
                      •
                    </span>
                    <span className='leading-relaxed'>{bullet}</span>
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
                  {step.cta}
                </button>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
