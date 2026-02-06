"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function IsItForYou() {
  const galleryImages = [
    { src: '/FOTOSBARRANQUI-IA/2.webp', alt: 'Equipos trabajando en sus proyectos' },
    { src: '/FOTOSBARRANQUI-IA/1.webp', alt: 'Participantes del hackatón Barranqui-IA' },
    { src: '/FOTOSBARRANQUI-IA/3.webp', alt: 'Ambiente colaborativo del evento' },
    { src: '/FOTOSBARRANQUI-IA/4.webp', alt: 'Mentorías y talleres' },
    { src: '/FOTOSBARRANQUI-IA/6.webp', alt: 'Presentación de proyectos' },
    { src: '/FOTOSBARRANQUI-IA/7.webp', alt: 'Comunidad tecnológica reunida' },
    { src: '/FOTOSBARRANQUI-IA/8.webp', alt: 'Desarrollo de prototipos' },
    { src: '/FOTOSBARRANQUI-IA/9.webp', alt: 'Networking y colaboración' },
    { src: '/FOTOSBARRANQUI-IA/10.webp', alt: 'Experiencia del hackatón' },
    { src: '/FOTOSBARRANQUI-IA/11.webp', alt: 'Equipos innovando con IA' },
    { src: '/FOTOSBARRANQUI-IA/12.webp', alt: 'Celebración y premiación' },
  ];

  return (
    <section className="py-16 text-white relative overflow-hidden">
      {/* Background glow elements */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <header className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              ¿No sabes si es para ti?
            </span>
          </h2>
          <p className="text-xlg text-gray-300 mb-4">
            Un hackatón es un espacio seguro para explorar la tecnología, aprender y probar tus límites.
            Estarás rodeado de otros participantes que, al igual que tú, no tienen todas las respuestas,
            pero se atreven a construir apoyados de inteligencia artificial.
          </p>
          <p className="text-lg text-gray-300">
            También habrá mentores para ayudarte a resolver tus dudas y guiarte para completar tu prototipo.
          </p>
        </header>

        {/* Image Gallery */}
        <figure className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Main featured image */}
          <motion.div
            className="lg:col-span-2 relative h-96 rounded-lg overflow-hidden shadow-lg border border-purple-500/30"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
          </motion.div>

          {/* Secondary images */}
          <div className="grid grid-cols-1 gap-6">
            <motion.div
              className="relative h-44 rounded-lg overflow-hidden shadow-lg border border-purple-500/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
            <motion.div
              className="relative h-44 rounded-lg overflow-hidden shadow-lg border border-purple-500/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </div>
        </figure>

        {/* Additional gallery grid */}
        <article className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {galleryImages.slice(3, 11).map((image, index) => (
            <motion.div
              key={index}
              className="relative h-48 rounded-lg overflow-hidden shadow-lg border border-purple-500/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </article>

        <footer className="text-center">
          <p className="text-2xl font-semibold text-purple-300 max-w-4xl mx-auto">
            Bienvenidos developers, diseñadores, estudiantes y cualquier profesional (o no profesional) que
            se atreva a romper sus propios límites.
          </p>
        </footer>
      </div>
    </section>
  );
}