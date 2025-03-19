"use client";
import React, { useState, useEffect } from "react";
import sectionsPage from "../utils/sections.json";
import { CloseIcon, MenuIcon } from "./Icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenMenu(false); // Cierra el menú si cambia a escritorio
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stylesLi =
    "text-black hover:text-white cursor-pointer hover:underline font-semibold transition-all duration-300";

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-gradientBannerPurple to-gradientBannerBlue shadow-lg">
      <nav className="flex justify-between items-center px-5 lg:px-16 py-6">
        {/* Logo */}
        <Link href="/" className="font-mono font-bold text-3xl text-white">
          Barranqui-IA 
        </Link>

        {/* Menú solo en escritorio */}
        {!openMenu && !pathname.includes("/tickets") && (
          <ul className="hidden lg:flex justify-center gap-6 xl:gap-12 text-xl">
            {sectionsPage.map((section) => (
              <li key={section.id} className={stylesLi}>
                <a href={`#${section.id}`}>{section.name}</a>
              </li>
            ))}
          </ul>
        )}

        {/* Botón de menú móvil */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="lg:hidden text-white text-2xl focus:outline-none"
        >
          {openMenu ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Menú móvil */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-full bg-black/90 backdrop-blur-md shadow-lg lg:hidden z-50 
        transform ${openMenu ? "translate-x-0" : "translate-x-full"} transition-all duration-300`}
      >
        <button
          onClick={() => setOpenMenu(false)}
          className="absolute top-5 right-5 text-white text-3xl"
        >
          <CloseIcon />
        </button>
        <ul className="flex flex-col items-start pt-20 pl-6 space-y-6 text-xl">
          {sectionsPage.map((section) => (
            <li key={section.id} className="text-white">
              <a
                href={`#${section.id}`}
                onClick={() => setOpenMenu(false)} // Cierra el menú al hacer clic
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
