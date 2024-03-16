"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide,  } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../globals.css";

export default function Sponsors() {
  return (
    <section className="flex flex-col gap-5 lg:gap-5">
      <p className="text-center text-secondaryText text-sm md:text-[15px] uppercase">
        Integrando conocimientos, herramientas y esfuerzos de diferentes
        patrocinadores
      </p>
      {/* <div className="flex md:flex-row flex-col justify-center items-center gap-3 lg:gap-10">
        
      </div> */}
      <Swiper
        slidesPerView="auto"
        // breakpoints={{
        //   375: {
        //     slidesPerView: 'auto',
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 40,
        //   },
        // }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className="mx-auto"
            src="/uni-norte.png"
            height={47}
            width={150}
            alt="Logo de la universidad de la norte"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="mx-auto"
            src="/google.png"
            height={47}
            width={150}
            alt="Logo de Google"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="mx-auto"
            src="/i-city.webp"
            height={47}
            width={150}
            alt="Logo de Google"
          />
        </SwiperSlide>
        <SwiperSlide>
          <figure className="flex justify-center items-center gap-2">
            <Image
              className="w-12 object-contain"
              src="/logo-cc.webp"
              height={100}
              width={150}
              alt="Logo de Code Centre"
            />
            <Image
              className="object-contain"
              src="/cc.webp"
              height={19}
              width={150}
              alt="Logo de Code Centre"
            />
          </figure>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
