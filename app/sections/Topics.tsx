import React from "react";
import Topic from "../components/Topic";
import "../globals.css";

export default function Topics() {
  return (
    <section>
      <h2 className="border- border-principleViolet pl-2 border-l-4 font-bold text-lg lg:text-4xl uppercase">
        Lineas temáticas
      </h2>

      <p className="mt-3 text-gray-300">
      Barranqui-IA contará con 7 lineas temáticas para guiar a lo participantes a resolver problemas relevantes con inteligencia artificial. 
      </p>

      <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10 mt-10">
        <Topic img="/cities.webp" title="8 de Abril" />
        <Topic img="/health.webp" title="8 de Abril" />
        <Topic img="/education.webp" title="15 de Abril" />
        <Topic img="/environment.webp" title="15 de Abril" />
        <Topic img="/assistant.webp" title="22 de Abril" />
        <Topic img="/entertainment.webp" title="22 de Abril" />
        <Topic img="/security.webp" title="22 de Abril" />
      </div>
    </section>
  );
}
