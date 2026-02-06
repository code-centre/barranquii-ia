import Image from "next/image";
import React from "react";
import Title from "../components/Title";
import ScrollAnimation from "../components/2026/ScrollAnimation";

interface Props {
	landing?: string;
}

const organizers = [
	{
		name: "Caribe Ventures",
		role: "Venture Studio / Entidad operadora",
		logo: "/images/sponsors/caribe-ventures.png",
		logoWidth: 300,
		logoHeight: 80
	},
	{
		name: "FCA",
		role: "Comunidad y propósito",
		logo: "/logos/logo-fca.webp",
		logoWidth: 220,
		logoHeight: 60
	}
];

export default function Organizers({ landing }: Props) {
	return (
		<section id="organizers" className="flex flex-col py-20 md:py-28">
			<Title landing={landing} title="Organizadores" />
			<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
				{organizers.map((organizer, index) => (
					<ScrollAnimation key={organizer.name} delay={index * 0.1} direction="up">
						<div className="flex flex-col items-center md:items-start text-center md:text-left">
							<Image
								className="mb-4 h-auto object-contain"
								src={organizer.logo}
								height={organizer.logoHeight}
								width={organizer.logoWidth}
								alt={`Logo de ${organizer.name}`}
								loading="lazy"
							/>
							<h3 className="text-xl font-bold text-white mb-2">{organizer.name}</h3>
							<p className="text-white/70 text-sm lg:text-base">{organizer.role}</p>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</section>
	);
}
