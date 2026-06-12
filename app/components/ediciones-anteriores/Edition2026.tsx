import HeroSection2026 from '@/app/sections/HeroSection2026'
import AboutBarranquiIA from '@/app/components/2026/AboutBarranquiIA';

import React from 'react'
import FAQ from '@/app/sections/FAQ'
import Title from '@/app/components/Title'
import WhatsAppFloatButton from '@/app/components/WhatsAppFloatButton'
import ContactDudasAddress from '@/app/components/ContactDudasAddress'
import { FAQS_HACKATHONES } from '@/app/utils/FAQS_HACKATHONES'
import HackatonBackground from '../2026/HackatonBackground';
import Results2026 from '../2026/Results2026';
import Winners2026 from '../2026/Winners2026';
import Gallery3D from '../2025/Gallery3D';
import BuildWithAI from '../2026/BuildWithAI';
import Location2026 from '../2026/Location2026';
import Mentors2026 from '../2026/Mentors2026';
import SponsorsSection2026 from '../2026/SponsorSection';
import ScrollAnimation from '../2026/ScrollAnimation';

const GALLERY_IMAGES_2026 = [
	'/2026/galeria/1.jpg',
	'/2026/galeria/2.jpg',
	'/2026/galeria/3.jpg',
	'/2026/galeria/4.jpg',
	'/2026/galeria/5.jpg',
	'/2026/galeria/6.jpg',
	'/2026/galeria/7.jpg',
	'/2026/galeria/8.jpg',
	'/2026/galeria/9.jpg',
	'/2026/galeria/10.jpg',
	'/2026/galeria/11.jpg',
	'/2026/galeria/12.jpg',
	'/2026/galeria/13.jpg',
	'/2026/galeria/14.jpg',
	'/2026/galeria/15.jpg',
	'/2026/galeria/16.jpg',
	'/2026/galeria/17.jpg',
	'/2026/galeria/18.jpg',
	'/2026/galeria/19.jpg',
];

export default function Edition2026({ params }: { params: { landing: string } }) {
	return (
		<>
			<WhatsAppFloatButton />
			<HackatonBackground />
			<main className="py-20 lg:py-28 xl:py-32 min-h-screen flex flex-col gap-20 md:gap-28 relative z-10" style={{ minHeight: '100vh' }}>
				<HeroSection2026 landing={params.landing} />
				<ScrollAnimation delay={0.1}>
					<Results2026 />
				</ScrollAnimation>
				<ScrollAnimation delay={0.15}>
					<Winners2026 />
				</ScrollAnimation>
				<ScrollAnimation delay={0.1}>
					<section id="galeria" className="max-w-7xl w-full mx-auto px-5 lg:px-10 scroll-mt-28">
						<Gallery3D autoPlay={true} images={GALLERY_IMAGES_2026} />
					</section>
				</ScrollAnimation>
				<ScrollAnimation delay={0.1}>
					<AboutBarranquiIA />
				</ScrollAnimation>
				<ScrollAnimation delay={0.1}>
					<BuildWithAI />
				</ScrollAnimation>
				<ScrollAnimation delay={0.1}>
					<Location2026 />
				</ScrollAnimation>
				<ScrollAnimation delay={0.15}>
					<Mentors2026 />
				</ScrollAnimation>
				<ScrollAnimation delay={0.1}>
					<SponsorsSection2026 />
				</ScrollAnimation>
				<ScrollAnimation delay={0.15}>
					<section
						id="contacto-dudas"
						className="max-w-6xl mx-auto px-5 lg:px-10 w-full scroll-mt-28"
						aria-label="¿Tienes alguna duda? Contacto general"
					>
						<Title title="¿Tienes alguna duda?" landing={params.landing} />
						<ContactDudasAddress intro="Escríbenos y con gusto te orientamos sobre los resultados del hackatón, el programa de aceleración o cualquier consulta general." />
					</section>
				</ScrollAnimation>
				<ScrollAnimation delay={0.2}>
					<FAQ data={FAQS_HACKATHONES} landing={params.landing} />
				</ScrollAnimation>
			</main>
		</>
	);
}
