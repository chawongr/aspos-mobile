// import {getRequestConfig} from 'next-intl/server';
// import {routing} from './routing';
 
// export default getRequestConfig(async ({requestLocale}) => {
//   // This typically corresponds to the `[locale]` segment
//   let locale = await requestLocale;
 
//   // Ensure that a valid locale is used
//   if (!locale || !routing.locales.includes(locale as any)) {
//     locale = routing.defaultLocale;
//   }
 
//   return {
//     locale,
//     messages: (await import(`../../messages/${locale}.json`)).default
//   };
// });

import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

// Define the valid locales type
type Locale = 'en' | 'th';

export default getRequestConfig(async ({ requestLocale }) => {
  // Await the requestLocale value
  const resolvedLocale = await requestLocale;

  // Validate the locale or fallback to the default
  const locale: Locale = routing.locales.includes(resolvedLocale as Locale)
    ? (resolvedLocale as Locale)
    : routing.defaultLocale as Locale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

