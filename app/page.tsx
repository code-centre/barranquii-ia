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

export default function Home() {
  return (
    <main className="flex flex-col py-10 min-h-screen">
      <Wrapper styles="flex flex-col gap-20 px-5">
        <Hero />
      </Wrapper>
      <Wrapper styles="px-5 w-full">
        <Sponsors />
      </Wrapper>
      <div className="bg-image">
        <Wrapper styles="flex flex-col gap-20 lg:gap-32 px-5 md:pb-10">
          <WhatIs />
          <HowIs />
        </Wrapper>
      </div>
      <Wrapper styles="px-5">
        <Topics />
      </Wrapper>
      <Wrapper styles="px-5 w-full">
        <Mentors />
      </Wrapper>
      <Wrapper styles="flex flex-col gap-20 pb-20 px-5 md:pb-10">
        <Expectations />
      </Wrapper>
      <div className="bg-[#1a1a1a]">
        <Wrapper styles=" pb-12 lg:pb-24 px-5">
          <ScheduleSection />
        </Wrapper>
      </div>
      <Wrapper styles=" flex flex-col gap-20 px-5 lg:pb-10 w-full">
        <Location />
        <Tickets />
        <FAQ />
      </Wrapper>
      {/* <LearnInCommunity /> */}
      <Wrapper styles="px-5 w-full">
        <SponsorsSection />
      </Wrapper>
      <Wrapper styles=" flex flex-col px-5">
        <BeASponsor />
      </Wrapper>
      <Wrapper styles="px-5 w-full">
        <Allies />
      </Wrapper>
    </main>
  );
}
