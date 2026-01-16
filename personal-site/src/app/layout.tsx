// src/app/layout.tsx
import "./globals.css";
import PageTransition from "@/components/PageTransition";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black overflow-x-hidden">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
