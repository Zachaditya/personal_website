import Link from "next/link";

export function ProjectsDropdownRow() {
  return (
    <Link
      href="/projects"
      className="projects-row block rounded-2xl border border-black/10 bg-white px-5 py-4 transition-colors hover:bg-black/[0.03]"
      aria-label="Go to Projects page"
      title="Projects"
    >
      <div className="flex items-center">
        {/* Left animated arrow */}
        <div className="proj-arrowwrap" aria-hidden="true">
          <span className="trail-v" />
          <span className="trail-h" />
          <span className="proj-cursor">
            <span className="proj-head" />
          </span>
          <span className="proj-arrowlabel">The good stuff</span>
        </div>

        {/* Center title */}
        <div className="flex-1 text-center">
          <div className="text-lg font-semibold tracking-tight text-black sm:text-xl">
            Projects
          </div>
        </div>

        {/* Right spacer to balance the left arrow width */}
        <div
          className="proj-arrowwrap opacity-0 pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
