"use client";
import React, { useState, useEffect } from "react";
import CrearTestimonio from "../components/CrearTestimonio";

interface Testimonials {
  id: number;
  nameUser: string;
  description: string;
  role?: string;
}

interface Props {
  hackathon: string;
  year: string;
	children: React.ReactNode;
}


export default function Testimonios({ hackathon, year, children }: Props) {
  const [testimonials, setTestimonials] = useState<Testimonials[]>([{
    nameUser: "Anuar",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    role: "mentor",
    id: 1
  }, {
    nameUser: "Anuar",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit.",
    role: "participante",
    id: 2
  }, {
    nameUser: "Anuar",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    role: "staff",
    id: 3
  }, {
    nameUser: "Anuar",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    role: "mentor",
    id: 4
  }, {
    nameUser: "Anuar",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    role: "participante",
    id: 5
  }, {
    nameUser: "Anuar",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    role: "staff",
    id: 6
  }, {
    nameUser: "Anuar",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    role: "mentor",
    id: 7
  }, {
    nameUser: "Anuar",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    role: "participante",
    id: 8
  }]);
  const [loading, setLoading] = useState(true);
  const [showAllOnMobile, setShowAllOnMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  // Function to get avatar background based on role
  const getAvatarGradient = (role?: string) => {
    switch(role) {
      case "mentor":
        return "from-indigo-500 to-purple-400";
      case "participante":
        return "from-green-500 to-teal-400";
      case "staff":
        return "from-orange-500 to-red-400";
      default:
        return "from-indigo-500 to-purple-400";
    }
  };

  // Function to get badge background based on role
  const getBadgeBackground = (role?: string) => {
    switch(role) {
      case "mentor":
        return "bg-purple-900 text-purple-200";
      case "participante":
        return "bg-teal-900 text-teal-200";
      case "staff":
        return "bg-red-900 text-red-200";
      default:
        return "bg-purple-900 text-purple-200";
    }
  };

  const getTestimonials = async () => {
    try {
      const data = await fetch(`${process.env.NEXT_PUBLIC_URL_TESTIMONIALS}/api/testimonials?hackathon=${hackathon}&year=${year}`, {
				method: "GET",
			});
      const { testimonials } = await data.json();
			console.log(testimonials);
      
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

  // Check if the device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Get visible testimonials based on mobile state
  const visibleTestimonials = isMobile && !showAllOnMobile 
    ? testimonials.slice(0, 3) 
    : testimonials;

  return (
    <section id="Testimonios" className="gap-16 scroll-m-32 bg-black text-white w-full px-6 py-16">
			{children}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-700 animate-pulse h-full md:h-[180px] rounded-lg"
                ></div>
              ))}
          </div>
        )}

        {!loading && testimonials.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              {visibleTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`bg-gradient-to-br from-blue-800 to-purple-700 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 break-inside-avoid`}
                >
                  <div className="text-left flex gap-3 items-start">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r  ${getAvatarGradient(testimonial.role)} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                      {testimonial.nameUser
                        .split(" ")
                        .map(name => name[0])
                        .join("")
                        .substring(0, 2)
                        .toUpperCase()}
                    </div>
                    <div className="mb-2">
                      <h3 className="font-bold text-base text-white">{testimonial.nameUser}</h3>
                      {testimonial.role && (
                        <span className={`inline-block ${getBadgeBackground(testimonial.role)} px-2 py-0.5 rounded-full text-xs font-medium`}>
                          {testimonial.role}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-100 text-sm leading-relaxed mt-3">
                    {testimonial.description}
                  </p>
                </div>
              ))}
            </div>
            {isMobile && testimonials.length > 3 && (
              <button 
                onClick={() => setShowAllOnMobile(!showAllOnMobile)}
                className="mt-4 mx-auto block bg-principleViolet text-white py-2 px-4 rounded-md text-sm font-medium"
              >
                {showAllOnMobile ? "Ver menos" : "Ver más"}
              </button>
            )}
          </>
        )}

        {!loading && testimonials.length === 0 && (
          <p className="text-center">Todavía no hay Testimonios, ¿Qué esperas para añadir el tuyo?</p>
        )}
      

      <CrearTestimonio hackathon={hackathon} year={year} getTestimonials={getTestimonials} />
    </section>
  );
}
