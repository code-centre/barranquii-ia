"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { User } from "@/lib/types";

interface Props {
  title: string;
  subTitle: string;
  amount: string;
  styles?: string;
  mode: string;
  children: React.ReactNode;
}

export default function CardTicket({
  title,
  subTitle,
  amount,
  styles,
  mode,
  children,
}: Props) {
  const [generalTicketsSold, setGeneralTicketsSold] = useState(null);
  const TOTAL_TICKETS_TO_SELL = 100;
  useEffect(() => {
    const getUsers = async () => {
      try {
        const resp = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
          {
            next: { tags: ["users"] },
          }
        );
        const { users } = await resp.json();
        let totalGeneralTicketsPaid = users?.filter(
          (user: User) => user.paymentId !== null && user.paymentAmount > 40000
        );

        setGeneralTicketsSold(totalGeneralTicketsPaid.length);
      } catch (error) {
        console.error(error);
        return [];
      }
    };

    getUsers();
  }, []);

  return (
    <div
      className={`hover:brightness-125 hover:border-principleViolet bg-[#1a1a1a] hover:shadow-2xl hover:shadow-principleViolet py-10 px-5 border border-transparent rounded-md text-gray-300 flex flex-col justify-between ${styles}`}
    >
      <div>
        <h3 className="text-principleViolet text-xl uppercase">{title}</h3>
        <p>{subTitle}</p>
        {children}
      </div>
      <div className="h-52">
        <div className="border-principleViolet border-y mt-6 py-5 text-center">
          <h3 className="font-medium text-2xl text-center text-white">
            ${amount} COP
          </h3>
        </div>
        <div className="flex flex-col items-center gap-5 justify-center mt-7">
          {mode === "general" && generalTicketsSold === TOTAL_TICKETS_TO_SELL ? (
            <button disabled className="xl:px-5 py-2 xl:py-3 rounded-lg text-[13px] xl:text-sm uppercase bg-gray-500">Comprar</button>
          ) : (
            <Link
              href={`/tickets/form?mode=${mode}`}
              className={`hover:brightness-110 bg-principleViolet px-5 xl:px-5 py-2 xl:py-3 rounded-lg text-[13px] xl:text-sm uppercase`}
              onClick={() => sendGTMEvent({ event: "purchase", value: 1 })}
            >
              Comprar
            </Link>
          )}

          {mode === "general" && generalTicketsSold && generalTicketsSold < TOTAL_TICKETS_TO_SELL && <p className="font-bold">¡Solo hay {TOTAL_TICKETS_TO_SELL - generalTicketsSold - 3} boletas disponible!</p>}
          {mode === "general" && generalTicketsSold === TOTAL_TICKETS_TO_SELL && (
            <p className="font-bold">¡Entradas agotadas!</p>
          )}
        </div>
      </div>
    </div>
  );
}
