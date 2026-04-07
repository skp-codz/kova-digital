import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "7 Best Project Management Tools for Remote Teams (2026) | Kova Digital",
  description:
    "We tested the top project management tools for remote teams. Here's our ranked list with pricing, pros, cons, and which tool fits your team size and workflow.",
};

const tools = [
  {
    rank: 1,
    name: "Linear",
    rating: "9.2/10",
    price: "Free · $8/user/mo",
    bestFor: "Engineering-led remote teams",
    color: "#3B82F6",
    pros: [
      "Keyboard-first design — instant interactions",
      "GitHub/GitLab sync for automatic issue-to-PR linking",
      "Automatic status updates reduce status-check messages",
      "Cycles (sprints) and roadmaps built in",
    ],
    cons: [
      "Not ideal for non-technical teams",
      "Limited customization vs. Asana or Monday",
      "No built-in time tracking",
    ],
    summary:
      "Linear is what happens when engineers build a PM tool for themselves. It's genuinely fast, opinionated in the right ways, and reduces async overhead significantly for dev teams.",
  },
  {
    rank: 2,
    name: "Asana",
    rating: "8.8/10",
    price: "Free (10 users) · $10.99/user/mo",
    bestFor: "Cross-functional teams of 10–50",
    color: "#F97316",
    pros: [
      "Multiple views: list, board, timeline, calendar",
      "Automations for routine handoffs and notifications",
      "Portfolios for leadership visibility across projects",
      "Guest access for contractors/clients without full seats",
    ],
    cons: [
      "Free tier limited to 10 users",
      "Can feel overwhelming for small teams",
      "Mobile app lags behind desktop",
    ],
    summary:
      "The Swiss Army knife of project management. Best if your team spans multiple functions and needs a tool flexible enough to accommodate different work styles.",
  },
  {
    rank: 3,
    name: "Notion",
    rating: "8.5/10",
    price: "Free · $10/user/mo",
    bestFor: "Documentation-heavy remote teams",
    color: "#6B7280",
    pros: [
      "Projects, docs, meeting notes, and SOPs in one place",
      "Database views handle most PM needs",
      "Async-first by design",
      "Templates standardize processes across the team",
    ],
    cons: [
      "Weaker on complex PM (no Gantt, resource allocation)",
      "Becomes disorganized without discipline",
      "Performance slows on large workspaces",
    ],
    summary:
      "Best for teams that struggle with information scattered across Google Docs, Slack, and email. Notion centralizes everything — at the cost of some PM power.",
  },
  {
    rank: 4,
    name: "Monday.com",
    rating: "8.3/10",
    price: "$9/seat/mo",
    bestFor: "Non-technical teams, operations, small businesses",
    color: "#EF4444",
    pros: [
      "Lowest learning curve — teams productive within hours",
      "Visual dashboards for leadership visibility",
      "No-code automations via simple trigger/action builder",
      "200+ integrations including Slack, Zoom, HubSpot",
    ],
    cons: [
      "Per-seat pricing gets expensive at scale",
      "Free tier limited to 2 users",
      "Power users may find it limiting",
    ],
    summary:
      "If your team resists adopting new tools, Monday removes that objection. The familiar spreadsheet-like interface has zero learning curve.",
  },
  {
    rank: 5,
    name: "ClickUp",
    rating: "8.1/10",
    price: "Free (unlimited users) · $7/user/mo",
    bestFor: "Teams wanting one tool to replace several",
    color: "#8B5CF6",
    pros: [
      "Free tier includes unlimited users — rare",
      "Built-in docs, goals, and time tracking",
      "Highly customizable views and workflows",
      "AI features for summarizing updates",
    ],
    cons: [
      "Steep learning curve — weeks to set up properly",
      "Performance can be sluggish on large workspaces",
      "Trying to do everything means nothing feels polished",
    ],
    summary:
      "ClickUp's value proposition is replacing 5 tools with 1. Budget for a week of setup time and you'll get a powerful all-in-one workspace.",
  },
  {
    rank: 6,
    name: "Basecamp",
    rating: "7.8/10",
    price: "$15/user/mo · $299/mo flat (unlimited users)",
    bestFor: "Small teams that value simplicity, agencies with client access",
    color: "#10B981",
    pros: [
      "Flat pricing — a bargain for teams over 20 people",
      "Automatic check-ins replace daily standups",
      "Hill Charts for unique async status updates",
      "Message boards replace Slack threads for long discussions",
    ],
    cons: [
      "Too simple for complex projects with dependencies",
      "No time tracking, workload management, or custom fields",
      "Fewer integrations than competitors",
    ],
    summary:
      "Basecamp takes the opposite approach from ClickUp — focused, opinionated, and simple. For teams that value async communication over project tracking, it's excellent.",
  },
  {
    rank: 7,
    name: "Trello",
    rating: "7.5/10",
    price: "Free · $5/user/mo",
    bestFor: "Freelancers, small teams with simple workflows",
    color: "#0EA5E9",
    pros: [
      "Easiest PM tool to start — create a board in 30 seconds",
      "Kanban boards make status obvious at a glance",
      "Generous free tier — unlimited boards and cards",
      "Butler automation for repetitive actions",
    ],
    cons: [
      "Limited for complex projects",
      "Boards unwieldy with 50+ cards",
      "Teams usually outgrow it within months",
    ],
    summary:
      "Trello popularized the Kanban board and remains the simplest way to visualize work. Start here, graduate to Asana or Linear when you outgrow it.",
  },
];

