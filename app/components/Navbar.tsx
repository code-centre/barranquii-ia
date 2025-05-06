"use client";
import React, { useState, useEffect, useRef } from "react";
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
  const [barranquiaDropdownOpen, setBarranquiaDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setBarranquiaDropdownOpen(false);
      }
    }

    if (barranquiaDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [barranquiaDropdownOpen]);

  const isMobile = screenWidth < 1024;
  const isSmallDesktop = screenWidth >= 1024 && screenWidth < 1366;

  const stylesLi =
    "text-black hover:text-white cursor-pointer hover:underline font-semibold transition-all duration-300";
  console.log(pathname);

  return (
    <header
      style={{
        background: `linear-gradient(to right, ${THEME_LANDINGS[landing].gradient.from}, ${THEME_LANDINGS[landing].gradient.via}, ${THEME_LANDINGS[landing !== '' ? landing : 'default'].gradient.to})`,

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
            <li
              key={section.id}
              className={`flex flex-col items-center ${section.id === "barranqui-ia" ? "relative" : ""}`}
            >
              {section.id === "barranqui-ia" ? (
                <button
                  onClick={() => setBarranquiaDropdownOpen(!barranquiaDropdownOpen)}
                  className={`text-white text-lg ${stylesLi} text-base ${!section.active && 'text-gray-400 opacity-80 line-through cursor-not-allowed hover:text-gray-400 hover:line-through'} focus:outline-none`}
                  disabled={!section.active}
                >
                  {section.name}
                </button>
              ) : (
                <Link
                  className={`${pathname === `/${section.id}` ? 'text-white' : ''} text-lg ${stylesLi} text-base ${!section.active && 'text-gray-400 opacity-80 line-through cursor-not-allowed hover:text-gray-400 hover:line-through'}`}
                  href={`${section.active ? `/${section.id}` : ''}`}
                >
                  {section.name}
                </Link>
              )}
              {!section.active && section.id !== "barranqui-ia" && (
                <span className="text-white px-3 text-sm border border-blue-500 bg-blue-500 rounded-full">
                  Próximamente
                </span>
              )}
              {!section.active && section.id === "barranqui-ia" && (
                <span className="text-white px-3 text-sm border border-blue-500 bg-blue-500 rounded-full mt-1">
                  Próximamente
                </span>
              )}
              {section.id === "barranqui-ia" && barranquiaDropdownOpen && (
                <ul ref={dropdownRef} className="absolute top-full left-1/2 transform -translate-x-1/2 bg-transparent shadow-xl rounded-lg mt-2 min-w-max transition-all duration-300 ease-in-out opacity-100 visible bg-white">
                  <li className="px-5 py-3 text-white hover:bg-text-gray-500 transition-colors duration-200">
                    <Link href="/barranqui-ia" className="text-gray-800 hover:text-blue-700 font-medium text-sm whitespace-nowrap" onClick={() => setBarranquiaDropdownOpen(false)}>
                      Barranqui-IA 2025
                    </Link>
                  </li>
                  <li className="px-5 py-3 text-white hover:bg-text-gray-500 transition-colors duration-200">
                    <Link href="/barranqui-ia" className="text-gray-800 hover:text-blue-700 font-medium text-sm whitespace-nowrap" onClick={() => setBarranquiaDropdownOpen(false)}>
                      Barranqui-IA 2024
                    </Link>
                  </li>
                </ul>
              )}
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
            <li
              key={section.id}
              className={`${stylesLi} text-white flex flex-col items-center`}
            >
              {section.id === "barranqui-ia" ? (
                <div className="relative flex flex-col items-center">
                  <button
                    onClick={() => {
                      // Toggle dropdown and ensure main menu doesn't close immediately if dropdown opens
                      setBarranquiaDropdownOpen(!barranquiaDropdownOpen);
                    }}
                    className={`${pathname === `/${section.id}` ? 'text-white' : ''} text-lg ${stylesLi} text-base ${!section.active && 'text-gray-400 opacity-80 line-through cursor-not-allowed hover:text-gray-400 hover:line-through'} focus:outline-none`}
                    disabled={!section.active}
                  >
                    {section.name}
                  </button>
                  {!section.active && (
                    <span className="text-white px-3 text-sm border border-blue-500 bg-blue-500 rounded-full mt-1">
                      Próximamente
                    </span>
                  )}
                  {barranquiaDropdownOpen && (
                    <ul ref={dropdownRef} className="static left-auto transform-none bg-transparent shadow-none rounded-lg mt-2 border-none min-w-max transition-all duration-300 ease-in-out opacity-100 visible flex flex-col items-start pl-4">
                      <li className="py-2 hover:bg-gray-700/50 transition-colors duration-200 w-full">
                        <Link href="/barranqui-ia/subpage1" className="text-white hover:text-blue-300 font-medium text-sm whitespace-nowrap" onClick={() => { setBarranquiaDropdownOpen(false); setOpenMenu(false); }}>
                          Barranqui-IA 2025
                        </Link>
                      </li>
                      <li className="py-2 hover:bg-gray-700/50 transition-colors duration-200 w-full">
                        <Link href="/barranqui-ia/subpage2" className="text-white hover:text-blue-300 font-medium text-sm whitespace-nowrap" onClick={() => { setBarranquiaDropdownOpen(false); setOpenMenu(false); }}>
                          Barranqui-IA 2024
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
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
                <span className="text-white px-3 text-sm border border-blue-500 bg-blue-500 rounded-full">
                  Próximamente
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
