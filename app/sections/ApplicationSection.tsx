'use client'
import React, { useState } from 'react'
import Title from '../components/Title'
import ScrollAnimation from '../components/2026/ScrollAnimation'
import { THEME_LANDINGS } from '../utils/theme'

interface Props {
  landing?: string
}

const roles = [
  { value: 'talento', label: 'Talento' },
  { value: 'emprendedor', label: 'Emprendedor' },
  { value: 'empresa', label: 'Empresa' },
  { value: 'inversionista', label: 'Inversionista' }
]

export default function ApplicationSection({ landing = 'default' }: Props) {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const theme = THEME_LANDINGS[landing]
  const isDefault = landing === 'default'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Implement actual form submission logic
    // For now, just log and show success message
    console.log('Form submitted:', { email, role })
    
    setTimeout(() => {
      setIsSubmitting(false)
      alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.')
      setEmail('')
      setRole('')
    }, 1000)
  }

  return (
    <section id="apply" className='py-20 md:py-28'>
      <ScrollAnimation delay={0.1}>
        <div className='max-w-2xl mx-auto'>
          <Title title="Postúlate al programa" landing={landing} />
          
          <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className='block text-white/80 text-sm font-medium mb-2'>
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all'
                style={{
                  focusRingColor: isDefault ? '#FF97EF' : theme.principal,
                  '--tw-ring-color': isDefault ? '#FF97EF' : theme.principal
                } as React.CSSProperties & { focusRingColor?: string }}
                placeholder='tu@email.com'
              />
            </div>

            {/* Role Selection */}
            <div>
              <label htmlFor="role" className='block text-white/80 text-sm font-medium mb-2'>
                ¿Cuál es tu rol?
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all'
                style={{
                  focusRingColor: isDefault ? '#FF97EF' : theme.principal
                } as React.CSSProperties & { focusRingColor?: string }}
              >
                <option value="" className='bg-[#1C1F2E]'>Selecciona una opción</option>
                {roles.map((r) => (
                  <option key={r.value} value={r.value} className='bg-[#1C1F2E]'>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className='btn-primary w-full text-center'
              style={{
                backgroundColor: isDefault ? '#FFFFFF' : theme.accent || theme.principal,
                color: isDefault ? '#000000' : 'white',
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar postulación'}
            </button>

            <p className='text-white/60 text-xs text-center'>
              Al enviar, aceptas que nos pongamos en contacto contigo para más información sobre el programa.
            </p>
          </form>
        </div>
      </ScrollAnimation>
    </section>
  )
}
