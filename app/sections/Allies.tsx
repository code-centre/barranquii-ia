import Image from "next/image";
import React from "react";
import "../globals.css";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";

export default function Allies() {
  return (
    <section id="allies" className="scroll-m-32 pb-10 px-10">
      <h2 className="border- max-w-6xl mx-auto w-full border-principleViolet mb-10 pl-2 border-l-4 font-bold text-2xl lg:text-4xl uppercase">
        Aliados 2024
      </h2>
      <InfiniteMovingCards direction="left" speed="slow" pauseOnHover={true}>
        <li className="flex items-center justify-center bg-white px-3 py-2 rounded-md">
          <Image
            className="w-[150px] h-auto object-contain"
            src="/logos/logo_python_colombia.jpg"
            height={47}
            width={150}
            alt="Logo de Python Colombia"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            className="w-[150px] h-auto object-contain"
            src="/logos/pybaq-logo.webp"
            height={47}
            width={150}
            alt="Logo de Python Barranquilla"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            className="w-[150px] h-auto object-contain"
            src="/logos/gobernacion.webp"
            height={47}
            width={150}
            alt="Logo de Gobernación del Atlántico"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            className="w-[150px] h-auto object-contain"
            src="/logos/innflue.webp"
            height={47}
            width={150}
            alt="Logo de Innflue"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center bg-white px-3 py-2 rounded-md">
          <Image
            className="w-[150px] h-auto object-contain"
            src="/logos/startup-huddle.webp"
            height={47}
            width={150}
            alt="Logo de Startup Huddle"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            className="w-[150px] h-auto object-contain"
            src="/logos/caribe-dev.svg"
            height={47}
            width={150}
            alt="Logo de Caribe Dev"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            className="w-[150px] h-auto object-contain rounded-full"
            src="/logos/51-labs.webp"
            height={47}
            width={150}
            alt="Logo de 51 Labs"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            className="w-[150px] h-auto object-contain"
            src="/logos/cs-blanco.webp"
            height={47}
            width={150}
            alt="Logo de CS"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            className="w-[150px] h-auto object-contain rounded-full"
            src="/logos/fof.webp"
            height={47}
            width={150}
            alt="Logo de Friends of Figma - Barranquilla"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            className="w-[150px] h-auto object-contain"
            src="/logos/logo-prime.webp"
            height={47}
            width={150}
            alt="Logo de Prime - Business School Universidad Sergio Arboleda"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            className="w-[150px] h-auto object-contain rounded-full"
            src="/logos/js-community.webp"
            height={47}
            width={150}
            alt="Logo de JS Barranquilla"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            className="w-[150px] h-auto object-contain"
            src="/logos/mangus.webp"
            height={47}
            width={150}
            alt="Logo de Mangus"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            className="w-[150px] h-auto object-contain"
            src="/logos/feanware.png"
            height={47}
            width={150}
            alt="Logo de Feanware"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            className="w-[150px] h-auto object-contain rounded-full"
            src="/logos/life-your-coaching.jpg"
            height={47}
            width={150}
            alt="Logo de Life Your Coaching"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            className="w-[150px] h-auto object-contain rounded-full"
            src="/logos/aws.png"
            height={47}
            width={150}
            alt="Logo de AWS"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            className="w-[150px] h-auto object-contain rounded-full shadow-sm shadow-[#1a1a1a]"
            src="/logos/linux.webp"
            height={47}
            width={150}
            alt="Logo de Linux Barranquilla"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            className="w-[150px] h-auto object-contain rounded-full"
            src="/logos/wie_group.webp"
            height={47}
            width={150}
            alt="Logo de Wie Group"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            className="w-[150px] h-auto object-contain"
            src="/logos/rtb.jpg"
            height={47}
            width={150}
            alt="Logo RTB"
            loading="lazy"
          />
        </li>
      </InfiniteMovingCards>
    </section>
  );
}
