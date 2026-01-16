//Reusable Section wrapper

import React from "react";

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-black/10">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="mb-6">
          <div className="text-xs tracking-wide text-black/60">
            {subtitle ?? "—"}
          </div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            {title}
          </h2>
        </div>

        {children}
      </div>
    </section>
  );
}
