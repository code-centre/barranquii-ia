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
      <div className="flex md:flex-row flex-col gap-5">
        <CardTicket title="General" subTitle="Entrada general" amount="100,000">
          <ul className="mt-3 ml-5 marker:text-principleViolet list-disc">
            <li>Ingreso a instalaciones</li>
            <li>Participación en charlas</li>
          </ul>
        </CardTicket>
        <CardTicket
          title="Full access"
          subTitle="Paquete conmemorativo"
          amount="200,000"
        >
          <ul className="mt-3 ml-5 marker:text-principleViolet list-disc">
            <li>Ingreso a instalaciones</li>
            <li>Participación en charlas</li>
          </ul>
        </CardTicket>
      </div>
    </section>
  );
}
