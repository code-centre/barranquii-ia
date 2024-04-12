"use client";
import Boleta from "@/app/components/Boleta";
import Wrapper from "@/app/components/Wrapper";
import Link from "next/link";
import { ImageResponse } from "next/og";
import { useRouter } from "next/navigation";

import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";

export default function ThankYouPage() {
  const router = useRouter();
  const shareUrl = "https://lgn440nz-3000.use2.devtunnels.ms/";
  const handleSendEmail = async () => {
    const res = await fetch("/api/send", {
      method: "POST",
    });
    const data = await res.json();
    console.log(data);

    router.push("/");
  };

  return (
    <main className="flex flex-col justify-center gap-20 mx-5 py-20 min-h-screen">
      <Wrapper styles="flex flex-col justify-center  gap-6   ">
        <h1 className="font-bold text-5xl md:text-7xl tracking-tighter">
          ¡Gracias!
        </h1>
        <p className="max-w-xl text-gray-300 md:text-base">
          Felicidades, ahora eres parte de Barranqui-IA, pon en forma tu
          habilidades con inteligencia artificial asistiendo a alguno de los
          talleres de Pre-Hackatón y prepárate para una experiencia inolvidable.
        </p>

        <p>
          En un máximo de 24 horas recibirás un correo electónico con tu boleto.
        </p>
        <Boleta />
        {/* <div>
          <h3 className="font-bold text-lg">
            Comparte tu boleta en tu red social favorita
          </h3>
          <div className="flex gap-5 mt-5">
            <FacebookShareButton
              url={shareUrl}
              className="hover:brightness-110"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton
              url={shareUrl}
              // title={title}
              className="hover:backdrop-brightness-200"
            >
              <XIcon size={32} round />
            </TwitterShareButton>

            <LinkedinShareButton
              url={shareUrl}
              className="hover:brightness-110"
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
        </div> */}

        <div className="flex items-center gap-5">
          <Link href="/">
            <button className="inline-flex hover:brightness-110 justify-center items-center bg-principleViolet disabled:opacity-50 shadow-sm px-8 rounded-md h-10 font-medium text-sm disabled:pointer-events-none">
              Ir al inicio
            </button>
          </Link>
          <a
            href="https://caribedev.org"
            className="inline-flex hover:brightness-110 justify-center items-center bg-green-500 disabled:opacity-50 shadow-sm px-8 rounded-md h-10 font-medium text-sm disabled:pointer-events-none"
          >
            Ver eventos Pre-Hackatón
          </a>
        </div>
        <p>
          Cualquier duda puedes escribirnos a
          contacto@fundacioncodigoabierto.com
        </p>
      </Wrapper>
    </main>
  );
}
