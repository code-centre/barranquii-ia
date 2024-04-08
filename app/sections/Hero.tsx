"use client";
import React from "react";
import { sendGTMEvent } from "@next/third-parties/google";

export default function Hero() {
  return (
    <section className="flex flex-col gap-7 md:gap-10 text-center">
      <div className="flex flex-col gap-3 md:gap-2">
        <div>
          <h4 className="font-bold text-2xl font-mono uppercase tracking-widest my-20">
            Fundación <br />
            Código abierto
          </h4>
          <h1 className="font-bold text-5xl md:text-6xl xl:text-8xl">
            Barranqui-IA
          </h1>
        </div>
        <h2 className="mx-auto md:max-w-lg xl:max-w-4xl text-center text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          Primer Hackatón de inteligencia <br /> artificial en el Caribe
        </h2>
        <p className="text-sm xl:text-base">
          Un evento de 48 horas sobre inteligencia artificial.
        </p>
      </div>
      <a
        className="hover:brightness-110 bg-principleViolet mx-auto px-5 xl:px-10 py-2 xl:py-3 rounded-lg w-fit text-[13px] xl:text-base uppercase"
        href="https://forms.gle/q1V2AdY1ZetQ9Yre8"
        target="_blank"
        onClick={() => sendGTMEvent({ event: "purchase", value: 1 })}
      >
        Pre-registro
      </a>
      <p>La venta de boletos se abre el 3ro de Abril</p>
    </section>
  );
}
