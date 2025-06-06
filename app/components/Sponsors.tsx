import Image from "next/image";
import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";
import Title from "./Title";

interface Props {
  landing?: string;
}

export default function Sponsors({ landing }: Props) {
  return (
    <div className={`flex flex-col ${landing && ' lg:pt-24'}`}>
      {
        landing &&
        <div className="max-w-6xl mx-auto px-5 lg:px-10 w-full">
          <Title landing={landing} title="Aliados" />
        </div>
      }
      <InfiniteMovingCards>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/51labs.png"
            height={100}
            width={150}
            alt="Logo de 51 Labs"
            loading="lazy"
            className="h-auto object-contain"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/feanware.png"
            height={100}
            width={250}
            alt="Logo de Feanware"
            loading="lazy"
            className="object-contain"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/life-your-coaching.jpg"
            height={47}
            width={150}
            alt="Logo de Life Your Coaching"
            loading="lazy"
            className="w-[150px] h-auto object-contain rounded-full"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/shadai.webp"
            height={47}
            width={150}
            alt="Logo de Shad-ai"
            loading="lazy"
            className="w-[150px] h-auto object-contain"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/inside-lab.webp"
            height={47}
            width={150}
            alt="Logo de Inside Lab"
            loading="lazy"
            className="w-[150px] h-auto object-contain"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/edtools.webp"
            height={47}
            width={150}
            alt="Logo de Edtools"
            loading="lazy"
            className="w-[150px] h-auto object-contain rounded-full"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/aws.png"
            height={47}
            width={150}
            alt="Logo de AWS"
            loading="lazy"
            className="w-[150px] h-auto object-contain rounded-full"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/pmi-blanco.webp"
            height={60}
            width={200}
            alt="Logo de PMI"
            loading="lazy"
            className="w-[200px] h-[110px] object-contain"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/pragma.svg"
            height={100}
            width={250}
            alt="Logo de Pragma"
            loading="lazy"
            className="object-contain"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/LOGO-UNISIMON-AUDACIA-BLANCO.webp"
            height={300}
            width={500}
            alt="Logo de unisimón"
            loading="lazy"
            className="object-contain"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/caribe-startup.webp"
            height={100}
            width={200}
            alt="Logo de Caribe Startup"
            loading="lazy"
            className="w-[250px] h-[200px] object-contain"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/elia.webp"
            height={150}
            width={200}
            alt="Logo de Elia"
            loading="lazy"
            className="object-contain w-[200px] h-[150px]"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/Logo-ACM-uninorte.webp"
            height={150}
            width={200}
            alt="Logo de ACM Uninorte"
            loading="lazy"
            className="object-contain w-[200px] h-[150px]"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/lider-ia.webp"
            height={150}
            width={200}
            alt="Logo de Lider IA"
            loading="lazy"
            className="object-contain w-[200px] h-[150px]"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/caribeconnect.png"
            height={100}
            width={200}
            alt="Logo de Caribe Connect"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/logo-synergy-fondo.png"
            height={100}
            width={250}
            alt="Logo de Synergy"
            loading="lazy"
            className="object-contain"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/Tribu.png"
            height={100}
            width={200}
            alt="Logo de TribuIA"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/Logo_Cooweb_White.webp"
            height={100}
            width={200}
            alt="Logo de CooWeb"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/Macocndolab.webp"
            height={300}
            width={600}
            alt="Logo de MacondoLAB"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/Evolutecc_blanco.webp"
            height={100}
            width={200}
            alt="Logo de Evolutec"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/caribedev-logo.webp"
            height={200}
            width={300}
            alt="Logo de Caribe Dev"
            loading="lazy"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            src="/logos/davila.webp"
            height={200}
            width={300}
            alt="Logo de Davila"
            loading="lazy"
          />
        </li>
      </InfiniteMovingCards>
    </div>
  );
}
