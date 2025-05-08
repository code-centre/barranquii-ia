import React from "react";
import { Meteors } from "./Meteors";
import Image from "next/image";
import { THEME_LANDINGS } from "../utils/theme";

interface Props {
  name: string;
  lastName: string;
  image: string;
  genre: string;
  description?: string;
  landing: string;
}

const HACKATHON: Record<string, string> = {
  'barranqui-ia': 'Barranqui-IA',
  'samar-ia': 'Samar-IA',
  'cartagen-ia': 'Cartagena-IA'
}

export default function MentorsCard({
  name,
  lastName,
  image,
  genre,
  description,
  landing
}: Props) {
  return (
    <div className="relative w-[205px] h-[290px] mx-auto flip-card cursor-pointer">
      {/* <div className="absolute inset-0 h-[50%] w-[50%] bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" /> */}
      <div className="flip-card-inner w-full h-full relative">
        <div className="flip-card-front absolute w-full h-full">
          <div className="relative bg-gray-900 border border-gray-800  px-4 py-4 h-full overflow-hidden rounded-2xl flex flex-col gap-4 items-start">
            <span
              style={{
                background: `linear-gradient(to right, ${THEME_LANDINGS[landing].gradient.from}, ${THEME_LANDINGS[landing].gradient.via}, ${THEME_LANDINGS[landing].gradient.to})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
              className=" font-semibold">
              {HACKATHON[landing]}
            </span>

            <h2 className="font-bold text-center mx-auto uppercase text-xl text-white relative z-10">
              {name} <br /> {lastName}
            </h2>

            <Image
              className="mask w-[220px] h-[220px] rounded-md object-contain  mx-auto"
              src={`${image}`}
              alt={`Mentor ${name} ${lastName}`}
              width={200}
              height={200}
              loading="lazy"
            />

            <Meteors number={5} />
          </div>
        </div>
        <div className="flip-card-back flex flex-col gap-4 absolute w-full h-full bg-gray-900 rounded-2xl px-4 py-4">
          <p className="text-lg text-center uppercase font-semibold border-b pb-4">
            {genre === "female" ? "Mentora" : "Mentor"}
          </p>
          <p className="text-xs overflow-y-auto scroll">{description}</p>
          <span className="bg-gradient-to-r from-[#fe44fd] via-[#eabbbe] to-[#8731ef] inline-block text-transparent font-semibold bg-clip-text text-right pt-4 bottom-4 right-4"></span>
          <span className="bg-gradient-to-r from-[#fe44fd] via-[#eabbbe] to-[#8731ef] inline-block text-transparent font-semibold bg-clip-text text-right absolute bottom-4 right-4">

          </span>
        </div>
      </div>
    </div>
  );
}
