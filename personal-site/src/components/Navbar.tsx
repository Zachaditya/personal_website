// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();

  const activeHref = useMemo(() => {
    if (!pathname) return "/";
    const top = `/${pathname.split("/").filter(Boolean)[0] ?? ""}`;
    return top === "/" ? "/" : top;
  }, [pathname]);

  return (
    <header className="fixed left-1/2 top-5 z-50 -translate-x-1/2">
      <nav
        aria-label="Primary"
        className={cx(
          "rounded-full border border-black/10 bg-white/80 backdrop-blur",
          "px-2 py-2",
          "shadow-[0_12px_32px_rgba(0,0,0,0.10)]"
        )}
      >
        <ul className="flex items-center gap-2">
          {NAV.map((item) => {
            const isActive =
              item.href === "/" ? activeHref === "/" : activeHref === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cx(
                    "inline-flex items-center justify-center",
                    "rounded-full px-5 py-2.5 text-sm font-semibold",
                    "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30",
                    isActive
                      ? "bg-black/[0.06] text-black"
                      : "text-black/45 hover:text-black/75 hover:bg-black/[0.03]"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
