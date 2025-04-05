"use client";
import React, { useState } from "react";
import Title from "./Title";
import Border from "./Border";
import { THEME_LANDINGS } from "../utils/theme";

const DAYS_EVENT = [
  {
    title: "Inauguración",
    number: "02",
    day: "Mayo, viernes",
  },
  {
    title: "Primer Día",
    number: "03",
    day: "Mayo, sábado",
  },
  {
    title: "Segundo Día",
    number: "04",
    day: "Mayo, domingo",
  },
];

const SCHEDULE_EVENT = [
  [
    {
      time: "07:00 PM - 9:00 PM",
      title: "Meet & Greet",
      description:
        "Evento de pre-inauguración del hackatón donde tendremos la oportunidad de conocer a los mentores y compartir un rato con ellos mientras disfrutamos de música en vivo y una divertida velada. *Entrada con el paquete de meet & greet",
    },
    {
      time: "09:00 PM - 10:00 PM",
      title: "Show Musical",
      description:
        "Disfrutaremos escuchando a la revelación Barranquillera con su nueva propuesta que combina Funk y Soul, GRACE!",
    },
  ],
  [
    {
      time: "08:00 AM - 09:00 AM",
      title: "Open Doors",
      description:
        "Se abren las puertas para este increible evento. Llega temprano para registrarte y disfrutar de un rico cafe para despertar completamente.",
    },
    {
      time: "09:00 AM - 10:00 AM",
      title: "Bienvenida",
      description:
        "Les daremos la bienvenida, repasaremos el código de conducta, las reglas, los retos de nuestros patrocinadores, resolveremos cualquier duda. que pueda surgir.",
    },
    {
      time: "10:00 AM - 11:00 AM",
      title: "Formación de Equipos",
      description:
        "Es el momento de hacer equipo, ya sea que vengas con amigos o pienses formar un equipo con personas nueva,s haremos dinámicas de integración y una ronda ideas para que puedas participar en un proyecto que te llame la atención y con un equipo emocionante.",
    },
    {
      time: "12:30 PM - 2:00 PM",
      title: "Almuerzo",
      description: "¡Hora de comer!",
    },
    {
      time: "2:00 PM - 07:00 PM",
      title: "Build with IA - Ronda de Talleres",
      description:
        "Tendremos una ronda de talleres sobre inteligencia artificial a manos del Google Developer Group Barranquilla y expertos en inteligencia artificial de parte de Google",
    },
    {
      time: "8:00 PM - 9:00 PM",
      title: "Cena",
      description: "Ya hace hambre, ¿cierto?",
    },
    {
      time: "9:00 PM",
      title: "Cierre de puertas",
      description:
        "En esta ocasión no podrémos quedarnos a trabajar en la universidad, pero puedes coordinar con tu equipo para trabajar desde tu casa y avanzar en tu proyecto",
    },
  ],
  [
    {
      time: "07:00 AM",
      title: "Puertas abiertas",
      description: "¡Espero hayas avanzado durante la noche!",
    },
    {
      time: "08:00 AM - 09:00 AM",
      title: "Desayuno",
      description: "¡Vamos a comer!",
    },
    {
      time: "10:00 AM - 12:00 AM",
      title: "Build with IA - Ronda de Talleres",
      description:
        "Tendremos una ronda de talleres sobre inteligencia artificial a manos del Google Developer Group Barranquilla y expertos en inteligencia artificial de parte de Google",
    },
    {
      time: "12:30 AM - 2:00 PM",
      title: "Almuerzo",
      description:
        "Nuestra última comida del hackatón... ¡Que rápido pasa el tiempo!",
    },
    {
      time: "4:00 PM - 6:00 PM",
      title: "Presentaciones",
      description:
        "¡Llegó el momento, registra tu demo, practica tu pitch e impresiona a los jueces para llevarte los premios a casa!",
    },
    {
      time: "6:00 PM",
      title: "Premiación",
      description:
        "Felicidades por haber sobrevivido al hackatón, esperamos sea un experiencia inolvidable y que le des provecho a todo lo que aprendiste en estos dos días",
    },
  ],
];

export default function Schedule({ landing }: { landing: string }) {
  const [daySchedule, setDaySchedule] = useState(0);
  return (
    <div className="flex flex-col gap-10 w-full max-w-6xl mx-auto px-5 lg:px-10">
      <Title title="Cronograma" landing={landing} />
      <div className="grid grid-cols-[auto_1fr] gap-2 lg:gap-9">
        <Border landing={landing} />
        <div>
          <header className="border-gray-500 border-b-6 grid gap-5 grid-cols-1 md:grid-cols-3 md:gap-20">
            {DAYS_EVENT.map((day, i) => (
              <div
                style={{
                  paddingBottom: daySchedule === i ? "16px" : "0px",
                  color: daySchedule === i ? THEME_LANDINGS[landing].principal : "#9ca3af",
                  borderBottomWidth: daySchedule === i ? "3px" : "0px",
                  borderColor: daySchedule === i ? THEME_LANDINGS[landing].principal : "#9ca3af",
                }}
                key={day.title}
                onClick={() => setDaySchedule(i)}
                className={`cursor-pointer text-center md:text-left hover:transition-colors duration-100 py-5 `}
              >
                <p className="font-medium">{day.title}</p>
                <p className="mt-1">
                  {
                    landing === 'barranqui-ia' && (
                      <>
                        <span className="mr-1 font-bold md:text-2xl">{day.number}</span>
                        {day.day}
                      </>
                    )
                  }
                  {
                    landing !== 'barranqui-ia' && <span className="capitalize">{day.day.split(',')[1]}</span>
                  }
                </p>
              </div>
            ))}
          </header>
          <main className="flex flex-col mt-10">
            {/* {
              landing === 'barranqui-ia' ? SCHEDULE_EVENT[daySchedule]?.map((schedule, i, arr) => (
                <div key={i} className="flex gap-5 md:gap-5">
                  <p className="w-[50%] md:w-[20%] text-gray-400">{schedule.time}</p>
                  <div style={{ borderColor: THEME_LANDINGS[landing].principal }} className={`relative ${i !== arr.length - 1 ? ' border-l' : ''}`}>
                    <div style={{ backgroundColor: THEME_LANDINGS[landing].principal }} className="-left-[12px] absolute mx-auto rounded-full w-6 h-6">
                      <div className="flex justify-center items-center">
                        {i + 1}
                      </div>
                    </div>
                  </div>
                  <div className="w-[80%]">
                    <h3 className="font-bold">{schedule.title}</h3>
                    <p className="pb-7 text-gray-400">{schedule.description}</p>
                  </div>
                </div>
            }
          )) :  */}
          <p className="text-gray-400 text-center text-2xl lg:text-5xl">Próximamente</p>
          </main>
        </div>
      </div>
    </div>
  );
}
