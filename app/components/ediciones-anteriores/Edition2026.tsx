import HeroSection2026 from '@/app/sections/HeroSection2026'
import Organizers from '@/app/sections/Organizers'
import AboutBarranquiIA from '@/app/components/2026/AboutBarranquiIA'; 
 
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
import { voluntarios } from '@/app/utils/voluntarios2025'
import { FINAL_MENTORS } from '@/app/utils/final-mentors-barranquiia'
import Testimonios from '@/app/sections/Testimonios'
import Finalists from '@/app/sections/Finalists'
import HackatonBackground from '../2026/HackatonBackground';
import HowToLiveHackaton from '../2026/HowToLiveHackaton';
import TicketPurchase from '../2026/TicketPurchase';
import IsItForYou from '../2026/ItsForYou';
import SponsorsSection2026 from '../2026/SponsorSection';

export default function Edition2026({ params }: { params: { landing: string } }) {
    return (
        <>
            <HackatonBackground /> {/* Agrega el fondo fijo aquí */}
            <main className="py-20 lg:py-28 xl:py-32 min-h-screen flex flex-col gap-20 md:gap-28 relative z-10">
                <HeroSection2026 landing={params.landing} />
                <AboutBarranquiIA />
				<HowToLiveHackaton />
				<TicketPurchase /> 	
				<IsItForYou />
				<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
					<SponsorsSection landing={params.landing} />
				</div>
				<SponsorsSection2026 />
			{/* <div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
				<Finalists landing={params.landing} />
			</div>
			<div className='max-w-6xl mx-auto px-5 lg:px-10
				 w-full'>
				<Organizers landing={params.landing} />
			</div>
			<div className='max-w-6xl mx-auto px-5 lg:px-10 pt-20 w-full'>
				<div className='mb-4 lg:mb-10'>
					<Title
						title="Gráficas y Datos del evento"
						landing={params.landing}
					/>
				</div>
				<p className='text-base lg:text-lg mb-5'>
					Conoce a detalle la cantidad de asistentes, participantes y talleristas, que fueron parte de esta segunda edición de Barranqui-IA, el hackatón de inteligencia artificial más grande de la costa.
				</p>
				<AssistantsGraphics />
			</div>
			<div className='max-w-6xl w-full mx-auto px-5 lg:px-10'>
				<Title
					title="Galería"
					landing={params.landing}
					size='lg'
				/>
				<Gallery3D autoPlay={true} images={images} />
			</div>
			<div className='max-w-6xl mx-auto px-5 w-full'>
				<Testimonios hackathon="barranqui-ia" year="2025">
					<Title
						title="Testimonios"

						landing={params.landing}
					/>
				</Testimonios>
			</div>
			<div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
				<Topics2025 landing={params.landing} />
			</div>
			<Location2025 landing={params.landing} />
			<Mentors data={FINAL_MENTORS} landing={params.landing} year='2025' role="mentor">
				<div className='max-w-6xl mx-auto px-5 lg:px-10  w-full'>
					<Title
						title="Mentores"
						landing={params.landing}
					/>
				</div>
			</Mentors>
			
			<div className='max-w-6xl mx-auto w-full  lg:pt-24'>
				<Workshops landing={params.landing} />
			</div>
			<Sponsors landing={params.landing} />
			<Mentors landing='barranqui-ia' year='2025' data={voluntarios} role="voluntario">
				<div className='max-w-6xl mx-auto px-5 lg:px-10  w-full'>
					<Title
						title="Voluntarios"
						landing={params.landing}
					/>
				</div>
			</Mentors> */}
			<FAQ data={FAQS_HACKATHONES} landing={params.landing} />
		</main>
	 </>
    );
}
