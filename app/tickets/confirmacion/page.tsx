"use client";
import Boleta from "@/app/components/Boleta";
import Wrapper from "@/app/components/Wrapper";
import Link from "next/link";
import { User } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";

import React, { Suspense, useEffect, useState } from "react";

export default function ThankYouPage() {
  return (
    <main className='relative'>
      <Suspense fallback={<LoadingThankYouPage />}>
        <ThankYouContent />
      </Suspense>
    </main>
  );
}

function LoadingThankYouPage() {
  return (
    <div role="status" className="flex justify-center">
      <svg
        aria-hidden="true"
        className="w-12 h-12 text-gray-200 animate-spin fill-principleViolet"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

function ThankYouContent() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [ticketType, setTicketType] = useState("taller");
  const [statusTransaction, setStatusTransaction] = useState("APPROVED");
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const id = searchParams.get("id");

  useEffect(() => {
    const getStatusTransaction = async () => {
      const resp = await fetch(
        `https://sandbox.wompi.co/v1/transactions/${id}`
      );
      const { data } = await resp.json();
      setStatusTransaction(data.status);
      setLoading(false);
    };

    getStatusTransaction();

    if (!id || statusTransaction !== "APPROVED") {
      router.push("/");
      return;
    }
  }, [statusTransaction]);

  useEffect(() => {
    if (statusTransaction === "APPROVED") {
      const updateUser = async () => {
        try {
          const resp = await fetch(
            `/api/users/${localStorage.getItem("Id_user")}`,
            {
              method: "PUT",
              body: JSON.stringify({
                paymentId: id,
              }),
            }
          );
          const user = await resp.json();
          setUser(user);
        } catch (err) {
          console.log(err);
        }
      };
      updateUser();
    }
  }, [id, user?.id, statusTransaction]);

  return (
    <section className="flex flex-col justify-center gap-20 mx-5 py-20 min-h-screen">
      {loading ? (
        <LoadingThankYouPage />
      ) : (
        <>
          <Wrapper
            styles={`flex flex-col justify-center  gap-6 ${statusTransaction !== 'APPROVED' && 'hidden'}`}
          >
            <h1 className="font-bold text-5xl md:text-7xl tracking-tighter">
              ¡Gracias!
            </h1>
            <p className="max-w-xl text-gray-300 md:text-base">
              Felicidades, ahora eres parte de Barranqui-IA, pon en forma tu
              habilidades con inteligencia artificial asistiendo a alguno de los
              talleres de Pre-Hackatón y prepárate para una experiencia
              inolvidable.
            </p>

            <p>
              En un máximo de 24 horas recibirás un correo electrónico con tu
              boleto.
            </p>
            <Boleta
              nameUser={`${user?.name} ${user?.lastName}`}
              ticketType={ticketType}
            />
            <div className="flex items-center gap-5">
              <Link href="/">
                <button className="inline-flex hover:brightness-110 justify-center items-center bg-principleViolet disabled:opacity-50 shadow-sm px-8 rounded-md h-10 font-medium text-sm disabled:pointer-events-none">
                  Ir al inicio
                </button>
              </Link>
              <a
                href="https://caribedev.org"
                className="inline-flex hover:brightness-110 justify-center items-center bg-green-500 disabled:opacity-50 shadow-sm px-8 rounded-md h-10 font-medium text-sm disabled:pointer-events-none"
              >
                Ver eventos Pre-Hackatón
              </a>
            </div>
            <p>
              Cualquier duda puedes escribirnos a
              contacto@fundacioncodigoabierto.com
            </p>
          </Wrapper>
        </>
      )
      }

      {/* {!id ||
        (statusTransaction !== "APPROVED" && (
          
        ))} */}
    </section >
  );
}
