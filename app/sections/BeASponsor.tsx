import React from "react";
import Sponsors from "../components/Sponsors";

export default function BeASponsor() {
  return (
    <section className="flex flex-col gap-7">
      <h2 className="border- border-principleViolet pl-2 border-l-4 text-lg lg:text-4xl uppercase">
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
        className="hover:brightness-110 bg-principleViolet mx-auto px-5 xl:px-10 py-2 xl:py-3 rounded-lg w-fit text-[13px] xl:text-base uppercase"
        href="https://calendly.com/barranqui-ia/patrocinadores"
        target="_blank"
      >
        Contáctanos
      </a>

      <Sponsors title="Nuestros patrocinadores" />
    </section>
  );
}
