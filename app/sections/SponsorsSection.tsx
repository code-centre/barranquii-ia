import Image from "next/image";
import React from "react";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";
import Wrapper from "../components/Wrapper";
import Sponsors from "../components/Sponsors";

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20">
      <h2 className="border- border-principleViolet pl-2 border-l-4 font-bold text-lg lg:text-4xl uppercase">
        Patrocinadores
      </h2>
      <ul className="flex flex-col items-center justify-center mt-10 md:flex-wrap md:flex-row gap-10 md:gap-10">
        <li>
          <Image
            className="w-[240px] img"
            src="/logos/atlanticonnect.png"
            height={47}
            width={150}
            alt="Logo de Immersive city"
            loading="lazy"
          />
        </li>
        <li>
          <Image
            className="w-[240px]"
            src="/logos/ultracem.webp"
            height={47}
            width={150}
            alt="Logo de Ultracem city"
            loading="lazy"
          />
        </li>
        <li>
          <Image
            className="w-[240px]"
            src="/uninorte.webp"
            height={47}
            width={230}
            alt="Logo de la universidad de la norte"
            loading="lazy"
          />
        </li>
        <li>
          <Image
            className="w-[150px] h-[80px] object-contain"
            src="/google.png"
            height={47}
            width={150}
            alt="Logo de Google"
          />
        </li>
        <li>
          <figure className="flex items-center justify-center gap-x-2">
            <Image
              className="w-12"
              src="/logo-cc.webp"
              height={100}
              width={150}
              alt="Logo de Code Centre"
              loading="lazy"
            />
            <Image
              className="w-[150px]"
              src="/cc.webp"
              height={19}
              width={150}
              alt="Logo de Code Centre"
              loading="lazy"
            />
          </figure>
        </li>

        <li>
          <Image
            className="w-[200px]"
            src="/logos/tmt.png"
            height={47}
            width={150}
            alt="Logo de TMT"
            loading="lazy"
          />
        </li>
        <div className="flex gap-10 items-center">
          <li>
            <Image
              className="w-[180px]"
              src="/logos/neuron.png"
              height={47}
              width={150}
              alt="Logo de neuron"
              loading="lazy"
            />
          </li>

          <li>
            <Image
              className="w-[250px] h-[60px] object-contain"
              src="/logos/gorilla.webp"
              height={47}
              width={150}
              alt="Logo de Gorilla Logic"
            />
          </li>
        </div>
      </ul>
    </section>
  );
}
