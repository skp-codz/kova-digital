import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programmatic SEO Demo — Portfolio | Kova Digital",
  description:
    "A live demo of a programmatic SEO directory site built by Kova Digital. See how we generate hundreds of optimized pages from structured data.",
};

const tools = [
  { name: "Asana", category: "Project Management", audience: "Remote Teams", rating: 4.5, reviews: 12400, price: "$10.99/user/mo", bestFor: "Cross-functional teams of 10–50", badge: "Editor's Pick" },
  { name: "Linear", category: "Project Management", audience: "Engineering Teams", rating: 4.8, reviews: 6200, price: "$8/user/mo", bestFor: "Dev teams who move fast", badge: "Top Rated" },
  { name: "Notion", category: "Project Management", audience: "Small Teams", rating: 4.4, reviews: 18700, price: "$10/user/mo", bestFor: "Teams that need docs + PM in one place", badge: null },
  { name: "ClickUp", category: "Project Management", audience: "All-in-One Seekers", rating: 4.3, reviews: 21000, price: "Free · $7/user/mo", bestFor: "Teams replacing multiple tools", badge: "Most Popular" },
  { name: "Monday.com", category: "Project Management", audience: "Non-Technical Teams", rating: 4.2, reviews: 15300, price: "$9/seat/mo", bestFor: "Zero-learning-curve adoption", badge: null },
  { name: "Basecamp", category: "Project Management", audience: "Agencies & Small Studios", rating: 4.1, reviews: 8900, price: "$299/mo flat", bestFor: "Simple, async-first teams", badge: null },
  { name: "Jira", category: "Project Management", audience: "Enterprise Dev Teams", rating: 4.0, reviews: 29400, price: "$7.75/user/mo", bestFor: "Large engineering organizations", badge: null },
  { name: "Trello", category: "Project Management", audience: "Freelancers", rating: 4.3, reviews: 22100, price: "Free · $5/user/mo", bestFor: "Visual thinkers with simple workflows", badge: null },
  { name: "Shortcut", category: "Project Management", audience: "Product Teams", rating: 4.6, reviews: 3100, price: "$8.50/user/mo", bestFor: "Product and engineering alignment", badge: null },
  { name: "Height", category: "Project Management", audience: "Startups", rating: 4.4, reviews: 1800, price: "Free · $6.99/user/mo", bestFor: "Early-stage teams moving fast", badge: "Rising Star" },
  { name: "Teamwork", category: "Project Management", audience: "Client Services Teams", rating: 4.2, reviews: 7600, price: "$9.99/user/mo", bestFor: "Agencies managing client projects", badge: null },
  { name: "Wrike", category: "Project Management", audience: "Marketing Teams", rating: 4.1, reviews: 11200, price: "$9.80/user/mo", bestFor: "Marketing and creative operations", badge: null },
];

const categories = ["All", "Remote Teams", "Engineering Teams", "Small Teams", "Agencies & Small Studios", "Freelancers", "Startups"];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-3.5 w-3.5 ${star <= Math.floor(rating) ? "text-yellow-400" : star - 0.5 <= rating ? "text-yellow-400/60" : "text-zinc-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProgrammaticSEODemo() {
  return (
    <div className="animate-fade-in-up">
      {/* Portfolio Banner */}
      <div className="border-b border-accent/20 bg-accent/5 px-6 py-3 text-center">
        <p className="text-sm text-zinc-400">
          <span className="font-medium text-accent">Kova Digital — Programmatic SEO Demo</span>
          {" · "}This directory demonstrates how we generate scalable, SEO-optimized pages from structured data.{" "}
          <Link href="/work/programmatic-seo" className="underline hover:text-white">
            Read the guide
          </Link>
          {" · "}
          <Link href="/contact" className="underline hover:text-white">
            Build your own
          </Link>
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface px-3 py-1 text-xs text-zinc-400">
            <span className="text-accent">●</span> Programmatic SEO Demo Site
          </div>
          <h1 className="text-4xl font-bold md:text-5xl">
            Best Project Management Tools
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            A curated directory of project management tools — rated, reviewed, and matched to your team type.
            Updated April 2026.
          </p>
          <div className="mt-3 flex items-center justify-center gap-6 text-sm text-zinc-500">
            <span>{tools.length} tools reviewed</span>
            <span>·</span>
            <span>{tools.reduce((a, t) => a + t.reviews, 0).toLocaleString()}+ user reviews analyzed</span>
            <span>·</span>
            <span>Last updated Apr 2026</span>
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                cat === "All"
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-white/10 text-zinc-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tool grid */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group relative rounded-xl border border-white/5 bg-surface p-6 transition-colors hover:border-white/10"
            >
              {tool.badge && (
                <div className="absolute right-4 top-4">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    tool.badge === "Editor's Pick" ? "bg-yellow-400/10 text-yellow-400" :
                    tool.badge === "Top Rated" ? "bg-green-400/10 text-green-400" :
                    tool.badge === "Most Popular" ? "bg-blue-400/10 text-blue-400" :
                    tool.badge === "Rising Star" ? "bg-purple-400/10 text-purple-400" :
                    "bg-zinc-700 text-zinc-400"
                  }`}>
                    {tool.badge}
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between pr-24">
                <div>
                  <h3 className="text-lg font-bold text-white">{tool.name}</h3>
                  <p className="text-xs text-zinc-500">{tool.category}</p>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <StarRating rating={tool.rating} />
                <span className="text-sm font-medium text-white">{tool.rating}</span>
                <span className="text-xs text-zinc-500">({tool.reviews.toLocaleString()} reviews)</span>
              </div>

              <div className="mt-4 space-y-1.5 text-sm">
                <div className="flex items-start gap-2">
                  <span className="shrink-0 text-zinc-500">Best for:</span>
                  <span className="text-zinc-300">{tool.bestFor}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="shrink-0 text-zinc-500">Audience:</span>
                  <span className="text-zinc-300">{tool.audience}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="shrink-0 text-zinc-500">Pricing:</span>
                  <span className="text-zinc-300">{tool.price}</span>
                </div>
              </div>

              <div className="mt-4 border-t border-white/5 pt-4">
                <button className="w-full rounded-lg border border-white/10 py-2 text-sm text-zinc-400 transition-colors hover:border-white/20 hover:text-white">
                  View full review →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* How this works section */}
        <div className="mt-20 rounded-xl border border-accent/20 bg-accent/5 p-8">
          <h2 className="text-xl font-bold">How This Demo Was Built</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">
            This directory is a live demonstration of programmatic SEO. Each tool card is generated from a
            structured data object — in a production site, this data would live in a database (Supabase,
            Airtable, or a CMS), and each tool would have its own dedicated page with a unique URL like{" "}
            <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-accent">/tools/asana</code> or{" "}
            <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-accent">/tools/linear</code>.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["12 tools shown here", "A production site would have 200–2,000+ entries, each targeting a unique long-tail keyword."],
              ["1 template, many pages", "Every tool page shares the same layout. Change the template once and every page updates."],
              ["SEO built in", "Each page gets a unique title, meta description, H1, and schema markup — all generated from the data."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-lg border border-white/5 bg-zinc-900/50 p-4">
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <Link
              href="/work/programmatic-seo"
              className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-white/20"
            >
              Read the full guide →
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
            >
              Build a site like this
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
