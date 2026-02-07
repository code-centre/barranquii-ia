'use client'
import { motion } from 'framer-motion'
import { THEME_LANDINGS } from '../utils/theme'
import Image from 'next/image'
import { Meteors } from '../components/Meteors'
import { ArrowDown } from '../components/Icons'

interface HeroSectionProps {
  landing: string
}

export default function HeroSection({ landing }: HeroSectionProps) {
  const theme = THEME_LANDINGS[landing]
  const isDefault = landing === 'default'

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      aria-label="Caribe-IA - Programa de startups de IA"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: isDefault ? theme.bgBase || '#1C1F2E' : '#000'
      }}
    >
      {/* Texture Background */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: 'url(/texture-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Animated Gradient Orbs */}
      {isDefault && (
        <>
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
        </>
      )}

      {/* Meteors Effect */}
      {isDefault && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={18} className="bg-[#FF97EF]" />
        </div>
      )}

      {/* Radial Gradient Overlay for Focus */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(28, 31, 46, 0.8) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 w-full flex flex-col items-center text-center">
        {/* Tag: Powered by Caribe Ventures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.8, ease: 'easeOut' }}
          className="flex items-center gap-2 mb-6 text-sm text-white/60"
        >
          <span>Un programa de</span>
          <Image
            src="/images/sponsors/caribe-ventures.png"
            alt="Caribe Ventures"
            width={120}
            height={30}
            className="h-6 w-auto object-contain opacity-80"
          />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
          className="text-8xl md:text-[10rem] lg:text-[12rem] font-bold font-mono tracking-tighter mb-6"
          style={{
            background: isDefault
              ? `linear-gradient(to right, ${theme.gradient.from}, ${theme.gradient.via}, ${theme.gradient.to})`
              : `linear-gradient(to right, ${theme.gradient.from}, ${theme.gradient.via}, ${theme.gradient.to})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            backgroundSize: '200% 100%',
            animation: isDefault ? 'gradient-shift 6s ease infinite' : undefined
          }}
        >
          Caribe-IA
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-white/80 max-w-3xl mb-8 leading-relaxed"
        >
          El programa de innovación abierta que transforma talento del Caribe en startups de IA listas para el mercado.
        </motion.p>

        {/* Support Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: 'easeOut' }}
          className="flex items-center gap-3 mb-12 text-white/70"
        >
          <span className="text-sm md:text-base">Hackatones</span>
          <span style={{ color: isDefault ? '#FF97EF' : theme.principal }}>—</span>
          <span className="text-sm md:text-base">Incubación</span>
          <span style={{ color: isDefault ? '#FF97EF' : theme.principal }}>—</span>
          <span className="text-sm md:text-base">Demo Day en TechCaribe Fest</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mb-16"
        >
          <button
            onClick={() => handleScrollTo('apply')}
            className="btn-primary focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-black"
            style={{
              backgroundColor: isDefault ? '#FFFFFF' : theme.accent || theme.principal,
              color: isDefault ? '#000000' : 'white'
            }}
          >
            Postulate al programa
          </button>
          <button
            onClick={() => handleScrollTo('hack')}
            className="btn-secondary focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-black"
            style={{
              borderColor: isDefault ? '#FF97EF' : theme.principal,
              color: isDefault ? '#FF97EF' : theme.principal
            }}
          >
            Participar en un hackatón
          </button>
          <button
            onClick={() => handleScrollTo('empresas')}
            className="btn-tertiary focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-black"
            style={{
              color: isDefault ? '#FF97EF' : theme.principal
            }}
          >
            Soy empresa / aliado
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
            }}
          >
            <div style={{ color: isDefault ? '#FF97EF' : theme.principal }}>
              <ArrowDown />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
