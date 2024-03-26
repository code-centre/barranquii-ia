import Image from "next/image";
import React from "react";

export default function Expectations() {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="border-principleViolet pl-2 border-l-4 font-bold text-lg lg:text-4xl uppercase">
        ¿Qué esperar en el evento?
      </h2>
      <div className="flex md:flex-row flex-col">
        <Image
          className="w-full md:object-cover"
          src="/expectation-image.webp"
          width={300}
          height={300}
          alt=""
        />
        <div className="flex flex-col gap-4 bg-[#1a1a1a] p-6 md:rounded-tr-md md:rounded-br-md text-gray-300">
          {/* <p>
            Más allá de los premios, Barranqui-IA es tu oportunidad para ser
            parte de un movimiento que busca transformar Barranquilla y
            Colombia, marcando un antes y un después en la industria tecnológica
            del país.
          </p> */}
          <p>
            Imagina un entorno seguro y divertido, cargado de talleres para
            entender como aprovechar la inteligencia artificial y actividades
            divertidas, perfecto para aprender y experimentar.
          </p>
          <p>
            Y para hacer esta experiencia aún más invaluable, contarás con la
            mentoría de googlers y Google Developer Experts, quienes te
            ofrecerán su sabiduría y apoyo en cada paso del camino.
          </p>

          <ul className="flex flex-col gap-2">
            <li>- Talleres, créditos y mentores para guiarte</li>
            <li>- Dinámicas divertidas</li>
            <li>- Comida y ¡Muchos premios!</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
