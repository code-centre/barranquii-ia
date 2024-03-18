import React from "react";
import CardHowIs from "../components/CardHowIs";

export default function HowIs() {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 bg-gray-900/60 p-4 rounded-lg">
        <h2 className="border-principleViolet pl-2 border-l-4 text-lg lg:text-4xl uppercase">
          ¿Cómo es?
        </h2>
        <p className="text-gray-300">
          Aprovecha este espacio para aprender y conocer gente de distintos
          perfiles apasionada por la inteligencia artificial. Durante más de 24
          horas continuas los participantes se enfocan en construir soluciones
          con inteligencia artificial para finalmente ser evaluados por expertos
          de la industria tecnológica, resultando ganadores las mejores
          propuestas funcionales.
        </p>
      </div>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
        <CardHowIs
          title="Equipos"
          description="Arma un equipo de máximo 5 personas y elijan un reto."
        >
          <svg
            className="mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 36 36"
          >
            <path
              fill="#0C6BFA"
              d="M12 16.14h-.87a8.67 8.67 0 0 0-6.43 2.52l-.24.28v8.28h4.08v-4.7l.55-.62l.25-.29a11 11 0 0 1 4.71-2.86A6.59 6.59 0 0 1 12 16.14"
              className="clr-i-solid-path-1 clr-i-solid"
            />
            <path
              fill="#0C6BFA"
              d="M31.34 18.63a8.67 8.67 0 0 0-6.43-2.52a10.47 10.47 0 0 0-1.09.06a6.59 6.59 0 0 1-2 2.45a10.91 10.91 0 0 1 5 3l.25.28l.54.62v4.71h3.94v-8.32Z"
              className="clr-i-solid-path-2 clr-i-solid"
            />
            <path
              fill="#0C6BFA"
              d="M11.1 14.19h.31a6.45 6.45 0 0 1 3.11-6.29a4.09 4.09 0 1 0-3.42 6.33Z"
              className="clr-i-solid-path-3 clr-i-solid"
            />
            <path
              fill="#0C6BFA"
              d="M24.43 13.44a6.54 6.54 0 0 1 0 .69a4.09 4.09 0 0 0 .58.05h.19A4.09 4.09 0 1 0 21.47 8a6.53 6.53 0 0 1 2.96 5.44"
              className="clr-i-solid-path-4 clr-i-solid"
            />
            <circle
              cx="17.87"
              cy="13.45"
              r="4.47"
              fill="#0C6BFA"
              className="clr-i-solid-path-5 clr-i-solid"
            />
            <path
              fill="#0C6BFA"
              d="M18.11 20.3A9.69 9.69 0 0 0 11 23l-.25.28v6.33a1.57 1.57 0 0 0 1.6 1.54h11.49a1.57 1.57 0 0 0 1.6-1.54V23.3l-.24-.3a9.58 9.58 0 0 0-7.09-2.7"
              className="clr-i-solid-path-6 clr-i-solid"
            />
            <path fill="none" d="M0 0h36v36H0z" />
          </svg>
        </CardHowIs>
        <CardHowIs
          icon=""
          title="Reto"
          description="Construye tu proyecto con IA durante 30 horas con ayuda de mentores expertos."
        >
          <svg
            className="mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 16 16"
          >
            <path
              fill="#0C6BFA"
              d="M14.9.9c-1.1-1-2.5-1.3-3.1-.4c-.7 1.1.5 1.7-.3 2.5c-.5.6-2-.8-2-.8l-.8-.8l-1.4 1.4c-.6.7-2.1 1.5-2.6 1.1c-.7-.6.1-1.8-.5-2.6c-.7-1-2.1-.8-3 .3c-1 1.1-1.4 2.4-.5 3c1.1.7 1.9-.3 2.7.5c.4.4-.2 1.7-.5 2.1L.6 9.5L7.1 16l1.7-1.7c.7-.7 1.5-2 1.1-2.4c-.6-.7-1.7.1-2.5-.4c-1-.7-.8-2 .3-3s2.5-1.3 3.1-.4c.7 1.1-.4 1.8.4 2.6c.4.4 1.6-.2 2-.6L15.3 8l-1.1-1.1c-.6-.6-1.9-2-1.4-2.5c.6-.7 1.7.2 2.5-.4c.9-.8.6-2.1-.4-3.1"
            />
          </svg>
        </CardHowIs>
        <CardHowIs
          icon=""
          title="Presentación"
          description="Presenta tu demo para ganar increíbles premios."
        >
          <svg
            className="mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 256 256"
          >
            <path
              fill="#0C6BFA"
              d="M216 42h-82V24a6 6 0 0 0-12 0v18H40a14 14 0 0 0-14 14v120a14 14 0 0 0 14 14h43.52l-24.21 30.25a6 6 0 0 0 9.38 7.5L98.88 190h58.24l30.19 37.75a6 6 0 0 0 9.38-7.5L172.48 190H216a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 134a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Z"
            />
          </svg>
        </CardHowIs>
      </div>
    </section>
  );
}
