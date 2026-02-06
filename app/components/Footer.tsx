"use client";
import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Twitter } from "./Icons";
import { THEME_LANDINGS } from "../utils/theme";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface FooterProps {
  landing?: string;
}

export default function Footer({ landing: propLanding }: FooterProps) {
  const pathname = usePathname();
  const [landing, setLanding] = useState("default");

  useEffect(() => {
    if (propLanding) {
      setLanding(propLanding);
    } else {
      const pathSegment = pathname.split("/")[1];
      setLanding(pathSegment || "default");
    }
  }, [pathname, propLanding]);

  const themeColors = THEME_LANDINGS[landing] || THEME_LANDINGS['default'];
  const textColor = landing === 'cartagen-ia' ? 'text-black' : 'text-white';
  const textSecondaryColor = landing === 'cartagen-ia' ? 'text-gray-800' : 'text-gray-200';

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(to right, ${themeColors.gradient.from}, ${themeColors.gradient.via}, ${themeColors.gradient.to})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Información de contacto */}
          <address className="flex flex-col space-y-6 not-italic">
            <div>
              <h2 className={`${textColor} font-bold text-2xl mb-4`}>
                Fundación Código Abierto
              </h2>
              <p className={`${textSecondaryColor} text-sm leading-relaxed max-w-md`}>
                Impulsando la innovación tecnológica y el desarrollo de habilidades digitales en la comunidad.
              </p>
            </div>

            <div className={`flex flex-col space-y-4 text-sm ${textSecondaryColor}`}>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Cra. 50 #72-126, Barranquilla, Colombia</span>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contacto@codigoabierto.tech"
                  className="hover:opacity-80 transition-opacity"
                >
                  contacto@codigoabierto.tech
                </a>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <Link
                  href="https://www.codigoabierto.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  www.codigoabierto.tech
                </Link>
              </div>
            </div>
          </address>

          {/* Caribe Ventures */}
          <div>
            <h2 className={`${textColor} font-bold text-xl mb-6`}>Caribe Ventures</h2>
            <p className={`${textSecondaryColor} text-sm leading-relaxed mb-4`}>
              Aceleradora de startups tecnológicas del Caribe colombiano.
            </p>
            <a
              href="https://caribeventures.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${textSecondaryColor} text-sm hover:opacity-80 transition-opacity inline-block`}
            >
              Visitar sitio web →
            </a>
          </div>

          {/* Redes sociales */}
          <nav aria-label="Redes sociales">
            <h2 className={`${textColor} font-bold text-xl mb-6`}>Síguenos</h2>
            <ul className="flex gap-6" role="list">
              <li>
                <a
                  href="https://www.instagram.com/codigoabierto.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textSecondaryColor} hover:opacity-80 transition-all duration-300 hover:scale-110 inline-block`}
                  aria-label="Síguenos en Instagram"
                >
                  <Instagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61562090332916"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textSecondaryColor} hover:opacity-80 transition-all duration-300 hover:scale-110 inline-block`}
                  aria-label="Síguenos en Facebook"
                >
                  <Facebook />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/CodigoAbiertoBQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textSecondaryColor} hover:opacity-80 transition-all duration-300 hover:scale-110 inline-block`}
                  aria-label="Síguenos en Twitter"
                >
                  <Twitter />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Línea divisoria */}
        <hr className={`border-t ${landing === 'cartagen-ia' ? 'border-gray-800' : 'border-white/20'} my-8`} />

        {/* Copyright */}
        <div className="text-center">
          <p className={`text-sm ${textSecondaryColor}`}>
            © {new Date().getFullYear()} Fundación Código Abierto. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}