import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // <-- unwrap the Promise

  const normalized = decodeURIComponent(slug).trim().toLowerCase();
  const project = PROJECTS.find(
    (p) => p.slug.trim().toLowerCase() === normalized
  );

  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link
        href="/projects"
        className="text-sm text-neutral-600 hover:text-neutral-900"
      >
        ← Back to Projects
      </Link>

      <div className="mt-6">
        <div className="text-sm text-neutral-500">{project.date}</div>
        <h1 className="mt-2 text-2xl font-semibold">{project.title}</h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={`${project.slug}-${t}`}
              className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70"
            >
              {t}
            </span>
          ))}
        </div>

        {project.short ? (
          <p className="mt-5 text-base text-black/80">{project.short}</p>
        ) : null}

        {project.overview ? (
          <div className="mt-8 space-y-3">
            <h2 className="text-lg font-semibold">Overview</h2>
            <p className="text-sm leading-relaxed text-black/70">
              {project.overview}
            </p>
          </div>
        ) : null}

        {project.highlights?.length ? (
          <div className="mt-8 space-y-3">
            <h2 className="text-lg font-semibold">Highlights</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-black/70">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-8 flex gap-3">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-xl border border-black/10 bg-white px-4 py-2 text-sm text-black/70 no-underline"
            >
              View repo
            </a>
          ) : null}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black !no-underline hover:!no-underline transition-colors hover:bg-black hover:!text-white"
            >
              Live
              <span
                aria-hidden="true"
                className="inline-block opacity-0 translate-x-0 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </main>
  );
}
