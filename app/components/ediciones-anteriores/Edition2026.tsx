import HeroSection2026 from '@/app/sections/HeroSection2026'
import AboutBarranquiIA from '@/app/components/2026/AboutBarranquiIA'; 
 
import React from 'react'
import FAQ from '@/app/sections/FAQ'
import { FAQS_HACKATHONES } from '@/app/utils/FAQS_HACKATHONES'
import HackatonBackground from '../2026/HackatonBackground';
import HowToLiveHackaton from '../2026/HowToLiveHackaton';
import TicketPurchase from '../2026/TicketPurchase';
import IsItForYou from '../2026/ItsForYou';
import SponsorsSection2026 from '../2026/SponsorSection';
import ScrollAnimation from '../2026/ScrollAnimation';

export default function Edition2026({ params }: { params: { landing: string } }) {
	return (
		<>
			<HackatonBackground />
			<main className="py-20 lg:py-28 xl:py-32 min-h-screen flex flex-col gap-20 md:gap-28 relative z-10">
				<HeroSection2026 landing={params.landing} />
				<ScrollAnimation delay={0.1}>
					<AboutBarranquiIA />
				</ScrollAnimation>
				<ScrollAnimation delay={0.2}>
					<HowToLiveHackaton />
				</ScrollAnimation>
				<ScrollAnimation delay={0.1}>
					<TicketPurchase />
				</ScrollAnimation>
				<ScrollAnimation delay={0.2}>
					<IsItForYou />
				</ScrollAnimation>
				<ScrollAnimation delay={0.1}>
					<SponsorsSection2026 />
				</ScrollAnimation>
				<ScrollAnimation delay={0.2}>
					<FAQ data={FAQS_HACKATHONES} landing={params.landing} />
				</ScrollAnimation>
			</main>
		</>
	);
}
