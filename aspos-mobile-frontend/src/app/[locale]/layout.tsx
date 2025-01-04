import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "./globals.css";
import { Noto_Sans_Thai } from "next/font/google";


const noto = Noto_Sans_Thai({
  subsets: ['latin'],
  weight: ['100', '200','300', '400','500','600', '700'],
  display: 'swap',
});


export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the `params` object is resolved before accessing its properties
  const { locale } = await Promise.resolve(params);

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${noto.className} px-5 md:px-10 h-screen w-screen box-border text-sm text-darkGray`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
