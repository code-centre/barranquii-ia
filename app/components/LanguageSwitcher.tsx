"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/app/i18n/useTranslation";
import type { Locale } from "@/app/i18n/config";

const LOCALE_LABELS: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  pt: "PT",
};

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Seleccionar idioma"
      >
        <span>{LOCALE_LABELS[locale]}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 py-2 w-20 bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl z-[9999]"
        >
          {(["es", "en", "pt"] as const).map((loc) => (
            <li key={loc} role="option" aria-selected={locale === loc}>
              <button
                type="button"
                onClick={() => {
                  setLocale(loc);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                  locale === loc
                    ? "text-purple-400 font-semibold bg-purple-500/20"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {LOCALE_LABELS[loc]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
