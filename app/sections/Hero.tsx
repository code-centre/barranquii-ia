"use client";
import React from "react";

export default function Hero() {
  return (
    <section id="Hero" className="relative flex flex-col gap-7 md:gap-10 text-center scroll-m-10 pt-8 w-full">
      {/* Contenedor del video */}
      <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[88vh] mask">
        <iframe
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/NjJJ0h7WhPY?rel=0&playsinline=1"
          title="Video de portada"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
