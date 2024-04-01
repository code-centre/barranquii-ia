"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Wrapper from "../../components/Wrapper";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

enum sizesEnum {
  s = "s",
  m = "m",
  l = "l",
  xl = "xl",
  xxl = "xxl",
}

type Inputs = {
  name: string;
  lastName: string;
  email: string;
  size: sizesEnum;
};

export default function Form() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    console.log(errors);

    if (formState.isSubmitSuccessful) {
      router.push("/tickets/thank-you");
    }
  };
  const searchParams = useSearchParams();

  const mode = searchParams.get("mode");

  return (
    <main className="flex flex-col gap-20 mx-5 py-10 min-h-screen">
      <Wrapper styles="flex flex-col gap-2">
        <h1 className="font-bold text-6xl">¡Ya casi!</h1>
        <p className="text-gray-300 text-lg">
          Por favor, llena el formulario para la compra de tu boleta.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-5"
        >
          <div className="flex md:flex-row flex-col justify-between gap-6">
            <label className="flex flex-col gap-2 md:w-1/2 font-semibold text-gray-300">
              Nombre
              <input
                {...register("name", {
                  required: true,
                })}
                placeholder="Nombre"
                type="text"
                className="px-2 py-2 rounded-md font-normal text-black"
              />
              {errors.name?.type === "required" && (
                <p className="text-[13px] text-red-600">
                  No puede estar vacío.
                </p>
              )}
            </label>
            <label className="flex flex-col gap-2 md:w-1/2 font-semibold text-gray-300">
              Apellido
              <input
                {...register("lastName", {
                  required: true,
                })}
                placeholder="Apellido"
                type="text"
                className="px-2 py-2 rounded-md font-normal text-black"
              />
              {errors.lastName?.type === "required" && (
                <p className="text-[13px] text-red-600">
                  No puede estar vacío.
                </p>
              )}
            </label>
          </div>
          <div className="flex md:flex-row flex-col justify-between gap-6">
            <label className="flex flex-col gap-2 md:w-1/2 font-semibold text-gray-300">
              Cédula
              <input
                {...register("name", {
                  required: true,
                })}
                placeholder="Cédula"
                type="text"
                className="px-2 py-2 rounded-md font-normal text-black"
              />
              {errors.name?.type === "required" && (
                <p className="text-[13px] text-red-600">
                  No puede estar vacío.
                </p>
              )}
            </label>
            <label className="flex flex-col gap-2 md:w-1/2 font-semibold text-gray-300">
              Teléfono
              <input
                {...register("lastName", {
                  required: true,
                })}
                placeholder="Teléfono"
                type="text"
                className="px-2 py-2 rounded-md font-normal text-black"
              />
              {errors.lastName?.type === "required" && (
                <p className="text-[13px] text-red-600">
                  No puede estar vacío.
                </p>
              )}
            </label>
          </div>
          <label className="flex flex-col gap-2 font-semibold text-gray-300">
            Correo
            <input
              {...register("email", {
                required: true,
              })}
              required
              placeholder="Correo@gmail.com"
              type="email"
              className="px-2 py-2 rounded-md font-normal text-black"
            />
            {errors.email?.type === "required" && (
              <p className="text-[13px] text-red-600">No puede estar vacío.</p>
            )}
          </label>
          <label className="flex flex-col gap-2 font-semibold text-gray-300">
            Talla de camisa
            <select
              {...register("size", {
                // required: true,
              })}
              className="px-2 py-2 rounded-md text-black"
              defaultValue="S"
              name=""
              id=""
            >
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 font-semibold text-gray-300">
            ¿Tienes alguna restricción alimenticia?
            <select
              defaultValue="ninguna"
              className="px-2 py-2 rounded-md text-black"
            >
              <option value="ninguna">Ninguna</option>
              <option value="vegetariano">Vegetariano</option>
              <option value="vegano">Vegano</option>
            </select>
          </label>

          <h2 className="mt-6 font-bold text-3xl">Contacto de emergencia</h2>
          <div className="flex md:flex-row flex-col justify-between gap-6">
            <label className="flex flex-col gap-2 md:w-1/2 font-semibold text-gray-300">
              Nombre
              <input
                {...register("name", {
                  required: true,
                })}
                placeholder="Nombre"
                type="text"
                className="px-2 py-2 rounded-md font-normal text-black"
              />
              {errors.name?.type === "required" && (
                <p className="text-[13px] text-red-600">
                  No puede estar vacío.
                </p>
              )}
            </label>
            <label className="flex flex-col gap-2 md:w-1/2 font-semibold text-gray-300">
              Apellido
              <input
                {...register("lastName", {
                  required: true,
                })}
                placeholder="Apellido"
                type="text"
                className="px-2 py-2 rounded-md font-normal text-black"
              />
              {errors.lastName?.type === "required" && (
                <p className="text-[13px] text-red-600">
                  No puede estar vacío.
                </p>
              )}
            </label>
          </div>
          <div>
            <p className="max-w-2xl text-gray-300">
              Para poder trabajar en el proyecto, podrás quedarte trabajando la
              noche del sábado en la universidad, tendremos cafe, comida, agua y
              habrá espacios donde puedas tomar una siesta, pero el espació no
              estará habilitado para dormir.
              <span className="block mt-2 font-bold">¿Te quedarás a trabajar durante la noche?</span>
            </p>
            <div className="flex gap-6 mt-2 text-gray-300">
              <label className="flex items-center gap-2">
                SÍ
                <input type="checkbox" />
              </label>
              <label className="flex items-center gap-2">
                NO
                <input type="checkbox" />
              </label>
            </div>
          </div>

          <label className="flex items-center gap-2 text-gray-300">
            He leído y acepto los términos y condiciones
            <input type="checkbox" />
          </label>
          <button
            // disabled={!isValid}
            // href=""
            // href={
            //   mode === "general"
            //     ? "https://checkout.wompi.co/l/test_7bBufv"
            //     : "https://checkout.wompi.co/l/test_wtdSx4"
            // }
            className={`hover:brightness-110 bg-principleViolet px-5 xl:px-5 py-2 xl:py-3 rounded-md text-[13px] text-center xl:text-base uppercase disabled:bg-gray-400 disabled:brightness-100`}
          >
            Continuar con el pago
          </button>
        </form>
      </Wrapper>
    </main>
  );
}
