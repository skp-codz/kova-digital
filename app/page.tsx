import Link from "next/link";

const stats = [
  { label: "Delivery", value: "48h" },
  { label: "Satisfaction", value: "100%" },
  { label: "Projects", value: "20+" },
  { label: "Revenue Generated", value: "$50k+" },
];

const featuredWork = [
  { name: "DevToolScout", type: "Affiliate · Content Site", color: "#3B82F6" },
  { name: "ProblemRadar", type: "Micro SaaS", color: "#10B981" },
  { name: "HR Software Directory", type: "Programmatic SEO", color: "#8B5CF6" },
  { name: "First Customer OS", type: "Micro SaaS", color: "#F59E0B" },
];

export default function Home() {
  return (
    <div className="animate-fade-in-up">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          We build websites, SaaS products &amp; growth systems{" "}
          <span className="text-accent">that ship fast.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-400">
          Kova Digital is a small studio helping startups and creators launch
          polished digital products — on time and on budget.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
          >
            Get a quote
          </Link>
          <Link
            href="/work"
            className="rounded-lg border border-white/10 px-6 py-3 font-medium text-zinc-300 transition-colors hover:border-white/20"
          >
            View work
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-r border-white/5 px-6 py-8 last:border-r-0 text-center"
            >
              <div className="text-2xl font-bold md:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-2xl font-bold">Featured Work</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featuredWork.map((project) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-surface p-8 transition-colors hover:border-white/10"
            >
              <div
                className="mb-4 h-2 w-12 rounded-full"
                style={{ backgroundColor: project.color }}
              />
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mt-1 text-sm text-zinc-400">{project.type}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
