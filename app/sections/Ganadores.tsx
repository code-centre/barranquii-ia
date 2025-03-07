"use client";

import Image from "next/image";
import Link from "next/link";

export default function Ganadores() {
    return (
        <section id="Ganadores" className="flex flex-col w-full gap-10 scroll-m-36 px-4 md:px-10 lg:px-20">
            <h2 className="border-principleViolet pl-2 border-l-4 font-bold text-lg md:text-2xl lg:text-4xl uppercase">
                Ganadores
            </h2>

            <div className="flex flex-col items-center text-center">
                <div className="relative w-full max-w-[1400px] h-auto max-h-[1400]">
                    <Image
                        src="/FOTOSBARRANQUI-IA/ganadores.png"
                        alt="Ganadores del evento"
                        layout="responsive"
                        width={1200}
                        height={800}
                        className="rounded-lg object-contain"
                    />
                </div>

                <a target="_blank"
                    href="https://barranquiia.devpost.com/project-gallery"
                    className="text-purple-500 hover:text-purple-700 transition">

                    ¿Quieres ver todos los proyectos? Da click aquí
                </a>


            </div>
        </section>
    );
}