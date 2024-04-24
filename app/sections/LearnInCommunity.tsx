import React from "react";
import "../globals.css";
import Wrapper from "../components/Wrapper";
import Image from "next/image";
import InfoEventGrid from "../components/InfoEventGrid";
import ImageCommunityGrid from "../components/ImageCommunityGrid";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";

export default function LearnInCommunity() {
  return (
    <section
      id="learn-in-community"
      className="flex flex-col px-1 bg-image-learn-in-community pt-32 pb-10"
    >
      <Wrapper styles="w-full mb-10 px-5">
        <h2 className="border-principleViolet pl-2 border-l-4 font-bold text-lg lg:text-4xl uppercase">
          Aprende en comunidad
        </h2>
      </Wrapper>

      {/* <div className="w-full overflow-x-scroll pb-4 scroll"> */}
      <InfiniteMovingCards>
        <div className="grid-events w-full">
          <a
            href="https://gdg.community.dev/e/m6jq7d/"
            target="_blank"
            className="flex flex-col justify-center items-center  rounded-md sub-grid hover:brightness-150 overflow-hidden"
          >
            <ImageCommunityGrid
              name="GDG Barranquilla"
              image="gdg-logo.webp"
              styles="bg-[#fff]"
            />
            <InfoEventGrid
              date="20 de Abril"
              time="6:45 p.m."
              location="Music Centre"
            />
          </a>

          <Image
            className="col-span-2 row-span-2 rounded-md object-cover"
            src="/image-grid.webp"
            alt="Imagen de evento"
            height={400}
            width={400}
            loading="lazy"
          />

          <a
            href="https://flisol.info/FLISOL2024/Colombia/Barranquilla"
            target="_blank"
            className="flex flex-col justify-center items-center  rounded-md sub-grid hover:brightness-150"
          >
            <InfoEventGrid
              date="27 de Abril"
              time="9:00 a.m."
              location="Universidad de la Costa"
            />
            <ImageCommunityGrid
              name="Linux BQ"
              styles=" bg-[#fcc72d] text-black"
              image="/linux.webp"
            />
          </a>

          <Image
            className="row-span-2 rounded-md object-cover"
            src="/de-granda.webp"
            alt="Imagen de evento"
            height={400}
            width={400}
            loading="lazy"
          />

          <a
            href="https://www.meetup.com/pythonbaq/events/299958884/"
            target="_blank"
            className="flex flex-col justify-center items-center  rounded-md sub-grid hover:brightness-150"
          >
            <ImageCommunityGrid
              name="Python Barranquilla"
              styles="bg-gradient-to-b from-[#1e415e] to-[#2b5b84] text-black"
              image="pybaq-logo.webp"
            />
            <InfoEventGrid
              date="11 de abril"
              time="7:00 p.m."
              location="Koombea"
            />
          </a>

          <Image
            className="col-span-2 row-span-2 rounded-md object-cover"
            src="/anuar-harb.webp"
            alt="Imagen de evento"
            height={400}
            width={400}
            loading="lazy"
          />

          <a
            href="https://www.meetup.com/aws-barranquilla/events/299991701/"
            target="_blank"
            className="flex flex-col justify-center items-center  rounded-md sub-grid hover:brightness-150"
          >
            <ImageCommunityGrid
              name="GDG"
              image="aws.webp"
              styles="bg-[#fff]"
            />
            <InfoEventGrid
              date="18 de abril"
              time="7:00 p.m."
              location="Universidad Simón Bolívar"
            />
          </a>

          <Image
            className="col-span-2 row-span-2 rounded-md object-cover"
            src="/image-grid.webp"
            alt="Imagen de evento"
            height={400}
            width={400}
            loading="lazy"
          />

          {/* <a
            href="https://gdg.community.dev/e/m6jq7d/"
            target="_blank"
            className="flex flex-col justify-center items-center  rounded-md sub-grid hover:brightness-150"
          >
            <ImageCommunityGrid
              name="GDG"
              image="gdg-logo.webp"
              styles="bg-[#fff]"
            />
            <InfoEventGrid
              date="20 de Abril"
              time="6:45 p.m."
              location="Music Centre"
            />
          </a>

          <Image
            className="col-span-2 row-span-2 rounded-md object-cover"
            src="/image-grid.webp"
            alt="Imagen de evento"
            height={400}
            width={400}
            loading="lazy"
          />

          <a
            href="https://www.meetup.com/pythonbaq/events/299958884/"
            target="_blank"
            className="flex flex-col justify-center items-center  rounded-md sub-grid hover:brightness-150"
          >
            <ImageCommunityGrid
              name="Python Barranquilla"
              styles="bg-gradient-to-b from-[#1e415e] to-[#2b5b84] text-black"
              image="pybaq-logo.webp"
            />
            <InfoEventGrid
              date="11 de abril"
              time="7:00 p.m."
              location="Koombea"
            />
          </a> */}
        </div>
      </InfiniteMovingCards>

      {/* <a
            href="https://barranquillajs.org/"
            target="_blank"
            className="flex flex-col justify-center items-center  rounded-md sub-grid hover:brightness-100"
          >
            <InfoEventGrid
              // href=""
              date=""
              time=""
              location=""
            />
            <ImageCommunityGrid
              name="Js Barranquilla"
              styles=" bg-[#fcc72d] text-black"
              image="/baqjs.svg"
            />
          </a>

          <Image
            className="row-span-2 rounded-md object-cover"
            src="/de-granda.webp"
            alt="Imagen de evento"
            height={400}
            width={400}
            loading="lazy"
          /> */}

      {/* 
      </div> */}
      <Wrapper styles="w-full flex flex-col gap-5 relative mask pt-10">
        <p className="text-center text-gray-300">
          Durante Abril y hasta el 3 de Mayo las comunidades de Barranquilla nos
          unimos para organizar talleres, platicas y eventos especiales para que
          pueda aprender sobre inteligencia artificial y llegues preparando al
          hackatón.
        </p>
        <a
          className="hover:brightness-110 bg-principleViolet mx-auto px-5 xl:px-10 py-2 xl:py-3 rounded-lg w-fit text-[13px] xl:text-base uppercase"
          href="https://caribedev.org/"
          target="_blank"
        >
          Ver todos los eventos
        </a>
      </Wrapper>
    </section>
  );
}
