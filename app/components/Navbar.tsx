"use client";
import React, { useState, useEffect } from "react";
import sectionsPage from "../utils/sections.json";
import { CloseIcon, MenuIcon } from "./Icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

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
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-gradientBannerPurple to-gradientBannerBlue shadow-lg">
      <nav
        className={`flex justify-between items-center px-5 ${
          isSmallDesktop ? "md:px-6 lg:px-8" : "md:px-8 lg:px-10"
        } py-4 md:py-5`}
      >
        {/* Logo */}
        <Link href="/" className="font-mono font-bold text-xl md:text-2xl text-white">
          Barranqui-IA
        </Link>

        {/* Menú en escritorio */}
        {!isMobile && !pathname.includes("/tickets") && (
          <ul
            className={`hidden lg:flex justify-center gap-4 ${
              isSmallDesktop ? "xl:gap-6 text-lg" : "xl:gap-10 text-xl"
            }`}
          >
            {sectionsPage.map((section) => (
              <li key={section.id} className={stylesLi}>
                <a href={`#${section.id}`}>{section.name}</a>
              </li>
            ))}
          </ul>
        )}

        {/* Botón de menú móvil */}
        {isMobile && (
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="text-white text-2xl focus:outline-none"
          >
            {openMenu ? <CloseIcon /> : <MenuIcon />}
          </button>
        )}
      </nav>

      {/* Menú móvil: mejor adaptación a pantallas pequeñas */}
      <div
        className={`fixed top-0 right-0 ${
          screenWidth < 400 ? "w-4/5" : "w-3/4 sm:w-2/3"
        } h-full bg-black/95 backdrop-blur-md shadow-lg lg:hidden z-50 
        transform ${openMenu ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={() => setOpenMenu(false)}
          className="absolute top-5 right-5 text-white text-3xl"
        >
          <CloseIcon />
        </button>
        <ul className="flex flex-col items-start pt-20 pl-6 space-y-6 text-lg sm:text-xl">
          {sectionsPage.map((section) => (
            <li key={section.id} className="text-white">
              <a
                href={`#${section.id}`}
                onClick={() => setOpenMenu(false)} // Cierra el menú al hacer clic
                className="block py-2 hover:text-gray-300 transition-colors"
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
