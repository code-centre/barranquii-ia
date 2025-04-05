import Image from "next/image";
import React from "react";
import Title from "../components/Title";
import Border from "../components/Border";
import { THEME_LANDINGS } from "../utils/theme";

interface Props {
  landing: string
}

const ITEMS = [

  {
    title: '1.- Lineas temáticas y formación de equipos',
    description: 'Al inicio del evento, presentaremos los retos disponibles y facilitaremos espacios para que formes o te unas a un equipo.'
  },
  {
    title: '2.- Ideación y Validación',
    description: 'Definirás el problema a resolver, construirás tu propuesta de valor y comenzarás a planear tu solución. Tendrás acceso a mentores y recursos técnicos para validar tu idea.'
  },
  {
    title: '3.- Desarrollo del Prototipo',
    description: 'Aquí empieza la magia: usarás herramientas de IA y desarrollo para construir un prototipo funcional. Podrás trabajar de manera intensiva, con apoyo técnico constante.'
  },
  {
    title: '4.- Presentación (Pitch) y Evaluación',
    description: 'Cada equipo presentará su proyecto ante un jurado, que evaluará según criterios como creatividad, ejecución técnica, impacto y viabilidad.'
  },
  {
    title: '5.- Premiación',
    description: 'Los proyectos destacados recibirán premios y podrán postularse al programa de incubación Caribe-IA, donde tendrán la oportunidad de convertirse en startups reales.'
  }

]

export default function Expectations({ landing }: Props) {
  return (
    <section className="flex flex-col gap-10">
      <Title title="¿Qué esperar durante el evento?" landing={landing} />
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
        <div className="grid grid-cols-[3px_1fr] gap-3 lg:gap-10">
          <Border landing={landing} />
          <div className="flex flex-col justify-between gap-7">
            {ITEMS.map((item, index) => (
              <div key={index} className="flex flex-col">
                <h3 style={{ color: THEME_LANDINGS[landing ?? 'default'].principal }} className="text-2xl lg:text-3xl  font-mono">{item.title}</h3>
                <p className="text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div style={{ background: THEME_LANDINGS[landing].principal + '40' }} className="absolute -top-56 -z-10 -left-44 w-[600px] h-[600px] rounded-full blur-3xl"></div> 
          <div style={{ border: `4px solid ${THEME_LANDINGS[landing].principal}` }} className="rounded-3xl w-full h-full  md:object-cover object-contain z-10 bg-gray-400"></div>
        </div>
      </div>
    </section>
  );
}
