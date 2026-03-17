import type { Metadata } from 'next'
import { getLocale } from '../i18n/getLocale'
import { getTranslations, createT } from '../i18n/getTranslation'
import type { Locale } from '../i18n/config'

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale
  const translations = await getTranslations(locale)
  const t = createT(translations)
  return {
    title: t('proponReto.title'),
    description: t('proponReto.subtitle'),
    alternates: {
      canonical: '/propon-un-reto',
    },
  }
}

export default function ProponUnRetoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
