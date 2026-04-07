import Link from "next/link";

const stats = [
  { label: "Delivery", value: "48h" },
  { label: "Satisfaction", value: "100%" },
  { label: "Projects", value: "20+" },
  { label: "Revenue Generated", value: "$50k+" },
];

const featuredWork = [
  { name: "How Programmatic SEO Can 10x Your Organic Traffic", type: "Content · SEO Article", color: "#3B82F6" },
  { name: "7 Best Project Management Tools for Remote Teams", type: "Content · Comparison Article", color: "#10B981" },
  { name: "AI-Powered Content Creation Tools — Market Landscape Report", type: "Market Research · Intelligence Report", color: "#8B5CF6" },
];

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share your project details through our contact form or email. We'll respond within 4 hours.",
  },
  {
    number: "02",
    title: "We build it fast",
    description:
      "Our team delivers in days, not weeks. Fast because we're efficient — not because we cut corners.",
  },
  {
    number: "03",
    title: "Launch with confidence",
    description:
      "Every deliverable is production-ready, tested, and deployed. We don't ship anything we wouldn't be proud of.",
  },
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
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredWork.map((project) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-surface p-8 transition-colors hover:border-white/10"
            >
              <div
                className="mb-4 h-2 w-12 rounded-full"
                style={{ backgroundColor: project.color }}
              />
              <h3 className="text-lg font-semibold leading-snug">{project.name}</h3>
              <p className="mt-1 text-sm text-zinc-400">{project.type}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/work"
            className="text-sm font-medium text-accent transition-colors hover:text-blue-400"
          >
            View all work →
          </Link>
        </div>
      </section>

      {/* How We Work */}
      <section className="border-t border-white/5 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-2xl font-bold">How We Work</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-white/5 bg-zinc-900/50 p-8"
              >
                <div className="text-3xl font-bold text-accent">{step.number}</div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-2xl border border-white/5 bg-surface p-12 text-center">
          <h2 className="text-3xl font-bold">Ready to build something?</h2>
          <p className="mt-4 text-zinc-400">
            Tell us about your project. We&apos;ll get back to you within 4 hours.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 font-medium text-white transition-colors hover:bg-blue-600"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
