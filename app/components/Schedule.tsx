"use client";
import React, { useState } from "react";

const DAYS_EVENT = [
  {
    title: "Primer día",
    number: "03",
    day: "Mayo, viernes",
  },
  {
    title: "Segundo día",
    number: "04",
    day: "Mayo, Sábado",
  },
  {
    title: "Tercer día",
    number: "05",
    day: "Mayo, Domingo",
  },
];

const SCHEDULE_EVENT = [
  [
    {
      time: "07:00 AM - 09:00 AM",
      title: "Talleres y Charlas",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
      time: "09:00 AM - 11:00 AM",
      title: "Meet & Greet",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
  ],
  [
    {
      time: "08:00 AM - 09:00 AM",
      title: "Open Doors",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
      time: "09:00 AM - 10:00 AM",
      title: "Bienvenida",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
      time: "10:00 AM - 11:00 AM",
      title: "Formación de Equipos",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
      time: "11:00 AM - 12:30 PM",
      title: "Almuerzo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
      time: "12:30 PM - 04:00 PM",
      title: "Ronda de Talleres",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
      time: "04:00 PM - 08:00 PM",
      title: "Cena",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
  ],
  [
    {
      time: "07:00 AM - 08:00 AM",
      title: "Desayuno",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
      time: "08:00 AM - 10:30 AM",
      title: "Ronda de Talleres",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
      time: "10:30 AM - 12:30 PM",
      title: "Almuerzo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
      time: "12:30 PM - 04:00 PM",
      title: "Presentaciones",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
  ],
];

export default function Schedule() {
  const [daySchedule, setDaySchedule] = useState(0);
  return (
    <div className="md:flex-1 w-full">
      <header className="border-gray-500 grid grid-cols-3 border-b-6">
        {DAYS_EVENT.map((day, i) => (
          <div
            key={day.title}
            onClick={() => setDaySchedule(i)}
            className={`${
              daySchedule === i
                ? "text-principleViolet border-b-4 pb-4"
                : "text-gray-300"
            } cursor-pointer text-center md:text-left`}
          >
            <p className="font-medium">{day.title}</p>
            <p className="mt-1">
              <span className="mr-1 font-bold md:text-2xl">{day.number}</span>
              {day.day}
            </p>
          </div>
        ))}
      </header>
      <main className="flex flex-col mt-10">
        {SCHEDULE_EVENT[daySchedule]?.map((schedule, i) => (
          <div key={i} className="flex gap-5 md:gap-5">
            <p className="w-[50%] md:w-[40%]">{schedule.time}</p>
            <div className="relative border-principleViolet border-l">
              <div className="-left-[10px] absolute bg-principleViolet mx-auto rounded-full w-5 h-5"></div>
            </div>
            <div>
              <h3 className="font-bold">{schedule.title}</h3>
              <p className="pb-7 text-gray-300">{schedule.description}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
