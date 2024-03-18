import React from "react";
import Sponsors from "../components/Sponsors";

export default function BeASponsor() {
  return (
    <section className="flex flex-col gap-7">
      <h2 className="border- border-principleViolet pl-2 border-l-4 text-lg lg:text-4xl uppercase">
        ¿Quieres ser un patrocinador?
      </h2>
      <p className="text-gray-300">
        Aprovecha este espacio para aprender y conocer gente de distintos
        perfiles apasionada por la inteligencia artificial. Durante más de 24
        horas continuas los participantes se enfocan en construir soluciones con
        inteligencia artificial para finalmente ser evaluados por expertos de la
        industria tecnológica, resultando ganadores las mejores propuestas
        funcionales.
      </p>
      <a
        className="hover:brightness-110 bg-principleViolet px-5 xl:px-10 py-2 xl:py-3 rounded-lg w-fit text-[13px] xl:text-base uppercase"
        href=""
      >
        Inscripción
      </a>

      <Sponsors title="Nuestros patrocinadores" />
    </section>
  );
}
