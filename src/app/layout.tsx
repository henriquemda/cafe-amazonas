import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import PasswordGate from "@/components/PasswordGate";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amazonas.vision.pe"),
  title: {
    default: "Café Amazonas — Nacido en la Selva, Tostado con Alma",
    template: "%s | Café Amazonas",
  },
  description:
    "Donde la Amazonía se convierte en taza. Café de especialidad de origen único — variedades Typica y Caturra cosechadas bajo la sombra de la selva. Comercio justo, tostado artesanal, espíritu salvaje.",
  keywords: [
    "café amazónico",
    "café de especialidad",
    "café de origen único",
    "café premium Amazonía",
    "café sostenible",
    "café Typica",
    "café Caturra",
    "café comercio justo",
    "Café Amazonas",
    "café artesanal",
    "specialty coffee Amazon",
    "café gourmet",
    "café tostado artesanal",
    "café orgánico Amazonía",
    "café de la selva",
    "café peruano premium",
    "single origin coffee rainforest",
    "comprar café de especialidad",
  ],
  authors: [{ name: "Café Amazonas" }],
  creator: "Café Amazonas",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Café Amazonas — Nacido en la Selva, Tostado con Alma",
    description:
      "Un café que no se cultiva — se descubre. Origen único de la Amazonía profunda. Variedades Typica y Caturra, 100% comercio justo. Desde el Río Negro hasta tu ritual.",
    type: "website",
    locale: "es_ES",
    siteName: "Café Amazonas",
    images: [
      {
        url: "/meta-image.png",
        width: 1200,
        height: 630,
        alt: "Bolsas de café Café Amazonas — variedades Typica y Caturra — sobre una mesa de madera en la selva amazónica, junto a una taza humeante y granos verdes.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Café Amazonas — Nacido en la Selva, Tostado con Alma",
    description:
      "Un café que no se cultiva, se descubre. Origen único amazónico. Typica & Caturra bajo sombra. 100% comercio justo.",
    images: ["/meta-image.png"],
  },
};

import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <CartProvider>
          <PasswordGate>
            {children}
          </PasswordGate>
        </CartProvider>
      </body>
    </html>
  );
}
