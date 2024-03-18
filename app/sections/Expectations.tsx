import Image from "next/image";
import React from "react";

export default function Expectations() {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="border-principleViolet pl-2 border-l-4 text-lg lg:text-4xl uppercase">
        ¿Qué esperar del evento?
      </h2>
      <div className="flex md:flex-row flex-col">
        <Image
          className="w-full md:object-cover"
          src="/expectation-image.webp"
          width={300}
          height={300}
          alt=""
        />
        <div className="flex flex-col gap-4 bg-[#1a1a1a] p-6 md:rounded-tr-md md:rounded-br-md">
          <p>
            Aprovecha este espacio para aprender y conocer gente de distintos
            perfiles apasionada por la inteligencia artificial. Podrás encontrar:
          </p>

          <ul className="flex flex-col gap-2">
            <li>Talleres, créditos y mentores para guiarte</li>
            <li>Dinámicas divertidas</li>
            <li>Comida y ¡Muchos premios!</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
