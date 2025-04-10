import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host') || ''
  const url = req.nextUrl.clone()

  // Para debug: imprime el dominio
  console.log('hostname:', hostname)

  // Redirige solo si accede a la raíz y el dominio es barranquiia.com
  if (hostname === 'barranquiia.com' && req.nextUrl.pathname === '/') {
    url.pathname = '/barranqui-ia'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}