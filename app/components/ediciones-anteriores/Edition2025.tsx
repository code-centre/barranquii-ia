import HeroSection2025 from '@/app/sections/HeroSection2025'
import Summary2025 from '../2025/Summary2025'
import React from 'react'
import Topics2025 from '../2025/Topics2025'
import Gallery3D from '../2025/Gallery3D'
import Mentors from '@/app/sections/Mentors'
import Location2025 from '../2025/Location2025'
import SponsorsSection from '@/app/sections/SponsorsSection'
import Workshops from '@/app/sections/Workshops'
import Sponsors from '../Sponsors'
import TranslatedTitle from '../TranslatedTitle'
import FAQ from '@/app/sections/FAQ'
import { AssistantsGraphics } from '../2025/AssistantsGraphics'
import GraphicsIntro from '../2025/GraphicsIntro'
import { FAQS_HACKATHONES } from '@/app/utils/FAQS_HACKATHONES'
import { voluntarios } from '@/app/utils/voluntarios2025'
import { FINAL_MENTORS } from '@/app/utils/final-mentors-barranquiia'
import Testimonios from '@/app/sections/Testimonios'
import Finalists from '@/app/sections/Finalists'
import VideoSection2025 from '../2025/VideoSection2025'
import HackatonBackground from '../2026/HackatonBackground'
import ScrollAnimation from '../2026/ScrollAnimation'

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
		"/2025/12.png",
		"/2025/13.png",
		"/2025/14.png",
	]

	return (
		<>
			<HackatonBackground />
			<main className="py-20 lg:py-28 xl:py-32 min-h-screen flex flex-col gap-20 md:gap-28 relative z-10 bg-black text-white" style={{ minHeight: '100vh' }}>
				<HeroSection2025 landing={params.landing} />

				<ScrollAnimation delay={0.1}>
					<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
						<Summary2025 landing={params.landing} />
					</div>
				</ScrollAnimation>

				<ScrollAnimation delay={0.1}>
					<VideoSection2025 />
				</ScrollAnimation>

				<ScrollAnimation delay={0.2}>
					<section id="galeria" className='max-w-7xl w-full mx-auto px-5 lg:px-10 scroll-mt-24'>
						<Gallery3D autoPlay={true} images={images} />
					</section>
				</ScrollAnimation>

				<ScrollAnimation delay={0.1}>
					<div className='max-w-6xl mx-auto px-5 lg:px-10 pt-20 w-full'>
						<div className='mb-4 lg:mb-10'>
							<TranslatedTitle
								titleKey="graphics2025.title"
								landing={params.landing}
							/>
						</div>
						<GraphicsIntro />
						<AssistantsGraphics />
					</div>
				</ScrollAnimation>

				<ScrollAnimation delay={0.2}>
					<div className='max-w-6xl mx-auto px-5 w-full'>
						<Testimonios hackathon="barranqui-ia" year="2025">
							<TranslatedTitle titleKey="shared.testimonials" landing={params.landing} />
						</Testimonios>
					</div>
				</ScrollAnimation>

				<ScrollAnimation delay={0.1}>
					<section id="resultados" className='max-w-6xl mx-auto px-5 lg:px-10 w-full scroll-mt-24'>
						<Finalists landing={params.landing} />
					</section>
				</ScrollAnimation>

				<ScrollAnimation delay={0.2}>
					<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
						<Topics2025 landing={params.landing} />
					</div>
				</ScrollAnimation>

				<ScrollAnimation delay={0.1}>
					<Mentors data={FINAL_MENTORS} landing={params.landing} year='2025' role="mentor">
						<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
							<TranslatedTitle titleKey="shared.mentors" landing={params.landing} />
						</div>
					</Mentors>
				</ScrollAnimation>

				<ScrollAnimation delay={0.2}>
					<Location2025 landing={params.landing} />
				</ScrollAnimation>

				<ScrollAnimation delay={0.1}>
					<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
						<SponsorsSection landing={params.landing} />
					</div>
				</ScrollAnimation>

				<ScrollAnimation delay={0.2}>
					<div className='max-w-6xl mx-auto w-full lg:pt-24'>
						<Workshops landing={params.landing} />
					</div>
				</ScrollAnimation>

				<Sponsors landing={params.landing} />

				<ScrollAnimation delay={0.1}>
					<Mentors landing='barranqui-ia' year='2025' data={voluntarios} role="voluntario">
						<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
							<TranslatedTitle titleKey="shared.volunteers" landing={params.landing} />
						</div>
					</Mentors>
				</ScrollAnimation>

				<ScrollAnimation delay={0.2}>
					<FAQ data={FAQS_HACKATHONES} landing={params.landing} />
				</ScrollAnimation>
			</main>
		</>
	)
}
