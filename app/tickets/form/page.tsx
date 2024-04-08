"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Wrapper from "../../components/Wrapper";
import { useSearchParams } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

enum sizesEnum {
  s = "s",
  m = "m",
  l = "l",
  xl = "xl",
  xxl = "xxl",
}

enum YES_NO {
  yes = "yes",
  no = "no",
}

type Inputs = {
  name: string;
  lastName: string;
  cedula: number;
  phone: number;
  email: string;
  size: sizesEnum;
  nameEmergency: string;
  phoneEmergency: string;
  sleepAtPlace: YES_NO;
  terms: boolean;
};

export default function Form() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful, isValid },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (mode === "general") {
      router.push("https://checkout.wompi.co/l/test_SAT8ud");
    } else {
      router.push("https://checkout.wompi.co/l/test_XH9ufN");
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
                {...register("cedula", {
                  required: true,
                })}
                placeholder="Cédula"
                type="text"
                className="px-2 py-2 rounded-md font-normal text-black"
              />
              {errors.cedula?.type === "required" && (
                <p className="text-[13px] text-red-600">
                  No puede estar vacío.
                </p>
              )}
            </label>
            <label className="flex flex-col gap-2 md:w-1/2 font-semibold text-gray-300">
              Teléfono
              <input
                {...register("phone", {
                  required: true,
                })}
                placeholder="Teléfono"
                type="text"
                className="px-2 py-2 rounded-md font-normal text-black"
              />
              {errors.phone?.type === "required" && (
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
          <div className="my-4 border-b border-dashed"></div>

          <h2 className="font-bold text-3xl">Contacto de emergencia</h2>
          <div className="flex md:flex-row flex-col justify-between gap-6">
            <label className="flex flex-col gap-2 md:w-1/2 font-semibold text-gray-300">
              Nombre completo
              <input
                {...register("nameEmergency", {
                  required: true,
                })}
                placeholder="Nombre"
                type="text"
                className="px-2 py-2 rounded-md font-normal text-black"
              />
              {errors.nameEmergency?.type === "required" && (
                <p className="text-[13px] text-red-600">
                  No puede estar vacío.
                </p>
              )}
            </label>
            <label className="flex flex-col gap-2 md:w-1/2 font-semibold text-gray-300">
              Teléfono
              <input
                {...register("phoneEmergency", {
                  required: true,
                })}
                placeholder="Teléfono"
                type="text"
                className="px-2 py-2 rounded-md font-normal text-black"
              />
              {errors.phoneEmergency?.type === "required" && (
                <p className="text-[13px] text-red-600">
                  No puede estar vacío.
                </p>
              )}
            </label>
          </div>
          <div className="my-4 border-b border-dashed"></div>
          <div>
            <p className="max-w-2xl text-gray-300">
              Para poder trabajar en el proyecto, podrás quedarte trabajando la
              noche del sábado en la universidad, tendremos cafe, comida, agua y
              habrá espacios donde puedas tomar una siesta, pero el espació no
              estará habilitado para dormir.
              <span className="block mt-2 font-bold">
                ¿Te quedarás a trabajar durante la noche?
              </span>
            </p>
            <div className="flex gap-6 mt-2 text-gray-300">
              <label className="flex items-center gap-2">
                SÍ
                <input
                  {...register("sleepAtPlace", {
                    required: true,
                  })}
                  name="response"
                  type="radio"
                  value="yes"
                />
              </label>
              <label className="flex items-center gap-2">
                NO
                <input
                  {...register("sleepAtPlace", {
                    required: true,
                  })}
                  name="response"
                  type="radio"
                  value="no"
                  defaultChecked
                />
              </label>
            </div>
          </div>
          <div className="my-4 border-b border-dashed"></div>

          <label className="flex items-center gap-2 text-gray-300">
            He leído y acepto los términos y condiciones
            <input
              type="checkbox"
              {...register("terms", {
                required: true,
              })}
            />
            {errors.terms?.type === "required" && (
              <p className="text-[13px] text-red-600">No puede estar vacío.</p>
            )}
          </label>
          <button
            disabled={!isValid}
            className={`hover:brightness-110 bg-principleViolet px-5 xl:px-5 py-2 xl:py-3 rounded-md text-[13px] text-center xl:text-base uppercase disabled:bg-gray-400 disabled:brightness-100`}
          >
            Continuar con el pago
          </button>
        </form>
      </Wrapper>
    </main>
  );
}
