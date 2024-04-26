import Image from "next/image";
import React from "react";

interface Props {
  nameUser: string;
  ticketType: string;
}

export default function Boleta({ nameUser, ticketType }: Props) {
  console.log(ticketType);

  return (
    <div className="relative flex flex-col justify-between gap-6 p-6 border border-dashed rounded-md w-full overflow-hidden">
      <Image
        width={700}
        height={700}
        className="-right-10 -z-20 absolute opacity-70 blur-sm w-[200px] md:w-[400px] lg:w-[600px] xl:w-[500px]"
        src="/square-l.webp"
        alt="square-bg"
      />

      <header className="z-20">
        <h2 className={`font-bold text-3xl ${ticketType === '' && 'animate-pulse bg-gray-300 text-gray-300'}`}>
          
          {ticketType === '"taller"' && "Talleres - "}Hackatón - Barranqui-IA
        </h2>
        {/* <p className="text-gray-300">04 de abril de 2024 a las 08:00</p> */}
      </header>
      <section className={`flex flex-col gap-1 ${ticketType === '' && 'animate-pulse bg-gray-300 text-gray-300 w-32 '}`}>
        {/* <h2 className="max-w-md font-bold">
          Área metropolitana de, Kilómetro 5, vía Puerto Colombia, Barranquilla,
          Atlántico
        </h2> */}
        {ticketType === '"taller"' ? (
          <>
            <p className="text-gray-300">04 de Mayo de 2024</p>
            <p>Empezamos 02:00 p.m.</p>
          </>
        ) : (
          <>
            <p className="text-gray-300">04 y 05 de Mayo de 2024</p>
            <p>Empezamos 08:00 a.m.</p>
          </>
        )}
      </section>
      <footer className="">
        <div className="gap-4 grid grid-cols-2">
          <div>
            <h2 className="font-bold text-lg">Participante</h2>
            {nameUser !== "undefined undefined" ? (
              <p className="text-gray-300 text-sm">{nameUser}</p>
            ) : (
              <p className="bg-gray-300 animate-pulse w-28 mt-1 h-4"></p>
            )}
          </div>
          <div className="text-right">
            <h2 className="font-bold text-lg">Evento</h2>
            <p className="text-gray-300 text-sm">Hackatón - Barranqui-IA</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
