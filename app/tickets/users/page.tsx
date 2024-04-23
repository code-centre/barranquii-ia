"use client";
import Swal from "sweetalert2";
import { User } from "@/lib/types";
import React, { use, useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/es";
import { revalidateFetch } from "@/lib/actions";

moment.locale("es");

export default function UsersTable() {
  const [edit, setEdit] = useState(false);
  const [users, setUsers] = useState([]);
  const [idUser, setIdUser] = useState<null | number>(null);
  const [paymentId, setPaymentId] = useState("");

  const getUsers = async () => {
    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
        {
          next: { tags: ["users"] },
        }
      );
      const { users } = await resp.json();

      setUsers(users);
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDeleteUser = async (id: number) => {
    try {
      Swal.fire({
        title: "Eliminar",
        text: "¿Quieres eliminar a este usuario?",
        icon: "question",
        showCancelButton: true,
        showCloseButton: true,
        cancelButtonText: "Cancelar",
        cancelButtonColor: "gray",
        confirmButtonText: "Confirmar",
        confirmButtonColor: "red",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${id}`, {
            method: "DELETE",
          }).then(() => {
            getUsers();
            Swal.fire("Saved!", "", "success");
          });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateUser = async (id: number) => {
    try {
      if (paymentId !== "") {
        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            paymentId: paymentId,
          }),
        });
        getUsers();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSortTable = (typeSort?: string) => {
    if (typeSort === "amount") {
      let sortedUsers = [...users].sort(
        (a: User, b: User) => a.paymentAmount - b.paymentAmount
      );
      setUsers(sortedUsers);
    }

    if (typeSort === "date") {
      let sortedUsers = [...users].sort(
        (a: User, b: User) => new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf()
      );
      setUsers(sortedUsers);
    }

    if (typeSort === "name") {
      let sortedUsers = [...users].sort((a: User, b: User) => {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
      setUsers(sortedUsers);

    }
  };

  return (
    <main className="min-h-screen pt-32 pb-10 ">
      <header className="mx-20 flex justify-end mb-5">
        <select
          className="bg-gray-800 px-4 py-2 rounded-lg cursor-pointer"
          onChange={(e) => {
            handleSortTable(e.target.value);
          }}
        >
          <option value="none">Ordenar por</option>
          <option value="date">Fecha</option>
          <option value="amount">Monto</option>
          <option value="name">Nombre</option>
        </select>
      </header>
      <div className="mx-20">
        <div className="shadow-md overflow-x-scroll rounded-lg">
          <table className="w-full text-sm text-left bg-gray-800 rtl:text-right text-gray-400 ">
            <thead className="text-xs text-white uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Documento
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Correo
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Empresa
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Ocupación
                </th>
                <th scope="col" className="px-6 py-3">
                  Teléfono
                </th>
                <th scope="col" className="px-6 py-3 w-[350px] text-center">
                  ID de pago
                </th>
                <th scope="col" className="px-6 py-3 w-[350px] text-center">
                  Creación
                </th>
                <th scope="col" className="px-6 py-3">
                  Monto
                </th>
                <th scope="col" className="px-6 py-3">
                  Editar
                </th>
                <th scope="col" className="px-6 py-3">
                  Eliminar
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users?.map((user: User, i: number) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-200 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      {i + 1}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium capitalize text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      {user.name} {user.lastName}
                    </th>
                    <td className="px-6 py-4 w-[200px]">
                      {user.idType} - {user.idNumber}
                    </td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {user.work}
                    </td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {user.profile}
                    </td>
                    <td className="px-6 py-4">{user.phone}</td>
                    <td className="px-2 py-4  text-center">
                      {edit && idUser === user.id ? (
                        <div className="flex items-center justify-center w-full gap-2">
                          <input
                            type="text"
                            className="bg-transparent border-b outline-none"
                            onChange={(e) => setPaymentId(e.target.value)}
                            defaultValue={
                              user?.paymentId !== null
                                ? `${user.paymentId}`
                                : ""
                            }
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-check cursor-pointer"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#00b341"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            onClick={() => {
                              setEdit(false);
                              handleUpdateUser(user.id);
                            }}
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                          </svg>
                        </div>
                      ) : (
                        <span>{user.paymentId}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {moment(user.createdAt).format("ll")}
                    </td>
                    <td className="px-6 py-4">
                      ${user.paymentAmount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-pencil cursor-pointer"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onClick={() => {
                          setEdit(!edit);
                          setIdUser(user.id);
                        }}
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                        <path d="M13.5 6.5l4 4" />
                      </svg>
                    </td>
                    <td className="px-6 py-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-trash cursor-pointer"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ff2825"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
