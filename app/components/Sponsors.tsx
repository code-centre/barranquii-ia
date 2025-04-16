import Image from "next/image";
import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";
import Title from "./Title";

interface Props {
  landing?: string;
}

export default function Sponsors({ landing }: Props) {
  return (
    <div className={`flex flex-col gap-10 ${landing && ' lg:pt-24'}`}>
      {
        landing &&
        <div className="max-w-6xl mx-auto px-5 lg:px-10 w-full">
          <Title landing={landing} title="Aliados" />
        </div>
      }
      <InfiniteMovingCards>
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
        <li>
          <Image
            className="w-[200px] h-[110px] object-contain"
            src="/logos/pmi-blanco.webp"
            height={60}
            width={200}
            alt="Logo de PMI"
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
      </InfiniteMovingCards>
    </div>
  );
}
