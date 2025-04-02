import Summary from "./sections/Summary";
import PromoBar from "./components/PromoBar";
import HeroSection from "./sections/HeroSection";
import Expectations from "./sections/Expectations";
import Phases from "./sections/Phases";
import Sponsors from "./components/Sponsors";
import Title from "./components/Title";
import FAQ from "./sections/FAQ";

export default function Home() {
  return (
    <main className="py-20 lg:py-28 xl:py-32 min-h-screen flex flex-col gap-28">
      <div className='max-w-6xl mx-auto px-5 w-full mb-10'>
        <HeroSection landing='default' />
      </div>
      <div className='max-w-6xl mx-auto px-5 w-full'>
        <Summary landing='default' />
      </div>
      <PromoBar />
      <Phases />
      <Sponsors landing='default' />
      <div className='max-w-6xl mx-auto px-5 w-full'>
        <Title
          title="Participa en los eventos de Caribe-IA"
           />
      </div>
      <FAQ landing='default' />
    </main>
  );
}
