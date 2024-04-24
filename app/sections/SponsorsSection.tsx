import Image from "next/image";
import React from "react";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";
import Wrapper from "../components/Wrapper";
import Sponsors from "../components/Sponsors";

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20">
      <h2 className="border- border-principleViolet pl-2 border-l-4 font-bold text-lg lg:text-4xl uppercase">
        Patrocinadores
      </h2>

      <Sponsors />
    </section>
  );
}
