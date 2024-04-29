import React from "react";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";
import Image from "next/image";

export default function Talleres() {
  return (
    <section id="talleres" className="flex flex-col gap-5 md:gap-10 pt-32">
      <h2 className="border- border-principleViolet pl-2 border-l-4 text-lg lg:text-4xl uppercase font-bold">
        Talleres
      </h2>
      <div className="flex justify-center lg:justify-between md:gap-y-10 flex-wrap">
        <Image
          className="h-[450px] w-[410px] object-contain md:object-cover rounded-lg"
          src="/talleres/bwai-aaron.webp"
          alt="Build With AI - Aarón"
          height={450}
          width={410}
        />
        <Image
          className="h-[450px] w-[410px] object-contain md:object-cover rounded-lg"
          src="/talleres/bwai-carlos.webp"
          alt="Build With AI - Carlos"
          height={800}
          width={800}
        />
        <Image
          className="h-[450px] w-[410px] object-contain md:object-cover rounded-lg"
          src="/talleres/bwai-juan.webp"
          alt="Build With AI - Juan"
          height={300}
          width={800}
        />
        <Image
          className="h-[450px] w-[410px] object-contain md:object-cover rounded-lg"
          src="/talleres/bwai-mayra.webp"
          alt="Build With AI - Mayra"
          height={800}
          width={800}
        />
        <Image
          className="h-[450px] w-[410px] object-contain md:object-cover rounded-lg"
          src="/talleres/bwai-santiago.webp"
          alt="Build With AI - Santiago"
          height={800}
          width={800}
        />
        <Image
          className="h-[450px] w-[410px] object-contain md:object-cover rounded-lg"
          src="/talleres/bwai-vanessa.webp"
          alt="Build With AI - Vanessa"
          height={800}
          width={800}
        />
      </div>
    </section>
  );
}
