import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sample Email Sequences — Portfolio | Kova Digital",
  description:
    "A sample 5-email SaaS onboarding sequence by Kova Digital. See our copywriting style, subject lines, and conversion-focused email structure.",
};

const sequence = [
  {
    number: 1,
    trigger: "Immediately on signup",
    subject: "Welcome to Flowdesk — here's where to start",
    preview: "You're in. Let's get your first workflow live in the next 10 minutes.",
    tag: "Welcome",
    tagColor: "#3B82F6",
    body: [
      "Hey {{first_name}},",
      "Welcome to Flowdesk. You just joined 2,400+ teams who stopped doing things manually.",
      "Here's the fastest way to get value in your first session:",
      null, // spacer for list
      "The whole thing takes about 10 minutes. Most people are running their first workflow before they finish their coffee.",
      "One thing before you dive in: Flowdesk works best when you connect it to the tools you already use. Head to Settings → Integrations and hook up Slack, HubSpot, or whatever's in your stack.",
      "Any questions — just reply to this email. I read everything.",
      "— Marcus\nCo-founder, Flowdesk",
    ],
    steps: [
      "Go to app.flowdesk.io/workflows",
      "Click \"New Workflow\" and choose a template",
      "Connect your first integration (takes 60 seconds)",
      "Turn it on and watch it run",
    ],
    cta: "Build your first workflow →",
    notes: "Subject line tested against 3 variants. 'here's where to start' outperformed 'get started' by 18% open rate. Plain text format performs better than HTML for welcome emails — feels personal, not transactional.",
  },
  {
    number: 2,
    trigger: "Day 2 — if no workflow created",
    subject: "Most teams start with this workflow",
    preview: "It's the one that saves 3+ hours a week from day one.",
    tag: "Activation",
    tagColor: "#10B981",
    body: [
      "Hey {{first_name}},",
      "You signed up yesterday but haven't built your first workflow yet. No pressure — just wanted to share what most teams do first.",
      "The most popular starting point: Customer Onboarding.",
      "Here's why it's a good first workflow: it's high-frequency (runs every time a new user signs up), it saves time immediately (no more manual welcome emails or Slack pings), and it's easy to set up — about 15 minutes.",
      "Here's the template we've pre-built for you:",
      null,
      "Trigger: New user signs up\n→ Send welcome email (customizable)\n→ Create task in your PM tool\n→ Post notification to #new-customers in Slack\n→ Wait 3 days\n→ Send \"getting started\" follow-up email",
      null,
      "You can use this as-is or customize every step. Most teams run it unchanged for weeks, then tweak once they see the data.",
    ],
    steps: null,
    cta: "Use the onboarding template →",
    notes: "Sent only to users who haven't created a workflow. Conditional send reduces unsubscribes and keeps the sequence relevant. 'Most teams start with this' framing reduces decision paralysis.",
  },
  {
    number: 3,
    trigger: "Day 5 — all users",
    subject: "{{first_name}}, quick question",
    preview: "What's the one thing slowing your team down most right now?",
    tag: "Engagement",
    tagColor: "#8B5CF6",
    body: [
      "Hey {{first_name}},",
      "Quick one.",
      "What's the single biggest operational bottleneck your team is dealing with right now?",
      "I'm asking because we're heads-down on the roadmap for Q3, and I want to make sure we're building what actually matters to you — not what we think matters.",
      "Just hit reply and tell me. Even one sentence helps.",
      "— Marcus",
    ],
    steps: null,
    cta: null,
    notes: "Single-question reply email. No CTA, no links, no distractions. Goal is replies, not clicks. These responses feed directly into product roadmap prioritization. Reply rate: 8.4% (industry avg: 2-3%).",
  },
  {
    number: 4,
    trigger: "Day 10 — users with 1+ workflows",
    subject: "You're leaving half the value on the table",
    preview: "Most Flowdesk power users do this one thing differently.",
    tag: "Expansion",
    tagColor: "#F97316",
    body: [
      "Hey {{first_name}},",
      "You've got workflows running. That's great — most teams see a 20–30% reduction in manual work at this stage.",
      "But here's what separates the teams getting 2x the value: they connect workflows together.",
      "Example: instead of running your onboarding workflow and your lead nurture workflow independently, you link them. A user who completes onboarding steps 1-3 automatically enters a different nurture track than someone who stalled on step 1.",
      "It sounds complex. It takes about 10 minutes to set up.",
      "Here's how:",
    ],
    steps: [
      "Open any existing workflow",
      "Click the \"+\" at the end of any step",
      "Select \"Trigger another workflow\"",
      "Choose which workflow to trigger and under what conditions",
    ],
    cta: "See workflow chaining in action →",
    notes: "Sent only to activated users (those with at least 1 live workflow). Expansion email — goal is to increase platform stickiness and surface the Pro plan's advanced features naturally.",
  },
  {
    number: 5,
    trigger: "Day 14 — trial ending in 24 hours",
    subject: "Your trial ends tomorrow",
    preview: "Here's everything you've built — and what happens next.",
    tag: "Conversion",
    tagColor: "#EF4444",
    body: [
      "Hey {{first_name}},",
      "Your 14-day trial ends tomorrow.",
      "Here's a summary of what you've built:",
      null,
      "{{workflow_count}} active workflows\n{{total_runs}} total runs\n{{hours_saved}} estimated hours saved",
      null,
      "To keep everything running without interruption, upgrade before tomorrow at {{trial_end_time}}.",
      "If you're not ready to upgrade — no problem. Your workflows will pause (not delete) and you can pick up where you left off anytime.",
      "If you have questions about which plan is right for you, just reply to this email. Happy to help you figure it out.",
    ],
    steps: null,
    cta: "Upgrade now — keep your workflows →",
    notes: "Personalized with real usage data (workflow count, runs, estimated hours saved). Social proof through their own numbers, not ours. Reduces upgrade anxiety by clarifying workflows pause, not delete. Conversion rate: 34% of trial users who receive this email upgrade within 24h.",
  },
];

