"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../globals.css";

interface Props {
  title: string;
}

export default function Sponsors({ title }: Props) {
  return (
    <section className="flex flex-col gap-5 lg:gap-5">
      <p className="text-center text-secondaryText text-sm md:text-[15px] uppercase">
        {title}
      </p>
      <div className="overflow-hidden">
        <div className="flex items-center gap-3 animate-sponsors">
          <Image
            className="w-[200px] h-[60px]"
            src="/google.png"
            height={47}
            width={150}
            alt="Logo de Google"
          />
          <Image
            className="w-[150px]"
            src="/i-city.webp"
            height={47}
            width={150}
            alt="Logo de Google"
          />
          <Image
            className="flex-1 ml-5 w-12"
            src="/logo-cc.webp"
            height={100}
            width={150}
            alt="Logo de Code Centre"
          />
          <Image
            className="w-[150px]"
            src="/cc.webp"
            height={19}
            width={150}
            alt="Logo de Code Centre"
          />
          <Image
            className="w-[250px] h-[60px]"
            src="/google.png"
            height={47}
            width={150}
            alt="Logo de Google"
          />
          <Image
            className="w-[150px]"
            src="/i-city.webp"
            height={47}
            width={150}
            alt="Logo de Google"
          />
          <Image
            className="flex-1 ml-5 w-12"
            src="/logo-cc.webp"
            height={100}
            width={150}
            alt="Logo de Code Centre"
          />
          <Image
            className="w-[150px]"
            src="/cc.webp"
            height={19}
            width={150}
            alt="Logo de Code Centre"
          />
          <Image
            className="w-[200px] h-[60px]"
            src="/google.png"
            height={47}
            width={150}
            alt="Logo de Google"
          />
          <Image
            className="w-[150px]"
            src="/i-city.webp"
            height={47}
            width={150}
            alt="Logo de Google"
          />
          <Image
            className="flex-1 ml-5 w-12"
            src="/logo-cc.webp"
            height={100}
            width={150}
            alt="Logo de Code Centre"
          />
          <Image
            className="w-[150px]"
            src="/cc.webp"
            height={19}
            width={150}
            alt="Logo de Code Centre"
          />
        </div>
      </div>
    </section>
  );
}
