import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    const { hostname, pathname } = req.nextUrl
    console.log('hostname', hostname);
    console.log('pathname', pathname);


    const cleanHost = hostname.replace(/^www\./, '')

    if (cleanHost === 'barranquiia.com' && pathname === '/') {
        const externalUrl = new URL('/barranqui-ia', 'https://www.caribe-ia.com');
        console.log(externalUrl);
        return NextResponse.redirect(externalUrl);
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/'],
}
