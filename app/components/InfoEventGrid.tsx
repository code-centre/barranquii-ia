import React from "react";

interface Props {
    date: string,
    time: string,
    location: string
}


export default function InfoEventGrid({date, time, location}: Props) {
  return (
    <div className="flex flex-col justify-center items-center bg-[#19161c] rounded-md">
      <ul className="flex flex-col gap-2 text-center">
        <li className="uppercase">{date}</li>
        <li className="uppercase">{time}</li>
        <li className="text-sm uppercase">{location}</li>
      </ul>
    </div>
  );
}
