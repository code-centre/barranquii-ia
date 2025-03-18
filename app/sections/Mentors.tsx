"use client";

import React, { useState, useEffect } from "react";
import mentors from "../utils/mentors.json";
import MentorsCard from "../components/MentorsCard";

export default function Mentors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mentorsPerPage, setMentorsPerPage] = useState(12); // Default para desktop

  useEffect(() => {
    const updateMentorsPerPage = () => {
      if (window.innerWidth < 640) {
        setMentorsPerPage(4); // Móviles (2 columnas x 2 filas)
      } else if (window.innerWidth < 1024) {
        setMentorsPerPage(6); // Tablets (3 columnas x 2 filas)
      } else {
        setMentorsPerPage(12); // Escritorio (4 o 6 columnas x 2 filas)
      }
    };

    updateMentorsPerPage();
    window.addEventListener("resize", updateMentorsPerPage);
    return () => window.removeEventListener("resize", updateMentorsPerPage);
  }, []);

  const totalSlides = Math.ceil(mentors.length / mentorsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <section id="mentors" className="scroll-m-32 flex flex-col w-full gap-10 px-10">
      <h2 className="border-principleViolet pl-2 border-l-4 font-bold text-2xl lg:text-4xl uppercase">
        Mentores 
      </h2>
      <p className="text-2xl text-gray-300">
        Estos fueron los <strong>increíbles mentores</strong> que acompañaron a los participantes, guiándolos en la <strong>creación de sus proyectos</strong> y en el <strong>mundo de la inteligencia artificial,</strong> el diseño y los negocios.
      </p>

      <div className="relative overflow-hidden w-full mx-auto">
        {/* Contenedor del slider */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <ul
              key={slideIndex}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-5 w-full min-w-full flex-shrink-0 justify-items-center"
            >
              {mentors
                .slice(slideIndex * mentorsPerPage, (slideIndex + 1) * mentorsPerPage)
                .map((mentor, i) => (
                  <li key={i} className="w-full flex justify-center">
                    <MentorsCard
                      description={mentor.description}
                      genre={mentor.genre}
                      image={mentor.image}
                      name={mentor.name}
                      lastName={mentor.lastName}
                    //  className="h-full text-sm sm:text-base"
                    />
                  </li>
                ))}
            </ul>


          ))}
        </div>

        {/* Botones de navegación */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          &#10094;
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}
