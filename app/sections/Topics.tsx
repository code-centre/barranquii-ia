import React from "react";
import Topic from "../components/Topic";
import "../globals.css";

export default function Topics() {
  return (
    <section id="topics" className="pt-32">
      <h2 className="border- border-principleViolet pl-2 border-l-4 font-bold text-lg lg:text-4xl uppercase">
        Lineas temáticas
      </h2>

      <p className="mt-3 text-gray-300">
        Barranqui-IA contará con 7 lineas temáticas para guiar a lo
        participantes a resolver problemas relevantes con inteligencia
        artificial.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10 mt-10">
        <Topic img="/cities.webp" title="Ciudades inteligentes" />
        <Topic img="/health.webp" title="Salud digital" />
        <Topic img="/education.webp" title="Educación personalizada" />
        <Topic img="/environment.webp" title="Sostenibilidad ambiental" />
        <Topic img="/assistant.webp" title="Asistente virtual" />
        <Topic
          img="/entertainment.webp"
          title="Entretenimiento y creatividad"
        />
        <Topic img="/security.webp" title="Seguridad y privacidad" />
      </div>
    </section>
  );
}
