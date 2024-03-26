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
          El desafío es claro: en equipo y en solo 30 horas, tendrás que dar
          vida a un producto que utilice la inteligencia artificial para
          resolver desafíos reales.
        </p>
        <p className="text-gray-300">
          Al final, un jurado de expertos evaluará los proyectos, y los
          ganadores recibirán premios espectaculares, celebrando la complejidad
          técnica, la innovación, el esfuerzo y el potencial de impacto de sus
          ideas.
        </p>
      </div>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
        <CardHowIs
          icon="/icon-team.png"
          title="Equipos"
          description="Arma un equipo de máximo 5 personas y elijan un reto."
        />
        <CardHowIs
          icon="/icon-challenge.png"
          shadow={true}
          title="Reto"
          description="Construye tu proyecto con IA durante 30 horas con ayuda de mentores expertos."
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
