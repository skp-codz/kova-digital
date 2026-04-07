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
    color: "#6366F1",
  },
  {
    quote:
      "I built our entire customer onboarding flow in an afternoon. Our activation rate went from 34% to 61% in six weeks.",
    name: "Marcus T.",
    title: "Founder, Stackr",
    initials: "MT",
    color: "#8B5CF6",
  },
  {
    quote:
      "Flowdesk is the first automation tool that my non-technical team actually adopted and kept using.",
    name: "Priya N.",
    title: "VP Product, Crescent Health",
    initials: "PN",
    color: "#06B6D4",
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

const steps = [
  { number: "01", title: "Connect your tools", description: "Link Slack, HubSpot, Stripe, and 200+ integrations in under 60 seconds each." },
  { number: "02", title: "Build your workflow", description: "Drag, drop, and configure. No code. No engineers. Launch the same day." },
  { number: "03", title: "Watch it run", description: "Real-time logs, analytics, and alerts so you always know what's happening." },
];

export default function SampleLandingPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Portfolio Banner — dark strip at top */}
      <div className="bg-gray-900 px-6 py-2.5 text-center">
        <p className="text-xs text-gray-400">
          <span className="font-medium text-indigo-400">Kova Digital — Web Development Sample</span>
          {" · "}Flowdesk is a fictional product demonstrating our UI capabilities.{" "}
          <Link href="/work" className="underline hover:text-white">
            Back to Work
          </Link>
          {" · "}
          <Link href="/contact" className="underline hover:text-white">
            Commission your own
          </Link>
        </p>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600">
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900">Flowdesk</span>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            {["Features", "Integrations", "Pricing", "Docs"].map((item) => (
              <a key={item} href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden text-sm font-medium text-gray-600 hover:text-gray-900 md:block">
              Sign in
            </a>
            <a href="#" className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700">
              Get started free
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-sm text-indigo-700">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          Now in public beta — 2,400+ teams onboarded
        </div>
        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-7xl">
          Automate your workflows.{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Ship faster.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-500">
          Flowdesk connects your tools, automates your processes, and gives your team back the hours
          they spend on manual work. Set up in minutes. Scale to millions.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="rounded-full bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-indigo-300"
          >
            Start free — no credit card
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <svg className="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Watch demo
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-400">Free 14-day trial · Cancel anytime · Setup in 5 minutes</p>

        {/* Mock UI */}
        <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 shadow-2xl shadow-gray-200/60">
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
            <div className="ml-4 flex-1 rounded-md border border-gray-200 bg-white px-3 py-1 text-xs text-gray-400">
              app.flowdesk.io/workflows
            </div>
          </div>
          {/* Dashboard */}
          <div className="bg-white p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Active Workflows</h3>
                <p className="text-xs text-gray-400">4 running · last updated just now</p>
              </div>
              <button className="rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white">
                + New workflow
              </button>
            </div>
            <div className="space-y-2.5">
              {[
                { name: "Customer Onboarding", runs: "1,240 runs", status: "Active", color: "#10B981", bg: "#F0FDF4", textColor: "#166534" },
                { name: "Lead Nurture Sequence", runs: "876 runs", status: "Active", color: "#10B981", bg: "#F0FDF4", textColor: "#166534" },
                { name: "Churn Prevention", runs: "342 runs", status: "Paused", color: "#F59E0B", bg: "#FFFBEB", textColor: "#92400E" },
                { name: "Invoice Automation", runs: "2,105 runs", status: "Active", color: "#10B981", bg: "#F0FDF4", textColor: "#166534" },
              ].map((workflow) => (
                <div
                  key={workflow.name}
                  className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3 transition-colors hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full" style={{ backgroundColor: workflow.color }} />
                    <span className="text-sm font-medium text-gray-800">{workflow.name}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-xs text-gray-400">{workflow.runs}</span>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                      style={{ backgroundColor: workflow.bg, color: workflow.textColor }}
                    >
                      {workflow.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-y border-gray-100 bg-gray-50 py-8">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-sm text-gray-400">Trusted by teams at</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-10">
            {["Meridian Labs", "Stackr", "Crescent Health", "Dune Analytics", "Brightly", "Filo"].map((co) => (
              <span key={co} className="text-sm font-semibold text-gray-300">{co}</span>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">How it works</p>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
            Up and running in three steps
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-xl font-black text-indigo-600">
                {step.number}
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">Features</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Everything you need to automate at scale
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              Flowdesk handles the infrastructure so your team can focus on the work that matters.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-xl">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">Testimonials</p>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900">What teams are saying</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">Pricing</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-gray-500">Start free. Upgrade when you need more.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-indigo-600 text-white shadow-xl shadow-indigo-200"
                    : "border border-gray-200 bg-white shadow-sm"
                }`}
              >
                {plan.highlighted && (
                  <div className="mb-4 inline-block rounded-full bg-white/20 px-3 py-0.5 text-xs font-semibold text-white">
                    Most popular
                  </div>
                )}
                <h3 className={`text-xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-end gap-1">
                  <span className={`text-4xl font-extrabold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`mb-1 ${plan.highlighted ? "text-indigo-200" : "text-gray-400"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mt-2 text-sm ${plan.highlighted ? "text-indigo-200" : "text-gray-500"}`}>
                  {plan.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlighted ? "text-indigo-100" : "text-gray-600"}`}>
                      <svg className={`h-4 w-4 shrink-0 ${plan.highlighted ? "text-indigo-200" : "text-indigo-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full rounded-full py-3 text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-white text-indigo-600 hover:bg-indigo-50"
                      : "border border-gray-200 text-gray-700 hover:border-indigo-300 hover:text-indigo-600"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-12 text-center shadow-2xl shadow-indigo-200">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Ready to automate your operations?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-indigo-200">
            Join 2,400+ teams already using Flowdesk. Free 14-day trial, no credit card required.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="#" className="rounded-full bg-white px-8 py-3.5 font-semibold text-indigo-600 transition-colors hover:bg-indigo-50">
              Start free trial
            </a>
            <a href="#" className="rounded-full border border-indigo-400 px-8 py-3.5 font-semibold text-white transition-colors hover:border-white">
              Talk to sales
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-600">
                <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-sm font-bold text-gray-900">Flowdesk</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              {["Privacy", "Terms", "Security", "Status"].map((item) => (
                <a key={item} href="#" className="hover:text-gray-600">{item}</a>
              ))}
            </div>
            <p className="text-sm text-gray-400">© 2026 Flowdesk, Inc.</p>
          </div>
        </div>
      </footer>

      {/* Portfolio note */}
      <div className="bg-gray-900 px-6 py-4 text-center">
        <p className="text-xs text-gray-500">
          <strong className="text-gray-400">Kova Digital sample</strong> — Flowdesk is a fictional product built to demonstrate light-mode SaaS landing page capabilities.{" "}
          <Link href="/contact" className="text-indigo-400 hover:text-indigo-300">
            Commission your own →
          </Link>
        </p>
      </div>
    </div>
  );
}