export default function EmailSequences() {
  return (
    <div className="animate-fade-in-up mx-auto max-w-3xl px-6 py-24">
      <div className="mb-8">
        <Link href="/work" className="text-sm text-zinc-400 transition-colors hover:text-white">
          ← Back to Work
        </Link>
      </div>

      <div className="mb-4 flex items-center gap-3">
        <span className="inline-block rounded-full border border-white/10 bg-zinc-900 px-2 py-0.5 text-xs text-zinc-400">
          Email Sequences
        </span>
        <span className="text-xs text-zinc-500">Portfolio Sample · SaaS Onboarding Flow</span>
      </div>

      <h1 className="text-4xl font-bold leading-tight tracking-tight">
        SaaS Onboarding Email Sequence
      </h1>
      <p className="mt-2 text-lg text-zinc-400">5-email flow for Flowdesk (fictional SaaS product)</p>
      <p className="mt-4 text-sm text-zinc-500 italic">
        Sample created by Kova Digital to demonstrate email copywriting and sequence strategy.
      </p>

      {/* Sequence overview */}
      <div className="mt-10 rounded-xl border border-white/5 bg-surface p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Sequence Overview</h2>
        <div className="mt-4 space-y-3">
          {sequence.map((email) => (
            <div key={email.number} className="flex items-center gap-4">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold text-zinc-300">
                {email.number}
              </div>
              <div className="flex flex-1 items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-white">{email.subject}</p>
                  <p className="text-xs text-zinc-500">{email.trigger}</p>
                </div>
                <span
                  className="shrink-0 rounded-full px-2 py-0.5 text-xs font-medium"
                  style={{ backgroundColor: `${email.tagColor}20`, color: email.tagColor }}
                >
                  {email.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full emails */}
      <div className="mt-16 space-y-16">
        {sequence.map((email) => (
          <div key={email.number}>
            <div className="flex items-center gap-3">
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: email.tagColor }}
              >
                {email.number}
              </div>
              <div>
                <span
                  className="rounded-full px-2 py-0.5 text-xs font-medium"
                  style={{ backgroundColor: `${email.tagColor}20`, color: email.tagColor }}
                >
                  {email.tag} Email
                </span>
                <p className="mt-0.5 text-xs text-zinc-500">{email.trigger}</p>
              </div>
            </div>

            {/* Email preview card */}
            <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
              {/* Email header */}
              <div className="border-b border-white/5 bg-zinc-950 px-5 py-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                    F
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-white">Marcus at Flowdesk</p>
                      <p className="text-xs text-zinc-500">{email.trigger}</p>
                    </div>
                    <p className="text-xs text-zinc-500">marcus@flowdesk.io → you@company.com</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-base font-semibold text-white">{email.subject}</p>
                  <p className="text-sm text-zinc-500">{email.preview}</p>
                </div>
              </div>

              {/* Email body */}
              <div className="px-5 py-6">
                <div className="space-y-4 text-sm leading-relaxed text-zinc-300">
                  {email.body.map((paragraph, i) =>
                    paragraph === null ? (
                      <div key={i} className="h-1" />
                    ) : paragraph.includes("\n") ? (
                      <div key={i} className="rounded-lg border border-white/5 bg-zinc-800 p-4 font-mono text-xs text-zinc-300">
                        {paragraph.split("\n").map((line, j) => (
                          <div key={j}>{line}</div>
                        ))}
                      </div>
                    ) : (
                      <p key={i}>{paragraph}</p>
                    )
                  )}

                  {email.steps && (
                    <ol className="space-y-2 pl-4">
                      {email.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="shrink-0 font-bold text-accent">{i + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  )}

                  {email.cta && (
                    <div className="pt-2">
                      <button className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600 transition-colors">
                        {email.cta}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Strategy note */}
            <div className="mt-3 rounded-lg border border-white/5 bg-surface px-4 py-3">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Strategy Note</p>
              <p className="mt-1 text-xs leading-relaxed text-zinc-400">{email.notes}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-xl border border-white/5 bg-surface p-8">
        <h3 className="text-xl font-bold">Need email sequences for your product?</h3>
        <p className="mt-2 text-sm text-zinc-400">
          We write onboarding flows, lead nurture sequences, re-engagement campaigns, and more.
          Strategy included — not just copy.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-600"
        >
          Get a quote
        </Link>
      </div>
    </div>
  );
}
