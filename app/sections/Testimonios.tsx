"use client"
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

  // Efecto para manejar el autoplay
  useEffect(() => {
    const startAutoplay = () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
      
      autoplayIntervalRef.current = setInterval(() => {
        if (!isPaused && autoplay) {
          setCurrentIndex(prevIndex => {
            const nextIndex = prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1;
            scrollToTestimonial(nextIndex);
            return nextIndex;
          });
        }
      }, 5000); // Cambiar cada 5 segundos
    };

    if (autoplay) {
      startAutoplay();
    }

    // Limpieza del intervalo cuando el componente se desmonta
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [autoplay, isPaused, testimonials.length]);

  const scrollToTestimonial = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = 350; // Ancho aproximado de cada tarjeta con margen
      const scrollPosition = index * cardWidth;
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToTestimonial(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(testimonials.length - 1, currentIndex + 1);
    scrollToTestimonial(newIndex);
  };

  return (
    <section id="Testimonios" className="gap-16 scroll-m-32 bg-black text-white w-full px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-10 border-principleViolet pl-2 border-l-4 font-bold text-2xl lg:text-4xl uppercase self-start">
          Testimonios
        </h2>

        {/* Skeleton de carga inicial */}
        {loading && (
          <div className="flex space-x-6 overflow-hidden">
            {Array(3).fill(0).map((_, i) => (
              <div key={i} className="bg-gray-700 animate-pulse h-64 w-full min-w-[350px] max-w-[350px] rounded-2xl flex-shrink-0"></div>
            ))}
          </div>
        )}

        {!loading && testimonials.length > 0 && (
          <div className="relative">
            {/* Botón Anterior */}
            <button 
              onClick={() => {
                handlePrev();
                setIsPaused(true);
                // Reanudar el autoplay después de 10 segundos de inactividad
                setTimeout(() => setIsPaused(false), 10000);
              }} 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 bg-purple-800 hover:bg-purple-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Contenedor del Slider */}
            <div 
              ref={sliderRef}
              className="flex overflow-x-auto space-x-6 pb-6 pt-2 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => {
                // Reanudar el autoplay después de 10 segundos de inactividad en dispositivos táctiles
                setTimeout(() => setIsPaused(false), 3000);
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-gradient-to-br from-blue-800 to-purple-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[350px] max-w-[350px] h-[250px] flex-shrink-0 relative overflow-hidden snap-center"
                >
                  <div className="">
                    {/* Avatar con iniciales */}
                    <div className="text-left flex-1 flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-400 flex items-center justify-center text-white font-bold text-lg shrink-0">
                        {testimonial.nameUser.split(' ').map(name => name[0]).join('').substring(0, 2).toUpperCase()}
                      </div>
                      {/* Información del usuario */}
                      <div className="mb-2">
                        <h3 className="font-bold text-lg text-white">{testimonial.nameUser}</h3>
                        {testimonial.role && (
                          <span className="inline-block bg-purple-900 px-2 py-0.5 rounded-full text-xs text-purple-200 font-medium">
                            {testimonial.role}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Descripción del testimonio */}
                    <div className="absolute top-2 left-3 text-4xl text-purple-300 opacity-30">"</div>
                    <p className="text-gray-100 leading-relaxed relative z-10 mt-4 line-clamp-5 overflow-hidden">
                      {testimonial.description}
                    </p>
                    <div className="absolute bottom-2 right-3 text-4xl text-purple-300 opacity-30">"</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón Siguiente */}
            <button 
              onClick={() => {
                handleNext();
                setIsPaused(true);
                // Reanudar el autoplay después de 10 segundos de inactividad
                setTimeout(() => setIsPaused(false), 10000);
              }} 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 bg-purple-800 hover:bg-purple-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === testimonials.length - 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Botón de Autoplay */}
            <button 
              onClick={() => setAutoplay(!autoplay)} 
              className="absolute bottom-0 right-0 mb-2 mr-2 bg-purple-800 hover:bg-purple-700 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
              aria-label={autoplay ? "Pausar autoplay" : "Activar autoplay"}
            >
              {autoplay ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>
          </div>
        )}

        {/* Indicadores de posición */}
        {!loading && testimonials.length > 0 && (
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  scrollToTestimonial(index);
                  setIsPaused(true);
                  // Reanudar el autoplay después de 10 segundos de inactividad
                  setTimeout(() => setIsPaused(false), 10000);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-purple-500 w-5' : 'bg-gray-500'
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        )}

        {!loading && testimonials.length === 0 && (
          <p className="text-center">Todavía no hay Testimonios, ¿Qué esperas para añadir el tuyo?</p>
        )}
      </div>

      <CrearTestimonio getTestimonials={getTestimonials} />
    </section>
  );
}