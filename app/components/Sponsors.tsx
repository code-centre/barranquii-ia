import Image from "next/image";
import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";
import Title from "./Title";

interface Props {
  landing: string;
}

export default function Sponsors({ landing }: Props) {
  return (
    <div className="flex flex-col gap-10">
      <div className="max-w-6xl mx-auto px-5 w-full">
        <Title landing={landing} title="Aliados" />
      </div>
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
        {/* <li>
          <Image
            className="w-[150px]"
            src="/logos/ultracem.webp"
            height={47}
            width={150}
            alt="Logo de Ultracem"
            loading="lazy"
          />
        </li> */}
        {/* <li>
          <Image
            className="w-[180px]"
            src="/logos/neuron.png"
            height={47}
            width={150}
            alt="Logo de neuron"
            loading="lazy"
          />
        </li> */}
        <li>
          <Image
            className="w-[150px] img"
            src="/logos/atlanticonnect.png"
            height={47}
            width={150}
            alt="Logo de Atlanti Connect city"
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
      </InfiniteMovingCards>
    </div>
  );
}
