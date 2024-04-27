"use client";
import React from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col gap-7 md:gap-10 text-center">
      <div className="flex flex-col gap-3 md:gap-2">
        <div>
          <h4 className="my-20 font-bold font-mono text-2xl uppercase tracking-widest">
            Fundación <br />
            Código abierto
          </h4>
          <h1 className="font-bold text-5xl md:text-6xl xl:text-8xl bg-gradient-to-r from-[#fe44fd] via-[#eabbbe] to-[#8731ef] inline-block text-transparent bg-clip-text">
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
      <Link
        className="hover:brightness-110 bg-principleViolet mx-auto px-5 xl:px-10 py-2 xl:py-3 rounded-lg w-fit text-[13px] xl:text-base uppercase"
        href="#boleta"
        // onClick={() => sendGTMEvent({ event: "purchase", value: 1 })}
      >
        Compra tu boleto
      </Link>
      <p className="font-semibold text-xl">
        El evento se llevará acabo el 4 y 5 de mayo.
      </p>
      <p className="text-center text-secondaryText text-sm md:text-[15px] uppercase mt-10">
        Integrando conocimientos, herramientas y esfuerzos de diferentes
        patrocinadores
      </p>
    </section>
  );
}
