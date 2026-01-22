import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { WipPill, LivePill } from "@/components/LivePill";

function parseProjectDate(input: string): Date | null {
  const s = (input ?? "").trim();
  if (!s) return null;

  const iso = s.match(/^(\d{4})-(\d{1,2})(?:-(\d{1,2}))?$/);
  if (iso) {
    const y = Number(iso[1]);
    const m = Number(iso[2]);
    const d = iso[3] ? Number(iso[3]) : 1;
    if (!Number.isFinite(y) || !Number.isFinite(m)) return null;
    return new Date(y, m - 1, d);
  }

  const parts = s.split(/\s+/);
  if (parts.length >= 2) {
    const year = Number(parts[parts.length - 1]);
    const monthStr = parts.slice(0, parts.length - 1).join(" ");
    if (Number.isFinite(year)) {
      const dt = new Date(`${monthStr} 1, ${year}`);
      if (!Number.isNaN(dt.getTime())) return dt;
    }
  }

  const dt = new Date(s);
  if (!Number.isNaN(dt.getTime())) return dt;

  return null;
}

function formatDate(input: string) {
  const dt = parseProjectDate(input);
  if (!dt) return input;
  return dt.toLocaleString("en-US", { month: "short", year: "numeric" });
}

function dateSortKey(input: string): number {
  const dt = parseProjectDate(input);
  return dt ? dt.getTime() : -Infinity;
}

export default function ProjectsPage() {
  const items = [...PROJECTS].sort(
    (a, b) => dateSortKey(b.date) - dateSortKey(a.date)
  );

  return (
    <main className="bg-white text-black">
      <div className="mx-auto max-w-5xl px-5 pb-16 pt-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Projects
          </h1>
        </div>

        <div className="grid gap-4">
          {items.map((p) => (
            <article
              key={p.slug}
              className={[
                "rounded-2xl border border-black/10 bg-white p-5",
                "transition-transform",
                "hover:-translate-y-[1px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]",
                p.highlights?.length ? "ring-1 ring-black/10" : "",
              ].join(" ")}
            >
              <div className="flex items-center gap-3">
                <div className="text-xs text-black/60">
                  {formatDate(p.date)}
                </div>
                {p.liveUrl ? <LivePill href={p.liveUrl} /> : null}
                {!p.liveUrl && p.wip ? <WipPill /> : null}
              </div>

              <h2 className="mt-3 text-lg font-semibold tracking-tight text-black sm:text-xl">
                {p.title}
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-black/70">
                {p.short ?? p.overview ?? ""}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Link
                  href={`/projects/${encodeURIComponent(p.slug)}`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-black hover:!text-white hover:!no-underline"
                >
                  Read more
                  <span
                    aria-hidden="true"
                    className="inline-block translate-x-0 opacity-0 transition-all duration-200 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    →
                  </span>
                </Link>

                {p.repoUrl ? (
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-xl border border-black/10 bg-white px-4 py-2 text-sm text-black/70 no-underline"
                  >
                    View repo
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
