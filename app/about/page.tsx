import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Kova Digital",
};

const metrics = [
  { value: "20+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "48h", label: "Average Turnaround" },
  { value: "$50k+", label: "Revenue Generated" },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and target audience.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We map out the fastest path from idea to live product.",
  },
  {
    step: "03",
    title: "Build",
    description: "We design and develop your project with rapid iterations.",
  },
  {
    step: "04",
    title: "Launch",
    description: "We deploy, test, and hand off a polished final product.",
  },
];

export default function About() {
  return (
    <div className="animate-fade-in-up mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-4xl font-bold">About Kova Digital</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
        Kova Digital is a lean studio that helps startups and solo founders ship
        fast. We combine web development, SaaS engineering, and content-driven
        growth to turn ideas into revenue-generating products — without the
        overhead of a large agency.
      </p>

      {/* Metrics */}
      <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border border-white/5 bg-surface p-6 text-center"
          >
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="mt-1 text-sm text-zinc-400">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Process */}
      <h2 className="mt-24 text-2xl font-bold">Our Process</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {process.map((item) => (
          <div
            key={item.step}
            className="rounded-xl border border-white/5 bg-surface p-6"
          >
            <div className="text-sm font-bold text-accent">{item.step}</div>
            <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
