"use client";
import React, { useState, useEffect } from "react";
import sectionsPage from "../utils/sections.json";
import { CloseIcon, MenuIcon } from "./Icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { THEME_LANDINGS } from "../utils/theme";

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [landing, setLanding] = useState("default");

  useEffect(() => {
    setLanding(pathname.split("/")[1]);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);

      // Cierra el menú si pasa a escritorio
      if (window.innerWidth >= 1024) {
        setOpenMenu(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth < 1024;
  const isSmallDesktop = screenWidth >= 1024 && screenWidth < 1366;

  const stylesLi =
    "text-black hover:text-white cursor-pointer hover:underline font-semibold transition-all duration-300";

  return (
    <header
      style={{
        background: `linear-gradient(to right, ${THEME_LANDINGS[landing !== '' ? landing : 'default'].gradient.from}, ${THEME_LANDINGS[landing !== '' ? landing : 'default'].gradient.via}, ${THEME_LANDINGS[landing !== '' ? landing : 'default'].gradient.to})`,

      }}
      className="fixed w-full top-0 z-50  shadow-lg">
      <nav
        className={`flex justify-between items-center px-5 ${isSmallDesktop ? "md:px-6 lg:px-8" : "md:px-8 lg:px-10"
          } py-3`}
      >
        <Link href="/" className="font-mono font-bold text-xl md:text-2xl text-white">
          Caribe-IA
        </Link>

        <ul
            className={`hidden lg:flex justify-center items-center gap-4 ${isSmallDesktop ? "xl:gap-6 text-lg" : "xl:gap-10 text-xl"
              }`}
          >
            {sectionsPage.map((section) => (
              <li key={section.id} className={`flex flex-col items-center`}>
                <Link className={`${pathname === `/${section.id}` ? 'text-white' : ''} text-lg${stylesLi} text-base  ${!section.active && 'text-gray-400 opacity-80 line-through cursor-not-allowed hover:text-gray-400 hover:line-through'}`} href={`${section.active ? `/${section.id}` : ''}`}>{section.name}</Link>
                {!section.active && <span className="text-white px-3 text-sm border border-blue-500 bg-blue-500 rounded-full">Próximamente</span>}
              </li>
            ))}
          </ul>
        {/* {!isMobile && !pathname.includes("/tickets") && (
          
        )} */}

        {/* Botón de menú móvil */}
        {/* {isMobile && ( */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="text-white text-2xl focus:outline-none block lg:hidden"
          >
            {openMenu ? <CloseIcon /> : <MenuIcon />}
          </button>
        {/* // )} */}
      </nav>

      {/* Menú móvil: mejor adaptación a pantallas pequeñas */}
      <div
        className={`fixed top-0 right-0 ${screenWidth < 400 ? "w-4/5" : "w-3/4 sm:w-2/3"
          } h-full bg-black/40  backdrop-blur-lg shadow-lg lg:hidden z-50 
        transform ${openMenu ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={() => setOpenMenu(false)}
          className="absolute top-5 right-5 text-white text-3xl"
        >
          <CloseIcon />
        </button>
        <ul className="flex flex-col items-start pt-16 pl-6 space-y-6 text-lg sm:text-xl">
          {sectionsPage.map((section) => (

            <li onClick={() => setOpenMenu(false)} key={section.id} className={`${stylesLi} text-white flex flex-col items-center`}>
              <Link className={`${pathname === `/${section.id}` ? 'text-white' : ''} text-lg${stylesLi} text-base  ${!section.active && 'text-gray-400 opacity-80 line-through cursor-not-allowed hover:text-gray-400 hover:line-through'}`} href={`${section.active ? `/${section.id}` : ''}`}>{section.name}</Link>
              {!section.active && <span className="text-white px-3 text-sm border border-blue-500 bg-blue-500 rounded-full">Próximamente</span>}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
