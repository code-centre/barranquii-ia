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
        setOpenMenu(false); // Cierra el menú si pasa a escritorio
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stylesLi =
    "text-black hover:text-white cursor-pointer hover:underline font-semibold transition-all duration-300";

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-gradientBannerPurple to-gradientBannerBlue shadow-lg">
      <nav className="flex justify-between items-center px-5 lg:px-10 py-3">
        {/* Logo */}
        <ul>
          <li className="font-mono font-semibold text-2xl">
            <Link href="/">Barranqui-IA</Link>
          </li>
        </ul>

        {/* Menú solo en escritorio */}
        {!openMenu && !pathname.includes("/tickets") && (
          <ul className="hidden lg:flex justify-center gap-5 xl:gap-10">
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
          className="lg:hidden focus:outline-none"
        >
          {openMenu ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Menú móvil */}
      {openMenu && (
        <div className="fixed top-0 right-0 w-2/3 h-full bg-black shadow-lg lg:hidden z-50 transition-transform">
          <button
            onClick={() => setOpenMenu(false)}
            className="absolute top-5 right-5 text-white"
          >
            <CloseIcon />
          </button>
          <ul className="flex flex-col items-start pt-20 pl-6 space-y-6">
            {sectionsPage.map((section) => (
              <li key={section.id} className="text-white text-lg">
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
      )}
    </header>
  );
}
