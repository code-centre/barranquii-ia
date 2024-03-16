import Image from "next/image";
import React from "react";

export default function DescriptionEvent() {
  return (
    <section className="relative flex flex-col gap-10 text-left">
      <div>
        <h2 className="font-medium text-4xl md:text-6xl">Hackaton</h2>
        <h3 className="text-2xl md:text-4xl">
          Barranqui-IA
        </h3>
        <span className="flex items-center gap-1 mt-2 font-semibold text-gray-400 uppercase">
          <div className="bg-principleViolet rounded-full w-1 h-1"></div>
          Evento
        </span>
      </div>
      <div className="flex">
        <div className="flex flex-col gap-4 xl:max-w-md">
          <h2 className="border- border-principleViolet pl-2 border-l-4 text-lg lg:text-5xl">
            ¿Qué es?
          </h2>
          <p className="lg:max-w-md text-gray-300">
            Este evento no es solo una aventura tecnológica; es una misión para
            convertir a Barranquilla en el epicentro de la revolución de la
            inteligencia artificial en Colombia.
          </p>
          <p className="lg:max-w-md text-gray-300">
            Sumérgete en un espacio lleno de creatividad, innovación y
            colaboración, donde explorarás el vasto universo de la IA,
            independientemente de tu nivel de experiencia.
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
