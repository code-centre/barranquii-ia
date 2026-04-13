'use client'

import { useTranslation } from '@/app/i18n/useTranslation'

export default function VideoHighlight() {
  const { t } = useTranslation()

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: '#0d1117' }}>
      <div className="max-w-4xl mx-auto px-5 lg:px-10">
        <header className="text-center mb-10">
          <div className="text-xs uppercase tracking-widest text-[#FF97EF] font-medium mb-3">
            {t('videoSection.tag')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            {t('videoSection.title')}
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            {t('videoSection.subtitle')}
          </p>
        </header>

        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(255,151,239,0.1)]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/3IKBGPhi3YA"
            title="Barranqui-IA 2026"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
