import React from "react";
import CardTicket from "../components/CardTicket";
import "../globals.css";

export default function Tickets() {
  return (
    <section className="relative flex flex-col gap-6 py-10 gradient">
      {/* <div className="gradient"></div> */}
      <div>
        <h2 className="border- border-principleViolet pl-2 border-l-4 text-lg lg:text-4xl uppercase">
          Adquiere tu boleto
        </h2>
        <span className="flex items-center gap-1 mt-2 font-semibold text-gray-400 uppercase">
          <div className="bg-principleViolet rounded-full w-1 h-1"></div>
          Ingresos
        </span>
      </div>
      <p className="text-gray-300">
        Adquiere tus boletos para participar en Barranqui-IA, ¡No te quedes
        fuera!
      </p>

      <ul className="flex flex-col gap-1 ml-10 text-gray-300 marker:text-principleViolet list-disc">
        <li>Pre-venta: Del 3 al 10 de Abril: $50,000</li>
        <li>Etapa 1: Del 11 al 20 de Abril: $80,000</li>
        <li>Etapa 2: del 21 de Abril al 1ro de Mayo: $100,000</li>
      </ul>
      <div className="gap-x-3 gap-y-10 grid grid-cols-1 md:grid-cols-5">
        <CardTicket
          mode="general"
          title="General"
          styles="col-span-2"
          subTitle="Entrada general"
          amount="50,000"
        >
          <ul className="mt-3 ml-5 lg:h-72 marker:text-principleViolet list-disc">
            <li>Entrada al Hackatón</li>
            <li>Camiseta oficial</li>
            <li>Almuerzo del sábado 4 de mayo</li>
            <li>Cena del sábado 4 de mayo</li>
            <li>Desayuno del domingo 5 de mayo</li>
            <li>Almuerzo del domingo 5 de mayo</li>
          </ul>
        </CardTicket>
        <CardTicket
          mode="full"
          styles="overflow-hidden gap-2 col-span-3"
          title="Full access"
          subTitle="Paquete conmemorativo"
          amount="100,000"
        >
          <div className="flex gap-2 fle">
            <ul className="mt-3 mr-3 ml-5 pb-10 lg:h-32 marker:text-principleViolet list-disc">
              <li>Todo lo que tiene el boleto general </li>
              <div className="my-2 border-b border-dashed h-1"></div>
              <li>
                Acceso al coctel de pre-inauguración el viernes 3 de Mayo en las
                oficinas de Code Centre. <br />{" "}
              </li>
            </ul>
            <img
              src="/coctel.jpeg"
              className="lg:block flex-1 hidden rounded-md h-[200px] object-cover"
            />
            {/* {styles && (
              <div className="flex flex-col flex-1 justify-center gap-7">
                <img
                  src="/swags.jpeg"
                  className="flex-1 rounded-md h-[150px] object-cover"
                />
              </div>
            )} */}
          </div>
          <p className="lg:mt-6 ml-5">
            Es la oportunidad perfecta para conocer a los mentores y expertos
            internacionales que nos acompañaras además de disfrutar de un
            inperdible show musical.
          </p>
        </CardTicket>
      </div>
    </section>
  );
}
