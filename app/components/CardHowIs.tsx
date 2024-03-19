import React from "react";

interface Props {
  icon?: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function CardHowIs({
  icon,
  title,
  description,
  children,
}: Props) {
  return (
    <div className="relative flex flex-col gap-8 bg-[#19161c] p-5 rounded-md h-60 overflow-hidden">
      {children}
      <div>
        <h3 className="text-lg text-principleViolet uppercase">{title}</h3>
        <p className="text-base text-gray-300">{description}</p>
        <div className="right-0 bottom-0 left-0 absolute bg-principleViolet blur-xl mx-auto rounded-full w-[70%] h-3"></div>
      </div>
    </div>
  );
}
