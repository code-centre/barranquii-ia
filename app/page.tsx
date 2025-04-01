import Summary from "./sections/Summary";
import PromoBar from "./components/PromoBar";
import HeroSection from "./sections/HeroSection";


export default function Home() {
  return (
    <main className="py-20 lg:py-28 xl:py-32 min-h-screen flex flex-col gap-16">
      <div className="max-w-6xl w-full mx-auto px-5">
        <Summary landing="default" />
      </div>
      <PromoBar />
      <HeroSection landing="default"/>
      <Summary landing="default" />
    </main>
  );
}
