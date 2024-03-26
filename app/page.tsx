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

export default function Home() {
  return (
    <main className="flex flex-col gap-20 py-10 min-h-screen">
      <Wrapper styles="flex flex-col gap-20 px-5 pb-10">
        <Hero />
        <Sponsors
          title="Integrando conocimientos, herramientas y esfuerzos de diferentes
        patrocinadores"
        />
      </Wrapper>
      <div className="bg-image">
        <Wrapper styles="flex flex-col gap-20 lg:gap-32 px-5 pb-10">
          <WhatIs />
          <HowIs />
        </Wrapper>
      </div>
      <Wrapper styles="flex flex-col gap-20 px-5 pb-10">
        <Expectations />
      </Wrapper>
      <div className="bg-[#1a1a1a]">
        <Wrapper styles=" py-12 lg:py-24 px-5">
          <ScheduleSection />
        </Wrapper>
      </div>
      <Wrapper styles=" flex flex-col gap-20 pt-12 px-5 lg:pb-10 w-full">
        <Location />
        {/* <Tickets /> */}
      </Wrapper>
      <LearnInCommunity />
      <Wrapper styles=" flex flex-col gap-20 pt-12 px-5">
        <BeASponsor />
        <FAQ />
      </Wrapper>
    </main>
  );
}
