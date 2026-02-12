export type Locale = 'es' | 'en' | 'pt';

export const LOCALES: Locale[] = ['es', 'en', 'pt'];
export const DEFAULT_LOCALE: Locale = 'es';
export const COOKIE_NAME = 'NEXT_LOCALE';

export function isValidLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}
