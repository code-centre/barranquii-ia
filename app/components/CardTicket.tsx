import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  subTitle: string;
  amount: string;
  styles?: string;
  mode: string;
  children: React.ReactNode;
}

export default function wCardTicket({
  title,
  subTitle,
  amount,
  styles,
  mode,
  children,
}: Props) {
  return (
    <div
      className={`hover:brightness-125 hover:border-principleViolet bg-[#1a1a1a] hover:shadow-2xl hover:shadow-principleViolet py-10 px-5 border border-transparent rounded-md text-gray-300 ${styles}`}
    >
      <div>
        <h3 className="text-principleViolet text-xl uppercase">{title}</h3>
        <p>{subTitle}</p>
        {children}
        <div className="border-principleViolet border-y mt-6 py-5 text-center">
          <h3 className="font-medium text-2xl text-center text-white">
            ${amount} COP
          </h3>
          <p className="flex justify-center items-center gap-2">
            <div className="bg-principleViolet rounded-full w-[6px] h-[6px]"></div>
            Valor
          </p>
        </div>
        <div className="flex justify-center mt-14">
          <a
            href={`/tickets/form?mode=${mode}`}
            className="hover:brightness-110 bg-principleViolet px-5 xl:px-5 py-2 xl:py-3 rounded-lg text-[13px] xl:text-sm uppercase"
          >
            Comprar
          </a>
        </div>
      </div>
      {styles && (
        <img
          src="/swags.jpeg"
          className="flex-1 ml-5 rounded-md w-[200px] h-[300px] object-cover"
        />
      )}
    </div>
  );
}
