import Link from "next/link";

export function LivePill({ href }: { href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open live demo"
      className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-2.5 py-0.5 text-[11px] font-medium text-black/70 hover:bg-black/5 transition-colors"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
      <span>Live</span>
    </Link>
  );
}
export function WipPill() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-2.5 py-0.5 text-[11px] font-medium text-black/70">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
      <span>In Progress</span>
    </span>
  );
}
