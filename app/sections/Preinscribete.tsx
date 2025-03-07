"use client";

import React from "react";

export default function Preinscribete() {
  return (
    <section id="Preinscribete" className="mt-32 text-white text-center py-16 h-screen flex flex-col items-center justify-center bg-black px-4">
      <p className="text-3xl md:text-5xl font-extrabold tracking-wider">
        <strong>ESTE FUE SOLO EL INICIO</strong>
      </p>
      <h1 className="text-6xl md:text-9xl font-extrabold mt-4">
        <span className="font-bold bg-gradient-to-r from-pink-400 via-pink-50 via-purple-600 to-pink-400 bg-clip-text text-transparent">
          Barranqui-IA
        </span>
      </h1>
      <p className="text-xl md:text-4xl mt-6">Hackatón de Inteligencia Artificial</p>
      <h2 className="text-[80px] md:text-[190px] font-extrabold mt-6">2025</h2>
      <p className="text-lg md:text-xl font-bold mt-2">
        <span className="text-white text-3xl md:text-5xl">3 Y 4 </span>
        <span className="text-purple-400 text-3xl md:text-5xl">DE MAYO</span>
      </p>
      <a
        href="https://www.codigoabierto.tech/eventos"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl md:text-5xl mt-10 px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-500 shadow-lg"
      >
        Preinscríbete
      </a>
    </section>
  );
}
