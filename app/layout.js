import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  type: "website",
  visualViewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
};

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
