import Image from "next/image";
import React from "react";

export default function WhatIs() {
  return (
    <section
      id="what-is"
      className="relative flex flex-col gap-10 pt-32 text-left"
    >
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
            Un hackatón es un evento de innovación donde diferentes personas se
            reúnen para crear, diseñar y programar soluciones a una o más
            problemáticas que existen en la sociedad. En este caso, utilizando
            inteligencia artificial.
          </p>
          <p className="lg:max-w-md text-gray-300">
            Participar en Barranqui-IA es una forma increíble de entrar en la
            comunidad de tecnología y para aprender nuevas habilidades,
            construir proyectos increíbles y compartir ideas. Un hackatón se
            describe mejor como un "maratón de invención". Cualquiera que tenga
            interés en la tecnología asiste a un hackatón para aprender,
            construir y compartir sus creaciones durante un fin de semana en un
            ambiente relajado y acogedor. ¡No tienes que ser programador ni un
            experto en inteligencia artificial.
          </p>
          <p className="lg:max-w-md text-gray-300">
            ¡Únete a nosotros para demostrar que en Barranquilla también creamos
            cosas increibles! Sé parte de la revolución tecnológica que está
            transformando el mundo. ¡Te esperamos para hacer historia juntos!
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
