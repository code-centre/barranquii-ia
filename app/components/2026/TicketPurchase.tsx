"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function TicketPurchase() {
  return (
    <section id="boletos" className="text-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0 opacity-5" aria-hidden="true">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Background glow elements */}
      <div
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <header className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Adquiere tu entrada
            </span>
          </h2>
        </header>

        {/* Ticket Stages */}
        <article className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Primera etapa - Preventa - Habilitada */}
          <motion.section
            className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-8 border border-purple-500/50 flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Preventa</h3>
            <p className="text-4xl font-extrabold text-white mb-2">$120,000 COP</p>
            <p className="text-gray-300 mb-6">5 de Febrero al 28 de Febrero</p>
            <button className="bg-yellow-400 text-purple-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-colors duration-300">
              Compra tu boleto
            </button>
          </motion.section>

          {/* Segunda etapa - Deshabilitada */}
          <motion.section
            className="bg-purple-900/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20 flex flex-col items-center text-center opacity-50"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.5, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-500 mb-4">Primera etapa</h3>
            <p className="text-4xl font-extrabold text-gray-400 mb-2 line-through">$150,000 COP</p>
            <p className="text-gray-400 mb-6">1 de Marzo al 15 de Abril</p>
            <button
              className="bg-gray-600 text-gray-300 font-bold py-3 px-8 rounded-full cursor-not-allowed opacity-70"
              disabled
            >
              Próximamente
            </button>
          </motion.section>

          {/* Tercera etapa - Deshabilitada */}
          <motion.section
            className="bg-purple-900/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20 flex flex-col items-center text-center opacity-50"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.5, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-500 mb-4">Segunda etapa</h3>
            <p className="text-4xl font-extrabold text-gray-400 mb-2 line-through">$180,000 COP</p>
            <p className="text-gray-400 mb-6">16 de Abril al 30 de Abril</p>
            <button
              className="bg-gray-600 text-gray-300 font-bold py-3 px-8 rounded-full cursor-not-allowed opacity-70"
              disabled
            >
              Próximamente
            </button>
          </motion.section>
        </article>

        {/* Benefits Section */}
        <motion.aside
          className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">
            ¿Qué incluye tu boleto?
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
            {[
              'Acceso a todas las áreas del evento',
              'Participación en talleres y mentorías',
              'Alimentación durante el evento',
              'Kit de participante exclusivo',
              'Certificado de participación',
              'Oportunidad de ganar premios',
            ].map((benefit, index) => (
              <motion.li
                key={index}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <div
                  className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  aria-hidden="true"
                >
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-300">{benefit}</p>
              </motion.li>
            ))}
          </ul>
        </motion.aside>

        {/* Motivational Message */}
        <footer className="text-center">
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            No necesitas equipo aún. No necesitas idea. Solo ganas de construir.
          </p>
        </footer>
      </div>
    </section>
  );
}