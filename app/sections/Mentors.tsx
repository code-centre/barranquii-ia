import React from "react";
import mentors from '../utils/mentors.json'
import MentorsCard from "../components/MentorsCard";

export default function Mentors() {
  return (
    <section id="mentors" className="flex flex-col gap-10 py-20">
      <h2 className="border-principleViolet pl-2 border-l-4 font-bold text-lg lg:text-4xl uppercase">
        Mentores
      </h2>
      <ul className="flex flex-col md:flex-row md:flex-wrap justify-between gap-y-20">
        {mentors.map((mentor, i) => (
          <li key={i}>
            <MentorsCard 
              description={mentor.description} 
              genre={mentor.genre} 
              image={mentor.image} 
              name={mentor.name} 
              lastName={mentor.lastName}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
