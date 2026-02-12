import Hero from "@/app/sections/Hero";
import Sponsors2024 from "../2024/Sponsors2024";
import "@/app/globals.css";
import Allies from "@/app/sections/Allies";
import Mentors from "@/app/sections/Mentors";
import Talleres from "@/app/sections/Talleres";
import Testimonios from "@/app/sections/Testimonios";
import Ganadores from "@/app/sections/Ganadores";
import HeroTwo from "@/app/sections/Hero2";
import Hackathon from "@/app/sections/Hackaton";
import { FINAL_MENTORS } from "@/app/utils/final-mentors-barranquiia";
import TranslatedSectionTitle from "../TranslatedSectionTitle";

export default function Edition2024() {
	return (
		<main className="gap-32 xl:gap-44 flex flex-col py-10 min-h-screen overflow-hidden">
			<div>
				<Hero />
				<Sponsors2024 />
			</div>
			<div className="gap-20 flex flex-col">
				<div className="max-w-6xl mx-auto w-full">
					<Hackathon />
				</div>
				<div className="max-w-6xl mx-auto w-full">
					<HeroTwo />
				</div>
				<div className=" max-w-6xl mx-auto w-full">
					<Testimonios hackathon="barranqui-ia" year="2024">
						<TranslatedSectionTitle titleKey="shared.testimonials" />
					</Testimonios>
				</div>
				<div className="max-w-6xl mx-auto">
					<Talleres />
				</div>

				<Mentors landing="barranqui-ia" year="2024" data={FINAL_MENTORS} role="mentor">
					<div className="max-w-6xl mx-auto w-full">
						<TranslatedSectionTitle titleKey="shared.mentors" className="pl-4" />
					</div>
				</Mentors>
				<div className="max-w-6xl mx-auto w-full">
					<Ganadores />
				</div>
				<Allies />
			</div>

		</main >
	);
}
