import React from "react";

interface Props {
  title: string;
  subTitle: string;
  amount: string;
  children: React.ReactNode;
}

export default function CardTicket({
  title,
  subTitle,
  amount,
  children,
}: Props) {
  return (
    <div className="hover:brightness-125 hover:border-principleViolet bg-[#1a1a1a] hover:shadow-2xl hover:shadow-principleViolet p-10 border border-transparent rounded-md md:w-[300px] text-gray-300">
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
        <button className="hover:brightness-110 bg-principleViolet px-5 xl:px-5 py-2 xl:py-3 rounded-lg text-[13px] xl:text-sm uppercase">
          Comprar
        </button>
      </div>
    </div>
  );
}
