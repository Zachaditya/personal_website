// src/components/AboutSection.tsx
"use client";

import { Section } from "./Section";

export function AboutSection({ onBack }: { onBack?: () => void }) {
  return (
    <Section id="about" title="About">
      {/* Top row with a button that triggers the slide */}
      <div className="mb-6 flex items-center justify-between">
        <div className="text-sm text-black/60">A bit more context.</div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white p-5">
          <div className="text-sm font-semibold text-black">What I value</div>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-black/70">
            <li>• Shipping quickly without breaking quality.</li>
            <li>• Clear UX for complex systems (risk/data/finance).</li>
            <li>• Pragmatic AI: grounded outputs, measurable impact.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-5">
          <div className="text-sm font-semibold text-black">
            Outside of work
          </div>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-black/70">
            <li>• Golf, music, building side projects.</li>
            <li>• Exploring design systems and product storytelling.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
