import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
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
  metadataBase: new URL("https://cafe-amazonas.vercel.app"),
  title: {
    default: "Amaruya Café — Café de Especialidad Amazónico | Origen Único",
    template: "%s | Amaruya Café",
  },
  description:
    "Café de especialidad de origen único, cosechado de manera sostenible en la Amazonía. Variedades Typica y Caturra tostadas con maestría. 100% Comercio Justo.",
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
    title: "Amaruya Café — Café de Especialidad Amazónico",
    description:
      "Café de origen único cosechado de manera sostenible en la Amazonía. Variedades Typica y Caturra. 100% Comercio Justo. Desde la selva hasta tu taza.",
    type: "website",
    locale: "es_ES",
    siteName: "Amaruya Café",
    images: [
      {
        url: "/meta-image.png",
        width: 1200,
        height: 630,
        alt: "Amaruya Café — Café de Especialidad Amazónico. Bolsas de café Typica y Caturra entre la selva amazónica.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaruya Café — Café de Especialidad Amazónico",
    description:
      "Café de origen único de la Amazonía. Variedades Typica y Caturra tostadas con maestría. 100% Comercio Justo.",
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
        {children}
      </body>
    </html>
  );
}
