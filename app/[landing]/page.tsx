import type { Metadata } from 'next'
import React from 'react'
import Summary from '../sections/Summary'
import PromoBar from '../components/PromoBar'
import Expectations from '../sections/Expectations'
import HeroSection from '../sections/HeroSection'
import Title from '../components/Title'
import Workshops from '../sections/Workshops'
import Sponsors from '../components/Sponsors'
import Mentors from '../sections/Mentors'
import FAQ from '../sections/FAQ'
import Schedule from '../components/Schedule'
import EventsSection from '../sections/EventsSection'
import Location from '../sections/Location'
import { FAQS_HACKATHONES } from '../utils/FAQS_HACKATHONES'
import { redirect } from 'next/navigation'
import Tickets from '../sections/Tickets'
import Topics from '../sections/Topics'
import SponsorsSection from '../sections/SponsorsSection'

export const metadata: Metadata = {
	title: "Barranqui-IA",
	description:
	  "Barranqui-IA 2025: Hackatón de inteligencia artificial en el caribe, que no te digan que aquí no se hace tecnología.",
	authors: [
	  {
		name: "Fundación Código Abierto",
		url: "https://fundacioncodigoabierto.com/",
	  },
	],
	keywords: [
	  "Caribe-IA",
	  "Barranqui-IA",
	  "hackatón en Barranquilla",
	  "taller de tecnología",
	  "inteligencia artificial",
	  "innovación tecnológica",
	  "evento de TI",
	  "desarrollo de software",
	  "comunidad tecnológica",
	],
	openGraph: {
	  type: "website",
	  url: "https://www.barranquiia.com",
	  title: "Barranqui-IA 2025",
	  description:
		"Participa en el principal Hackatón de inteligencia artificial en el caribe, que no te digan que aquí no se hace tecnología.",
	  siteName: "Barranqui-IA 2025",
	  images: [
		{
		  url: "https://www.barranquiia.com/poster.jpg",
		},
	  ],
	  locale: "es_ES",
	},
};

export default function LandingPage({ params }: { params: { landing: string } }) {
	if (params.landing !== 'barranqui-ia') {
		return redirect('/')
	} 


	return (
		<main className="py-20 lg:py-28 xl:py-32 min-h-screen flex flex-col gap-20 md:gap-28">
			<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full mb-20'>
				<HeroSection landing={params.landing} />
			</div>
			<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
				<Summary landing={params.landing} />
			</div>
			{
				params.landing === 'barranqui-ia' &&
				<PromoBar />
			}
			<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
				<Expectations landing={params.landing} />
				<Topics landing={params.landing}/>
			</div>
			<Location landing={params.landing} />
			<Schedule landing={params.landing} />
			<Mentors landing={params.landing} />
			<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
				<SponsorsSection landing={params.landing}/>
			</div>
			<div className='max-w-6xl mx-auto w-full'>
				<Workshops landing={params.landing} />
			</div>
			<Tickets landing={params.landing} />
			<Sponsors landing={params.landing} />
			<div className='flex flex-col gap-10'>
				<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
					<Title
						title="Participa en los eventos de Pre-Hackatón"
						landing={params.landing}
					/>
				</div>
				<EventsSection landing={params.landing} />
			</div>
			<FAQ data={FAQS_HACKATHONES} landing={params.landing} />
		</main>
	)
}