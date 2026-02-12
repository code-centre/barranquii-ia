"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/app/i18n/useTranslation";

export default function HeroTwo() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [gridColumns, setGridColumns] = useState("lg:grid-cols-4"); // Por defecto 4 columnas en PC

  useEffect(() => {
    setMounted(true);

    // Ajustar layout según el tamaño de pantalla
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setGridColumns("grid-cols-2 grid-rows-2"); // 2x2 en móviles y tablets
      } else {
        setGridColumns("lg:grid-cols-4"); // 4 columnas en PC
      }
    };

    handleResize(); // Llamada inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return <div className="w-full h-96 bg-black"></div>;

  const images = Array.from(
    { length: 12 },
    (_, i) => `/FOTOSBARRANQUI-IA/${i + 1}.webp`
  );

  const imagesPerSlide = 4; // Siempre 4 imágenes por slide
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
    <section id="Hero2" className="flex flex-col scroll-mt-32 items-center gap-12 bg-black text-white w-full px-6 lg:pt-20 sm:px-10">
      <h2 className="border-l-4 border-principleViolet pl-4 font-bold text-2xl md:text-3xl lg:text-4xl uppercase self-start">
        {t("hero2_2024.sectionTitle")}
      </h2>
      <div className="container mx-auto text-center px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {t("hero2_2024.headline")}
        </h2>
        <div className="bg-black text-white p-4 mx-auto max-w-6xl">
          <p className="text-lg md:text-lg">
            {t("hero2_2024.para1")}
          </p>
          <p className="mt-2 text-lg md:text-lg pb-0">
            {t("hero2_2024.para2")}
          </p>
          <p className="font-bold text-2xl mt-2">
            {t("hero2_2024.cta")}
          </p>
        </div>
      </div>

      {/* Contenedor de imágenes con GRID y transición */}
      <div className=" max-w-full mx-5 mt-8 relative overflow-visible">
        {/* Botón izquierda */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-purple-600 hover:bg-purple-300 text-white  w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg z-10 transition-all duration-300"
        >
          &#10094;
        </button>

        {/* Contenedor con animación */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className={`grid gap-4 min-w-full ${gridColumns}`}
              >
                {images
                  .slice(
                    slideIndex * imagesPerSlide,
                    (slideIndex + 1) * imagesPerSlide
                  )
                  .map((src, index) => (
                    <div
                      key={index}
                      className="w-full h-40 sm:h-48 md:h-64 cursor-pointer"
                      onClick={() =>
                        openModal(slideIndex * imagesPerSlide + index)
                      }
                    >
                      <Image
                        src={src}
                        alt={t("hero2_2024.imageAlt", { num: String(slideIndex * imagesPerSlide + index + 1) })}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Botón derecha */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-purple-600 hover:bg-purple-300 text-white  w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg z-10 transition-all duration-300"
        >
          &#10095;
        </button>
      </div>

      {/* Modal */}
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
          <div className="relative w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 h-3/4">
            <Image
              src={images[modalIndex]}
              alt={t("hero2_2024.modalImageAlt")}
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
