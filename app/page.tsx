import Image from "next/image";
import Wrapper from "./components/Wrapper";
import Hero from "./sections/Hero";
import Sponsors from "./sections/Sponsors";
import DescriptionEvent from "./sections/DescriptionEvent";

export default function Home() {
  return (
    <main className="py-10 min-h-screen">
      <Wrapper styles="flex flex-col gap-20 px-5">
          <Hero />
          <Sponsors />
          <DescriptionEvent />
      </Wrapper>
    </main>
  );
}
