"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutBarranquiIA() {
  return (
    <section id="que-es" className="text-white relative overflow-hidden py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <header>
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              ¿Qué es Barranqui-IA?
            </span>
          </h2>
          <p className="text-xl mb-12 mx-auto">
            Barranqui-IA es un hackatón de 48 horas donde desarrolladores,
            diseñadores, data lovers y builders se reúnen para crear
            soluciones reales con IA.
          </p>
        </header>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 list-none">
          <motion.li
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-purple-500">
              <Image
                src="/FOTOSBARRANQUI-IA/verano.jpg"
                alt="Retos empresariales"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start gap-4 w-full">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <p className="text-lg text-left">
                Las empresas patrocinadoras definen <strong>líneas temáticas</strong>
              </p>
            </div>
          </motion.li>

          <motion.li
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-pink-500">
              <Image
                src="/FOTOSBARRANQUI-IA/9.webp"
                alt="Prototipo funcional"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start gap-4 w-full">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <p className="text-lg text-left">
                Los participantes forman equipos y desarrollan <strong>prototipos funcionales</strong> en 48 horas
              </p>
            </div>
          </motion.li>

          <motion.li
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-purple-500">
              <Image
                src="/ganadores/alumbra.jpg"
                alt="Presentación y premiación"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start gap-4 w-full">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <p className="text-lg text-left">
                Se presentan los proyectos finalistas y compiten hasta por <strong>$10,000,000 en premios</strong>
              </p>
            </div>
          </motion.li>
        </ol>

        <motion.aside
          className="bg-purple-900/30 border-2 border-pink-500 rounded-xl p-6 md:p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-center">
            Los equipos participantes tendrán la oportunidad de postularse para continuar con su proyecto participando en el programa{' '}
            <Link
              href="/"
              className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-400 transition-all duration-300 font-bold"
            >
              Caribe-IA
            </Link>{' '}
            en el cual recibirán capacitación en desarrollo de software y negocios para convertir su prototipo en una startup y presentarla en{' '}
            <strong>Tech Caribe</strong>, el mercado tech del Caribe el próximo 25 de Julio.
          </p>
        </motion.aside>
      </div>
    </section>
  );
}