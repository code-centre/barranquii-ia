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
    ctaLink: '#postulate',
    highlight: true,
    layout: 'featured'
  },
  {
    id: 'emprendedores',
    icon: Lightbulb,
    title: 'Emprendedores',
    description: 'Con o sin idea, busca convertir tu visión en una startup de IA escalable.',
    cta: 'Quiero participar',
    ctaLink: '#postulate',
    highlight: false,
    layout: 'vertical'
  },
  {
    id: 'empresas',
    icon: Building2,
    title: 'Empresas',
    description: 'Innovación abierta, propón retos y accede a soluciones de IA desarrolladas por talento del Caribe.',
    cta: 'Quiero proponer un reto',
    ctaLink: '#empresas',
    highlight: false,
    layout: 'horizontal'
  },
  {
    id: 'inversionistas',
    icon: TrendingUp,
    title: 'Inversionistas',
    description: 'Accede a dealflow filtrado de startups de IA con alto potencial, validadas y listas para escalar.',
    cta: 'Quiero invertir',
    ctaLink: '#inversionistas',
    highlight: true,
    layout: 'premium'
  }
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
    <section className='py-20 md:py-28'>
      <Title title="¿Para quién es Caribe-IA?" landing={landing} />
      
      <div className='mt-12 space-y-8'>
        {/* Featured Card - Talento */}
        <ScrollAnimation delay={0.1} direction="up">
          <div
            id="talento"
            className='relative overflow-hidden rounded-2xl p-8 lg:p-12'
            style={{
              background: isDefault 
                ? 'linear-gradient(135deg, rgba(109, 14, 173, 0.2) 0%, rgba(255, 151, 239, 0.15) 100%)'
                : `linear-gradient(135deg, ${theme.principal}20 0%, ${theme.gradient.via}15 100%)`,
              border: `2px solid ${isDefault ? 'rgba(255, 151, 239, 0.4)' : `${theme.principal}66`}`
            }}
          >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
              <div>
                <div className='flex items-center gap-4 mb-6'>
                  <div
                    className='p-4 rounded-xl'
                    style={{
                      background: isDefault 
                        ? 'linear-gradient(135deg, #6D0EAD, #FF97EF)'
                        : `linear-gradient(135deg, ${theme.gradient.from}, ${theme.gradient.to})`
                    }}
                  >
                    <Code size={32} className="text-white" />
                  </div>
                  <h3 className='text-3xl lg:text-4xl font-bold text-white'>
                    Talento
                  </h3>
                </div>
                <p className='text-white/80 text-lg lg:text-xl mb-6 leading-relaxed'>
                  Desarrolladores, científicos de datos, diseñadores y creativos que quieren construir con IA.
                </p>
                <button
                  onClick={() => handleScrollTo('postulate')}
                  className='btn-primary inline-flex items-center gap-2'
                  style={{
                    backgroundColor: isDefault ? '#FFFFFF' : theme.accent || theme.principal,
                    color: isDefault ? '#000000' : 'white'
                  }}
                >
                  {audiences[0].cta}
                  <ArrowRight size={18} />
                </button>
              </div>
              <div className='hidden lg:block'>
                <div className='relative h-64 rounded-xl overflow-hidden'
                  style={{
                    background: isDefault 
                      ? 'linear-gradient(135deg, rgba(109, 14, 173, 0.3), rgba(255, 151, 239, 0.2))'
                      : `linear-gradient(135deg, ${theme.gradient.from}30, ${theme.gradient.to}20)`
                  }}
                >
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <Code size={120} className="opacity-20" style={{ color: isDefault ? '#FF97EF' : theme.principal }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Two Column Layout - Emprendedores y Empresas */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8'>
          {/* Emprendedores - Vertical Card */}
          <ScrollAnimation delay={0.2} direction="up">
            <div className='venture-card p-6 lg:p-8 flex flex-col h-full'>
              <div className='mb-6'>
                <div
                  className='inline-flex p-4 rounded-xl mb-4'
                  style={{
                    background: isDefault 
                      ? 'linear-gradient(135deg, rgba(255, 151, 239, 0.2), rgba(109, 14, 173, 0.1))'
                      : `linear-gradient(135deg, ${theme.principal}20, ${theme.gradient.from}10)`,
                    border: `2px solid ${isDefault ? 'rgba(255, 151, 239, 0.3)' : `${theme.principal}40`}`
                  }}
                >
                  <Lightbulb
                    size={28}
                    style={{
                      color: isDefault ? '#FF97EF' : theme.principal
                    }}
                  />
                </div>
                <h3 className='text-2xl font-bold text-white mb-3'>
                  Emprendedores
                </h3>
              </div>
              <p className='text-white/70 text-base mb-6 leading-relaxed flex-1'>
                Con o sin idea, busca convertir tu visión en una startup de IA escalable.
              </p>
              <button
                onClick={() => handleScrollTo('postulate')}
                className='btn-secondary text-sm w-full inline-flex items-center justify-center gap-2'
                style={{
                  borderColor: isDefault ? '#FF97EF' : theme.principal,
                  color: isDefault ? '#FF97EF' : theme.principal
                }}
              >
                {audiences[1].cta}
                <ArrowRight size={16} />
              </button>
            </div>
          </ScrollAnimation>

          {/* Empresas - Horizontal Card */}
          <ScrollAnimation delay={0.3} direction="up">
            <div
              id="empresas"
              className='venture-card p-6 lg:p-8 flex flex-col lg:flex-row gap-6 h-full'
            >
              <div className='flex-shrink-0'>
                <div
                  className='p-4 rounded-xl w-fit'
                  style={{
                    background: isDefault 
                      ? 'rgba(255, 151, 239, 0.15)'
                      : `${theme.principal}15`,
                    border: `2px solid ${isDefault ? 'rgba(255, 151, 239, 0.4)' : `${theme.principal}40`}`
                  }}
                >
                  <Building2
                    size={32}
                    style={{
                      color: isDefault ? '#FF97EF' : theme.principal
                    }}
                  />
                </div>
              </div>
              <div className='flex-1 flex flex-col'>
                <h3 className='text-2xl font-bold text-white mb-3'>
                  Empresas
                </h3>
                <p className='text-white/70 text-base mb-6 leading-relaxed flex-1'>
                  Innovación abierta, propón retos y accede a soluciones de IA desarrolladas por talento del Caribe.
                </p>
                <button
                  onClick={() => handleScrollTo('empresas')}
                  className='btn-secondary text-sm w-full lg:w-auto inline-flex items-center justify-center gap-2'
                  style={{
                    borderColor: isDefault ? '#FF97EF' : theme.principal,
                    color: isDefault ? '#FF97EF' : theme.principal
                  }}
                >
                  {audiences[2].cta}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Premium Card - Inversionistas
        <ScrollAnimation delay={0.4} direction="up">
          <div
            id="inversionistas"
            className='relative overflow-hidden rounded-2xl p-8 lg:p-12'
            style={{
              background: isDefault 
                ? 'linear-gradient(135deg, rgba(255, 151, 239, 0.15) 0%, rgba(109, 14, 173, 0.2) 100%)'
                : `linear-gradient(135deg, ${theme.gradient.to}15 0%, ${theme.gradient.from}20 100%)`,
              border: `2px solid ${isDefault ? 'rgba(255, 151, 239, 0.5)' : `${theme.principal}80`}`,
              boxShadow: isDefault 
                ? '0 20px 40px -10px rgba(255, 151, 239, 0.2)'
                : `0 20px 40px -10px ${theme.principal}20`
            }}
          >
            <div className='flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8'>
              <div
                className='p-5 rounded-2xl flex-shrink-0'
                style={{
                  background: isDefault 
                    ? 'linear-gradient(135deg, #FF97EF, #6D0EAD)'
                    : `linear-gradient(135deg, ${theme.gradient.to}, ${theme.gradient.from})`
                }}
              >
                <TrendingUp size={40} className="text-white" />
              </div>
              <div className='flex-1'>
                <h3 className='text-3xl font-bold text-white mb-4'>
                  Inversionistas
                </h3>
                <p className='text-white/80 text-lg mb-6 leading-relaxed'>
                  Accede a dealflow filtrado de startups de IA con alto potencial, validadas y listas para escalar.
                </p>
                <button
                  onClick={() => handleScrollTo('inversionistas')}
                  className='btn-primary inline-flex items-center gap-2'
                  style={{
                    backgroundColor: isDefault ? '#FFFFFF' : theme.accent || theme.principal,
                    color: isDefault ? '#000000' : 'white'
                  }}
                >
                  {audiences[3].cta}
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimation> */}
      </div>
    </section>
  )
}
