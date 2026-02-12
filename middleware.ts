import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { COOKIE_NAME, isValidLocale, DEFAULT_LOCALE, type Locale } from './app/i18n/config'

function detectLocaleFromHeader(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE
  const preferred = acceptLanguage
    .split(',')
    .map((part) => {
      const [code, q = '1'] = part.trim().split(';q=')
      return { code: code.split('-')[0].toLowerCase(), q: parseFloat(q.replace(/^q=/, '') || '1') }
    })
    .sort((a, b) => b.q - a.q)
  for (const { code } of preferred) {
    if (code === 'es') return 'es'
    if (code === 'en') return 'en'
    if (code === 'pt') return 'pt'
  }
  return DEFAULT_LOCALE
}

export function middleware(req: NextRequest) {
  const { hostname, pathname } = req.nextUrl
  const response = NextResponse.next()

  const cleanHost = hostname.replace(/^www\./, '')

  if (cleanHost === 'barranquiia.com' && pathname === '/') {
    const externalUrl = new URL('/barranqui-ia', 'https://www.caribe-ia.com')
    return NextResponse.redirect(externalUrl)
  }

  let locale: Locale = DEFAULT_LOCALE
  const cookieLocale = req.cookies.get(COOKIE_NAME)?.value
  if (cookieLocale && isValidLocale(cookieLocale)) {
    locale = cookieLocale
  } else {
    locale = detectLocaleFromHeader(req.headers.get('accept-language'))
  }

  response.cookies.set(COOKIE_NAME, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|api/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2)$).*)',
  ],
}
