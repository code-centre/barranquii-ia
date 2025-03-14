"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroTwo() {
    const [mounted, setMounted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

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

    const openModal = (index: number) => {
        setModalIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextImage = () => {
        setModalIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setModalIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <section id="Hero2" className="scroll-m-36 bg-black text-white">
            <div className="container mx-auto text-center px-4 max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    El pasado <span className="text-purple-500">4 y 5 de Mayo del 2024,</span> la costa se llenó de inteligencia artificial
                </h2>
                <div className="bg-black text-white p-4 mx-auto max-w-1xl">
                    <p className="text-lg md:text-1xl">
                        Barranqui-IA fue un éxito rotundo, reuniendo a más de 150 personas que formaron 21 equipos para crear soluciones innovadoras con inteligencia artificial. Durante este hackatón, participantes de todos los niveles aprendieron, diseñaron y compartieron ideas en un ambiente inclusivo y creativo.
                    </p>
                    <p className="mt-2 text-lg md:text-1xl">
                        El evento destacó como un maratón de invención donde no se necesitaba ser experto para brillar. Barranquilla demostró que aquí también se crean cosas increíbles, dejando claro que el Caribe es un epicentro de talento y transformación tecnológica. ¡Juntos hicimos historia!
                    </p>
                </div>
            </div>

           
            <div className="relative w-screen overflow-hidden mt-8 flex justify-center items-center">
                <button
                    onClick={prevSlide}
                    className="absolute left-4 z-10 text-white text-3xl bg-black bg-opacity-50 px-3 py-1 rounded-full"
                >
                    &#10094;
                </button>

                <div className="flex transition-transform duration-500 ease-in-out w-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 flex-shrink-0 w-full max-w-none px-6"
                        >
                            {images
                                .slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide)
                                .map((src, index) => (
                                    <div key={index} className="relative w-full lg:h-68 h-56 md:h-86 rounded-lg overflow-hidden">
                                        {isLoading && (
                                            <div className="w-full h-full bg-gray-800 animate-pulse rounded-lg"></div>
                                        )}
                                        <Image
                                            src={src}
                                            alt={`Hackathon Imagen ${index + 1}`}
                                            fill
                                            className={`object-cover rounded-lg cursor-pointer transition-opacity ${isLoading ? "opacity-0" : "opacity-100"}`}
                                            onClick={() => openModal(slideIndex * imagesPerSlide + index)}
                                            onLoadingComplete={() => setIsLoading(false)}
                                        />
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 z-10 text-white text-3xl bg-black bg-opacity-50 px-3 py-1 rounded-full"
                >
                    &#10095;
                </button>
            </div>

            {/* Modal para ver imágenes en grande */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                    <button onClick={closeModal} className="absolute top-4 right-4 text-white text-3xl">&times;</button>
                    <button onClick={prevImage} className="absolute left-4 text-white text-3xl">&#10094;</button>
                    <div className="relative w-3/4 h-3/4">
                        {isLoading && (
                            <div className="w-full h-full bg-gray-800 animate-pulse rounded-lg"></div>
                        )}
                        <Image
                            src={images[modalIndex]}
                            alt="Imagen en grande"
                            fill
                            className={`object-contain rounded-lg transition-opacity ${isLoading ? "opacity-0" : "opacity-100"}`}
                            onLoadingComplete={() => setIsLoading(false)}
                        />
                    </div>
                    <button onClick={nextImage} className="absolute right-4 text-white text-3xl">&#10095;</button>
                </div>
            )}
        </section>
    );
};
