import Hero from "@/app/sections/Hero";
import Sponsors from "@/app/components/Sponsors";
import "@/app/globals.css";
import Allies from "@/app/sections/Allies";
import Mentors from "@/app/sections/Mentors";
import Talleres from "@/app/sections/Talleres";
import Testimonios from "@/app/sections/Testimonios";
import Preinscribete from "@/app/sections/Preinscribete";
import Ganadores from "@/app/sections/Ganadores";
import HeroTwo from "@/app/sections/Hero2";
import PromoBar from "@/app/components/PromoBar";
import Hackathon from "@/app/sections/Hackaton";

export default function Edition2024() {
  return (
    <main className="gap-32 xl:gap-44 flex flex-col py-10 min-h-screen overflow-hidden">
      <div>
        <Hero />
        <Sponsors />
        <PromoBar />
      </div>
      <div className="container mx-auto gap-20 flex flex-col">
        <Hackathon/>
        <HeroTwo />
        <Testimonios />
        <Talleres />
        <Mentors landing="barranqui-ia" />
        <Ganadores />
        <Allies />
        <Preinscribete />
      </div>

    </main>
  );
}
