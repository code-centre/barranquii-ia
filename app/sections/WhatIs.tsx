import Image from "next/image";
import React from "react";

export default function WhatIs() {
  return (
    <section className="relative flex flex-col gap-10 text-left">
      <div>
        <h2 className="font-bold text-4xl md:text-6xl">Hackatón</h2>
        <h3 className="text-2xl md:text-4xl">Barranqui-IA</h3>
        <span className="flex items-center gap-1 mt-2 font-semibold text-gray-400 uppercase">
          <div className="bg-principleViolet rounded-full w-1 h-1"></div>
          Evento
        </span>
      </div>
      <div className="flex">
        <div className="flex flex-col gap-4 xl:max-w-md">
          <h2 className="border-principleViolet pl-2 border-l-4 font-bold text-lg lg:text-4xl uppercase">
            ¿Qué es?
          </h2>
          <p className="lg:max-w-md text-gray-300">
            Es mucho más que un simple concurso de programación. Es una
            oportunidad para demostrar tus habilidades, aprender y crear
            proyectos innovadores que podrían cambiar el mundo.
          </p>
          <p className="lg:max-w-md text-gray-300">
            Pero este hackatón es aún más especial. No se trata solo de una
            aventura tecnológica; es una misión para hacer de Barranquilla el
            epicentro de la revolución de la inteligencia artificial en
            Colombia.
          </p>
          <p className="lg:max-w-md text-gray-300">
            Únete a nosotros en esta emocionante aventura. Demuestra tu talento,
            trabaja en soluciones innovadoras y sé parte de la revolución
            tecnológica que está transformando el mundo. ¡Te esperamos para
            hacer historia juntos!
          </p>
        </div>
        <div className="lg:block relative hidden lg:w-[200px] xl:w-[500px]">
          <Image
            className="top-0 xl:-top-20 left-[40%] absolute"
            src="/square.webp"
            height={400}
            width={400}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
