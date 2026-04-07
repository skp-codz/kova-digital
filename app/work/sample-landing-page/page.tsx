import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sample Landing Page — Web Development Portfolio | Kova Digital",
  description:
    "A sample SaaS landing page built by Kova Digital. Fast, responsive, conversion-optimized. See what a professional web development deliverable looks like.",
};

const features = [
  {
    icon: "⚡",
    title: "Ship in Hours, Not Weeks",
    description:
      "Flowdesk's visual pipeline builder lets you map, automate, and launch multi-step workflows in minutes. No engineering required.",
  },
  {
    icon: "🔗",
    title: "Connect Everything",
    description:
      "Native integrations with Slack, HubSpot, Salesforce, Stripe, and 200+ tools. Your stack stays intact — Flowdesk connects the gaps.",
  },
  {
    icon: "📊",
    title: "See What's Working",
    description:
      "Real-time analytics on every workflow. Spot bottlenecks, measure conversion rates, and optimize without leaving the platform.",
  },
  {
    icon: "🔒",
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 Type II certified. End-to-end encryption. Role-based access controls. Your data never leaves your region.",
  },
  {
    icon: "🤝",
    title: "Built for Teams",
    description:
      "Shared workflow libraries, version history, and collaborative editing. Everyone stays on the same page — literally.",
  },
  {
    icon: "🚀",
    title: "Scales With You",
    description:
      "From 10 runs a day to 10 million. Flowdesk's infrastructure auto-scales so you never worry about capacity.",
  },
];

