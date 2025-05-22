import Image from "next/image";
import React from "react";
import Title from "../../components/Title";
import Border from "../../components/Border";
import ImageDivider from "../../components/ImageDivider";

interface Props {
  landing: string
}

export default function Location({ landing }: Props) {
  return (
    <section id="location" className="flex max-w-6xl mx-auto w-full flex-col gap-10 px-5 lg:px-10  lg:pt-24">
      <Title title="¿Dónde fue el hackathon?" landing={landing} />
      <div className="grid grid-cols-[auto_1fr] gap-3 lg:gap-9">
        <Border landing={landing} />
        <div className="flex flex-col gap-6">
          <p className="text-lg">El hackatón Barranqui-IA se llevó a cabo en dos espacios increíbles que combinaron lo mejor del ecosistema tech del Caribe:</p>
          <ImageDivider
            rightImage="/WhatsApp Image 2025-03-29 at 12.48.51.jpeg"
            leftImage="/Acceso-a-bloque-k.png"
            leftTitle="Universidad del norte"
            rightTitle="Fundación Código Abierto"
             />
          <p>Dimos inicio al hackatón en el campus de Uninorte, con la presentación de retos, formación de equipos, mentorías y la primera parte del desarrollo de los proyectos.</p>
          <p>Cuando cayó la noche, nos movimos a la sede de Fundación Código Abierto, donde la energía no se detuvo. Continuamos trabajando toda la madrugada en un espacio cómodo, creativo y lleno de buena vibra.</p>
          <p>Hubo snacks, café, y dinámicas especiales para mantener la moral en alto. Y sí, algunos participantes trajeron sus almohadas y descansaron unas horas.</p>
          <p>Nos reencontramos en la Universidad del Norte para recargar energías con un desayuno conjunto y preparar los toques finales antes de los pitches y la premiación.</p>
        </div>

      </div>
    </section>
  );
}
