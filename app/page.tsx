import Image from "next/image";
import Wrapper from "./components/Wrapper";
import Hero from "./sections/Hero";
import Sponsors from "./components/Sponsors";
import WhatIs from "./sections/WhatIs";
import HowIs from "./sections/HowIs";
import Expectations from "./sections/Expectations";
import Location from "./sections/Location";
import Tickets from "./sections/Tickets";
import ScheduleSection from "./sections/ScheduleSection";
import "./globals.css";
import BeASponsor from "./sections/BeASponsor";
import LearnInCommunity from "./sections/LearnInCommunity";
import FAQ from "./sections/FAQ";
import Topics from "./sections/Topics";
import Allies from "./sections/Allies";
import SponsorsSection from "./sections/SponsorsSection";
import Mentors from "./sections/Mentors";
import Talleres from "./sections/Talleres";
import Hero2 from "./sections/Hero2";
import Testimonios from "./sections/Testimonios";
import Preinscribete from "./sections/Preinscribete";
import Ganadores from "./sections/Ganadores";
import HeroTwo from "./sections/Hero2";
import PromoBar from "./components/PromoBar";
import Hackathon from "./sections/Hackaton";

export default function Home() {
  return (
    <main className="gap-32 xl:gap-44 flex flex-col py-10 min-h-screen overflow-hidden">
      <div>
        <Hero />
        <PromoBar />
      </div>
      <div className="container mx-auto gap-20 flex flex-col">
        <Hackathon />
        <HowIs />
        <div className="flex gap-8">
          <FAQ />
          <Location />
        </div>
        <ScheduleSection />
        <LearnInCommunity />
        <BeASponsor />
        <Preinscribete />
      </div>

    </main>
  );
}
