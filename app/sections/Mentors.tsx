"use client";

import React, { useState, useEffect } from "react";
import mentors from "../utils/mentors-b-2025.json";
import MentorsCard from "../components/MentorsCard";
import Title from "../components/Title";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";
import { THEME_LANDINGS } from "../utils/theme";
import MysteryMentor from "../components/MysteryMentor";

interface Props {
  landing: string
}

interface Mentor {
  id: number;
  name: string;
  lastName: string;
  image: string;
  genre: string;
  description: string;
  confirmed?: boolean;
}

export default function Mentors({ landing }: Props) {
  const [firstRowOfMentors, setFirstRowOfMentors] = useState<Mentor[]>(mentors.slice(0, 11));
  const [secondRowOfMentors, setSecondRowOfMentors] = useState<Mentor[]>(mentors.slice(11));

  // We don't need this global confirmed state anymore, as we'll check each mentor individually
  // const [confirmed, setConfirmed] = useState(() => {
  //   return mentors.some(mentor => mentor.confirmed === true);
  // });

  return (
    <section id="mentors" className="scroll-m-32 flex flex-col w-full gap-10 relative">
      <div style={{ background: THEME_LANDINGS[landing].principal + '40' }} className="absolute -top-56 -z-20 -left-36 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto w-full px-5">
        <Title title="Mentores 2025" landing={landing} />
      </div>
      <div className="relative overflow-hidden w-full mx-auto">
        <InfiniteMovingCards direction="right" speed="slow" pauseOnHover={true}>
          {firstRowOfMentors.map((mentor, i) => (
            <li key={i} className="w-full flex justify-center">
              {mentor.confirmed ? (
                // Show confirmed mentor card with actual info
                <MentorsCard
                  landing={landing}
                  description={mentor.description}
                  genre={mentor.genre}
                  image={mentor.image}
                  name={mentor.name}
                  lastName={mentor.lastName}
                />
              ) : (
                // Show mystery mentor card with some placeholder info
                <MysteryMentor
                  description='Por confirmar'
                  genre={mentor.genre || 'Por confirmar'}
                  image={mentor.image || '/mystery-mentor.png'}
                  name='Por confirmar'
                  lastName=''
                  landing={landing}
                />
              )}
            </li>
          ))}
        </InfiniteMovingCards>

        <InfiniteMovingCards direction="left" speed="slow" pauseOnHover={true}>
          {secondRowOfMentors.map((mentor, i) => (
            <li key={i} className="w-full flex justify-center">
              {mentor.confirmed ? (
                <MentorsCard
                  landing={landing}
                  description={mentor.description}
                  genre={mentor.genre}
                  image={mentor.image}
                  name={mentor.name}
                  lastName={mentor.lastName}
                />
              ) : (
                <MysteryMentor
                  description='Por confirmar'
                  genre={mentor.genre || 'Por confirmar'}
                  image={mentor.image || '/mystery-mentor.png'}
                  name='Por confirmar'
                  lastName=''
                  landing={landing}
                />
              )}
            </li>
          ))}
        </InfiniteMovingCards>
      </div>
    </section>
  );
}