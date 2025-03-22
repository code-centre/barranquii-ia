"use client";

import React from "react";

export default function Preinscribete() {
  return (
    <section id="Preinscribete" className="text-white scroll-m-24 text-center flex flex-col items-center bg-black px-4 pb-32">
      <p className="text-3xl md:text-4xl font-extrabold tracking-wider">
        <strong>ESTE FUÉ SOLO EL INICIO</strong>
      </p>
      <h1 className="text-6xl md:text-8xl font-extrabold mt-4">
        <span className="font-bold bg-gradient-to-r from-pink-400 via-pink-50 to-pink-400 bg-clip-text text-transparent">
          Barranqui-IA
        </span>
      </h1>
      <p className="text-xl md:text-4xl mt-4">Hackatón de Inteligencia Artificial</p>
      <h2 className="text-[80px] md:text-[150px] font-extrabold">2025</h2>
      <p className="text-lg md:text-xl font-bold mt-2">
        <span className="text-white text-3xl md:text-5xl">3 Y 4 </span>
        <span className="text-purple-400 text-3xl md:text-5xl">DE MAYO</span>
      </p>
      <a
        href="https://www.codigoabierto.tech/eventos/barranqui-ia"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg md:text-4xl mt-10 px-8 py-4 font-extrabold rounded-lg bg-gradient-to-r from-principleViolet via-purple-600 to-blue-600 hover:from-blue-600 hover:to-principleViolet text-white shadow-lg shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50 relative overflow-hidden group"
      >
        <span className="relative z-10">INSCRÍBETE</span>
        <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
      </a>
    </section>
  );
}
