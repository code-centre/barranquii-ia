import Image from "next/image";
import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

export default function Sponsors() {
  return (
    <InfiniteMovingCards>
      <li>
        <Image
          className="w-[200px] h-[60px]"
          src="/google.png"
          height={47}
          width={150}
          alt="Logo de Google"
        />
      </li>
      <li>
        <Image
          className="w-[150px]"
          src="/i-city.webp"
          height={47}
          width={150}
          alt="Logo de Immersive city"
          loading="lazy"
        />
      </li>
      <li>
        <Image
          className="w-[230px]"
          src="/uninorte.webp"
          height={47}
          width={230}
          alt="Logo de la universidad de la norte"
          loading="lazy"
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
          className="w-[250px] h-[60px] object-contain"
          src="/logos/gorilla.webp"
          height={47}
          width={150}
          alt="Logo de Gorilla Logic"
        />
      </li>
    </InfiniteMovingCards>
  );
}
