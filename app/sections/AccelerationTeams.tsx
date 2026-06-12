'use client'
import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Trophy, ChevronDown, ChevronUp, Sparkles } from 'lucide-react'
import ScrollAnimation from '../components/2026/ScrollAnimation'
import { EQUIPOS_2026, LINEAS_2026, type LineaTematica } from '../utils/equipos2026'
import { useTranslation } from '@/app/i18n/useTranslation'

const ACCENT = '#FF97EF'
const COLLAPSED_COUNT = 18

type Filter = 'all' | LineaTematica

export default function AccelerationTeams() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<Filter>('all')
  const [expanded, setExpanded] = useState(false)

  const teams = useMemo(() => {
    const list = filter === 'all' ? EQUIPOS_2026 : EQUIPOS_2026.filter((e) => e.linea === filter)
    // Winners first so they're always visible when collapsed
    return [...list].sort((a, b) => Number(Boolean(b.award)) - Number(Boolean(a.award)))
  }, [filter])

  const visibleTeams = expanded ? teams : teams.slice(0, COLLAPSED_COUNT)
  const hasMore = teams.length > COLLAPSED_COUNT

  const filters: { id: Filter; label: string; count: number }[] = [
    { id: 'all', label: t('accelTeams.filterAll'), count: EQUIPOS_2026.length },
    ...LINEAS_2026.map((l) => ({
      id: l.id as Filter,
      label: t(l.labelKey),
      count: EQUIPOS_2026.filter((e) => e.linea === l.id).length,
    })),
  ]

  const stats = [
    { value: '70', label: t('accelTeams.statProjects') },
    { value: '10', label: t('accelTeams.statSpots') },
    { value: '12', label: t('accelTeams.statWeeks') },
    { value: 'OCT', label: t('accelTeams.statDemoDay') },
  ]

  return (
    <section
      id="aceleracion"
      aria-label={t('accelTeams.ariaLabel')}
      className="relative py-20 md:py-28 overflow-hidden scroll-mt-20"
      style={{ backgroundColor: '#14161F' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url(/texture-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute -top-32 right-0 w-[32rem] h-[32rem] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255, 151, 239, 0.18) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 -left-32 w-[28rem] h-[28rem] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(109, 14, 173, 0.3) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-10 w-full">
        {/* Header */}
        <ScrollAnimation delay={0.1}>
          <header className="mb-12">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-5"
              style={{
                backgroundColor: 'rgba(255, 151, 239, 0.12)',
                color: ACCENT,
                border: '1px solid rgba(255, 151, 239, 0.35)',
              }}
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: ACCENT }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: ACCENT }} />
              </span>
              {t('accelTeams.label')}
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              {t('accelTeams.titleLine1')}{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(to right, #FF97EF, #a855f7, #6D0EAD)',
                  WebkitBackgroundClip: 'text',
                }}
              >
                {t('accelTeams.titleLine2')}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">
              {t('accelTeams.subtitle')}
            </p>
          </header>
        </ScrollAnimation>

        {/* Stats strip */}
        <ScrollAnimation delay={0.15} direction="up">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 list-none" role="list">
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="rounded-2xl p-5 text-center"
                style={{
                  backgroundColor: 'rgba(28, 31, 46, 0.9)',
                  border: '1px solid rgba(255, 151, 239, 0.25)',
                }}
              >
                <p className="text-3xl md:text-4xl font-bold tabular-nums mb-1" style={{ color: ACCENT }}>
                  {stat.value}
                </p>
                <p className="text-white/70 text-xs md:text-sm leading-snug">{stat.label}</p>
              </li>
            ))}
          </ul>
        </ScrollAnimation>

        {/* Filters */}
        <ScrollAnimation delay={0.2}>
          <nav aria-label={t('accelTeams.filtersAria')} className="mb-8">
            <ul className="flex flex-wrap gap-2 list-none" role="list">
              {filters.map((f) => {
                const active = filter === f.id
                return (
                  <li key={f.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setFilter(f.id)
                        setExpanded(false)
                      }}
                      aria-pressed={active}
                      className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                      style={
                        active
                          ? { backgroundColor: ACCENT, color: '#14161F' }
                          : {
                              backgroundColor: 'rgba(255, 255, 255, 0.06)',
                              color: 'rgba(255, 255, 255, 0.75)',
                              border: '1px solid rgba(255, 255, 255, 0.12)',
                            }
                      }
                    >
                      {f.label}
                      <span className="ml-1.5 opacity-70 tabular-nums">{f.count}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>
        </ScrollAnimation>

        {/* Teams grid */}
        <div className="relative">
          <motion.ul
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none"
            role="list"
          >
            <AnimatePresence mode="popLayout">
              {visibleTeams.map((team) => (
                <motion.li
                  key={`${team.linea}-${team.name}`}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                >
                  <article
                    className="h-full rounded-xl px-4 py-3.5 transition-colors duration-200 hover:bg-white/[0.07]"
                    style={{
                      backgroundColor: team.award ? 'rgba(255, 151, 239, 0.08)' : 'rgba(255, 255, 255, 0.04)',
                      border: team.award
                        ? '1px solid rgba(255, 151, 239, 0.45)'
                        : '1px solid rgba(255, 255, 255, 0.09)',
                    }}
                  >
                    <h3 className="text-white font-semibold text-sm flex items-center gap-2 flex-wrap">
                      {team.name}
                      {team.award && (
                        <span
                          className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: 'rgba(255, 151, 239, 0.18)', color: ACCENT }}
                        >
                          <Trophy size={10} aria-hidden="true" />
                          {team.award}
                        </span>
                      )}
                    </h3>
                    <p className="text-white/55 text-xs mt-1 leading-relaxed">{team.desc}</p>
                  </article>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>

          {/* Fade overlay when collapsed */}
          {!expanded && hasMore && (
            <div
              className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent, #14161F)' }}
              aria-hidden="true"
            />
          )}
        </div>

        {/* Expand toggle */}
        {hasMore && (
          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-colors"
              style={{
                border: `1px solid ${ACCENT}60`,
                color: ACCENT,
                backgroundColor: 'rgba(255, 151, 239, 0.06)',
              }}
            >
              {expanded
                ? t('accelTeams.showLess')
                : t('accelTeams.showAll', { count: String(teams.length) })}
              {expanded ? <ChevronUp size={16} aria-hidden="true" /> : <ChevronDown size={16} aria-hidden="true" />}
            </button>
          </div>
        )}

        {/* Open call banner */}
        <ScrollAnimation delay={0.1} direction="up">
          <aside
            className="mt-14 rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(109, 14, 173, 0.35) 0%, rgba(28, 31, 46, 0.95) 60%)',
              border: '2px solid rgba(255, 151, 239, 0.5)',
              boxShadow: '0 8px 40px rgba(255, 151, 239, 0.12)',
            }}
          >
            <div
              className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-40 pointer-events-none"
              style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)` }}
              aria-hidden="true"
            />
            <div className="relative z-10 flex-1">
              <p className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase mb-3" style={{ color: ACCENT }}>
                <Sparkles size={14} aria-hidden="true" />
                {t('accelTeams.openCallTag')}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {t('accelTeams.openCallTitle')}
              </h3>
              <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                {t('accelTeams.openCallDesc')}
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link
                href="/aceleracion"
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-base whitespace-nowrap"
                style={{ backgroundColor: '#FFFFFF', color: '#000000' }}
              >
                {t('accelTeams.openCallCta')}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </ScrollAnimation>
      </div>
    </section>
  )
}
