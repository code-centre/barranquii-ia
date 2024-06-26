import React from "react";

interface Props {
  date: string;
  time: string;
  location: string;
  href?: string;
}

export default function InfoEventGrid({ date, time, location }: Props) {
  return (
    <ul className="flex flex-col gap-2 justify-center items-center rounded-md text-center bg-[#19161c] h-full">
      <li className="uppercase">{date}</li>
      <li className="uppercase">{time}</li>
      <li className="text-sm uppercase">{location}</li>
    </ul>
  );
}
