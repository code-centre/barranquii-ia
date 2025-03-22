"use client";
import React, { useState, useEffect, useRef } from "react";
import CrearTestimonio from "../components/CrearTestimonio";

interface Testimonials {
  id: number;
  nameUser: string;
  description: string;
  role?: string;
}

export default function Testimonios() {
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const getTestimonials = async () => {
    try {
      const data = await fetch(`${process.env.NEXT_PUBLIC_URL_TESTIMONIALS}/api/testimonials`);
      const { testimonials } = await data.json();
      setTestimonials(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  useEffect(() => {
    const startAutoplay = () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }

      if (autoplay && testimonials.length > 1) {
        autoplayIntervalRef.current = setInterval(() => {
          if (!isPaused) {
            nextTestimonial();
          }
        }, 5000);
      }
    };

    startAutoplay();

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [autoplay, isPaused, testimonials.length]);

  const scrollToTestimonial = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild
        ? (sliderRef.current.firstChild as HTMLElement).clientWidth + 16
        : 350;
      const scrollPosition = index * cardWidth;
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => {
      const nextIndex = prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1;
      scrollToTestimonial(nextIndex);
      return nextIndex;
    });
  };

  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => {
      const prevIndexAdjusted = prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1;
      scrollToTestimonial(prevIndexAdjusted);
      return prevIndexAdjusted;
    });
  };

  return (
    <section id="Testimonios" className="gap-16 scroll-m-32 bg-black text-white w-full px-6 md:px-10 py-16">
      
        <h2 className="mb-10 border-principleViolet pl-2 border-l-4 font-bold text-2xl lg:text-4xl uppercase">
          Testimonios
        </h2>

        {loading && (
          <div className="flex space-x-6 overflow-hidden relative">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-700 animate-pulse min-h-[200px] md:min-h-[250px] w-full min-w-[300px] md:min-w-[350px] rounded-2xl flex-shrink-0"
                ></div>
              ))}
          </div>
        )}

        {!loading && testimonials.length > 0 && (
          <div className="relative">
            {/* Botón Anterior */}
            <button
            onClick={prevTestimonial}
             className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-purple-600 hover:bg-purple-400 text-white  w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg z-10 transition-all duration-300"
              
            >
              &#10094;
            </button>

            {/* Contenedor del Slider */}
            <div
              ref={sliderRef}
              className="flex overflow-x-auto space-x-6 pb-6 pt-2 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-gradient-to-br from-blue-800 to-purple-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 relative overflow-hidden snap-center
                  min-w-[90%] sm:min-w-[350px] max-w-[400px] min-h-[250px] md:min-h-[300px] flex flex-col"
                >
                  <div className="flex-1">
                    {/* Avatar */}
                    <div className="text-left flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-400 flex items-center justify-center text-white font-bold text-lg shrink-0">
                        {testimonial.nameUser
                          .split(" ")
                          .map(name => name[0])
                          .join("")
                          .substring(0, 2)
                          .toUpperCase()}
                      </div>
                      <div className="mb-2">
                        <h3 className="font-bold text-lg text-white">{testimonial.nameUser}</h3>
                        {testimonial.role && (
                          <span className="inline-block bg-purple-900 px-2 py-0.5 rounded-full text-xs text-purple-200 font-medium">
                            {testimonial.role}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-100 leading-relaxed relative z-10 mt-4">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón Siguiente */}
            <button
              className="absolute right-1 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-purple-600 hover:bg-purple-700 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg z-10 transition-all duration-300"
              onClick={nextTestimonial}
            >
              &#10095;
            </button>
          </div>
        )}

        {!loading && testimonials.length === 0 && (
          <p className="text-center">Todavía no hay Testimonios, ¿Qué esperas para añadir el tuyo?</p>
        )}
      

      <CrearTestimonio getTestimonials={getTestimonials} />
    </section>
  );
}
