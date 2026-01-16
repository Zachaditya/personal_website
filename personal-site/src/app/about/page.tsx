// src/app/about/page.tsx
import { AboutSection } from "@/components/AboutSection";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white text-black">
      <div className="mx-auto max-w-5xl px-5 pt-24 pb-12">
        <div className="mb-6"></div>

        <AboutSection />
      </div>
    </main>
  );
}
