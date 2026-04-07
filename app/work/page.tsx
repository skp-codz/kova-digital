import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Kova Digital",
};

const projects = [
  {
    name: "DevToolScout",
    type: "Affiliate · Content Site",
    color: "#3B82F6",
    description:
      "A curated directory of developer tools with in-depth reviews, comparison pages, and affiliate monetization.",
  },
  {
    name: "ProblemRadar",
    type: "Micro SaaS",
    color: "#10B981",
    description:
      "Monitors Reddit, Twitter, and forums to surface problems people are willing to pay to solve.",
  },
  {
    name: "HR Software Directory",
    type: "Programmatic SEO",
    color: "#8B5CF6",
    description:
      "Auto-generated landing pages targeting 2,000+ long-tail HR software keywords, driving 40k monthly visits.",
  },
  {
    name: "First Customer OS",
    type: "Micro SaaS",
    color: "#F59E0B",
    description:
      "A step-by-step system that helps indie makers find and close their first 10 paying customers.",
  },
];

export default function Work() {
  return (
    <div className="animate-fade-in-up mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-4xl font-bold">Our Work</h1>
      <p className="mt-4 max-w-xl text-zinc-400">
        A selection of projects we&apos;ve built and shipped.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-xl border border-white/5 bg-surface p-8 transition-colors hover:border-white/10"
          >
            <div
              className="mb-4 h-2 w-12 rounded-full"
              style={{ backgroundColor: project.color }}
            />
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="mt-1 text-sm font-medium text-zinc-400">
              {project.type}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
