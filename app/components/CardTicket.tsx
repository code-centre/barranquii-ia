"use client";
import Link from "next/link";
import './CardTicket.css';
import React from "react";
import { THEME_LANDINGS } from "../utils/theme";

interface Props {
  title: string;
  subTitle: string;
  amount: number;
  styles?: string;
  children: React.ReactNode;
  landing: string;
  idEvent: string;
  ticketId: number;
  disabled?: boolean;
}

export default function CardTicket({
  title,
  subTitle,
  amount,
  styles,
  children,
  landing,
  idEvent,
  ticketId,
  disabled
}: Props) {

	const newTickectId = ticketId === 1 ? 2 : ticketId === 2 ? 1 : 0

  return (
    <div
      style={{
        '--theme-color': THEME_LANDINGS[landing].principal,
      } as React.CSSProperties}
      className={`card-ticket bg-[#1a1a1a] py-10 px-5 rounded-md hover:brightness-125 text-gray-300 flex flex-col justify-between h-full ${styles}`}
    >
      <div>
        <h3 style={{ color: THEME_LANDINGS[landing].principal }} className="text-3xl text-center uppercase  font-mono">{title}</h3>
        <p className="text-center text-lg">{subTitle}</p>
        {children}
      </div>
      <div className="">
        <div style={{ borderBlock: `1px solid ${THEME_LANDINGS[landing].principal}` }} className="mt-6 py-5 text-center">
          <h3 className="font-medium text-2xl text-center text-white">
            ${amount.toLocaleString()} COP
          </h3>
        </div>
        <div className="w-fit mx-auto flex flex-col mt-5"> 
          <button
            disabled={disabled}
            style={{
              backgroundColor: THEME_LANDINGS[landing].principal,
              opacity: disabled ? 0.6 : 1,
              cursor: disabled ? 'not-allowed' : 'pointer'
            }}
            className="px-5 py-2 xl:py-3 text-black rounded-lg text-[13px] xl:text-sm uppercase"
          >
            {disabled ? (
              'Sold out'
            ) : (
              <Link target="_blank" href={`https://codigoabierto.tech/checkout?eventId=${idEvent}&ticket=${newTickectId}`}>
                Comprar
              </Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
