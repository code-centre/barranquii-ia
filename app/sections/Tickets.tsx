import React from "react";
import CardTicket from "../components/CardTicket";
import "../globals.css";

export default function Tickets() {
  return (
    <section
      id="boleta"
      className="relative flex flex-col gap-6 py-20 gradient"
    >
      {/* <div className="gradient"></div> */}
      <div>
        <h2 className="border- border-principleViolet pl-2 border-l-4 text-lg lg:text-4xl uppercase">
          Adquiere tu boleto
        </h2>
        <span className="flex items-center gap-1 mt-2 font-semibold text-gray-400 uppercase">
          <div className="bg-principleViolet rounded-full w-1 h-1"></div>
          Participa
        </span>
      </div>
      <p className="text-gray-300">
        Adquiere tus boletos para participar en Barranqui-IA, ¡No te quedes
        fuera!
      </p>

      <ul className="flex flex-col gap-1 ml-10 text-gray-300 marker:text-principleViolet list-disc"></ul>
      <div className="gap-x-3 gap-y-10 grid grid-cols-1 md:grid-cols-5">
        <CardTicket
          mode="taller"
          title="Entrada Limitada"
          styles="col-span-2"
          subTitle="Aprende sobre Inteligencia Artificial"
          amount="40,000"
        >
          <ul className="mt-3 ml-5 marker:text-principleViolet list-disc">
            <li>
              Acceso a 6 talleres exclusivos sobre IA esté sábado 4 de Mayo
            </li>
            <li>Hidratación y café ilimitado</li>
            <li>Certificación de participación</li>
          </ul>
        </CardTicket>
        <CardTicket
          mode="general"
          title="Entrada General"
          styles="col-span-2"
          subTitle="Vive la experiencia completa"
          amount="100,000"
        >
          <ul className="mt-3 ml-5 marker:text-principleViolet list-disc">
            <li>Participación en el Hackatón</li>
            <li>Camiseta oficial</li>
            <li>Alimentación durante el evento</li>
            <li>
              Talleres exclusivos con nuestros expertos nacionales e
              internacionales
            </li>
            <li>Hidratación y café ilimitado</li>
            <li>Certificación de participación</li>
          </ul>
        </CardTicket>
      </div>
    </section>
  );
}
