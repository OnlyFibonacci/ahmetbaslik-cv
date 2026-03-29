import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmetbaslik.com"),
  title: {
    default: "Ahmet Başlık",
    template: "%s · Ahmet Başlık",
  },
  description:
    "Bilişim sistemleri mühendisi — fintech, yazılım ve e-ticaret özgeçmişleri.",
};

/**
 * Kök layout: tipografi değişkenleri ve koyu tema (CV görsel kimliği ile uyumlu).
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
