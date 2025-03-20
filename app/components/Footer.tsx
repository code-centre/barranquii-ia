import React from "react";
import Wrapper from "./Wrapper";
import { Facebook, Instagram, Twitter } from "./Icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gradientBannerPurple to-gradientBannerBlue py-12">
      <Wrapper styles="flex flex-col md:flex-row justify-between px-5 gap-8 container">
        {/* Columna 1: Información de contacto */}
        <div className="flex flex-col space-y-4 max-w-xs">
          <h3 className="text-white font-bold text-xl">Fundación Código Abierto</h3>
          <p className="text-gray-200 text-sm">
            Impulsando la innovación tecnológica y el desarrollo de habilidades digitales en la comunidad.
          </p>
          <div className="flex flex-col space-y-2 text-gray-200 text-sm">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Cra. 50 #72-126, Barranquilla, Colombia</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>contacto@codigoabierto.tech</span>
            </div>
          </div>
        </div>
        
        {/* Columna 2: Enlaces rápidos */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-white font-bold text-xl">Enlaces rápidos</h3>
          <ul className="flex flex-col space-y-2 text-gray-200 text-sm">
            <li className="hover:text-white transition-colors">
              <Link href="https://www.codigoabierto.tech">Página web</Link>
            </li>
            <li className="hover:text-white transition-colors">
              <Link href="https://www.codigoabierto.tech/eventos">Eventos</Link>
            </li>
            <li className="hover:text-white transition-colors">
              <Link href="https://www.codigoabierto.tech/programas">Programas educativos</Link>
            </li>
            <li className="hover:text-white transition-colors">
              <Link href="https://fundacion.codigoabierto.tech">Dona</Link>
            </li>
          </ul>
        </div>
        
        {/* Columna 3: Redes sociales */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-white font-bold text-xl">Síguenos</h3>
          <ul className="flex gap-4">
            <li>
              <a
                href="https://www.instagram.com/codigoabierto.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61562090332916"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/CodigoAbiertoBQ"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
            </li>
          </ul>
        </div>
      </Wrapper>
      
      {/* Línea divisoria */}
      <div className="border-t border-gray-600 mt-8 mx-5"></div>
      
      {/* Copyright */}
      <Wrapper styles="pt-6 px-5 text-center">
        <p className="text-gray-300 text-sm"> Fundación Código Abierto 2025. Todos los derechos reservados.</p>
      </Wrapper>
    </footer>
  );
}
