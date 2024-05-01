import Image from "next/image";
import React from "react";
import "../globals.css";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";
import Wrapper from "../components/Wrapper";

export default function Allies() {
  return (
    <section id="allies" className="pt-20 pb-10">
      <h2 className="border- border-principleViolet mb-10 pl-2 border-l-4 font-bold text-lg lg:text-4xl uppercase">
        Aliados
      </h2>
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-14 md:gap-10">
        <Image
          className=" object-cover "
          src="/logos/cs-blanco.webp"
          height={47}
          width={150}
          alt="Logo de CS"
          loading="lazy"
        />
        <Image
          className=" object-contain w-[260px]"
          src="/logos/gobernacion.webp"
          height={47}
          width={260}
          alt="Logo de Gobernación del Atlántico"
          loading="lazy"
        />
        <div className="bg-white px-3 py-2 rounded-md">
          <Image
            className=""
            src="/logos/logo_python_colombia.jpg"
            height={47}
            width={150}
            alt="Logo de Python Colombia"
            loading="lazy"
          />
        </div>
        <Image
          className=""
          src="/logos/pybaq-logo.webp"
          height={47}
          width={150}
          alt="Logo de Python Barranquilla"
          loading="lazy"
        />
        <Image
          className=" rounded-full"
          src="/logos/fof.webp"
          height={47}
          width={150}
          alt="Logo de Friends of Figma - Barranquilla"
          loading="lazy"
        />
        <Image
          className="w-[200px] object-contain"
          src="/logos/logo-prime.webp"
          height={47}
          width={150}
          alt="Logo de Prime - Business School Universidad Sergio Arboleda"
          loading="lazy"
        />
        <Image
          className="w-[250px] object-contain"
          src="/logos/feanware.png"
          height={47}
          width={150}
          alt="Logo de Feanware"
          loading="lazy"
        />
        <Image
          className="w-[200px] object-contain"
          src="/logos/mangus.webp"
          height={47}
          width={150}
          alt="Logo de Mangus"
          loading="lazy"
        />
        <Image
          className="w-[200px] object-contain"
          src="/logos/caribe-dev.svg"
          height={47}
          width={150}
          alt="Logo de Caribe Dev"
          loading="lazy"
        />
        <Image
          className="rounded-full"
          src="/logos/js-community.webp"
          height={47}
          width={150}
          alt="Logo de JS Barranquilla"
          loading="lazy"
        />
        <Image
          className="rounded-full"
          src="/logos/life-your-coaching.jpg"
          height={47}
          width={150}
          alt="Logo de Life Your Coaching"
          loading="lazy"
        />
        <Image
          className="rounded-full"
          src="/logos/aws.png"
          height={47}
          width={150}
          alt="Logo de JS Barranquilla"
          loading="lazy"
        />

        <Image
          className="rounded-full shadow-sm shadow-[#1a1a1a]"
          src="/logos/linux.webp"
          height={47}
          width={150}
          alt="Logo de Linux Barranquilla"
          loading="lazy"
        />
        <Image
          className="w-[200px]"
          src="/logos/startup-huddle.webp"
          height={47}
          width={150}
          alt="Logo de Startup Huddle"
          loading="lazy"
        />
        <Image
          className=" rounded-full"
          src="/logos/wie_group.webp"
          height={47}
          width={150}
          alt="Logo de Wie Group"
          loading="lazy"
        />
        <Image
          className=" rounded-full"
          src="/logos/51-labs.webp"
          height={47}
          width={150}
          alt="Logo de 51 Labs"
          loading="lazy"
        />
        <Image
          className=""
          src="/logos/innflue.webp"
          height={47}
          width={150}
          alt="Logo de Innflue"
          loading="lazy"
        />
        <Image
          className=""
          src="/logos/rtb.jpg"
          height={47}
          width={150}
          alt="Logo RTB"
          loading="lazy"
        />
      </div>
    </section>
  );
}
