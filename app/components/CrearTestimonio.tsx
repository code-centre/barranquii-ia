"use client";
import React, { useState } from "react";

interface Props {
  hackathon: string;
  year: string;
  getTestimonials: () => void;
}

export default function CrearTestimonio({ hackathon, year, getTestimonials }: Props) {
  const [isCreatingTestimonial, setIsCreatingTestimonial] = useState(false);
  const [nameUser, setNameUser] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [role, setRole] = useState("");

  const handleSendData = async () => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_URL_TESTIMONIALS}/api/testimonials`,
      {
        method: "POST",
        body: JSON.stringify({ nameUser, description: testimonial, role, hackathon, year }),
      }
    );
    await data.json();
    setIsCreatingTestimonial(false);
    getTestimonials();
  };

  return (
    <>
      {!isCreatingTestimonial ? (
        <button
          onClick={() => setIsCreatingTestimonial(true)}
          className=" text-lg text-white block mt-10 w-fit bg-principleViolet mx-auto py-2 px-6 rounded-md"
        >
          <strong> Crear Testimonio</strong>
        </button>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendData();
          }}
          className="max-w-2xl mx-auto flex flex-col gap-4 w-full mt-10 "
        >
          <label>
            ¿Cuál es tu nombre?
            <input
              placeholder="Mi nombre es..."
              className="w-full rounded-md px-4 py-2 text-black"
              onChange={(e) => setNameUser(e.target.value)}
              type="text"
              name=""
              id=""
            />
          </label>
          <label>
            ¿Qué tal fue tu experiencia?
            <textarea
              placeholder="Mi experiencia fue..."
              className="w-full rounded-md px-4 py-2 text-black"
              onChange={(e) => setTestimonial(e.target.value)}
              name=""
              id=""
            />
          </label>
          <label>
            Como participaste en el hackatón
            <select
              className="w-full rounded-md px-4 py-2 text-black"
              onChange={(e) => setRole(e.target.value)}>
              <option value="">Selecciona un rol</option>
              <option value="mentor">Mentor</option>
              <option value="participante">Participante</option>
              <option value="staff">Staff</option>
            </select>
          </label>
          <button className="text-lg text-white block w-fit bg-principleViolet mx-auto py-2 px-6 rounded-md">
            Compartir testimonio
          </button>
        </form>
      )}
    </>
  );
}
