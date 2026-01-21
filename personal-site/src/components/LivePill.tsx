import Link from "next/link";

export function LivePill({ href }: { href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open live demo"
      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/70 hover:bg-black/5 transition-colors"
    >
      <span className="h-2 w-2 rounded-full bg-emerald-500" />
      <span>Live demo</span>
    </Link>
  );
}
