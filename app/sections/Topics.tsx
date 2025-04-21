import React from "react";
import Topic from "../components/Topic";
import "../globals.css";
import Title from "../components/Title";

interface Props {
  landing: string;
}

const TOPICS = [
	{
		title: "Reto empresarial x Cámara de Comercio BAQ",
		img: "/cities.webp"
	},
	{
		title: "Salud digital",
		img: "/health.webp"
	},
	{
		title: "Educación personalizada",
		img: "/education.webp"
	},
	{
		title: "Sostenibilidad ambiental",
		img: "/environment.webp"
	},
	{
		title: "Agentes x ShadAI",
		img: "/assistant.webp"
	},
	{
		title: "Entretenimiento y creatividad",
		img: "/entertainment.webp"
	},
	{
		title: "Seguridad y privacidad",
		img: "/security.webp"
	}
]

export default function Topics({ landing }: Props) {
  return (
    <section id="topics" className="pt-32 relative">
      <Title landing={landing} title="Lineas temáticas" />

      <p className="mt-3 text-gray-300">
        Barranqui-IA contará con 7 lineas temáticas para guiar a lo
        participantes a resolver problemas relevantes con inteligencia
        artificial.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10 mt-10">
				{
					TOPICS.map((topic, i) => (
						<Topic key={topic.title} img={topic.img} title={topic.title} index={i + 1} />
					))
				}
        {/* <Topic img="/cities.webp" title="Reto empresarial x Cámara de Comercio BAQ" />
        <Topic img="/health.webp" title="Salud digital" />
        <Topic img="/education.webp" title="Educación personalizada" />
        <Topic img="/environment.webp" title="Sostenibilidad ambiental" />
        <Topic img="/assistant.webp" title="Agentes x ShadAI" />
        <Topic
          img="/entertainment.webp"
          title="Entretenimiento y creatividad"
        />
        <Topic img="/security.webp" title="Seguridad y privacidad" /> */}
      </div>
			{/* <div className="absolute top-0 left-0 w-full h-full grid bg-black opacity-50">
				<div className="h-96 w-96 bg-white"></div>
			</div> */}
    </section>
  );
}
