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
    default: "Amaruya Café — Nacido en la Selva, Tostado con Alma",
    template: "%s | Amaruya Café",
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
    "Amaruya Café",
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
  authors: [{ name: "Amaruya Café" }],
  creator: "Amaruya Café",
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
    title: "Amaruya Café — Nacido en la Selva, Tostado con Alma",
    description:
      "Un café que no se cultiva — se descubre. Origen único de la Amazonía profunda. Variedades Typica y Caturra, 100% comercio justo. Desde el Río Negro hasta tu ritual.",
    type: "website",
    locale: "es_ES",
    siteName: "Amaruya Café",
    images: [
      {
        url: "/meta-image.png",
        width: 1200,
        height: 630,
        alt: "Bolsas de café Amaruya — variedades Typica y Caturra — sobre una mesa de madera en la selva amazónica, junto a una taza humeante y granos verdes.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaruya Café — Nacido en la Selva, Tostado con Alma",
    description:
      "Un café que no se cultiva, se descubre. Origen único amazónico. Typica & Caturra bajo sombra. 100% comercio justo.",
    images: ["/meta-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <PasswordGate>
          {children}
        </PasswordGate>
      </body>
    </html>
  );
}
