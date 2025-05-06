import Image from "next/image";
import React from "react";
import Title from "../components/Title";

interface Props {
	landing: string;
}

export default function SponsorsSection({ landing }: Props) {
	return (
		<section id="sponsors" className="pb-10">
			<Title landing={landing} title="Patrocinadores" />
			<ul className="flex flex-col items-center justify-center mt-10 md:flex-wrap md:flex-row gap-10 md:gap-10">
				{/* <li>
          <Image
            className="w-[300px]"
            src="/logos/ultracem.webp"
            height={60}
            width={200}
            alt="Logo de Ultracem city"
            loading="lazy"
          />
        </li> */}
				<li>
					<Image
						className="w-[300px] h-auto object-contain"
						src="/logos/camara-de-comercio.webp"
						height={80}
						width={300}
						alt="Logo de la Camara de Comercio"
						loading="lazy"
					/>
				</li>
				<li className="flex items-center justify-center">
					<Image
						className="w-[300px] h-auto object-contain"
						src="/logos/gobernacion.webp"
						height={80}
						width={300}
						alt="Logo de Gobernación del Atlántico"
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
				<li>
					<Image
						className="w-[200px] h-[110px] object-contain"
						src="/logos/google.png"
						height={60}
						width={200}
						alt="Logo de Google"
					/>
				</li>
				<li>
					<figure className="flex items-center justify-center gap-x-3">
						<Image
							className="w-16"
							src="/logo-cc.webp"
							height={130}
							width={180}
							alt="Logo de Code Centre"
							loading="lazy"
						/>
						<Image
							className="w-[200px]"
							src="/cc.webp"
							height={25}
							width={200}
							alt="Logo de Code Centre"
							loading="lazy"
						/>
					</figure>
				</li>
			</ul>
		</section>
	);
}
