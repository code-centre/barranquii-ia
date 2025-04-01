import React from 'react'
import Summary from '../sections/Summary'
import PromoBar from '../components/PromoBar'
import Expectations from '../sections/Expectations'
import HeroSection from '../sections/HeroSection'

export default function LandingPage({ params }: { params: { landing: string } }) {
	return (
		<main className="py-20 lg:py-28 xl:py-32 min-h-screen max-w-6xl mx-auto px-5">
			<div className='mb-20'>
				<HeroSection landing={params.landing} />

			</div>
			<Summary landing={params.landing} />
		<main className="py-20 lg:py-28 xl:py-32 min-h-screen flex flex-col gap-28">
			<div className='max-w-6xl mx-auto px-5 w-full'>
				<Summary landing={params.landing} />
			</div>
			<PromoBar />
			<div className='max-w-6xl mx-auto px-5 w-full'>
				<Expectations landing={params.landing} />
			</div>
		</main>
	)
}
