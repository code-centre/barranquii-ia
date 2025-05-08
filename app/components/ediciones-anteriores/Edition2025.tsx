import HeroSection from '@/app/sections/HeroSection'
import Organizers from '@/app/sections/Organizers'
import Summary from '@/app/sections/Summary'
import React from 'react'
import PromoBar from '../PromoBar'
import Expectations from '@/app/sections/Expectations'
import Topics from '@/app/sections/Topics'
import Schedule from '../Schedule'
import Mentors from '@/app/sections/Mentors'
import Location from '@/app/sections/Location'
import SponsorsSection from '@/app/sections/SponsorsSection'
import Workshops from '@/app/sections/Workshops'
import Tickets from '@/app/sections/Tickets'
import Sponsors from '../Sponsors'
import Title from '../Title'
import EventsSection from '@/app/sections/EventsSection'
import FAQ from '@/app/sections/FAQ'
import { FAQS_HACKATHONES } from '@/app/utils/FAQS_HACKATHONES'

export default function Edition2025({ params }: { params: { landing: string } }) {
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
				<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
					<Topics landing={params.landing} />
				</div>
				<Location landing={params.landing} />
				
				<Mentors landing={params.landing} />
				<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
					<SponsorsSection landing={params.landing} />
				</div>
				<div className='max-w-6xl mx-auto w-full  lg:pt-24'>
					<Workshops landing={params.landing} />
				</div>
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
