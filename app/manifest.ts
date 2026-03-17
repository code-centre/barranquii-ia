import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Caribe-IA 2026',
    short_name: 'Caribe-IA',
    description: 'Programa de innovación abierta: hackatones de IA, aceleración y Demo Day ante inversionistas en TechCaribe Fest. Respaldado por Caribe Ventures.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1C1F2E',
    theme_color: '#FF97EF',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
