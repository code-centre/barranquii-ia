"use client";
import React from "react";

export default function Hero() {
  return (
    <section id="Hero" className="flex flex-col gap-7 md:gap-10 text-center relative scroll-m-10 pt-5 w-full">
      {/* Contenedor del video de portada */}
      <div
        className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-screen cursor-pointer"
      >
        <iframe
          className="w-full h-full z-10"
          src="https://www.youtube.com/embed/NjJJ0h7WhPY?rel=0"
          title="Video de portada"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"

          allowFullScreen
        ></iframe>
        <div className="bg-black bg-opacity-50 z-20"></div>
      </div>
    </section>
  );
}
