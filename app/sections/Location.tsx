import Image from "next/image";
import React from "react";
import Title from "../components/Title";
import Border from "../components/Border";
import ImageDivider from "../components/ImageDivider";

interface Props {
  landing: string
}

export default function Location({ landing }: Props) {
  return (
    <section id="location" className="flex max-w-6xl mx-auto w-full flex-col gap-10 px-5 lg:px-10  lg:pt-24">
      <Title title="¿Dónde fué el hackathon?" landing={landing} />
      <div className="grid grid-cols-[auto_1fr] gap-3 lg:gap-9">
        <Border landing={landing} />
        <div className="flex flex-col gap-6">
          <p className="text-lg">El hackatón Barranqui-IA se llevó a cabo en dos espacios increíbles que combinan lo mejor del ecosistema tech del Caribe:</p>
          <ImageDivider
            rightImage="/WhatsApp Image 2025-03-29 at 12.48.51.jpeg"
            leftImage="/Acceso-a-bloque-k.png"
            leftTitle="Universidad del norte"
            rightTitle="Fundación Código Abierto"
             />
        <p>Dimos inicio al hackatón en el campus de Uninorte, con la presentación de retos, la formación de equipos, mentorías y la primera parte del desarrollo de los proyectos.</p> <p>Cuando cayó la noche, nos trasladamos a la sede de Fundación Código Abierto, donde la energía no se detuvo. Continuamos trabajando durante toda la madrugada en un espacio cómodo, creativo y lleno de buena vibra.</p> <p>Hubo snacks, café y dinámicas especiales que ayudaron a mantener la moral en alto. Y sí, quienes quisieron tomar una siesta trajeron su almohada y descansaron unas horas.</p> <p>Nos reencontramos en la Universidad del Norte para recargar energías con un desayuno conjunto y preparar los toques finales antes de los pitches y la premiación.</p>
          <div className="rounded-lg overflow-hidden">
            <iframe
              className="w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44308.33713906658!2d-74.83541508186032!3d11.013043655776967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42c6a20b68621%3A0x5c3de7e774806ad1!2sUniversidad%20del%20Norte!5e0!3m2!1ses-419!2sco!4v1710960596048!5m2!1ses-419!2sco"
              height="300"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
