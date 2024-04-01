import Wrapper from "@/app/components/Wrapper";
import Link from "next/link";
import React from "react";

export default function ThankYouPage() {
  return (
    <main className="flex flex-col justify-center gap-20 mx-5 min-h-screen">
      <Wrapper styles="flex flex-col items-center justify-center  gap-2 text-center">
        
          <h1 className="font-bold text-5xl md:text-7xl tracking-tighter">
            Thank You!
          </h1>
          <p className="text-gray-300 md:text-xl">
            Apreciamos tu apoyo. Gracias por ser asombroso!
          </p>
          <Link
            className="inline-flex hover:brightness-110 justify-center items-center bg-principleViolet disabled:opacity-50 shadow-sm mt-5 px-8 rounded-md h-10 font-medium text-sm disabled:pointer-events-none"
            href="/"
          >
            Ir al inicio
          </Link>
      </Wrapper>
    </main>
  );
}
