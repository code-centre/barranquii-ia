import Image from "next/image";
import React from "react";

export default function Boleta() {
  return (
    <div className="relative flex flex-col justify-between gap-6 p-6 border border-dashed rounded-md w-full overflow-hidden">
      {/* <Image
        width={400}
        height={400}
        className="-bottom-10 -z-10 absolute opacity-70 blur-sm w-[200px] md:w-[400px] lg:w-[600px] xl:w-[150px]"
        src="/square-r.webp"
        alt="square-bg"
      /> */}
      <Image
        width={700}
        height={700}
        className="-right-10 -z-20 absolute opacity-70 blur-sm w-[200px] md:w-[400px] lg:w-[600px] xl:w-[500px]"
        src="/square-l.webp"
        alt="square-bg"
      />

      <header className="z-20">
        <h2 className="font-bold text-3xl">Hackatón - Barranqui-IA</h2>
        {/* <p className="text-gray-300">04 de abril de 2024 a las 08:00</p> */}
      </header>
      <section className="flex flex-col gap-1">
        {/* <h2 className="max-w-md font-bold">
          Área metropolitana de, Kilómetro 5, vía Puerto Colombia, Barranquilla,
          Atlántico
        </h2> */}
        <p className="text-gray-300">04 y 05 de abril de 2024</p>
        <p>Empezamos 08:00 a.m.</p>

        {/* <div className="flex items-center space-x-4 mb-4">
            <div className="w-1/2">
              <dl className="gap-1 grid grid-cols-2 text-sm">
                <div className="font-medium">Asiento</div>
                <div>GA</div>
                <div className="font-medium">Fila</div>
                <div>General</div>
                <div className="font-medium">Puerta</div>
                <div>3</div>
              </dl>
            </div>
            <div className="w-1/2">
              <dl className="gap-1 grid grid-cols-2 text-sm">
                <div className="font-medium">Código</div>
                <div>1234567890</div>
                <div className="font-medium">Precio</div>
                <div>$25.00</div>
              </dl>
            </div>
          </div> */}
        {/* <div className="flex justify-center items-center border-gray-300 border border-dashed rounded-lg w-full h-12 text-sm">
              Código de barras
            </div> */}
      </section>
      <footer className="">
        <div className="gap-4 grid grid-cols-2">
          <div>
            <h2 className="font-bold text-lg">Participante</h2>
            {/* <p className="text-gray-300 text-sm">David Aragón</p> */}
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
