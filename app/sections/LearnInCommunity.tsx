import React from "react";
import "../globals.css";
import Wrapper from "../components/Wrapper";
import Image from "next/image";
import InfoEventGrid from "../components/InfoEventGrid";
import ImageCommunityGrid from "../components/ImageCommunityGrid";

export default function LearnInCommunity() {
  return (
    <section className="flex flex-col px-1 lg:h-screen">
      <Wrapper styles="w-full mb-10">
        <h2 className="border-principleViolet pl-2 border-l-4 font-bold text-lg lg:text-4xl uppercase">
          Aprende en comunidad
        </h2>
      </Wrapper>

      <div className="grid-events w-full animate-grid">
        <div className="sub-grid">
          <ImageCommunityGrid
            name="GDG"
            image="gdg-logo.png"
            styles="bg-[#fff]"
          />
          <InfoEventGrid
            href="https://gdg.community.dev/e/m6jq7d/"
            date=""
            time="7:00 p.m."
            location="Music Centre"
          />
        </div>

        <Image
          className="col-span-2 row-span-2 rounded-md w-full h-full object-cover"
          src="/image-grid.webp"
          alt="Imagen de evento"
          height={400}
          width={400}
        />

        <div className="sub-grid">
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
        </div>

        <Image
          className="row-span-2 rounded-md w-full h-full object-cover"
          src="/de-granda.webp"
          alt="Imagen de evento"
          height={400}
          width={400}
        />

        <div className="sub-grid">
          <ImageCommunityGrid
            name="Python Barranquilla"
            styles="bg-gradient-to-b from-[#1e415e] to-[#2b5b84] text-black"
            image="pybaq-logo.png"
          />
          <InfoEventGrid
            href="https://www.meetup.com/pythonbaq/events/299958884/"
            date="11 de abril"
            time="7:00 p.m."
            location="Koombea"
          />
        </div>

        <Image
          className="col-span-2 row-span-2 rounded-md w-full h-full object-cover"
          src="/image-grid.webp"
          alt="Imagen de evento"
          height={400}
          width={400}
        />

        <div className="sub-grid">
          <ImageCommunityGrid name="GDG" image="aws.png" styles="bg-[#fff]" />
          <InfoEventGrid
            href="https://www.meetup.com/aws-barranquilla/events/299991701/"
            date="18 de abril"
            time="7:00 p.m."
            location="Universidad Simón Bolívar"
          />
        </div>

        <Image
          className="col-span-2 row-span-2 rounded-md w-full h-full object-cover"
          src="/image-grid.webp"
          alt="Imagen de evento"
          height={400}
          width={400}
        />

        <div className="sub-grid">
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
        </div>

        <Image
          className="row-span-2 rounded-md w-full h-full object-cover"
          src="/de-granda.webp"
          alt="Imagen de evento"
          height={400}
          width={400}
        />

        <div className="sub-grid">
          <ImageCommunityGrid
            name="Python Barranquilla"
            styles="bg-gradient-to-b from-[#1e415e] to-[#2b5b84] text-black"
            image="pybaq-logo.png"
          />
          <InfoEventGrid
            href="https://www.meetup.com/pythonbaq/events/299958884/"
            date="11 de abril"
            time="7:00 p.m."
            location="Koombea"
          />
        </div>
      </div>
      <Wrapper styles="w-full flex flex-col gap-5 relative bg-image-learn-in-community mask pt-10">
        <p className="text-center text-gray-300">
          Desde el  hasta el 3 de Mayo las comunidades de
          Barranquilla nos unimos para organizar talleres, platicas y eventos
          especiales para que pueda aprender sobre inteligencia artificial y
          llegues preparando al hackatón.
        </p>
        <a
          className="hover:brightness-110 bg-principleViolet mx-auto px-5 xl:px-10 py-2 xl:py-3 rounded-lg w-fit text-[13px] xl:text-base uppercase"
          href="https://forms.gle/q1V2AdY1ZetQ9Yre8"
          target="_blank"
        >
          Ver talleres
        </a>
      </Wrapper>
    </section>
  );
}
