import React from "react";
import Topic from "../components/Topic";
import '../globals.css'

export default function Topics() {
  return (
    <section>
      <h2 className="border- font-bold border-principleViolet pl-2 border-l-4 text-lg lg:text-4xl uppercase">
        Lineas temáticas
      </h2>

      <p className="text-gray-300 mt-3">
        En esta sección, descubre los diferentes desafíos que te esperan en el
        Hackathon. Cada línea temática representa un área de enfoque donde
        pondrás a prueba tu creatividad, habilidades e ingenio para desarrollar
        soluciones innovadoras.
      </p>

      <div className="mt-10 flex flex-wrap justify-center items-center gap-5 md:gap-10">
        <Topic img="/cities.webp" title="Ciudades inteligentes" />
        <Topic img="/health.webp" title="Salud digital" />
        <Topic img="/education.webp" title="Educación personalizada" />
        <Topic img="/environment.webp" title="Sostenibilidad ambiental" />
        <Topic img="/assistant.webp" title="Asistente virtual" />
        <Topic img="/entertainment.webp" title="Entretenimiento y creatividad" />
        <Topic img="/security.webp" title="Seguridad y privacidad" />
      </div>
    </section>
  );
}
