import { cookies } from 'next/headers';
import { DEFAULT_LOCALE, COOKIE_NAME, isValidLocale } from './config';

export async function getLocale(): Promise<string> {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get(COOKIE_NAME)?.value;
  if (localeCookie && isValidLocale(localeCookie)) {
    return localeCookie;
  }
  return DEFAULT_LOCALE;
}
