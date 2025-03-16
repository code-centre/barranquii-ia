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
    <section id="talleres" className="flex flex-col scroll-mt-32 items-center gap-12 bg-black text-white w-full px-10">
      {/* Título */}
      <h2 className="border-l-4 border-principleViolet pl-4 font-bold text-2xl lg:text-4xl uppercase self-start">
        Talleres
      </h2>

      {/* Contenedor principal */}
      <div className="w-full max-w-5xl mx-auto grid gap-12">
        {/* Primera fila: 2 imágenes con texto en el centro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Imagen izquierda */}
          <div className="flex flex-col items-center text-center">
            <Image
              className="w-full max-w-xs sm:max-w-sm h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              src={talleres[0].src}
              alt={talleres[0].alt}
              width={400}
              height={350}
            />
            <a href={talleres[0].link} target="_blank" rel="noopener noreferrer">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 mt-4 text-lg">
                Ver curso
              </button>
            </a>
          </div>


          {/* Texto en el medio */}
          <div className="text-center px-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Potenciado por</h2>
            <h3 className="text-4xl sm:text-5xl font-extrabold mt-4 text-purple-500">Build with AI</h3>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed">
              Contamos con la participación de 6 expertos que nos regalaron increíbles talleres sobre cómo sacarle el máximo provecho a la inteligencia artificial de la mano de Google y Python Colombia.
            </p>
          </div>

          {/* Imagen derecha */}
          <div className="flex flex-col items-center text-center">
            <Image
              className="w-full max-w-xs sm:max-w-sm h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              src={talleres[1].src}
              alt={talleres[1].alt}
              width={500}
              height={350}
            />
            <a href={talleres[0].link} target="_blank" rel="noopener noreferrer">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 mt-4 text-lg">
                Ver curso
              </button>
            </a>
          </div>

        </div>

        {/* Segunda fila: 4 imágenes más grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {talleres.slice(2).map((taller, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                className="w-full max-w-xs sm:max-w-sm h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                src={taller.src}
                alt={taller.alt}
                width={500}
                height={350}
              />
              <a href={talleres[0].link} target="_blank" rel="noopener noreferrer">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 mt-4 text-lg">
                  Ver curso
                </button>
              </a>
            </div>


          ))}
        </div>
      </div>
    </section>
  );
}