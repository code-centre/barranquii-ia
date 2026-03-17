'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/app/i18n/useTranslation'
import { ArrowLeft, ChevronDown } from 'lucide-react'

const SECTOR_ICONS = ['🏙', '🚢', '🏥', '💳', '🎓', '⚙️']

export default function ProponUnRetoPage() {
  const { t } = useTranslation()
  const formRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    empresa: '',
    sector: '',
    tamano: '',
    nombre: '',
    cargo: '',
    email: '',
    paquete: '',
    reto: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([])
  const [chatInput, setChatInput] = useState('')
  const [chatLoading, setChatLoading] = useState(false)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.empresa || !formData.email || !formData.reto) {
      alert(t('proponReto.formValidationError'))
      return
    }
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/propon-reto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || 'Error al enviar')
      }
      setSubmitted(true)
      setFormData({ empresa: '', sector: '', tamano: '', nombre: '', cargo: '', email: '', paquete: '', reto: '' })
    } catch (err) {
      alert(err instanceof Error ? err.message : t('proponReto.formValidationError'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index))
  }

  const handleChatSend = (question?: string) => {
    const text = (question ?? chatInput).trim()
    if (!text || chatLoading) return
    setChatInput('')
    setChatMessages((prev) => [...prev, { role: 'user', content: text }])
    setChatLoading(true)
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Para consultas detalladas sobre el programa, contacta directamente a anuar@codigoabierto.tech o 3103900986. Nuestro equipo te responderá en menos de 48 horas.',
        },
      ])
      setChatLoading(false)
    }, 800)
  }

  const sectorOptions = t('proponReto.formSectorOptions').split(',')
  const tamanoOptions = t('proponReto.formTamanoOptions').split(',')
  const paqueteOptions = t('proponReto.formPaqueteOptions').split(',')

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <header
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ backgroundColor: '#0d1117' }}
      >
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: 'url(/texture-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-10 w-full">
          <div className="flex justify-between items-start gap-4 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              {t('proponReto.back')}
            </Link>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/20 rounded-full px-4 py-2 text-sm text-white/60 shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#FF97EF] animate-pulse" />
              {t('proponReto.eyebrow')}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {t('proponReto.title').replace(t('proponReto.titleHighlight'), '')}
            <em className="not-italic text-[#FF97EF]">{t('proponReto.titleHighlight')}</em>
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
            {t('proponReto.subtitle')}
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 rounded-full bg-[#FF97EF]/10 border border-[#FF97EF]/30 text-[#FF97EF] text-sm">
              {t('proponReto.pillTax')}
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/20 text-white/90 text-sm">
              {t('proponReto.pillPrototypes')}
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/20 text-white/90 text-sm">
              {t('proponReto.pillParticipants')}
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/20 text-white/90 text-sm">
              {t('proponReto.pillCoverage')}
            </span>
          </div>
        </div>
      </header>

      {/* Packages */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: '#1C1F2E' }}
      >
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-xs uppercase tracking-widest text-[#FF97EF] font-medium mb-3">
            {t('proponReto.packagesTag')}
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            {t('proponReto.packagesTitle')}
          </h2>
          <p className="text-white/70 max-w-xl mb-12">
            {t('proponReto.packagesSub')}
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Explorador */}
            <article className="venture-card p-6 md:p-8 rounded-2xl relative">
              <h3 className="text-xl font-bold text-white mb-2">{t('proponReto.pkgExplorador')}</h3>
              <div className="text-lg font-semibold text-[#FF97EF] mb-1">
                {t('proponReto.pkgExploradorPrice')}
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 text-sm text-white/80 mb-4">
                <span className="w-4 h-4 rounded-full bg-[#00796B] flex items-center justify-center text-[10px]">↓</span>
                {t('proponReto.pkgExploradorNeto')}
              </div>
              <p className="text-sm text-white/60 mb-4 leading-relaxed">{t('proponReto.pkgExploradorDesc')}</p>
              <div className="h-px bg-white/10 my-4" />
              <ul className="space-y-2 text-sm text-white/90">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#00796B] font-bold">✓</span>
                    {t(`proponReto.pkgExplorador${i}`)}
                  </li>
                ))}
                <li className="flex gap-2 text-white/50">
                  <span className="text-white/20">—</span>
                  {t('proponReto.pkgExploradorMuted1')}
                </li>
                <li className="flex gap-2 text-white/50">
                  <span className="text-white/20">—</span>
                  {t('proponReto.pkgExploradorMuted2')}
                </li>
              </ul>
              <button
                type="button"
                onClick={scrollToForm}
                className="w-full mt-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                {t('proponReto.ctaInfo')}
              </button>
            </article>

            {/* Transformación */}
            <article className="venture-card p-6 md:p-8 rounded-2xl relative border-2 border-[#FF97EF]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF97EF] text-black text-xs font-medium px-4 py-1 rounded-full">
                {t('proponReto.pkgRecommended')}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('proponReto.pkgTransformacion')}</h3>
              <div className="text-lg font-semibold text-[#FF97EF] mb-1">
                {t('proponReto.pkgTransformacionPrice')}
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 text-sm text-white/80 mb-4">
                <span className="w-4 h-4 rounded-full bg-[#00796B] flex items-center justify-center text-[10px]">↓</span>
                {t('proponReto.pkgTransformacionNeto')}
              </div>
              <p className="text-sm text-white/60 mb-4 leading-relaxed">{t('proponReto.pkgTransformacionDesc')}</p>
              <div className="h-px bg-white/10 my-4" />
              <ul className="space-y-2 text-sm text-white/90">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#00796B] font-bold">✓</span>
                    {t(`proponReto.pkgTransformacion${i}`)}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={scrollToForm}
                className="btn-primary w-full mt-6 py-3"
              >
                {t('proponReto.ctaProponer')}
              </button>
            </article>
          </div>
          <p className="text-xs text-white/50 text-center mt-4">{t('proponReto.extraTeamNote')}</p>
        </div>
      </section>

      {/* Stages */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: '#0d1117', color: 'white' }}
      >
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-xs uppercase tracking-widest text-[#FF97EF] font-medium mb-3">
            {t('proponReto.stagesTag')}
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {t('proponReto.stagesTitle')}
          </h2>
          <p className="text-white/50 max-w-xl mb-12">
            {t('proponReto.stagesSub')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="p-5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-xs font-bold text-[#FF97EF] mb-2">{t(`proponReto.stage${i}Num`)}</div>
                <div className="text-xs text-white/40 mb-1">{t(`proponReto.stage${i}Period`)}</div>
                <div className="font-bold text-white mb-2">{t(`proponReto.stage${i}Title`)}</div>
                <div className="text-xs text-white/50 leading-relaxed mb-3">{t(`proponReto.stage${i}Desc`)}</div>
                <div className="text-xs text-[#FF97EF] pt-2 border-t border-white/10">{t(`proponReto.stage${i}Outcome`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: '#1C1F2E' }}
      >
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-xs uppercase tracking-widest text-[#FF97EF] font-medium mb-3">
            {t('proponReto.sectorsTag')}
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            {t('proponReto.sectorsTitle')}
          </h2>
          <p className="text-white/70 max-w-xl mb-12">
            {t('proponReto.sectorsSub')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="venture-card p-5 rounded-xl hover:border-[#FF97EF] transition-colors"
              >
                <div className="text-2xl mb-2">{SECTOR_ICONS[i - 1]}</div>
                <div className="font-medium text-white mb-1">{t(`proponReto.sector${i}`)}</div>
                <div className="text-sm text-white/60 leading-relaxed">{t(`proponReto.sector${i}Desc`)}</div>
              </div>
            ))}
          </div>

          {/* Options - Al finalizar el programa */}
          <section
            className="py-20 md:py-28 -mx-5 lg:-mx-10 mt-20 px-5 lg:px-10"
            style={{ backgroundColor: '#0d1117' }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-xs uppercase tracking-widest text-[#FF97EF] font-medium mb-3">
                {t('proponReto.optionsTag')}
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                {t('proponReto.optionsTitle')}
              </h2>
              <p className="text-white/70 max-w-xl mb-8">
                {t('proponReto.optionsSub')}
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <article className="venture-card p-6 rounded-xl">
                  <div className="text-2xl font-bold text-[#FF97EF] mb-2">A</div>
                  <div className="font-medium text-white mb-2">{t('proponReto.optionA')}</div>
                  <div className="text-sm text-white/60 mb-4 leading-relaxed">{t('proponReto.optionADesc')}</div>
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/10 text-white/70">
                    {t('proponReto.optionATag')}
                  </span>
                </article>
                <article className="venture-card p-6 rounded-xl">
                  <div className="text-2xl font-bold text-[#FF97EF] mb-2">B</div>
                  <div className="font-medium text-white mb-2">{t('proponReto.optionB')}</div>
                  <div className="text-sm text-white/60 mb-4 leading-relaxed">{t('proponReto.optionBDesc')}</div>
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/10 text-white/70">
                    {t('proponReto.optionBTag')}
                  </span>
                </article>
                <article className="venture-card p-6 rounded-xl">
                  <div className="text-2xl font-bold text-[#FF97EF] mb-2">C</div>
                  <div className="font-medium text-white mb-2">{t('proponReto.optionC')}</div>
                  <div className="text-sm text-white/60 mb-4 leading-relaxed">{t('proponReto.optionCDesc')}</div>
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/10 text-white/70">
                    {t('proponReto.optionCTag')}
                  </span>
                </article>
              </div>
            </div>
          </section>

          {/* ESG Banner */}
          <div className="mt-12 p-6 md:p-8 rounded-xl bg-white/5 border border-white/10 flex flex-col md:flex-row md:items-center gap-6">
            <p className="text-white/90 leading-relaxed flex-1">{t('proponReto.esgText')}</p>
            <div className="bg-[#00796B] text-white px-6 py-4 rounded-lg text-center shrink-0">
              <span className="block text-2xl font-bold">25%</span>
              <span className="text-sm">{t('proponReto.esgBadge')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: '#1C1F2E' }}
      >
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-xs uppercase tracking-widest text-[#FF97EF] font-medium mb-3">
            {t('proponReto.faqTag')}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            {t('proponReto.faqTitle')}
          </h2>

          <div className="space-y-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="venture-card rounded-xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(i)}
                      className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 text-white hover:text-[#FF97EF] transition-colors"
                    >
                      <span className="font-medium">{t(`proponReto.faq${i}Q`)}</span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-white/60 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === i ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <p className="px-5 pb-4 text-white/70 text-sm leading-relaxed border-t border-white/10 pt-2">
                        {t(`proponReto.faq${i}A`)}
                      </p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* Propón tu reto */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: '#0d1117' }}
      >
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div ref={formRef} className="max-w-xl mx-auto">
            <article className="venture-card p-6 md:p-8 rounded-2xl">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-4 text-[#00796B]">✓</div>
                    <h3 className="text-xl font-bold text-white mb-2">{t('proponReto.successTitle')}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{t('proponReto.successDesc')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-white">{t('proponReto.formTitle')}</h3>
                    <p className="text-sm text-white/60">{t('proponReto.formSub')}</p>

                    <div>
                      <label htmlFor="empresa" className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                        {t('proponReto.formEmpresa')}
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder={t('proponReto.formEmpresaPlaceholder')}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF97EF] focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="sector" className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                          {t('proponReto.formSector')}
                        </label>
                        <select
                          id="sector"
                          name="sector"
                          value={formData.sector}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#FF97EF] focus:border-transparent appearance-none bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2210%22%20height%3D%226%22%20viewBox%3D%220%200%2010%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%201L5%205L9%201%22%20stroke%3D%22%237a7670%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_14px_center] pr-10"
                        >
                          <option value="">{t('proponReto.formSelectPlaceholder')}</option>
                          {sectorOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="tamano" className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                          {t('proponReto.formTamano')}
                        </label>
                        <select
                          id="tamano"
                          name="tamano"
                          value={formData.tamano}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#FF97EF] focus:border-transparent appearance-none bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2210%22%20height%3D%226%22%20viewBox%3D%220%200%2010%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%201L5%205L9%201%22%20stroke%3D%22%237a7670%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_14px_center] pr-10"
                        >
                          <option value="">{t('proponReto.formSelectPlaceholder')}</option>
                          {tamanoOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="nombre" className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                          {t('proponReto.formNombre')}
                        </label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          placeholder={t('proponReto.formNombrePlaceholder')}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF97EF] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="cargo" className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                          {t('proponReto.formCargo')}
                        </label>
                        <input
                          type="text"
                          id="cargo"
                          name="cargo"
                          value={formData.cargo}
                          onChange={handleChange}
                          placeholder={t('proponReto.formCargoPlaceholder')}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF97EF] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                        {t('proponReto.formEmail')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('proponReto.formEmailPlaceholder')}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF97EF] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="paquete" className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                        {t('proponReto.formPaquete')}
                      </label>
                      <select
                        id="paquete"
                        name="paquete"
                        value={formData.paquete}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#FF97EF] focus:border-transparent appearance-none bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2210%22%20height%3D%226%22%20viewBox%3D%220%200%2010%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%201L5%205L9%201%22%20stroke%3D%22%237a7670%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_14px_center] pr-10"
                      >
                        <option value="">{t('proponReto.formSelectPlaceholder')}</option>
                        {paqueteOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="reto" className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                        {t('proponReto.formReto')}
                      </label>
                      <textarea
                        id="reto"
                        name="reto"
                        value={formData.reto}
                        onChange={handleChange}
                        rows={4}
                        placeholder={t('proponReto.formRetoPlaceholder')}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF97EF] focus:border-transparent resize-y min-h-[100px]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? t('proponReto.submitting') : `${t('proponReto.submit')} →`}
                    </button>
                    <p className="text-xs text-white/50 text-center leading-relaxed">{t('proponReto.formNote')}</p>
                  </form>
                )}
            </article>
          </div>
        </div>
      </section>

      {/* Chat - hidden */}
      {false && (
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: '#1C1F2E' }}
      >
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-8">
            <div className="text-xs uppercase tracking-widest text-[#FF97EF] font-medium mb-2">
              {t('proponReto.chatTag')}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t('proponReto.chatTitle')}</h2>
            <p className="text-white/60">{t('proponReto.chatSub')}</p>
          </div>

          <article className="venture-card rounded-2xl overflow-hidden max-w-2xl mx-auto">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10">
              <div className="w-9 h-9 rounded-full bg-[#FF97EF]/20 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#FF97EF]" />
              </div>
              <div>
                <div className="font-medium text-white">{t('proponReto.chatName')}</div>
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  {t('proponReto.chatStatus')}
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4 min-h-[200px] max-h-[320px] overflow-y-auto">
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-medium shrink-0">
                  C
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/90 leading-relaxed max-w-[85%]">
                  {t('proponReto.chatWelcome')}
                </div>
              </div>
              {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium shrink-0 ${
                        msg.role === 'user' ? 'bg-[#FF97EF]' : 'bg-white/10'
                      }`}
                    >
                      {msg.role === 'user' ? 'T' : 'C'}
                    </div>
                    <div
                      className={`rounded-xl px-4 py-3 text-sm leading-relaxed max-w-[85%] ${
                        msg.role === 'user'
                          ? 'bg-[#FF97EF]/20 border border-[#FF97EF]/30 text-white'
                          : 'bg-white/5 border border-white/10 text-white/90'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
              {chatLoading && (
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/10 shrink-0" />
                  <div className="bg-white/5 rounded-xl px-4 py-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-white/50 animate-bounce mr-1" />
                    <span className="inline-block w-2 h-2 rounded-full bg-white/50 animate-bounce mr-1 animation-delay-200" />
                    <span className="inline-block w-2 h-2 rounded-full bg-white/50 animate-bounce animation-delay-400" />
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 p-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => handleChatSend('¿En qué se diferencia el Paquete Explorador del Transformación?')}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 hover:border-[#FF97EF]/30 transition-colors"
              >
                {t('proponReto.quickQ1')}
              </button>
              <button
                type="button"
                onClick={() => handleChatSend('¿Cómo funciona exactamente el beneficio tributario del 25%?')}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 hover:border-[#FF97EF]/30 transition-colors"
              >
                {t('proponReto.quickQ2')}
              </button>
              <button
                type="button"
                onClick={() => handleChatSend('¿Qué tipo de reto debo proponer para que los equipos lo elijan?')}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 hover:border-[#FF97EF]/30 transition-colors"
              >
                {t('proponReto.quickQ3')}
              </button>
              <button
                type="button"
                onClick={() => handleChatSend('¿Qué pasa después del hackatón con mi equipo apadrinado?')}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 hover:border-[#FF97EF]/30 transition-colors"
              >
                {t('proponReto.quickQ4')}
              </button>
            </div>

            <div className="flex gap-2 p-4 border-t border-white/10">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleChatSend(undefined)}
                placeholder={t('proponReto.chatPlaceholder')}
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF97EF] focus:border-transparent"
              />
              <button
                type="button"
                onClick={handleChatSend}
                disabled={chatLoading || !chatInput.trim()}
                className="px-6 py-3 rounded-lg bg-[#FF97EF] text-black font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                {t('proponReto.chatSend')}
              </button>
            </div>
          </article>
        </div>
      </section>
      )}
    </main>
  )
}
