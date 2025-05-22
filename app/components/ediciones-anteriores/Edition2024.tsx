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
						<h2 className="border-principleViolet pl-2 border-l-4 font-bold text-2xl lg:text-4xl uppercase">
							Testimonios
						</h2>
					</Testimonios>
				</div>
				<div className="max-w-6xl mx-auto">
					<Talleres />
				</div>

				<Mentors landing="barranqui-ia" year="2024" data={FINAL_MENTORS} role="mentor">
					<div className="max-w-6xl mx-auto w-full">
						<h2 className="border-principleViolet pl-4 border-l-4 font-bold text-2xl lg:text-4xl uppercase">
							Mentores
						</h2>
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
