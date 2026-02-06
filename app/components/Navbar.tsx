"use client";
import React, { useState, useEffect, useRef } from "react";
import sectionsPage from "../utils/sections.json";
import { CloseIcon, MenuIcon } from "./Icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { THEME_LANDINGS } from "../utils/theme";

export default function Navbar({ }) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [landing, setLanding] = useState("default");

  useEffect(() => {
    const getPathname = pathname.split("/")[1]
    if (getPathname === 'samar-ia' || getPathname === 'barranqui-ia' || getPathname === 'cartagen-ia' || getPathname === 'default') {
      setLanding(getPathname);
    } else {
      setLanding('default')
    }
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);

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
        backgroundColor: '#000000',
      }}
      className="fixed w-full top-0 z-50 shadow-lg">
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(to right, #6D0EAD, #FF97EF)',
        }}
      />
      <nav
        className={`flex justify-between items-center px-5 ${isSmallDesktop ? "md:px-6 lg:px-8" : "md:px-8 lg:px-10"
          } py-3 relative z-10`}
      >
        <Link href="/" className="font-mono font-bold text-xl md:text-2xl text-white">
          Caribe-IA
        </Link>

        <ul
          className={`hidden lg:flex justify-center items-center gap-4 ${isSmallDesktop ? "xl:gap-6 text-lg" : "xl:gap-10 text-xl"
            }`}
        >
          {sectionsPage.map((section) => {
            return (
              <li
                key={section.id}
                className="flex flex-col items-center"
              >
                {section.id === "barranqui-ia" ? (
                  <Link
                    href="/barranqui-ia/2026"
                    className={`text-white text-lg ${stylesLi} text-base ${!section.active && 'text-gray-400 opacity-80 line-through cursor-not-allowed hover:text-gray-400 hover:line-through'}`}
                  >
                    {section.name}
                  </Link>
                ) : (
                  <Link
                    className={`${pathname === `/${section.id}` ? 'text-white' : ''} text-lg ${stylesLi} text-base ${!section.active && 'text-gray-400 opacity-80 line-through cursor-not-allowed hover:text-gray-400 hover:line-through'}`}
                    href={`${section.active ? `/${section.id}` : ''}`}
                  >
                    {section.name}
                  </Link>
                )}
                {!section.active && section.id !== "barranqui-ia" && (
                  <span className="text-white px-3 text-sm border border-pink-500 bg-pink-500 rounded-full">
                    Próximamente
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => {
              if (pathname === "/") {
                const element = document.getElementById("postulate");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              } else {
                window.location.href = "/#postulate";
              }
            }}
            className="btn-primary text-sm px-4 py-2"
            style={{ backgroundColor: landing === 'default' ? '#FFFFFF' : THEME_LANDINGS[landing].principal, color: landing === 'default' ? '#000000' : 'white' }}
          >
            Postulate
          </button>
          <div className="flex items-center gap-1 text-xs text-white/70">
            <span>Powered by</span>
            <a
              href="https://caribeventures.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/90 hover:text-white transition-colors"
            >
              Caribe Ventures
            </a>
          </div>
        </div>

        {/* Botón de menú móvil */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="text-white text-2xl focus:outline-none block lg:hidden"
        >
          {openMenu ? <CloseIcon /> : <MenuIcon />}
        </button>
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
          {sectionsPage.map((section) => {
            return (
              <li
                key={section.id}
                className={`${stylesLi} text-white flex flex-col items-center`}
              >
                {section.id === "barranqui-ia" ? (
                  <Link
                    href="/barranqui-ia/2026"
                    onClick={() => setOpenMenu(false)}
                    className={`text-white text-lg ${stylesLi} text-base ${!section.active && 'text-gray-400 opacity-80 line-through cursor-not-allowed hover:text-gray-400 hover:line-through'}`}
                  >
                    {section.name}
                  </Link>
                ) : (
                  <Link
                    onClick={() => setOpenMenu(false)}
                    className={`${pathname === `/${section.id}` ? 'text-white' : ''} text-lg ${stylesLi} text-base ${!section.active && 'text-gray-400 opacity-80 line-through cursor-not-allowed hover:text-gray-400 hover:line-through'}`}
                    href={`${section.active ? `/${section.id}` : ''}`}
                  >
                    {section.name}
                  </Link>
                )}
                {!section.active && section.id !== "barranqui-ia" && (
                  <span className="text-white px-3 text-sm border border-pink-500 bg-pink-500 rounded-full">
                    Próximamente
                  </span>
                )}
              </li>
            );
          })}
          <li className="w-full pt-4 border-t border-white/20">
            <button
              onClick={() => {
                setOpenMenu(false);
                if (pathname === "/") {
                  const element = document.getElementById("postulate");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                } else {
                  window.location.href = "/#postulate";
                }
              }}
              className="btn-primary w-full text-sm px-4 py-2"
              style={{ backgroundColor: landing === 'default' ? '#FFFFFF' : THEME_LANDINGS[landing].principal, color: landing === 'default' ? '#000000' : 'white' }}
            >
              Postulate
            </button>
          </li>
          <li className="text-xs text-white/70 pt-2">
            <span>Powered by </span>
            <a
              href="https://caribeventures.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/90 hover:text-white transition-colors"
            >
              Caribe Ventures
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