const testimonials = [
  {
    quote:
      "We replaced three separate tools with Flowdesk and cut our operations overhead by 40%. The ROI was immediate.",
    name: "Sarah K.",
    title: "Head of Operations, Meridian Labs",
    initials: "SK",
    color: "#3B82F6",
  },
  {
    quote:
      "I built our entire customer onboarding flow in an afternoon. Our activation rate went from 34% to 61% in six weeks.",
    name: "Marcus T.",
    title: "Founder, Stackr",
    initials: "MT",
    color: "#10B981",
  },
  {
    quote:
      "Flowdesk is the first automation tool that my non-technical team actually adopted and kept using.",
    name: "Priya N.",
    title: "VP Product, Crescent Health",
    initials: "PN",
    color: "#8B5CF6",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for solo operators and small teams getting started.",
    features: [
      "5 active workflows",
      "1,000 runs/month",
      "10 integrations",
      "Email support",
      "7-day history",
    ],
    cta: "Start free trial",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    description: "For growing teams who need more power and flexibility.",
    features: [
      "Unlimited workflows",
      "50,000 runs/month",
      "All integrations",
      "Priority support",
      "90-day history",
      "Team collaboration",
      "Custom webhooks",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced security and scale requirements.",
    features: [
      "Unlimited everything",
      "SOC 2 + HIPAA",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations",
      "On-premise option",
      "SSO / SAML",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export default function SampleLandingPage() {
  return (
    <div className="animate-fade-in-up">
      {/* Portfolio Banner */}
      <div className="border-b border-accent/20 bg-accent/5 px-6 py-3 text-center">
        <p className="text-sm text-zinc-400">
          <span className="font-medium text-accent">Kova Digital — Web Development Sample</span>
          {" · "}This is a sample landing page demonstrating our UI/UX capabilities.{" "}
          <Link href="/work" className="underline hover:text-white">
            Back to Work
          </Link>
          {" · "}
          <Link href="/contact" className="underline hover:text-white">
            Get a quote
          </Link>
        </p>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface px-4 py-1.5 text-sm text-zinc-400">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Now in public beta — join 2,400+ teams
        </div>
        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Automate your workflows.{" "}
          <span className="text-accent">Ship faster.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-400">
          Flowdesk connects your tools, automates your processes, and gives your team back the hours
          they spend on manual work. Set up in minutes. Scale to millions.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button className="rounded-lg bg-accent px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-blue-600">
            Start free — no credit card
          </button>
          <button className="rounded-lg border border-white/10 px-8 py-4 text-lg font-medium text-zinc-300 transition-colors hover:border-white/20">
            Watch demo ▶
          </button>
        </div>
        <p className="mt-4 text-sm text-zinc-500">Free 14-day trial · Cancel anytime · Setup in 5 minutes</p>

        {/* Mock UI Preview */}
        <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/50">
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-white/5 bg-zinc-950 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500/60" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <div className="h-3 w-3 rounded-full bg-green-500/60" />
            <div className="ml-4 flex-1 rounded bg-zinc-800 px-3 py-1 text-xs text-zinc-500">
              app.flowdesk.io/workflows
            </div>
          </div>
          {/* Fake dashboard */}
          <div className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">Active Workflows</h3>
              <button className="rounded-md bg-accent px-3 py-1 text-xs font-medium text-white">+ New workflow</button>
            </div>
            <div className="space-y-3">
              {[
                { name: "Customer Onboarding", runs: "1,240 runs", status: "Active", color: "#10B981" },
                { name: "Lead Nurture Sequence", runs: "876 runs", status: "Active", color: "#10B981" },
                { name: "Churn Prevention", runs: "342 runs", status: "Paused", color: "#F59E0B" },
                { name: "Invoice Automation", runs: "2,105 runs", status: "Active", color: "#10B981" },
              ].map((workflow) => (
                <div key={workflow.name} className="flex items-center justify-between rounded-lg border border-white/5 bg-zinc-800/50 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full" style={{ backgroundColor: workflow.color }} />
                    <span className="text-sm text-white">{workflow.name}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-xs text-zinc-500">{workflow.runs}</span>
                    <span className="rounded-full px-2 py-0.5 text-xs" style={{ backgroundColor: `${workflow.color}20`, color: workflow.color }}>
                      {workflow.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-y border-white/5 bg-surface py-6">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-sm text-zinc-500">Trusted by 2,400+ teams at companies like</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-8">
            {["Meridian Labs", "Stackr", "Crescent Health", "Dune Analytics", "Brightly", "Filo"].map((co) => (
              <span key={co} className="text-sm font-medium text-zinc-600">{co}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Everything you need to automate at scale</h2>
          <p className="mt-4 text-zinc-400">
            Flowdesk handles the infrastructure so your team can focus on the work that matters.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-xl border border-white/5 bg-surface p-6 transition-colors hover:border-white/10">
              <div className="text-2xl">{feature.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-white/5 bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold">What teams are saying</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-white/5 bg-zinc-900 p-6">
                <p className="text-sm leading-relaxed text-zinc-300">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-zinc-400">Start free. Upgrade when you need more.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-8 ${
                plan.highlighted
                  ? "border-accent bg-accent/5"
                  : "border-white/5 bg-surface"
              }`}
            >
              {plan.highlighted && (
                <div className="mb-4 inline-block rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-white">
                  Most popular
                </div>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="mb-1 text-zinc-400">{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-zinc-400">{plan.description}</p>
              <ul className="mt-6 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="text-green-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-accent text-white hover:bg-blue-600"
                    : "border border-white/10 text-zinc-300 hover:border-white/20"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-2xl border border-white/5 bg-surface p-12 text-center">
          <h2 className="text-3xl font-bold">Ready to automate your operations?</h2>
          <p className="mt-4 text-zinc-400">Join 2,400+ teams already using Flowdesk. Free 14-day trial.</p>
          <button className="mt-8 rounded-lg bg-accent px-8 py-3 font-medium text-white transition-colors hover:bg-blue-600">
            Start free trial
          </button>
        </div>
      </section>

      {/* Portfolio note */}
      <div className="border-t border-white/5 bg-surface px-6 py-6 text-center">
        <p className="text-sm text-zinc-500">
          This is a <strong className="text-zinc-400">Kova Digital sample page</strong> — Flowdesk is a fictional product created to demonstrate our web development capabilities.{" "}
          <Link href="/contact" className="text-accent hover:text-blue-400">
            Commission your own →
          </Link>
        </p>
      </div>
    </div>
  );
}
