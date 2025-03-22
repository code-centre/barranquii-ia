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
    <section id="talleres" className="flex flex-col scroll-mt-32 items-center gap-12 bg-black text-white w-full px-6 sm:px-10">
      <h2 className="border-l-4 border-principleViolet pl-4 font-bold text-2xl md:text-3xl lg:text-4xl uppercase self-start">
        Talleres
      </h2>
      <p className="text-l md:text-l leading-relaxed">
        Tuvimos el privilegio de contar con <strong  className="text-purple-500">6 expertos</strong> que compartieron su conocimiento a través de talleres exclusivos, brindando herramientas clave para aprovechar al máximo la inteligencia artificial. De la mano de <strong  className="text-purple-500">Google y Python Colombia,</strong> los participantes exploraron el poder de la IA, aprendiendo de manera práctica y guiada por referentes de la industria.
      </p>

      <div className="w-full max-w-9xl mx-auto grid gap-12">
        {/* Primera fila */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center text-center">
            <Image
              className="w-full max-w-sm md:max-w-lg h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              src={talleres[0].src}
              alt={talleres[0].alt}
              width={300}
              height={300}
            />
            <a href={talleres[0].link} target="_blank" rel="noopener noreferrer">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 mt-4 text-lg">
                Ver grabación
              </button>
            </a>
          </div>

          <div className="flex flex-col text-center px-4 md:max-w-2xl">
            <h2 className="text-l md:text-l font-extrabold">Potenciado por</h2>
            <div className="flex justify-center mt-4 ">
              <Image
                src="/logos/build.jpg"
                alt="Build With AI"
                width={450}
                height={80}
                className="h-auto rounded-25px"
              />
            </div>
          </div>


          <div className="flex flex-col items-center text-center">
            <Image
              className="w-full max-w-sm md:max-w-lg h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              src={talleres[1].src}
              alt={talleres[1].alt}
              width={300}
              height={300}
            />
            <a href={talleres[1].link} target="_blank" rel="noopener noreferrer">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 mt-4 text-lg">
                Ver grabación
              </button>
            </a>
          </div>
        </div>

        {/* Segunda fila - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {talleres.slice(2).map((taller, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                className="w-full max-w-sm md:max-w-lg h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                src={taller.src}
                alt={taller.alt}
                width={300}
                height={300}
              />
              <a href={taller.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 mt-4 text-lg">
                  Ver grabación
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
