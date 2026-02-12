"use client";
import React, { useState } from "react";
import { Play } from "lucide-react";
import { useTranslation } from "@/app/i18n/useTranslation";

export default function Hero() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);

  const startVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section id="Hero" className="relative flex flex-col gap-7 md:gap-10 text-center scroll-m-10 pt-8 w-full animate-blurred-fade-in">
      {/* Contenedor del video con miniatura personalizada */}
      <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[82vh] overflow-hidden rounded-lg shadow-xl">
        {!isPlaying ? (
          <div className="relative w-full h-full cursor-pointer" onClick={startVideo}>
            {/* Imagen de miniatura personalizada */}
            <img
              src="/PortadaDoc.webp"
              alt={t("hero2024.videoCoverAlt")}
              className="absolute inset-0 w-full h-full object-contain" // Cambiado a object-contain
            />
            {/* Botón de reproducción */}
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/40 transition-all">
                <Play size={40} className="text-white" />
              </div>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/rM5mmrb0bVk?start=77&autoplay=1"
            title={t("hero2024.videoTitle")}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </section>
  );
}