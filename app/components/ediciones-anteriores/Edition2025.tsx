import HeroSection from '@/app/sections/HeroSection'
import Organizers from '@/app/sections/Organizers'
import Summary2025 from '../2025/Summary2025'
import React from 'react'
import Topics2025 from '../2025/Topics2025'
import Gallery3D from '../2025/Gallery3D'
import Mentors from '@/app/sections/Mentors'
import Location2025 from '../2025/Location2025'
import SponsorsSection from '@/app/sections/SponsorsSection'
import Workshops from '@/app/sections/Workshops'
import Sponsors from '../Sponsors'
import Title from '../Title'
import FAQ from '@/app/sections/FAQ'
import { AssistantsGraphics } from '../2025/AssistantsGraphics'
import { FAQS_HACKATHONES } from '@/app/utils/FAQS_HACKATHONES'
import { voluntarios } from '@/app/utils/voluntarios'
import { FINAL_MENTORS } from '@/app/utils/final-mentors-barranquiia'

export default function Edition2025({ params }: { params: { landing: string } }) {
	const images = [
		"/2025/barranqui-ia-2025.webp",
		"/2025/1.jpg",
		"/2025/2.jpg",
		"/2025/3.jpg",
		"/2025/4.jpg",
		"/2025/5.jpg",
		"/2025/6.jpg",
		"/2025/7.jpg",
		"/2025/8.jpg",
		"/2025/9.jpg",
		"/2025/10.jpg",
		"/2025/11.jpg",
	]

	return (
		<main className="py-20 lg:py-28 xl:py-32 min-h-screen flex flex-col gap-20 md:gap-28">
			<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
				<HeroSection landing={params.landing} />
			</div>
			<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
				<Summary2025 landing={params.landing} />
			</div>
			<div className='max-w-6xl mx-auto px-5 lg:px-10
				 w-full'>
				<Organizers landing={params.landing} />
			</div>
			<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
				<div className='mb-4 lg:mb-10'>
					<Title
						title="Asistentes"
						landing={params.landing}
					/>
				</div>
				<p className='text-base lg:text-lg mb-5'>
					Conoce a detalle la cantidad de asistentes, mentores, participantes y staff, que participaron en la segunda edición de Barranqui-IA, el hackatón de inteligencia artificial más grande de la costa.
				</p>
				<AssistantsGraphics />
			</div>
			<div className='max-w-6xl w-full mx-auto px-5 lg:px-10'>
				<Title
					title="Galería"
					landing={params.landing}
					size='lg'
				/>
			</div>
			<div className='mx-auto px-5 lg:px-10 w-full'>
				<Gallery3D autoPlay={true} images={images} />
			</div>
			<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
				<Topics2025 landing={params.landing} />
			</div>
			<Location2025 landing={params.landing} />
			<Mentors data={FINAL_MENTORS} landing={params.landing} year='2025' />
			<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
				<SponsorsSection landing={params.landing} />
			</div>
			<div className='max-w-6xl mx-auto w-full  lg:pt-24'>
				<Workshops landing={params.landing} />
			</div>
			<Sponsors landing={params.landing} />
			<Mentors landing='barranqui-ia' year='2025' data={voluntarios}/>
			<FAQ data={FAQS_HACKATHONES} landing={params.landing} />
		</main>
	)
}
