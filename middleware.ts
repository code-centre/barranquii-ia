import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const hostname = req.nextUrl.hostname

  if (hostname === 'barranquiia.com') {
    const url = req.nextUrl.clone()
    url.pathname = '/barranqui-ia'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}