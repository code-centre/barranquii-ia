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
			</div>
			<Location landing={params.landing} />
			<Schedule landing={params.landing} />
			<Mentors landing={params.landing} />
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