export default function ProjectManagementTools() {
  return (
    <div className="animate-fade-in-up mx-auto max-w-3xl px-6 py-24">
      <div className="mb-8">
        <Link href="/work" className="text-sm text-zinc-400 transition-colors hover:text-white">
          ← Back to Work
        </Link>
      </div>

      <div className="mb-4 flex items-center gap-3">
        <span className="inline-block rounded-full border border-white/10 bg-zinc-900 px-2 py-0.5 text-xs text-zinc-400">
          Content &amp; SEO
        </span>
        <span className="text-xs text-zinc-500">April 2026 · 10 min read</span>
      </div>

      <h1 className="text-4xl font-bold leading-tight tracking-tight">
        7 Best Project Management Tools for Remote Teams in 2026
      </h1>
      <p className="mt-4 text-zinc-400 italic">By Kova Digital</p>

      <p className="mt-8 text-lg leading-relaxed text-zinc-300">
        Managing a remote team without the right project management tool is like running a restaurant without
        a kitchen — technically possible, but nobody&apos;s going to enjoy the experience. We tested seven of
        the most popular platforms with remote teams ranging from 3 to 50 people. Here&apos;s what we found.
      </p>

      {/* Evaluation criteria */}
      <div className="mt-12 rounded-xl border border-white/5 bg-surface p-6">
        <h2 className="text-lg font-bold">How We Evaluated</h2>
        <div className="mt-4 space-y-2 text-sm text-zinc-400">
          {[
            ["Async collaboration (30%)", "Remote teams don't work simultaneously. The tool must support async updates without requiring real-time presence."],
            ["Ease of adoption (25%)", "If your team won't use it, it doesn't matter how powerful it is."],
            ["Integrations (20%)", "Remote teams use Slack, Zoom, Google Workspace, GitHub. Your PM tool needs to play nicely with all of them."],
            ["Pricing for remote teams (15%)", "Per-seat pricing adds up fast. Contractor and client access matters."],
            ["Reporting and visibility (10%)", "Managers need to see progress without scheduling another meeting."],
          ].map(([title, desc]) => (
            <div key={title} className="flex gap-3">
              <span className="shrink-0 font-medium text-white">{title}:</span>
              <span>{desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tool cards */}
      <div className="mt-16 space-y-12">
        {tools.map((tool) => (
          <div key={tool.name} className="rounded-xl border border-white/5 bg-surface p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-sm font-bold text-zinc-300">
                    {tool.rank}
                  </div>
                  <h3 className="text-2xl font-bold">{tool.name}</h3>
                </div>
                <p className="mt-1 text-sm text-zinc-400">Best for: {tool.bestFor}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-lg font-bold text-accent">{tool.rating}</div>
                <div className="text-xs text-zinc-500">{tool.price}</div>
              </div>
            </div>

            <div
              className="mt-4 h-1 w-full rounded-full bg-zinc-800"
            >
              <div
                className="h-1 rounded-full"
                style={{
                  backgroundColor: tool.color,
                  width: `${(parseFloat(tool.rating) / 10) * 100}%`,
                }}
              />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300">{tool.summary}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">Pros</h4>
                <ul className="space-y-1">
                  {tool.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="mt-0.5 text-green-400">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">Cons</h4>
                <ul className="space-y-1">
                  {tool.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="mt-0.5 text-zinc-600">−</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick comparison */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold">How to Choose</h2>
        <div className="mt-6 space-y-3">
          {[
            ["Engineering team", "Linear. Nothing else comes close for developer experience."],
            ["Cross-functional team of 10–50", "Asana. The flexibility to support different work styles is unmatched."],
            ["Need PM + docs in one tool", "Notion. Accept the PM limitations in exchange for having everything in one place."],
            ["Team resists new tools", "Monday.com. The learning curve is essentially zero."],
            ["Want to replace 5 tools with 1", "ClickUp. Budget for a week of setup time."],
            ["Value simplicity above all", "Basecamp. Especially if check-ins can replace your daily standups."],
            ["Small team, simple workflows", "Trello. Start here, graduate when you outgrow it."],
          ].map(([situation, rec]) => (
            <div key={situation} className="flex gap-3 rounded-lg border border-white/5 bg-surface p-4 text-sm">
              <span className="shrink-0 font-medium text-white">You&rsquo;re a {situation}:</span>
              <span className="text-zinc-400">{rec}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-xl border border-white/5 bg-surface p-8">
        <h3 className="text-xl font-bold">Need a custom internal tool?</h3>
        <p className="mt-2 text-sm text-zinc-400">
          Kova Digital builds custom dashboards, workflow automations, and internal tools for remote teams.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-600"
        >
          Let&apos;s talk
        </Link>
      </div>
    </div>
  );
}
