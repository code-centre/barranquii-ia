import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/tickets/', '/api/'],
      },
    ],
    sitemap: 'https://www.caribe-ia.com/sitemap.xml',
  }
}
