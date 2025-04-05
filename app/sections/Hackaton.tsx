"use client";

import React from "react";

export default function Hackathon() {
  return (
    <section id="hHackathon" className="scroll-m-32 flex flex-col lg:flex-row w-full gap-10 px-6 sm:px-10 items-stretch">
      {/* CONTENEDOR DE TEXTO */}
      <div className="lg:w-1/2 text-lg md:text-l leading-relaxed flex flex-col justify-between">
        <h2 className="border-principleViolet pl-2 border-l-4 font-bold text-2xl lg:text-4xl uppercase">
          ¿Qué es un Hackatón?
        </h2>
        <p className="mt-10">
          Un <strong className="text-purple-500">Hackatón</strong> es un evento donde programadores, diseñadores 
          y emprendedores colaboran para desarrollar soluciones innovadoras en un tiempo limitado. Se trata de un 
          ambiente de trabajo intenso donde la creatividad y la innovación son clave para resolver desafíos tecnológicos. 
        </p>
        <p className="mt-6">
          Durante el evento, los participantes formarán equipos multidisciplinarios y <strong className="text-purple-500"> tendrán 48 horas para  
           desarrollar prototipos funcionales</strong>  Las temáticas pueden ir desde la inteligencia artificial hasta el desarrollo 
          de aplicaciones para solucionar problemas específicos de la sociedad.
        </p>
      </div>
 
      {/* CONTENEDOR DE IMAGEN */}
      <div className="lg:w-1/2 h-full flex justify-center items-start">
        <img 
          src="/FOTOSBARRANQUI-IA/6.webp"
          alt="Hackatón en acción"
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
