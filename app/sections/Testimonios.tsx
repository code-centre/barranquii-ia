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
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const getTestimonials = async () => {
    try {
      const data = await fetch("http://localhost:3000/api/testimonials");
      const { testimonials } = await data.json();
      setTestimonials(testimonials);
      setVisibleTestimonials(testimonials.slice(0, 9));
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  const toggleView = () => {
    if (!expanded) {
      setLoadingMore(true);
      setTimeout(() => {
        setVisibleTestimonials(testimonials);
        setLoadingMore(false);
        setExpanded(true);
      }, 1000);
    } else {
      setVisibleTestimonials(testimonials.slice(0, 6));
      setExpanded(false);
    }
  };

  return (
    <section id="Testimonios" className="gap-16 scroll-m-32 bg-black text-white w-full px-6 sm:px-10">
      <h2 className="mb-10 border-principleViolet pl-2 border-l-4 font-bold text-2xl md:text-2xl lg:text-4xl uppercase self-start">
        Testimonios
      </h2>

      {/* Skeleton de carga inicial */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Array(9).fill(0).map((_, i) => (
            <div key={i} className="bg-gray-700 animate-pulse h-32 w-full max-w-[350px] mx-auto rounded-2xl"></div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {visibleTestimonials.map((testimonial) => (
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
          
          {/* Skeleton de carga al expandir */}
          {loadingMore && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-4">
              {Array(3).fill(0).map((_, i) => (
                <div key={i} className="bg-gray-700 animate-pulse h-32 w-full max-w-[350px] mx-auto rounded-2xl"></div>
              ))}
            </div>
          )}
          
          {/* Botón Ver más / Ver menos */}
          <div className="flex justify-center mt-6">
            <button
              onClick={toggleView}
              className="bg-principleViolet text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              {expanded ? "Ver menos" : "Ver más"}
            </button>
          </div>
        </>
      )}
      
      <CrearTestimonio getTestimonials={getTestimonials} />
    </section>
  );
}