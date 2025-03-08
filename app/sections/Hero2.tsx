"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroTwo () {
    const [mounted, setMounted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-full h-96 bg-black"></div>;

    const images = Array.from({ length: 12 }, (_, i) => `/FOTOSBARRANQUI-IA/${i + 1}.jpg`);
    const imagesPerSlide = 4;
    const totalSlides = Math.ceil(images.length / imagesPerSlide);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
    };

    return (
        <section id="Hero2" className=" scroll-m-36 bg-black text-white py-5">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    El pasado <span className="text-purple-500">4 y 5 de Mayo del 2024,</span> la costa se llenó de inteligencia artificial
                </h2>
                <div className="bg-black text-white p-4 mx-auto max-w-6xl">
                    <p className="text-lg md:text-2xl">
                        Barranqui-IA fue un éxito rotundo, reuniendo a más de 150 personas que formaron 21 equipos para crear soluciones innovadoras con inteligencia artificial. Durante este hackatón, participantes de todos los niveles aprendieron, diseñaron y compartieron ideas en un ambiente inclusivo y creativo.
                    </p>
                    <p className="mt-2 text-lg md:text-2xl">
                        El evento destacó como un maratón de invención donde no se necesitaba ser experto para brillar. Barranquilla demostró que aquí también se crean cosas increíbles, dejando claro que el Caribe es un epicentro de talento y transformación tecnológica. ¡Juntos hicimos historia!
                    </p>
                </div>
            </div>

            {/* Carrusel de imágenes responsive */}
            <div className="pl-10 relative w-screen overflow-hidden mt-8">
                <div
                    className="flex transition-transform duration-500 ease-in-out w-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                        <div 
                            key={slideIndex} 
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 flex-shrink-0 w-full max-w-none px-6"
                        >
                            {images
                                .slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide)
                                .map((src, index) => (
                                    <div key={index} className="relative w-full h-48 sm:h-64 md:h-96 rounded-lg overflow-hidden lg:mb-32">
                                        <Image
                                            src={src}
                                            alt={`Hackathon Imagen ${index + 1}`}
                                            fill
                                            className="object-cover rounded-lg"
                                        />
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>

                {/* Botones de navegación */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 px-3 py-1 rounded-full"
                >
                    &#10094;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 px-3 py-1 rounded-full"
                >
                    &#10095;
                </button>
            </div>
        </section>
    );
};

