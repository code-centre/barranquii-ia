"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Wrapper from "../../components/Wrapper";
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
  typeOfDocument: string;
  document: number;
  phone: number;
  email: string;
  occupation: string;
  company: string;
  size: sizesEnum;
  food: string;
  nameEmergency: string;
  phoneEmergency: string;
  sleepAtPlace: boolean;
  terms: boolean;
};

export default function Form() {
  const [sleepAtPlace, setSleepAtPlace] = useState("NO");
  const [discountCoupon, setDiscountCoupon] = useState("");
  const [price, setPrice] = useState(100000);
  const router = useRouter();
  const searchParams = useSearchParams();

  const ticketType = searchParams.get("mode");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>();

  useEffect(() => {
    const calculatePrice = () => {
      switch (discountCoupon.toUpperCase()) {
        case process.env.NEXT_PUBLIC_DiSCOUNT_COUPON_UNINORTE:
          setPrice(60000);
          break;
        case process.env.NEXT_PUBLIC_DiSCOUNT_COUPON:
          setPrice(80000);
          break;
        default:
          setPrice(100000);
      }
    };

    calculatePrice();
  }, [discountCoupon]);

  useEffect(() => {
    router.push('/')
  }, [])

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    let paymentLink = await createPaymentId("taller", 40000);
    await createUser(
      {
        name: data.name,
        lastName: data.lastName,
        idType: data.typeOfDocument,
        idNumber: data.document,
        phone: data.phone,
        email: data.email,
        profile: data.occupation,
        work: data.company,
        // shirtSize: "NONE",
        // food: "NONE",
        emergencyName: data.nameEmergency,
        emergencyPhone: data.phoneEmergency,
        isStaying: sleepAtPlace,
        paymentAmount: 40000,
        ticketType: "TALLER",
        paymentLinkId: paymentLink.id,
      }
    );

    router.push(`https://checkout.wompi.co/l/${paymentLink.id}`);
  };

  return (
    <section className="flex flex-col gap-20 mx-5 py-20 min-h-screen">
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
                placeholder="Elon"
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
                placeholder="Musk"
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
            <div className="w-full flex flex-col md:flex-row md:items-center gap-2">
              <label className="flex flex-col w-[100px] gap-2 font-semibold text-gray-300">
                Tipo de ID
                <select
                  {...register("typeOfDocument", {})}
                  className="px-2 py-2 rounded-md text-black"
                  defaultValue="C.C"
                  name=""
                  id=""
                >
                  <option value="CC">C.C</option>
                  <option value="CE">C.E</option>
                  <option value="TI">T.I</option>
                  <option value="PASSPORT">Pasaporte</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 w-full font-semibold text-gray-300">
                Número de documento
                <input
                  {...register("document", {
                    required: true,
                  })}
                  placeholder="Documento"
                  type="text"
                  className="px-2 py-2 rounded-md font-normal text-black"
                />
                {errors.document?.type === "required" && (
                  <p className="text-[13px] text-red-600">
                    No puede estar vacío.
                  </p>
                )}
              </label>
            </div>
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
              placeholder="genio.tech@gmail.com"
              type="email"
              className="px-2 py-2 rounded-md font-normal text-black"
            />
            {errors.email?.type === "required" && (
              <p className="text-[13px] text-red-600">No puede estar vacío.</p>
            )}
          </label>
          <div className="flex md:flex-row flex-col justify-between gap-6">
            <label className="flex flex-col gap-2 md:w-1/2 font-semibold text-gray-300">
              Ocupación
              <input
                {...register("occupation", {
                  required: true,
                })}
                placeholder="CEO"
                type="text"
                className="px-2 py-2 rounded-md font-normal text-black"
              />
              {errors.phone?.type === "required" && (
                <p className="text-[13px] text-red-600">
                  No puede estar vacío.
                </p>
              )}
            </label>
            <label className="flex flex-col gap-2 md:w-1/2 font-semibold text-gray-300">
              Compañia o Universidad
              <input
                {...register("company", {
                  required: true,
                })}
                placeholder="Tesla"
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
          {/* {ticketType !== "taller" && (
            <>
              <label className="flex flex-col gap-2 font-semibold text-gray-300">
                Talla de camisa
                <select
                  {...register("size", {
                    required: true,
                  })}
                  className="px-2 py-2 rounded-md text-black"
                  defaultValue="M"
                >
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 font-semibold text-gray-300">
                ¿Tienes alguna restricción alimenticia?
                <select
                  {...register("food", {
                    required: true,
                  })}
                  defaultValue="NONE"
                  className="px-2 py-2 rounded-md text-black"
                >
                  <option value="NONE">Ninguna</option>
                  <option value="VEGETARIANO">Vegetariano</option>
                  <option value="VEGANO">Vegano</option>
                  <option value="KOSHER">Kosher</option>
                </select>
              </label>
            </>
          )} */}
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
          {/* {ticketType !== "taller" && (
            <>
              <div>
                <p className="max-w-2xl text-gray-300">
                  Para poder trabajar en el proyecto, podrás quedarte trabajando
                  la noche del sábado en el lugar del evento, tendremos cafe,
                  comida, agua y habrá espacios donde puedas tomar una siesta,
                  pero el espació no estará habilitado para dormir.
                  <span className="block mt-2 font-bold">
                    ¿Te quedarás a trabajar durante la noche?*
                  </span>
                </p>
                <div className="flex gap-6 mt-2 text-gray-300">
                  <label className="flex items-center gap-2">
                    SÍ
                    <input
                      onChange={() => setSleepAtPlace("SI")}
                      name="response"
                      type="radio"
                      value="SI"
                    />
                  </label>
                  <label className="flex items-center gap-2">
                    NO
                    <input
                      onChange={() => setSleepAtPlace("NO")}
                      name="response"
                      type="radio"
                      value="NO"
                      defaultChecked
                    />
                  </label>
                </div>
                <p className="pt-5 max-w-2xl text-gray-300">
                  *Después de las 9:00 pm se cerrarán las puertas y por
                  seguridad nadie podrá salir o entrar al espacio del evento
                  hasta las 6am del día siguiente.{" "}
                </p>
              </div>
              <div className="my-4 border-b border-dashed"></div>

              <label className="flex flex-col gap-2 text-gray-300 ">
                ¿Tienes un cupón de descuento?
                <input
                  onChange={(e) => setDiscountCoupon(e.target.value)}
                  placeholder="Tu cupón"
                  type="text"
                  className={`px-2 py-2 rounded-md font-normal placeholder:capitalize  uppercase text-black  w-1/2 ${
                    (discountCoupon.toUpperCase() ===
                      process.env.NEXT_PUBLIC_DiSCOUNT_COUPON ||
                      discountCoupon.toUpperCase() ===
                        process.env.NEXT_PUBLIC_DiSCOUNT_COUPON_UNINORTE) &&
                    "border-green-500 border-2 shadow-2xl shadow-green-500"
                  }`}
                />
                <p className="mt-2">Valor a pagar: ${price.toLocaleString()}</p>
              </label>
              <div className="my-4 border-b border-dashed"></div>
            </>
          )} */}
          <div>
            <label className="flex items-center gap-2 text-gray-300">
              He leído y acepto los términos y condiciones
              <input
                type="checkbox"
                {...register("terms", {
                  required: true,
                })}
              />
              {errors.terms?.type === "required" && (
                <p className="text-[13px] text-red-600">
                  No puede estar vacío.
                </p>
              )}
            </label>
            <a
              target="_blank"
              className="underline text-gray-300 mt-4 hover:text-principleViolet"
              href="/tickets/terminos-y-condiciones"
            >
              Ver términos y condiciones
            </a>
          </div>
          <button
            disabled={!isValid}
            className={`hover:brightness-110 bg-principleViolet px-5 xl:px-5 my-5 py-2 xl:py-3 rounded-md text-[13px] text-center xl:text-base uppercase disabled:bg-gray-400 disabled:brightness-100`}
          >
            Continuar con el pago
          </button>
        </form>
      </Wrapper>
    </section>
  );
}

const createUser = async (body: any) => {

  try {
    const resp = await fetch(`/api/users`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const user = await resp.json();

    localStorage.setItem("Id_user", JSON.stringify(user.newUser.id));
  } catch (err) {
    console.log(err);
  }
};

const createPaymentId = async (type: string, amount: number) => {
  try {
    const resp = await fetch(`https://production.wompi.co/v1/payment_links`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_WOMPI_SECRET_KEY}`,
      },
      body: JSON.stringify({
        name: "Entrada Limitada - Hackatón Barranqui-IA",
        description: "Entrada a los 6 talleres especializados de Barranqui-IA, dictados por Google Developer Experts, el sábado 4 de 2pm a 7pm.",
        single_use: true,
        collect_shipping: false,
        amount_in_cents: amount * 100,
        currency: "COP",
        redirect_url: "http://barranquiia.com/tickets/confirmacion",
      }),
    });
    const createdLink = await resp.json();
    return createdLink.data;
  } catch (err) {
    console.log(err);
  }
};
