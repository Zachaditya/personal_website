import { ProjectsDropdownRow } from "./ProjectsDropdownRow";
import { Section } from "./Section";
import Link from "next/link";
import Image from "next/image";

type ResumeItem = {
  title: string;
  org: string;
  dates: string;
  location: string;
  bullets?: string[] | [" "];
};

const EXPERIENCE: ResumeItem[] = [
  {
    title: "Full-Stack Engineer / Risk Analyst",
    org: "Aetherum.ai",
    dates: "April 2025 - December 2025",
    location: "San Francisco, CA | Remote",
    bullets: [
      "Designed and implemented financial models to assess credit-worthiness of users to reduce risk exposure to cryptocurrency market volatility.",
      "Authored a whitepaper detailing the financial model and its integration with the AI-driven loan underwriting system. [Look in Projects Page]",
      "Developed React and FastAPI front-end dashboards for real-time visualization of portfolio performance and risk metrics, enhancing user interface and data accessibility.",
      "Built an internal website enabling the AI team to test and validate the financial model, accelerating development of the loan underwriting AI agent.",
      "Leveraged Python, PyTorch, Pandas, and Matplotlib for data processing, model development, and visualization tasks.",
    ],
  },
  {
    title: "Research Assistant",
    org: "Spero Studios",
    dates: "October 2022 — December 2022",
    location: "San Francisco, CA | Remote",
    bullets: [
      "Analyzed over 20 top-performing arcade games in Southeast Asia to identify recurring trends and user preferences.",
      "Utilized Google Trends and Twitch Tracker to propose actionable in-game aesthetics, contributing to the team securing 2nd runner-up at the Polygon Development Hackathon out of 100+ competitors.",
      "Delivered insights that improved project design efficiency by 15%, collaborating with a cross-functional team of developers, designers, and product managers.",
    ],
  },
  {
    title: "Tutor and Teaching Assistant",
    org: "Diablo Valley College Math Faculty",
    dates: "September 2022 - May 2023",
    location: "Pleasant Hill, CA",
    bullets: [
      "Analyzed over 20 top-performing arcade games in Southeast Asia to identify recurring trends and user preferences.",
      "Utilized Google Trends and Twitch Tracker to propose actionable in-game aesthetics, contributing to the team securing 2nd runner-up at the Polygon Development Hackathon out of 100+ competitors.",
      "Delivered insights that improved project design efficiency by 15%, collaborating with a cross-functional team of developers, designers, and product managers.",
    ],
  },
  {
    title: "Teaching Assistant",
    org: "IFund Education",
    dates: "September 2022 - May 2023",
    location: "San Francisco, CA",
    bullets: [
      "Taught English to a class of 10 Indonesian students from underprivileged rural neighborhoods via Zoom, improving language proficiency and confidence in communication.",
    ],
  },
];

const EDUCATION: ResumeItem[] = [
  {
    title: "B.A. Data Science in Business and Industrial Analytics",
    org: "University of California, Berkeley",
    location: "Berkeley, CA",
    dates: "August 2023 - August 2025",
    bullets: ["GPA: 3.45/4.0"],
  },
  {
    title: "Applied Mathematics",
    org: "Diablo Valley College",
    location: "Pleasant Hill, CA",
    dates: "August 2021 -  May 2023",
    bullets: ["GPA: 3.8/4.0"],
  },
];

const Extracurricular: ResumeItem[] = [
  {
    title: "Vice President and Co-Founding Officer",
    org: "DVC Blockchain",
    dates: "September 2022 - May 2023",
    location: "Pleasant Hill, CA",
    bullets: [
      "Co-founded and led a blockchain-focused student organization with ten main team members, growing a community to 200+ followers through strategic social media campaigns and outreach initiatives.",
      "Spearheaded the planning and execution of a workshop featuring a prominent blockchain startup founder, attracting and engaging over 80 attendees.",
      "Collaborated with a team to promote blockchain education, foster networking opportunities, and establish the organization as a hub for blockchain enthusiasts on campus.",
    ],
  },
  {
    title: "Project Manager",
    org: "DVC Project Bracket",
    dates: "September 2022 — December 2022",
    location: "Pleasant Hill, CA",
    bullets: [
      "Directed a team of developers in designing and building an onboarding Android app for Contra Costa College students using Kotlin, enhancing the student onboarding experience.",
      "Facilitated weekly meetings to track progress, resolve challenges, and ensure timely delivery of project milestones",
    ],
  },
];

function DropdownSection({
  title,
  defaultOpen = false,
  children,
  titleClassName,
  summaryClassName,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  titleClassName?: string;
  summaryClassName?: string;
}) {
  return (
    <details
      open={defaultOpen}
      className="group rounded-2xl border border-black/10 bg-white"
    >
      <summary
        className={[
          "flex cursor-pointer list-none items-center gap-3 py-4 text-left",
          // default padding
          "px-5",
          summaryClassName ?? "",
        ].join(" ")}
      >
        <span
          className="inline-block select-none text-black/60 transition-transform duration-200 group-open:rotate-90"
          aria-hidden="true"
        >
          ▸
        </span>

        <span
          className={
            titleClassName ??
            "text-lg font-semibold tracking-tight text-black sm:text-xl"
          }
        >
          {title}
        </span>
      </summary>

      <div className="h-px bg-black/10" />
      <div className="px-5 py-5 text-left">{children}</div>
    </details>
  );
}

export function ResumeSection() {
  return (
    <Section
      id="resume"
      title="RESUME"
      subtitle="Experience • Education • Skills"
    >
      <div className="grid gap-8">
        {/* Download row */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white p-4">
          <div className="text-sm text-black/70">Download as PDF → </div>

          <a
            href="/RESUME_ErnestAditya_Aetherum.pdf"
            className="inline-flex items-center opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded"
          >
            <Image src="/icons/pdf-file.png" alt="" width={40} height={40} />
          </a>
        </div>
        {/* Education */}
        <DropdownSection title="Education" defaultOpen={false}>
          <div className="grid gap-4">
            {EDUCATION.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-black/10 bg-white p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="text-sm font-semibold text-black">
                    {r.title}
                  </div>
                  <div className="text-xs text-black/70">{r.dates}</div>
                </div>
                <div className="mt-1 text-sm text-black/80">{r.org}</div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-black/75">
                  {r.bullets?.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </DropdownSection>

        {/* Experience */}
        <DropdownSection title="Experience" defaultOpen>
          <div className="grid gap-4">
            {EXPERIENCE.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-black/10 bg-white p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="text-sm font-semibold text-black">
                    {r.title}
                  </div>
                  <div className="text-xs text-black/70">{r.dates}</div>
                </div>
                <div className="mt-1 text-sm text-black/80">{r.org}</div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-black/75">
                  {r.bullets?.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </DropdownSection>

        <DropdownSection title="Extracurricular Activites" defaultOpen={false}>
          <div className="grid gap-4">
            {EXPERIENCE.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-black/10 bg-white p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="text-sm font-semibold text-black">
                    {r.title}
                  </div>
                  <div className="text-xs text-black/70">{r.dates}</div>
                </div>
                <div className="mt-1 text-sm text-black/80">{r.org}</div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-black/75">
                  {r.bullets?.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </DropdownSection>
        {/* Projects link */}
        <ProjectsDropdownRow />
      </div>
    </Section>
  );
}
