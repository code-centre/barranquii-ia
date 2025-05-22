"use client";

import React, { useState, useEffect } from "react";
// import Persons from "../utils/mentors-b-2025.json";
import { FINAL_MENTORS } from "../utils/final-mentors-barranquiia";
import MentorsCard from "../components/MentorsCard";
import Title from "../components/Title";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";
import { THEME_LANDINGS } from "../utils/theme";
import MysteryMentor from "../components/MysteryMentor";

interface Props {
  landing: string
  year?: string
  data?: any
  role: string;
  children: React.ReactNode;
}

interface Person {
  id: number;
  name: string;
  lastName: string;
  image: string;
  genre: string;
  description: string;
  confirmed?: boolean;
}

export default function Persons({ landing, year, data, role, children }: Props) {
  const PersonsForSelectedYear = (data as any)[year ?? '2025'] || [];
  const [firstRowOfPersons, setFirstRowOfPersons] = useState<Person[]>(PersonsForSelectedYear.slice(0, PersonsForSelectedYear.length / 2));
  const [secondRowOfPersons, setSecondRowOfPersons] = useState<Person[]>(PersonsForSelectedYear.slice(PersonsForSelectedYear.length / 2));

  // useEffect(() => { 
  //   const mentorsForSelectedYear = (FINAL_MENTORS as any)[year] || [];
  //   setMentorsYear(mentorsForSelectedYear);

  //   const splitIndex = Math.ceil(mentorsForSelectedYear.length / 2);
  //   setFirstRowOfMentors(mentorsForSelectedYear.slice(0, splitIndex));
  //   setSecondRowOfMentors(mentorsForSelectedYear.slice(splitIndex));
  // }, [year]);

  return (
    <section id="mentors" className="scroll-m-32 flex flex-col w-full gap-10 relative  lg:pt-24">
      <div style={{ background: THEME_LANDINGS[landing].principal + '40' }} className="absolute -top-56 -z-20 -left-36 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full blur-3xl"></div>

      {children}
      <div className="relative overflow-hidden w-full mx-auto">
        <InfiniteMovingCards direction="right" speed="slow" pauseOnHover={true}>
          {firstRowOfPersons.map((mentor, i) => (
            <li key={i} className="w-full flex justify-center">
              {mentor.confirmed ? (
                // Show confirmed mentor card with actual info
                <MentorsCard
                  landing={landing}
                  description={mentor.description} // Solo muestra la descripción del mentor
                  genre={mentor.genre}
                  image={mentor.image}
                  name={mentor.name}
                  lastName={mentor.lastName}
                  role={role}
                />
              ) : (
                // Show mystery mentor card with some placeholder info
                <MysteryMentor
                  description={mentor.description}
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
          {secondRowOfPersons.map((mentor, i) => (
            <li key={i} className="w-full flex justify-center">
              {mentor.confirmed ? (
                <MentorsCard
                  landing={landing}
                  description={mentor.description} // Solo muestra la descripción del mentor
                  genre={mentor.genre}
                  image={mentor.image}
                  name={mentor.name}
                  lastName={mentor.lastName}
                  role={role}
                />
              ) : (
                <MysteryMentor
                  description={mentor.description}
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
