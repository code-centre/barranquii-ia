import Image from "next/image";
import React from "react";

interface Props {
  icon?: string;
  title: string;
  description: string;
  shadow?: boolean;
}

export default function CardHowIs({ icon, title, description, shadow }: Props) {
  return (
    <div className="relative flex flex-col gap-8 bg-[#19161c] p-5 rounded-md h-60 overflow-hidden">
      <Image
        height={64}
        width={64}
        className="mx-auto w-16 h-16 object-contain"
        src={`${icon}`}
        alt={`Icono ${title}`}
      />
      <div>
        <h3 className="text-lg text-principleViolet uppercase">{title}</h3>
        <p className="text-base text-gray-300">{description}</p>
        {shadow && (
          <div className="right-0 bottom-0 left-0 absolute bg-principleViolet blur-xl mx-auto rounded-full w-[70%] h-3"></div>
        )}
      </div>
    </div>
  );
}
