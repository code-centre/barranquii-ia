import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  title: string;
}

export default function Topic({ img, title }: Props) {
  return (
    <div>
      <Image
        src={img}
        alt={title}
        height={160}
        width={160}
        className="mx-auto w-28 md:w-40 h-28 md:h-40 object-cover"
      />
      <p className="mx-auto w-[150px] font-medium font-mono text-center text-gray-300">
        {title}
      </p>
    </div>
  );
}
