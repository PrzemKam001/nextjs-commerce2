export const dynamic = 'force-dynamic';

import { CartProvider } from "components/cart/cart-context";
import { Navbar } from "components/layout/navbar";
import { GeistSans } from "geist/font/sans";
import { getCart } from "lib/shopify";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";
import { baseUrl } from "lib/utils";

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME || "MensCaveSaloon",
    template: `%s | ${SITE_NAME || "MensCaveSaloon"}`,
  },
  description:
    "Regały LED, personalizowane puchary, ramki na koszulki i premium wyposażenie męskiej jaskini. Ships worldwide • Twoja jaskinia, Twoje zasady.",
  robots: {
    follow: true,
    index: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cart = getCart();

  return (
    <html lang="pl" className={GeistSans.variable}>
      <body className="bg-neutral-50 text-black selection:bg-red-600 dark:bg-neutral-900 dark:text-white dark:selection:bg-red-600 dark:selection:text-white">
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main>
            {children}
            <Toaster closeButton />
          </main>
        </CartProvider>
      </body>
    </html>
  );
}