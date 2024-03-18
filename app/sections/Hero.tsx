import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col gap-7 md:gap-10 text-center">
      <div className="flex flex-col gap-3 md:gap-2">
        <div>
          <img
            className="mx-auto h-[100px] lg:h-[150px]"
            src="/bwai.webp"
            alt="Build with AI"
          />
          <h1 className="font-medium text-5xl md:text-6xl xl:text-8xl">
            Barranqui-IA
          </h1>
        </div>
        <h2 className="mx-auto md:max-w-lg xl:max-w-4xl text-center text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          Primer Hackaton de inteligencia <br /> artificial en el Caribe
        </h2>
        <p className="text-sm xl:text-base">
          Un evento de +30 horas sobre inteligencia artificial.
        </p>
      </div>
      <a
        className="hover:brightness-110 bg-principleViolet mx-auto px-5 xl:px-10 py-2 xl:py-3 rounded-lg w-fit text-[13px] xl:text-base uppercase"
        href=""
      >
        La venta de boletos se abre el 1ro de Abril
      </a>
    </section>
  );
}
