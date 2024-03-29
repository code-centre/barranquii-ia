"use client";

import React from "react";
import Wrapper from "../components/Wrapper";
import { useSearchParams } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    example: string
    exampleRequired: string
  }

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  const searchParams = useSearchParams();

  const mode = searchParams.get("mode");

  return (
    <main className="flex flex-col gap-20 py-10 min-h-screen mx-5">
      <Wrapper styles="flex flex-col gap-2">
        <h1 className="text-6xl font-bold ">¡Ya casi!</h1>
        <p className="text-lg">
          Por favor, llena el formulario para la compra de tu boleta.
        </p>
        <form className="flex flex-col gap-4 mt-5">
          <div className="flex flex-col md:flex-row gap-6 justify-between ">
            <label className="flex flex-col gap-2 md:w-1/2 font-semibold">
              Nombre
              <input
                placeholder="Nombre"
                type="text"
                className=" font-normal text-black rounded-md py-2 px-2"
              />
            </label>
            <label className="flex flex-col gap-2 md:w-1/2 font-semibold ">
              Apellido
              <input
                placeholder="Apellido"
                type="text"
                className=" font-normal text-black rounded-md py-2 px-2"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 font-semibold   ">
            Correo
            <input
              placeholder="Correo@gmail.com"
              type="email"
              className=" font-normal text-black rounded-md py-2 px-2"
            />
          </label>
          <label className="flex flex-col gap-2 font-semibold   ">
            Talla de camisa
            <select className="text-black rounded-md py-2 px-2" name="" id="">
              <option value="">S</option>
              <option value="">M</option>
              <option value="">XL</option>
              <option value="">XXL</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 font-semibold">
            ¿Tienes alguna restricción alimenticia? cuéntanos
            <textarea
              className="text-black px-2 py-2 rounded-md font-normal"
              cols={20}
              rows={5}
              name=""
              id=""
              placeholder="Tu texto"
            ></textarea>
          </label>
          <button
            // href={
            //   mode === "general"
            //     ? "https://checkout.wompi.co/l/test_7bBufv"
            //     : "https://checkout.wompi.co/l/test_wtdSx4"
            // }
            className=" text-center hover:brightness-110 bg-principleViolet px-5 xl:px-5 py-2 xl:py-3 rounded-md text-[13px] xl:text-base uppercase"
          >
            Comprar
          </button>
        </form>
      </Wrapper>
    </main>
  );
}
