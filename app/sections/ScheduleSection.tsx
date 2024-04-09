import React from "react";
import Schedule from "../components/Schedule";

export default function ScheduleSection() {
  return (
    <section id="schedule" className="flex md:flex-row flex-col gap-10 pt-32">
      <div className="flex flex-col gap-5 md:gap-10 md:w-[25%]">
        <div>
          <h2 className="border- border-principleViolet pl-2 border-l-4 font-bold text-lg lg:text-3xl uppercase">
            Horario y agenda
          </h2>
          <span className="flex items-center gap-1 mt-2 font-semibold text-gray-400 uppercase">
            <div className="bg-principleViolet rounded-full w-1 h-1"></div>
            Programación
          </span>
        </div>

        {/* <div className="flex flex-col gap-4">
          <p className="text-gray-300 text-sm">
            Descarga toda la programación para que tengas la información a la
            mano
          </p>
          <button className="hover:brightness-110 bg-principleViolet px-5 xl:px-4 py-2 xl:py-3 rounded-lg w-fit text-[13px] xl:text-sm uppercase">
            Descargar Horario
          </button>
        </div> */}
      </div>
      <Schedule />
    </section>
  );
}
