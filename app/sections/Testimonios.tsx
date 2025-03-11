import React from "react";
import CrearTestimonio from "../components/CrearTestimonio";

interface Testimonials {
  id: number
  nameUser: string
  description: string
}

export default async function Testimonios() {
  const response = await fetch('http://localhost:3000/api/testimonials', { next: { revalidate: 60 } });
  // console.log(response);
  const { testimonials } = await response.json();

  return (
    <section id="Testimonios" className="gap-16  scroll-m-32 bg-black text-white w-full px-6 sm:px-10">
      {/* Título */}
      <h2 className="mb-10 border-principleViolet pl-2 border-l-4 font-bold text-2xl md:text-2xl lg:text-4xl uppercase self-start">
        Testimonios
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center max-w-6xl mx-auto">
        {/* Primera fila de testimonios */}
        {testimonials.map((testimonial: Testimonials, i: number) => (
          <div
            key={i}
            className="bg-gradient-to-r from-blue-700 to-purple-500 px-6 py-4 rounded-2xl flex items-center gap-4 w-full max-w-[350px] mx-auto"
          >
            {/* <div className="w-20 h-20 bg-gray-300 rounded-full shrink-0"></div> */}
            <div className="text-left">
              <p className="font-bold h-30 w-30 text-2xl pt-2 pb-2" ><strong>{testimonial.nameUser}</strong></p>
              <p className="text-x1 font-semibold leading-tight">
                {testimonial.description}
              </p>
            </div>
          </div>
          
        ))}
      </div>
        <CrearTestimonio/>
      {/* Segunda fila con video y testimonio adicional */}
      {/* <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6 ">
        Último testimonio
        <div className="bg-gradient-to-r from-blue-700 to-purple-500 px-6 py-4 rounded-2xl flex items-center gap-4 w-full max-w-[350px]">
          <div className="w-20 h-20 bg-gray-300 rounded-full shrink-0"></div>
          <div className="text-left">
            <p className="font-bold h-30 w-30 text-2xl pt-2 pb-2"><strong>Nombre Completo</strong></p>
            <p className="text-x1 font-semibold leading-tight">
              Fue increíble! La mejor experiencia que he tenido en Barranquilla
            </p>
          </div>
        </div>
      </div> */}

      {/* <p className="text-center  mt-12 pb-23 text-lg font-semibold cursor-pointer hover:underline">Ver más</p> */}
    </section>
  );
}
