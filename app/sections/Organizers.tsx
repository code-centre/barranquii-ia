import Image from "next/image";
import React from "react";
import Title from "../components/Title";

interface Props {
  landing?: string;
}

export default function Organizers({ landing }: Props) {
  return (
    <section id="organizers" className="pb-10">
      <Title landing={landing} title="Organizadores" />
      <ul className="flex flex-col items-center justify-center mt-10 md:flex-wrap md:flex-row gap-10 md:gap-10">
        <li className="flex items-center justify-center">
          <Image
            className="w-[300px] h-auto object-contain"
            src="/logos/gdg-logo.webp"
            height={80}
            width={300}
            alt="Logo de GDG"
            loading="lazy"
          />
        </li>
        <li>
          <Image
            className="w-[220px]"
            src="/logos/logo-fca.webp"
            height={60}
            width={280}
            alt="Logo de FCA"
            loading="lazy"
          />
        </li>
      </ul>
    </section>
  );
}
