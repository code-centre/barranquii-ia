import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { hostname, pathname } = req.nextUrl

  // Normalizamos por si viene con www
  const cleanHost = hostname.replace(/^www\./, '')

  if (cleanHost === 'barranquiia.com' && pathname === '/') {
    const url = req.nextUrl.clone()
    url.pathname = '/barranqui-ia'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// Solo aplicamos el middleware a la raíz "/"
export const config = {
  matcher: ['/'],
}