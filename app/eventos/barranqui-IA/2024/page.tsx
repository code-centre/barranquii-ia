import React from 'react'
import Image from "next/image";
import Hero from "@/app/sections/Hero";
import Sponsors from "@/app/components/Sponsors";
import WhatIs from "@/app/sections/WhatIs";
import HowIs from "@/app/sections/HowIs";
import Expectations from "@/app/sections/Expectations";
import Location from "@/app/sections/Location";
import Tickets from "@/app/sections/Tickets";
import ScheduleSection from "@/app/sections/ScheduleSection";
import "@/app/globals.css";
import BeASponsor from "@/app/sections/BeASponsor";
import LearnInCommunity from "@/app/sections/LearnInCommunity";
import FAQ from "@/app/sections/FAQ";
import Topics from "@/app/sections/Topics";
import Allies from "@/app/sections/Allies";
import SponsorsSection from "@/app/sections/SponsorsSection";
import Mentors from "@/app/sections/Mentors";
import Talleres from "@/app/sections/Talleres";
import Hero2 from "@/app/sections/Hero2";
import Testimonios from "@/app/sections/Testimonios";
import Preinscribete from "@/app/sections/Preinscribete";
import Ganadores from "@/app/sections/Ganadores";
import HeroTwo from "@/app/sections/Hero2";
import PromoBar from "@/app/components/PromoBar";
import Hackathon from "@/app/sections/Hackaton";
import {FINAL_MENTORS} from "@/app/utils/final-mentors-barranquiia";

export default function PastEvent() {
	return (
		<main className="gap-32 xl:gap-44 flex flex-col py-10 min-h-screen overflow-hidden">
			<div>
				<Hero />
				<Sponsors landing="barranqui-ia" />
				<PromoBar />
			</div>
			<div className="container mx-auto gap-20 flex flex-col">
				<Hackathon />
				<HeroTwo />
				<Testimonios hackathon="barranqui-ia" year="2024">
					<h2 className="border-l-4 border-principleViolet pl-4 font-bold text-2xl md:text-3xl lg:text-4xl uppercase self-start">
						Talleres
					</h2>
				</Testimonios>
				<Talleres />
				<Mentors data={FINAL_MENTORS} landing="barranqui-ia" role="mentors" year="2024">
					<h2 className="border-l-4 border-principleViolet pl-4 font-bold text-2xl md:text-3xl lg:text-4xl uppercase self-start">
						Mentores
					</h2>
				</Mentors>
				<Ganadores />
				<Allies />
				<Preinscribete />
			</div>
		</main>)
}
