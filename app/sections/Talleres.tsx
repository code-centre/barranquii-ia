'use client'
import React from "react";
import Image from "next/image";

export default function Talleres() {
  const talleres = [
    { src: "/talleres/bwai-aaron.webp", alt: "Build With AI - Aarón", link: "https://www.youtube.com/watch?v=XM4t6NtH-WY" },
    { src: "/talleres/bwai-carlos.webp", alt: "Build With AI - Carlos", link: "https://www.youtube.com/watch?v=eBt23lSNSgA" },
    { src: "/talleres/bwai-juan.webp", alt: "Build With AI - Juan", link: "https://www.youtube.com/watch?v=faeSCMAJWVU" },
    { src: "/talleres/bwai-mayra.webp", alt: "Build With AI - Mayra", link: "https://www.youtube.com/watch?v=dVjSuL_3FdQ" },
    { src: "/talleres/bwai-santiago.webp", alt: "Build With AI - Santiago", link: "https://www.youtube.com/watch?v=hyqUerVgEqo" },
    { src: "/talleres/bwai-vanessa.webp", alt: "Build With AI - Vanessa", link: "https://www.youtube.com/watch?v=IL1x4k6SEMo" },
  ];

  return (
    <section id="talleres" className="flex flex-col items-center gap-16 pt-40 bg-black text-white w-full px-6 sm:px-10">
      {/* Título */}
      <h2 className="border-principleViolet pl-2 border-l-4 font-bold text-2xl md:text-2xl lg:text-4xl uppercase self-start">
        Talleres
      </h2>

      {/* Contenedor principal */}
      <div className="w-full max-w-[1900px] mx-auto">
        {/* Primera fila: 2 imágenes con texto en el centro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
          {/* Imagen izquierda */}
          <div className="flex flex-col items-center">
            <Image
              className="w-full max-w-[500px] h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              src={talleres[0].src}
              alt={talleres[0].alt}
              width={400}
              height={350}
            />
            <a href={talleres[0].link} target="_blank" rel="noopener noreferrer" className="text-purple-500 mt-4 text-lg">Ver curso</a>
          </div>

          {/* Texto en el medio */}
          <div className="text-center px-4 md:px-16">
            <h2 className="text-4xl md:text-5xl font-extrabold">Potenciado por</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold mt-4 text-purple-500">Build with AI</h3>
            <p className="mt-6 text-xl md:text-2xl leading-relaxed">
              Contamos con la participación de 6 expertos que nos regalaron increíbles talleres sobre cómo sacarle el máximo provecho a la inteligencia artificial de la mano de Google y Python Colombia.
            </p>
          </div>

          {/* Imagen derecha */}
          <div className="flex flex-col items-center">
            <Image
              className="w-full max-w-[500px] h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              src={talleres[1].src}
              alt={talleres[1].alt}
              width={400}
              height={350}
            />
            <a href={talleres[1].link} target="_blank" rel="noopener noreferrer" className="text-purple-500 mt-4 text-lg">Ver curso</a>
          </div>
        </div>

        {/* Segunda fila: 4 imágenes más grandes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 mt-16">
          {talleres.slice(2).map((taller, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                className="w-full max-w-[500px] h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                src={taller.src}
                alt={taller.alt}
                width={500}
                height={350}
              />
              <a href={taller.link} target="_blank" rel="noopener noreferrer" className="text-purple-500 mt-4 text-lg">Ver curso</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
