// src/app/layout.tsx
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "zachaditya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black overflow-x-hidden antialiased">
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
