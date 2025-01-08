import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "./globals.css";
import { Noto_Sans_Thai } from "next/font/google";
import { BasketProvider } from './components/context/basket-context';
import { AllListProvider } from './components/context/all-list-context';


const noto = Noto_Sans_Thai({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
});

type Locale = "en" | "th"; 

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; 
}) {

  const resolvedParams = await params;
  const { locale } = resolvedParams;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const validLocale = locale as Locale;

  const messages = await getMessages({ locale: validLocale });

  return (
    <html lang={validLocale}>
      <body
        className={`${noto.className} p-5 md:p-10 text-sm text-darkGray`}
      >
        <NextIntlClientProvider messages={messages}>
          <BasketProvider>
            <AllListProvider>
              {children}
            </AllListProvider>
          </BasketProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
