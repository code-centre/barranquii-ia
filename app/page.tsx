import Summary from "./sections/Summary";
import HeroSection from "./sections/HeroSection";
import HowItWorks from "./sections/HowItWorks";
import Phases from "./sections/Phases";
import AudienceSection from "./sections/AudienceSection";
import PoweredByCV from "./sections/PoweredByCV";
import Organizers from "./sections/Organizers";
import FAQ from "./sections/FAQ";
import ApplicationSection from "./sections/ApplicationSection";
import { FAQS_CARIBE_IA } from "./utils/FAQS_CARIBE_IA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* 1. HeroSection (dramatico, sin 3D) */}
      <HeroSection landing='default' />

      {/* 2. Summary / "Que es Caribe-IA?" (manifesto + 3 cards) */}
      <div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
        <Summary landing='default' />
      </div>

      {/* 3. HowItWorks (nuevo -- Hack/Build/Show) */}
      <div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
        <HowItWorks landing='default' />
      </div>

      {/* 4. Phases / HackatonCards (reescrito -- 3 event cards) */}
      <div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
        <Phases landing='default' />
      </div>

      {/* 5. AudienceSection (nuevo -- "Para quien es?") */}
      <div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
        <AudienceSection landing='default' />
      </div>

      {/* 6. PoweredByCV (nuevo -- brand bridge) */}
      <div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
        <PoweredByCV landing='default' />
      </div>

      {/* 7. Organizers (reescrito con labels) */}
      {/* <div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
        <Organizers landing='default' />
      </div> */}

      {/* 8. FAQ (tabs) */}
      <FAQ data={FAQS_CARIBE_IA} landing='default' />

      {/* 9. ApplicationSection (nuevo -- conversion) */}
      <div className='max-w-6xl mx-auto px-5 lg:px-10 w-full'>
        <ApplicationSection landing='default' />
      </div>
    </main>
  );
}
