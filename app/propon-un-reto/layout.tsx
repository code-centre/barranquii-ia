import type { Metadata } from 'next'
import { getLocale } from '../i18n/getLocale'
import { getTranslations, createT } from '../i18n/getTranslation'
import type { Locale } from '../i18n/config'

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale
  const translations = await getTranslations(locale)
  const t = createT(translations)
  const title = t('proponReto.title')
  const description = t('proponReto.subtitle')
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'https://www.caribe-ia.com/propon-un-reto',
      images: [
        {
          url: 'https://www.caribe-ia.com/caribe-ia-og.png',
          width: 960,
          height: 540,
          alt: title,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.caribe-ia.com/caribe-ia-og.png'],
    },
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
