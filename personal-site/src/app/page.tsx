// src/app/page.tsx
import { SummarySection } from "@/components/SummarySection";
import { ResumeSection } from "@/components/ResumeSection";
import Link from "next/link";
import { AboutSection } from "@/components/AboutSection";

export default function HomePage() {
  return (
    <main className="bg-white text-black">
      <SummarySection />
      <ResumeSection />
      <AboutSection />
    </main>
  );
}
