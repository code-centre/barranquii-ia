import React from 'react';
import Link from 'next/link';
import NavigationIsland from '../components/2026/NavigationIsland';

interface HeroSection2026Props {
  landing: string;
}

export default function HeroSection2026({ landing }: HeroSection2026Props) {
  return (
    <header className="relative py-32">
      {/* Background abstract shapes */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute top-0 left-15 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDuration: '16s' }}
        />
      </div>

      {/* Navigation */}
      <nav aria-label="Navegación principal">
        <NavigationIsland />
      </nav>

      {/* Main Content */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4">
        <p className="text-lg text-center mb-4" style={{ fontFamily: 'var(--font-poppinss)' }}>
          3ra Edición - 1 al 3 de Mayo
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-center mb-6 relative">
          <span className="relative inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent bg-[length:300%_auto] animate-gradient-shift drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Barranqui-IA
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer pointer-events-none">
            Barranqui-IA
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white text-center mb-12 max-w-3xl" style={{ fontFamily: 'var(--font-poppinss)' }}>
          Construye el futuro desde el Caribe con Inteligencia artificial
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <a
            href="#que-es"
            className="px-8 py-3 border-2 border-purple-600 hover:border-purple-500 hover:bg-purple-600/10 text-white rounded-lg font-semibold transition-all duration-300 inline-block text-center"
            style={{ fontFamily: 'var(--font-poppinss)' }}
            aria-label="Conoce más sobre Barranqui-IA"
          >
            Conoce más
          </a>
          <a
            href="#boletos"
            className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold transition-colors inline-block text-center"
            style={{ fontFamily: 'var(--font-poppinss)' }}
            aria-label="Accede a la preventa de boletos"
          >
            Accede a la preventa
          </a>
        </div>

        <p className="text-sm text-purple-200" style={{ fontFamily: 'var(--font-poppinss)' }}>
          Cupos limitados - Primera etapa
        </p>
      </section>
    </header>
  );
}