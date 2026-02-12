"use client";

import React from "react";
import { useTranslation } from "@/app/i18n/useTranslation";

export default function Hackathon() {
  const { t } = useTranslation();
  return (
    <section id="hHackathon" className="scroll-m-32 flex flex-col lg:flex-row w-full gap-10 px-6 sm:px-10 items-stretch">
      <div className="lg:w-1/2 text-lg md:text-l leading-relaxed flex flex-col justify-between">
        <h2 className="border-principleViolet pl-2 border-l-4 font-bold text-2xl lg:text-4xl uppercase">
          {t("hackathon2024.title")}
        </h2>
        <p className="mt-10">
          {t("hackathon2024.para1")}
        </p>
        <p className="mt-6">
          {t("hackathon2024.para2")}
        </p>
      </div>

      <div className="lg:w-1/2 h-full flex justify-center items-start">
        <img
          src="/FOTOSBARRANQUI-IA/6.webp"
          alt={t("hackathon2024.imageAlt")}
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
