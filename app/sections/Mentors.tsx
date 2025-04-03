"use client";

import React, { useState, useEffect } from "react";
import mentors from "../utils/mentors.json";
import MentorsCard from "../components/MentorsCard";
import Title from "../components/Title";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";
import { THEME_LANDINGS } from "../utils/theme";

interface Props {
  landing: string
}
export default function Mentors({ landing }: Props) {
  const [firstRowOfMentors, setFirstRowOfMentors] = useState(mentors.slice(0, 11));
  const [secondRowOfMentors, setSecondRowOfMentors] = useState(mentors.slice(12));
  //   const updateMentorsPerPage = () => {
  //     if (window.innerWidth < 640) {
  //       setMentorsPerPage(4); // Móviles (2 columnas x 2 filas)
  //     } else if (window.innerWidth < 1024) {
  //       setMentorsPerPage(6); // Tablets (3 columnas x 2 filas)
  //     } else {
  //       setMentorsPerPage(16); // Escritorio (4 o 6 columnas x 2 filas)
  //     }
  //   };

  //   updateMentorsPerPage();
  //   window.addEventListener("resize", updateMentorsPerPage);
  //   return () => window.removeEventListener("resize", updateMentorsPerPage);
  // }, []);

  // const totalSlides = Math.ceil(mentors.length / mentorsPerPage);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
  //   );
  // };

  return (
    <section id="mentors" className="scroll-m-32 flex flex-col w-full gap-10 relative">
      <div style={{ background: THEME_LANDINGS[landing].principal + '40' }} className="absolute -top-56 -z-20 -left-36 w-[600px] h-[600px] rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto w-full px-5">
        <Title title="Mentores 2025" landing={landing} />
      </div>
      <div className="relative overflow-hidden w-full mx-auto">

        <InfiniteMovingCards direction="right" speed="slow" pauseOnHover={true}>
          {firstRowOfMentors.map((mentor, i) => (
            <li key={i} className="w-full flex justify-center">
              <MentorsCard
                landing={landing}
                description={mentor.description}
                genre={mentor.genre}
                image={mentor.image}
                name={mentor.name}
                lastName={mentor.lastName}
              />
            </li>
          ))}
        </InfiniteMovingCards>
        <InfiniteMovingCards direction="left" speed="slow" pauseOnHover={true}>
          {secondRowOfMentors.map((mentor, i) => (
            <li key={i} className="w-full flex justify-center">
              <MentorsCard
                description={mentor.description}
                genre={mentor.genre}
                image={mentor.image}
                name={mentor.name}
                lastName={mentor.lastName}
                landing={landing}
              />
            </li>
          ))}
        </InfiniteMovingCards>
      </div>
    </section>
  );
}