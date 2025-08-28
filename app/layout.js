import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Suero terapia y Podología",
  description: "Descubre todo sobre la sueroterapia: beneficios, tipos de sueros, aplicaciones terapéuticas y recomendaciones para mejorar tu salud y bienestar de forma segura y efectiva.",
  keywords: "salud, sueroterapia, bienestar, medicina, alternativa",
  locale: "es_Es",
  type: "website"
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
