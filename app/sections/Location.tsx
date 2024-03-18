import Image from "next/image";
import React from "react";

export default function Location() {
  return (
    <section className="flex flex-col gap-5">
      <div>
        <h2 className="border- border-principleViolet pl-2 border-l-4 text-lg lg:text-4xl uppercase">
          ¿Cómo llegar?
        </h2>
        <span className="flex items-center gap-1 mt-2 font-semibold text-gray-400 uppercase">
          <div className="bg-principleViolet rounded-full w-1 h-1"></div>
          Ubicación
        </span>
        <p className="mt-5 max-w-xs text-gray-300">
          Área metropolitana de, Kilómetro 5, vía Puerto Colombia, Barranquilla,
          Atlántico
        </p>
      </div>
      <Image
        src="/uni-norte.png"
        height={47}
        width={150}
        alt="Logo de la universidad de la norte"
      />
      <div className="bg-gray-500 rounded-md h-[300px] md:h-[500px]">
      </div>
    </section>
  );
}
