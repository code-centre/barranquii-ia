import React from "react";
import CardHowIs from "../components/CardHowIs";

export default function HowIs() {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 bg-gray-900/60 p-4 rounded-lg">
        <h2 className="border-principleViolet pl-2 border-l-4 font-bold text-lg lg:text-4xl uppercase">
          ¿Cómo funciona?
        </h2>
        <p className="text-gray-300">
          El desafío es claro: en equipo, asesorado por más de 20 expertos en
          tecnología, diseño y negocios y en solo 48 horas, tendrás que idear y
          construir el demo de un producto que utilice la inteligencia
          artificial.
        </p>
        <p className="text-gray-300">
          El último día presentaras tu proyecto ante un jurado de expertos que
          evaluará los proyectos según su implementación técnica y el uso de la
          inteligencia artificial. Los mejores 3 equipos serán nombrados
          ganadores y ¡Recibirán premios espectaculares!
        </p>
      </div>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
        <CardHowIs
          icon="/icon-team.png"
          title="Equipos"
          description="Arma un equipo de máximo 5 personas y desarrolla una idea con inteligencia artificial."
        />
        <CardHowIs
          icon="/icon-challenge.png"
          shadow={true}
          title="Reto"
          description="Construye tu proyecto con IA durante 48 horas con ayuda de mentores expertos."
        />
        <CardHowIs
          icon="/icon-presentation.png"
          title="Presentación"
          description="Presenta tu demo para ganar increíbles premios."
        />
      </div>
    </section>
  );
}
