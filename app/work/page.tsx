import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work — Kova Digital",
};

const projects: { name: string; type: string; color: string; description: string; tag: string; href: string }[] = [
  {
    name: "How Programmatic SEO Can 10x Your Organic Traffic",
    type: "Content · SEO Article",
    color: "#3B82F6",
    description:
      "A deep-dive guide covering programmatic SEO strategy, technical implementation, and real-world examples from Zapier, Tripadvisor, and NomadList. Written for founders and growth teams.",
    tag: "Content & SEO",
    href: "/work/programmatic-seo",
  },
  {
    name: "7 Best Project Management Tools for Remote Teams",
    type: "Content · Comparison Article",
    color: "#10B981",
    description:
      "A ranked, research-backed comparison of the top project management tools for remote teams in 2026. Covers pricing, pros/cons, and use-case fit.",
    tag: "Content & SEO",
    href: "/work/project-management-tools",
  },
  {
    name: "AI-Powered Content Creation Tools — Market Landscape Report",
    type: "Market Research · Intelligence Report",
    color: "#8B5CF6",
    description:
      "A full market landscape report covering the AI content creation space — competitor analysis, market sizing, pricing strategy, and go-to-market insights. Executive summary included.",
    tag: "Market Intelligence",
    href: "/work/market-research-report",
  },
  {
    name: "Flowdesk — SaaS Landing Page",
    type: "Web Development · SaaS Landing Page",
    color: "#F97316",
    description:
      "A full SaaS product landing page with hero, feature grid, testimonials, and pricing table. Dark modern aesthetic. Built to demonstrate what a professional $350+ web dev deliverable looks like.",
    tag: "Web Development",
    href: "/work/sample-landing-page",
  },
  {
    name: "SaaS Onboarding Email Sequence",
    type: "Email Sequences · 5-Email Flow",
    color: "#EF4444",
    description:
      "A 5-email onboarding sequence for a fictional SaaS product — welcome, activation, engagement, expansion, and trial conversion. Full copy, subject lines, preview text, and strategy notes.",
    tag: "Email Sequences",
    href: "/work/email-sequences",
  },
  {
    name: "Project Management Tools Directory",
    type: "Programmatic SEO · Live Demo",
    color: "#10B981",
    description:
      "A live programmatic SEO directory demo. 12 tools, ratings, and filters — all generated from structured data. Shows exactly how we build scalable, SEO-optimized directory sites.",
    tag: "Programmatic SEO",
    href: "/work/programmatic-seo-demo",
  },
];

export default function Work() {
  return (
    <div className="animate-fade-in-up mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-4xl font-bold">Our Work</h1>
      <p className="mt-4 max-w-xl text-zinc-400">
        A selection of projects we&apos;ve built and shipped.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.href}
            className="block rounded-xl border border-white/5 bg-surface p-8 transition-colors hover:border-white/10 hover:border-accent/30"
          >
            <div
              className="mb-4 h-2 w-12 rounded-full"
              style={{ backgroundColor: project.color }}
            />
            <span className="inline-block rounded-full border border-white/10 bg-zinc-900 px-2 py-0.5 text-xs text-zinc-400">
              {project.tag}
            </span>
            <h3 className="mt-3 text-xl font-semibold">{project.name}</h3>
            <p className="mt-1 text-sm font-medium text-zinc-400">
              {project.type}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              {project.description}
            </p>
            <p className="mt-4 text-xs font-medium text-accent">View sample →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
