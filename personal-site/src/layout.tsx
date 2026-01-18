import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

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
        className={`${ptMono.className} min-h-screen bg-white text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
