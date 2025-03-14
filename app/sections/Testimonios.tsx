"use client"
import React, { useState, useEffect } from "react";
import CrearTestimonio from "../components/CrearTestimonio";

interface Testimonials {
  id: number;
  nameUser: string;
  description: string;
}

export default function Testimonios() {
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonials[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const getTestimonials = async () => {
    try {
      const data = await fetch(`${process.env.NEXT_PUBLIC_URL_TESTIMONIALS}/api/testimonials`);
      const { testimonials } = await data.json();
      setTestimonials(testimonials);
      setVisibleTestimonials(testimonials.slice(0, visibleCount));
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  console.log(visibleCount, testimonials.length);


  return (
    <section id="Testimonios" className="gap-16 scroll-m-32 bg-black text-white w-full px-10">
      <h2 className="mb-10 border-principleViolet pl-2 border-l-4 font-bold text-2xl lg:text-4xl uppercase self-start">
        Testimonios
      </h2>

      {/* Skeleton de carga inicial */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="bg-gray-700 animate-pulse h-32 w-full max-w-[350px] mx-auto rounded-2xl"></div>
          ))}
        </div>
      ) }
      {!loading && testimonials.length > 0 &&
        <> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.slice(0, visibleCount).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-r from-blue-700 to-purple-500 px-6 py-4 rounded-2xl flex items-center gap-4 w-full max-w-[350px] mx-auto"
            >
              <div className="text-left">
                <p className="font-bold text-2xl pt-2 pb-2">{testimonial.nameUser}</p>
                <p className="text-x1 font-semibold leading-tight">{testimonial.description}</p>
              </div>
            </div>

          ))}
        </div>
          <div className="flex flex-col md:flex-row justify-center mt-10 gap-4">
            {visibleCount < testimonials.length && (
              <button
                onClick={handleShowMore}
                className="bg-principleViolet text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Ver más
              </button>
            )}
            {visibleCount > 3 && (
              <button
                onClick={() => setVisibleCount((prevCount) => prevCount - 3)}
                className="bg-principleViolet text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Ver menos
              </button>
            )}
          </div>

        </>}
       { !loading && testimonials.length === 0 && 
       <p className="text-center">Todavía no hay Testimonios, ¿Qué esperas para añadir el tuyo?</p>
       }

      <CrearTestimonio getTestimonials={getTestimonials} />
    </section>
  );
}