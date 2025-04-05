import Summary from "./sections/Summary";
import PromoBar from "./components/PromoBar";
import HeroSection from "./sections/HeroSection";
import Expectations from "./sections/Expectations";
import Phases from "./sections/Phases";
import Sponsors from "./components/Sponsors";
import Title from "./components/Title";
import FAQ from "./sections/FAQ";
import EventsSection from "./sections/EventsSection";
import { FAQS_CARIBE_IA } from "./utils/FAQS_CARIBE_IA";

export default function Home() {
  return (
    <main className="py-20 lg:py-28 xl:py-32 min-h-screen flex flex-col gap-10 md:gap-28">
      <div className='max-w-6xl mx-auto px-5 lg:px-10 w-full mb-10'>
        <HeroSection landing='default' />
      </div>
      <div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
        <Summary landing='default' />
      </div>
      <PromoBar />
      <Phases />
      <Sponsors landing='default' />
      <div className="w-full flex flex-col gap-10">
        <div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
          <Title
            title="Participa en los eventos de Caribe-IA"
          />
        </div>
        <EventsSection landing="default" />
      </div>
      <FAQ data={FAQS_CARIBE_IA}  landing='default' />
    </main>
  );
}
