"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Locale } from "./config";
import { COOKIE_NAME } from "./config";

type Translations = Record<string, Record<string, unknown>>;

function getNestedValue(obj: Record<string, unknown>, path: string): string | undefined {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  return typeof current === "string" ? current : undefined;
}

function interpolate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => String(vars[key] ?? ""));
}

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  isLoading: boolean;
};

const I18nContext = createContext<I18nContextValue | null>(null);

interface LanguageProviderProps {
  children: React.ReactNode;
  locale: Locale;
}

export function LanguageProvider({ children, locale: initialLocale }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [translations, setTranslations] = useState<Translations | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setLocaleState(initialLocale);
  }, [initialLocale]);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    import(`./locales/${locale}.json`)
      .then((mod) => {
        if (!cancelled) {
          setTranslations(mod.default as Translations);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setTranslations({});
        }
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [locale]);

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>): string => {
      if (!translations) return key;
      const value = getNestedValue(translations as Record<string, unknown>, key);
      if (value === undefined) return key;
      return interpolate(value, vars);
    },
    [translations]
  );

  const setLocale = useCallback((newLocale: Locale) => {
    document.cookie = `${COOKIE_NAME}=${newLocale};path=/;max-age=31536000;SameSite=Lax`;
    window.location.reload();
  }, []);

  const value: I18nContextValue = {
    locale,
    setLocale,
    t,
    isLoading,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }
  return ctx;
}
