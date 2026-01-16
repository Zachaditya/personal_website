import Image from "next/image";
import { Section } from "./Section";
import TypewriterOnce from "./Typewriter";

export function SummarySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-5 pb-12 pt-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Available for Full-Stack/BE/FE | Data/ML | AI roles
        </div>

        <div className="mt-6 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          {/* Text */}
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              <TypewriterOnce
                text="Ernest Zachary Aditya"
                ms={100}
                delayMs={500}
              />
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base">
              Full-stack engineer and risk analyst in a Web3 fintech startup,
              building crypto-collateralized lending products and wallet-level
              credit scores.
            </p>

            <div className="mt-6 flex items-center gap-8">
              <a
                href="https://github.com/Zachaditya"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="inline-flex items-center opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded"
              >
                <Image src="/icons/github.png" alt="" width={40} height={40} />
              </a>

              <a
                href="https://www.linkedin.com/in/zachary-aditya/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="inline-flex items-center opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded"
              >
                <Image
                  src="/icons/linkedin.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </a>

              <a
                href="mailto:zachaditya@berkeley.edu"
                aria-label="Email"
                title="Email"
                className="inline-flex items-center opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded"
              >
                <Image src="/icons/email.png" alt="" width={40} height={40} />
              </a>
            </div>
          </div>

          {/* Headshot */}
          <div className="md:flex md:justify-end">
            <div className="w-[220px] overflow-hidden rounded-2xl border border-black/10 bg-white">
              {/* optional:
                <Image src="/headshot.jpg" alt="Headshot" width={440} height={440} />
                */}
            </div>
          </div>
        </div>

        {/* Tech Stack (now aligned + styled) */}
        <div className="mt-10">
          <h3 className="text-sm font-semibold tracking-tight text-black">
            Tech Stack
          </h3>
          <div className="mt-3 rounded-2xl border border-black/10 bg-white p-5 text-sm text-black/75">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <div className="font-semibold text-black">Languages</div>
                <div className="mt-1">TypeScript, Python, SQL</div>
              </div>
              <div>
                <div className="font-semibold text-black">Frameworks</div>
                <div className="mt-1">Next.js, React, FastAPI</div>
              </div>
              <div>
                <div className="font-semibold text-black">Data / ML</div>
                <div className="mt-1">Pandas, PyTorch, modeling</div>
              </div>
              <div>
                <div className="font-semibold text-black">Tools</div>
                <div className="mt-1">Postgres, Docker, Git, Tableau</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
