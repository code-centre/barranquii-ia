'use client'
import Image from "next/image";
import React, { useState } from "react";

interface Props {
	img: string;
	title: string;
	index: number
}

const DESCRIPTIONS: Record<string, string[]> = {
	"Reto empresarial x Cámara de Comercio BAQ": ["¿Y si pudieras mejorar los procesos internos de una empresa real con inteligencia artificial? Esta categoría está diseñada para que equipos corporativos o participantes con visión de negocio trabajen directamente sobre un desafío interno propuesto por una empresa aliada. Con el acompañamiento de mentores expertos, tu equipo podrá optimizar operaciones, automatizar flujos o crear nuevos servicios."],
	"Salud digital": ["La tecnología también salva vidas. En esta línea podrás desarrollar soluciones que mejoren la atención médica, el acceso a la salud, la gestión de datos clínicos o incluso la prevención de enfermedades. ¿Te imaginas un sistema de salud más humano y eficiente gracias a la IA? ¡Hazlo realidad!"],
	"Educación personalizada": ["Cada mente aprende a su ritmo. Tu reto es construir soluciones que adapten la educación a las necesidades de cada estudiante, integrando IA en el proceso de aprendizaje, evaluación o acompañamiento. Democratiza el conocimiento y haz que el aprendizaje evolucione."],
	"Sostenibilidad ambiental": ["La inteligencia artificial también puede cuidar al planeta. Desde monitorear el consumo energético hasta detectar riesgos ambientales o diseñar soluciones circulares, aquí podrás crear proyectos que hagan del mundo un lugar más verde y justo. ¡Actúa por el futuro!"],
	"Agentes x ShadAI": ["En esta categoría exclusiva, usarás el framework ShadAI para crear agentes inteligentes que interactúan, aprenden y ejecutan tareas. Piensa en copilotos para equipos, asistentes creativos o agentes que mejoren la productividad de las personas. Si logras que tu agente piense como tú… ¡ya estás un paso adelante!", "🏆 Premio especial: $1.000.000 COP al mejor agente creado con ShadAI."],
	"Entretenimiento y creatividad": ["¿Y si fusionas el arte con la tecnología? Explora cómo la inteligencia artificial puede transformar la música, el cine, los videojuegos, la literatura o cualquier forma de expresión creativa. ¡Tu próxima obra maestra puede salir de un hackatón!"],
	"Seguridad y privacidad": ["En un mundo digital, proteger lo que somos es más importante que nunca. Diseña soluciones que resguarden los datos, fortalezcan identidades digitales o creen espacios seguros para navegar, compartir y construir confianza en línea."],
}

export default function Topic({ img, title, index }: Props) {
	const [showDescription, setShowDescription] = useState(false)

	return (
		<div
			className="relative cursor-pointer"
			onMouseEnter={() => setShowDescription(true)}
			onMouseLeave={() => setShowDescription(false)}>
			<Image
				src={img}
				alt={title}
				height={80}
				width={80}
				className="mx-auto w-20 md:w-20 h-20 md:h-20 object-cover"
			/>
			<p className="mx-auto w-[120px] font-medium text-sm font-mono text-center text-gray-300">
				{title}
			</p>
			{
				showDescription && (
					<div className={`bg-white p-4 z-10 rounded-md absolute left-0 h-[210px] overflow-y-scroll md:overflow-y-auto md:h-auto top-10 w-[250px] lg:w-[300px] ${index % 2 === 0 ? "card-description-topic" : ""}`}>
						<h2 className="font-medium font-mono text-black mb-2">{title}</h2>
						<div className="flex flex-col gap-2">
							{
								DESCRIPTIONS[title].map((description: string) => (
									<p key={index} className={`text-black text-xs`}>{description}</p>
								))
							}
						</div>
					</div>
				)
			}
		</div>
	);
}
