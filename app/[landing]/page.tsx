import type { Metadata } from 'next'
import React from 'react'

export function generateStaticParams() {
	return [
		{ landing: 'barranqui-ia' },
		// Add other landings when available
		// { landing: 'cartagen-ia' },
		// { landing: 'samar-ia' },
	];
}
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
import Organizers from '../sections/Organizers'

export function generateMetadata({ params }: { params: { landing: string } }): Metadata {
	const landingNames: Record<string, string> = {
		'barranqui-ia': 'Barranqui-IA',
		'cartagen-ia': 'Cartagen-IA',
		'samar-ia': 'Samar-IA',
	};
	
	const name = landingNames[params.landing] || 'Caribe-IA';
	const year = '2026';
	
	return {
		title: `${name} ${year}`,
		description: `${name} ${year}: Hackatón de inteligencia artificial en el Caribe colombiano. Participa en el evento de tecnología e IA más importante de la región.`,
		openGraph: {
			title: `${name} ${year}`,
			description: `${name} ${year}: Hackatón de inteligencia artificial en el Caribe colombiano.`,
			url: `https://www.caribe-ia.com/${params.landing}`,
			images: [
				{
					url: "/opengraph-image.jpg",
					width: 1200,
					height: 630,
					alt: `${name} ${year}`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: `${name} ${year}`,
			description: `${name} ${year}: Hackatón de inteligencia artificial en el Caribe colombiano.`,
		},
		alternates: {
			canonical: `/${params.landing}`,
		},
	};
}

export default function LandingPage({ params }: { params: { landing: string } }) {
	if (params.landing === 'barranqui-ia') {
		return redirect('/barranqui-ia/2026')
	}


	return (
		<main className="py-20 lg:py-28 xl:py-32 min-h-screen flex flex-col gap-20 md:gap-28">
			<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
				<HeroSection landing={params.landing} />
			</div>
			<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
				<Summary landing={params.landing} />
			</div>
			<div className='max-w-6xl mx-auto px-5 lg:px-10
			 w-full'>
				<Organizers landing={params.landing} />
			</div>
			{
				params.landing === 'barranqui-ia' &&
				<PromoBar />
			}
			<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
				<Expectations landing={params.landing} />
				<Topics landing={params.landing} />
			</div>
			<Location landing={params.landing} />
			<Schedule landing={params.landing} />
			<Mentors landing={params.landing} role= "mentors">
				<Title
					title="Mentores"
					landing={params.landing}
				/>
			</Mentors>
			<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
				<SponsorsSection landing={params.landing} />
			</div>
			<div className='max-w-6xl mx-auto w-full  lg:pt-24'>
				<Workshops landing={params.landing} />
			</div>
			<Tickets landing={params.landing} />
			<Sponsors landing={params.landing} />
			<div className='flex flex-col gap-10  lg:pt-24'>
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
