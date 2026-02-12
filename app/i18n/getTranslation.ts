import type { Locale } from './config';

type NestedTranslation = Record<string, unknown>;
type Translations = Record<string, NestedTranslation>;

function getNestedValue(obj: NestedTranslation, path: string): string | undefined {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  return typeof current === 'string' ? current : undefined;
}

function interpolate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    return String(vars[key] ?? '');
  });
}

export async function getTranslations(locale: Locale): Promise<Translations> {
  const mod = await import(`./locales/${locale}.json`);
  return mod.default as Translations;
}

export function createT(translations: Translations) {
  return function t(key: string, vars?: Record<string, string | number>): string {
    const value = getNestedValue(translations as NestedTranslation, key);
    if (value === undefined) return key;
    return interpolate(value, vars);
  };
}
