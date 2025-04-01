import Summary from "./sections/Summary";
import HeroSection from "./sections/HeroSection";


export default function Home() {
  return (
    <main className="py-20 lg:py-28 xl:py-32 min-h-screen max-w-6xl mx-auto px-5">
      <HeroSection landing="default"/>
      <Summary landing="default" />
    </main>
  );
}
