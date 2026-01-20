// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "zachaditya",
};

const ptMono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${ptMono.className} bg-white text-black overflow-x-hidden antialiased`}
      >
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
