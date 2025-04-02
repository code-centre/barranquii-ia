import React from 'react'
import Summary from '../sections/Summary'
import PromoBar from '../components/PromoBar'
import Expectations from '../sections/Expectations'
import HeroSection from '../sections/HeroSection'
import Workshops from '../sections/Workshops'
import Sponsors from '../components/Sponsors'
import Mentors from '../sections/Mentors'

export default function LandingPage({ params }: { params: { landing: string } }) {
	return (
		<main className="py-20 lg:py-28 xl:py-32 min-h-screen flex flex-col gap-28">
			<div className='max-w-6xl mx-auto px-5 w-full mb-20'>
				<HeroSection landing={params.landing} />
			</div>
			<div className='max-w-6xl mx-auto px-5 w-full'>
				<Summary landing={params.landing} />
			</div>
			<PromoBar />
			<div className='max-w-6xl mx-auto px-5 w-full'>
				<Expectations landing={params.landing} />
			</div>
			<Mentors landing={params.landing} />
			<div className='max-w-6xl mx-auto px-5 w-full'>
				<Workshops landing={params.landing} />
			</div>
			<Sponsors />
		</main>
	)
}
