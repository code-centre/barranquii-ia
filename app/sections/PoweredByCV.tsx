'use client'
import React from 'react'
import ScrollAnimation from '../components/2026/ScrollAnimation'
import Image from 'next/image'
import { THEME_LANDINGS } from '../utils/theme'

interface Props {
  landing?: string
}

export default function PoweredByCV({ landing = 'default' }: Props) {
  const theme = THEME_LANDINGS[landing]
  const isDefault = landing === 'default'

  return (
    <section className='py-20 md:py-28'>
      <ScrollAnimation delay={0.1}>
        <div
          className='venture-card p-8 lg:p-12'
          style={{
            borderWidth: '2px',
            borderColor: isDefault ? 'rgba(255, 151, 239, 0.4)' : `${theme.principal}66`,
            background: isDefault
              ? 'linear-gradient(135deg, rgba(109, 14, 173, 0.05) 0%, rgba(255, 151, 239, 0.05) 100%)'
              : `linear-gradient(135deg, ${theme.principal}08 0%, ${theme.gradient.via}08 100%)`
          }}
        >
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            {/* Left Column: Logo + Description */}
            <div className='flex flex-col'>
              <div className='mb-6'>
                <Image
                  src="/images/sponsors/caribe-ventures.png"
                  alt="Caribe Ventures"
                  width={250}
                  height={80}
                  className="h-auto w-auto object-contain"
                />
              </div>
              <p className='text-white/80 text-base lg:text-lg leading-relaxed'>
                Caribe Ventures es un venture studio enfocado en crear, invertir y escalar startups tecnológicas del Caribe.
              </p>
            </div>

            {/* Right Column: Program Description */}
            <div className='flex flex-col justify-center'>
              <h3 className='text-2xl lg:text-3xl font-bold text-white mb-4'>
                Caribe-IA es su programa flagship de creación de startups con IA.
              </h3>
              <p className='text-white/70 text-base lg:text-lg mb-6 leading-relaxed'>
                A través de hackatones, incubación y Demo Day, conectamos talento, empresas e inversionistas para construir el ecosistema de IA del Caribe.
              </p>
              <a
                href="https://caribeventures.com"
                target="_blank"
                rel="noopener noreferrer"
                className='btn-secondary inline-block text-center w-fit'
                style={{
                  borderColor: isDefault ? '#FF97EF' : theme.principal,
                  color: isDefault ? '#FF97EF' : theme.principal
                }}
              >
                Conoce Caribe Ventures →
              </a>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}
