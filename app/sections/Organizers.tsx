import Image from "next/image";
import React from "react";
import Title from "../components/Title";

interface Props {
	landing?: string;
}

export default function Organizers({ landing }: Props) {
	return (
		<section id="organizers" className="flex flex-col gap-10 lg:gap-20">
			<Title landing={landing} title="Organizadores" />
			<ul className="flex items-center justify-center flex-wrap lg:justify-start md:flex-wrap md:flex-row gap-5 md:gap-10">
				<li>
					<Image
						className="w-[180px]"
						src="/logos/logo-fca.webp"
						height={60}
						width={220}
						alt="Logo de FCA"
						loading="lazy"
					/>
				</li>
				<li>
					<Image
						className="w-[300px]"
						src="/uninorte.webp"
						height={60}
						width={280}
						alt="Logo de la universidad de la norte"
						loading="lazy"
					/>
				</li>
				<li className="flex items-center justify-center">
					<Image
						className="w-[220px] h-auto object-contain"
						src="/logos/gdg-logo.png"
						height={80}
						width={300}
						alt="Logo de GDG"
						loading="lazy"
					/>
				</li>
			</ul>
		</section>
	);
}
