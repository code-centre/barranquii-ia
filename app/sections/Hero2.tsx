"use client";

import { SetStateAction, useEffect, useState } from "react";
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

  const images = Array.from(
    { length: 12 },
    (_, i) => `/FOTOSBARRANQUI-IA/${i + 1}.jpg`
  );
  const imagesPerSlide = 4;
  const totalSlides = Math.ceil(images.length / imagesPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
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
    setModalIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="Hero2" className="scroll-m-36 bg-black text-white">
      <div className="container mx-auto text-center px-4 max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          El pasado{" "}
          <span className="text-purple-500">4 y 5 de mayo de 2024,</span> la
          costa vibró con inteligencia artificial
        </h2>
        <div className="bg-black text-white p-4 mx-auto max-w-6xl">
          <p className="text-lg md:text-lg">
            <strong>Barranqui-IA</strong> dejó huella en la innovación del
            Caribe. Más de <strong>150 mentes brillantes</strong>, en{" "}
            <strong>21 equipos</strong>, dieron vida a soluciones con
            inteligencia artificial en un ambiente dinámico y colaborativo.
          </p>
          <p className="mt-2 text-lg md:text-lg pb-0">
            Más que una competencia, fue un{" "}
            <strong>maratón de creatividad y aprendizaje</strong>, donde la
            pasión demostró que no hay barreras para innovar. Barranquilla
            reafirmó su lugar como epicentro tecnológico, impulsando talento y
            transformación.
          </p>
          <p className="font-bold text-2xl mt-2">
            ¡Juntos convertimos ideas en futuro!
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
                .slice(
                  slideIndex * imagesPerSlide,
                  (slideIndex + 1) * imagesPerSlide
                )
                .map((src, index) => (
                  <div
                    key={index}
                    className="relative w-full lg:h-68 h-56 md:h-86 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={`Hackathon Imagen ${index + 1}`}
                      fill
                      className="object-cover rounded-lg cursor-pointer"
                      onClick={() =>
                        openModal(slideIndex * imagesPerSlide + index)
                      }
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            &times;
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-3xl"
          >
            &#10094;
          </button>
          <div className="relative w-3/4 h-3/4">
            <Image
              src={images[modalIndex]}
              alt="Imagen en grande"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-3xl"
          >
            &#10095;
          </button>
        </div>
      )}
    </section>
  );
}
