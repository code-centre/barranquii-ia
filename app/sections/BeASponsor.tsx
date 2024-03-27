import React from "react";
import Sponsors from "../components/Sponsors";
import Image from "next/image";

export default function BeASponsor() {
  return (
    <section className="flex flex-col gap-7">
      <h2 className="border- border-principleViolet pl-2 border-l-4 font-bold text-lg lg:text-4xl uppercase">
        ¿Quieres ser un patrocinador?
      </h2>
      <p className="text-gray-300">
        ¡Únete como patrocinador a nuestro emocionante evento! Como
        patrocinador, obtendrás una destacada visibilidad de marca en nuestros
        materiales promocionales, la oportunidad de interactuar con talentos
        tecnológicos regionales y el posicionamiento como líder en el impulso
        del progreso tecnológico. Tu apoyo no solo contribuirá al desarrollo de
        la comunidad tecnológica local, sino que también te brindará
        oportunidades estratégicas para colaboraciones futuras. ¡Contáctanos
        para obtener más información sobre cómo participar y únete al movimiento
        que está transformando Barranquilla!
      </p>
      <a
        className="hover:brightness-110 bg-principleViolet px-5 xl:px-10 py-2 xl:py-3 rounded-lg w-fit text-[13px] xl:text-base uppercase"
        href="https://calendly.com/barranqui-ia/patrocinadores"
        target="_blank"
      >
        Contáctanos
      </a>

      <div className="flex flex-wrap gap-6  flex-row items-center justify-center lg:justify-between">
        <Image
          className="w-[150px] h-[47px] object-cover"
          src="/uni-norte.png"
          height={47}
          width={150}
          alt="Logo de la universidad de la norte"
        />
        <Image
          className="w-[150px] h-[47px]"
          src="/google.png"
          height={47}
          width={150}
          alt="Logo de Google"
        />
        <Image
          className="w-[150px]"
          src="/i-city.webp"
          height={47}
          width={150}
          alt="Logo de Google"
        />
        <figure className="flex items-center justify-center gap-x-2">
          <Image
            className=" w-12"
            src="/logo-cc.webp"
            height={100}
            width={150}
            alt="Logo de Code Centre"
          />
          <Image
            className="w-[150px]"
            src="/cc.webp"
            height={19}
            width={150}
            alt="Logo de Code Centre"
          />
        </figure>
      </div>
    </section>
  );
}
