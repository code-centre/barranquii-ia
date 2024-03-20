import Image from "next/image";
import React from "react";

export default function Location() {
  return (
    <section className="flex flex-col gap-5">
      <div>
        <h2 className="border- border-principleViolet pl-2 border-l-4 text-lg lg:text-4xl uppercase">
          ¿Cómo llegar?
        </h2>
        <span className="flex items-center gap-1 mt-2 font-semibold text-gray-400 uppercase">
          <div className="bg-principleViolet rounded-full w-1 h-1"></div>
          Ubicación
        </span>
        <p className="mt-5 max-w-xs text-gray-300">
          Área metropolitana de, Kilómetro 5, vía Puerto Colombia, Barranquilla,
          Atlántico
        </p>
      </div>
      <Image
        src="/uni-norte.png"
        height={47}
        width={150}
        alt="Logo de la universidad de la norte"
      />
      <div className="rounded-lg overflow-hidden">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44308.33713906658!2d-74.83541508186032!3d11.013043655776967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42c6a20b68621%3A0x5c3de7e774806ad1!2sUniversidad%20del%20Norte!5e0!3m2!1ses-419!2sco!4v1710960596048!5m2!1ses-419!2sco"
          height="600"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
