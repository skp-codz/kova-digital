import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI-Powered Content Creation Tools — Market Landscape Report 2026 | Kova Digital",
  description:
    "A full market landscape report covering the AI content creation space — competitor analysis, market sizing, pricing strategy, and go-to-market insights.",
};

const competitors = [
  {
    name: "Jasper",
    positioning: "AI copilot for enterprise marketing teams",
    funding: "$131M",
    arr: "~$180M",
    segment: "Long-form + Enterprise",
    color: "#F97316",
    strengths: [
      "First-mover brand recognition in AI content",
      "Largest template library (50+ use cases)",
      "Enterprise features: brand voice, knowledge base, campaign workflows",
      "Recent pivot to 'marketing AI platform' positions beyond just writing",
    ],
    weaknesses: [
      "Pricing increased 40% since 2024, alienating solo creators",
      "Feature bloat for smaller customers",
      "Brand voice requires significant setup investment",
      "Increasing churn among freelancer and SMB segments",
    ],
    assessment: "Jasper's enterprise pivot is strategically sound but creates a vacuum in the SMB and solo creator segments. This creates an opening for competitors who focus on simplicity and value.",
  },
  {
    name: "Copy.ai",
    positioning: "AI-powered go-to-market platform",
    funding: "$13.9M",
    arr: "~$45M",
    segment: "Marketing copy + GTM workflows",
    color: "#3B82F6",
    strengths: [
      "Aggressive pivot from writing tool to GTM workflow platform",
      "Free tier drives massive top-of-funnel acquisition",
      "Strong CRM integrations (HubSpot, Salesforce, Outreach)",
      "Product-led growth model with efficient user acquisition",
    ],
    weaknesses: [
      "Identity crisis: writing tool or sales tool?",
      "GTM pivot may alienate pure content marketing users",
      "Free tier users have ~2% conversion rates",
      "Smaller training dataset than Jasper for specialized content",
    ],
    assessment: "Copy.ai's GTM pivot is a smart differentiation play to escape the commoditizing 'AI writer' category. Smart strategically, but risky — competing with established sales enablement tools while losing content marketing users.",
  },
  {
    name: "Writer",
    positioning: "Full-stack generative AI platform for enterprises",
    funding: "$200M+",
    arr: "~$120M",
    segment: "Enterprise content governance",
    color: "#8B5CF6",
    strengths: [
      "Purpose-built for enterprise from day one",
      "Content governance, compliance, and brand consistency features",
      "Custom AI models (Palmyra LLMs) trained on company data",
      "SOC 2 Type II certified, HIPAA-eligible",
    ],
    weaknesses: [
      "No SMB or self-serve offering — purely enterprise sales motion",
      "Long sales cycles (3–6 months)",
      "Requires significant change management for adoption",
      "High minimum contract values exclude most buyers",
    ],
    assessment: "Writer owns the enterprise content governance niche. Their proprietary LLMs and compliance certifications create genuine moats. However, their TAM is limited to enterprise buyers who need governance.",
  },
  {
    name: "Surfer SEO",
    positioning: "Write and optimize content that ranks",
    funding: "Bootstrapped",
    arr: "~$35M",
    segment: "SEO content optimization",
    color: "#10B981",
    strengths: [
      "Best-in-class NLP-based SEO content scoring",
      "SERP analysis integrated directly into the editor",
      "Content audit feature for existing content",
      "Profitable and bootstrapped — no VC pressure",
    ],
    weaknesses: [
      "AI writing quality lags behind dedicated AI writers",
      "Pricing increased significantly — $89/mo minimum",
      "Limited to blog/article format only",
      "Enterprise features underdeveloped",
    ],
    assessment: "Surfer SEO owns a defensible niche at the intersection of SEO and content. The risk: being squeezed by AI writers adding SEO features and SEO platforms adding AI writing.",
  },
  {
    name: "Frase",
    positioning: "Research, write, and optimize SEO content",
    funding: "$5.5M",
    arr: "~$15M",
    segment: "SEO research + content briefs",
    color: "#EF4444",
    strengths: [
      "Best content brief generation in the market",
      "Research workflow: analyze SERPs → brief → write → optimize",
      "Most affordable entry point among serious SEO tools ($15/mo)",
      "Clean, focused product",
    ],
    weaknesses: [
      "AI writing quality adequate but not competitive",
      "Smaller team, slower feature development",
      "Limited integrations",
      "No enterprise features",
    ],
    assessment: "Frase occupies a valuable position as the affordable, research-first content tool. The risk: remaining a niche tool while competitors add similar research features to broader platforms.",
  },
];

export default function MarketResearchReport() {
  return (
    <div className="animate-fade-in-up mx-auto max-w-3xl px-6 py-24">
      <div className="mb-8">
        <Link href="/work" className="text-sm text-zinc-400 transition-colors hover:text-white">
          ← Back to Work
        </Link>
      </div>

      <div className="mb-4 flex items-center gap-3">
        <span className="inline-block rounded-full border border-white/10 bg-zinc-900 px-2 py-0.5 text-xs text-zinc-400">
          Market Intelligence
        </span>
        <span className="text-xs text-zinc-500">April 2026 · Portfolio Sample</span>
      </div>

      <h1 className="text-4xl font-bold leading-tight tracking-tight">
        AI-Powered Content Creation Tools
      </h1>
      <h2 className="mt-2 text-2xl font-normal text-zinc-400">Market Landscape Report 2026</h2>
      <p className="mt-4 text-zinc-500 text-sm italic">Prepared by Kova Digital Research &amp; Intelligence Division · Confidential — Portfolio Sample</p>

      {/* Executive Summary */}
      <div className="mt-12 rounded-xl border border-accent/20 bg-accent/5 p-8">
        <h2 className="text-xl font-bold text-accent">Executive Summary</h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          The AI content creation market has matured significantly since the ChatGPT-driven explosion of 2023–2024.
          What was once a novelty is now infrastructure — an estimated 67% of content marketing teams use AI tools
          in some part of their workflow as of Q1 2026.
        </p>
        <div className="mt-6 space-y-2 text-sm text-zinc-400">
          <p className="font-medium text-white">Key findings:</p>
          <ul className="space-y-1.5 pl-4">
            <li>• Global AI content creation market valued at approximately <strong className="text-white">$15.8B in 2026</strong>, growing at 28% CAGR</li>
            <li>• Market consolidating around 5–6 major platforms, with long-tail fragmentation in vertical niches</li>
            <li>• Pricing pressure intensifying — average per-seat cost has dropped <strong className="text-white">35% since 2024</strong></li>
            <li>• Next competitive frontier is <strong className="text-white">workflow integration</strong>, not content quality (quality has commoditized)</li>
            <li>• Enterprise customers now represent <strong className="text-white">45% of revenue</strong> but only 12% of accounts — ARPU divergence widening</li>
          </ul>
        </div>
      </div>

      {/* Market Size */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">1. Market Overview</h2>

        <div className="mt-6 overflow-x-auto rounded-xl border border-white/5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 bg-surface text-left">
                <th className="px-4 py-3 font-medium text-zinc-400">Metric</th>
                <th className="px-4 py-3 font-medium text-zinc-400">2024</th>
                <th className="px-4 py-3 font-medium text-zinc-400">2025</th>
                <th className="px-4 py-3 font-medium text-zinc-400">2026 (est.)</th>
                <th className="px-4 py-3 font-medium text-zinc-400">2027 (proj.)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Global market value", "$8.2B", "$11.9B", "$15.8B", "$20.4B"],
                ["YoY growth rate", "52%", "45%", "33%", "29%"],
                ["Number of tools tracked", "450+", "380+", "320+", "~280"],
                ["Enterprise adoption rate", "34%", "52%", "67%", "78%"],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-surface/50">
                  <td className="px-4 py-3 font-medium text-white">{row[0]}</td>
                  {row.slice(1).map((cell, i) => (
                    <td key={i} className="px-4 py-3 text-zinc-400">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-zinc-400">
          Note the declining number of tools — the market is consolidating. Over 130 AI content tools have
          shut down, been acquired, or pivoted since 2024.
        </p>

        <h3 className="mt-10 text-xl font-bold">Market Segmentation</h3>
        <div className="mt-4 space-y-3">
          {[
            ["Long-form content (blogs, articles)", "35%", "25%", "#3B82F6", "Jasper, Copy.ai, Writer"],
            ["Marketing copy (ads, emails, social)", "25%", "22%", "#10B981", "Copy.ai, Jasper, Anyword"],
            ["SEO content optimization", "18%", "35%", "#8B5CF6", "Surfer SEO, Clearscope, Frase"],
            ["Video script and multimedia", "12%", "45%", "#F97316", "Descript, Synthesia, InVideo"],
            ["Enterprise content ops", "10%", "40%", "#EF4444", "Writer, Jasper, Acrolinx"],
          ].map(([segment, share, growth, color, players]) => (
            <div key={segment} className="rounded-lg border border-white/5 bg-surface p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-sm font-medium text-white">{segment}</span>
                </div>
                <div className="flex gap-6 text-xs text-zinc-400">
                  <span>{share} of market</span>
                  <span className="text-green-400">{growth} growth</span>
                </div>
              </div>
              <p className="mt-1 pl-6 text-xs text-zinc-500">Key players: {players}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Competitor Deep Dives */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">2. Competitive Landscape</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-white/5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 bg-surface text-left">
                {["Company", "Funding", "Est. ARR (2026)", "Primary Segment"].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium text-zinc-400">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {competitors.map((c) => (
                <tr key={c.name} className="hover:bg-surface/50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} />
                      <span className="font-medium text-white">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-zinc-400">{c.funding}</td>
                  <td className="px-4 py-3 text-zinc-400">{c.arr}</td>
                  <td className="px-4 py-3 text-zinc-400">{c.segment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 space-y-8">
          {competitors.map((c) => (
            <div key={c.name} className="rounded-xl border border-white/5 bg-surface p-8">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${c.color}20`, border: `1px solid ${c.color}40` }}>
                  <div className="h-4 w-4 rounded-full" style={{ backgroundColor: c.color }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{c.name}</h3>
                  <p className="text-sm text-zinc-400">&ldquo;{c.positioning}&rdquo;</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">Strengths</h4>
                  <ul className="space-y-1">
                    {c.strengths.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-zinc-400">
                        <span className="mt-0.5 text-green-400 shrink-0">+</span>{s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">Weaknesses</h4>
                  <ul className="space-y-1">
                    {c.weaknesses.map((w) => (
                      <li key={w} className="flex items-start gap-2 text-sm text-zinc-400">
                        <span className="mt-0.5 text-red-400 shrink-0">−</span>{w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-white/5 bg-zinc-900/50 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Strategic Assessment</p>
                <p className="mt-1 text-sm text-zinc-300">{c.assessment}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Market Trends */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">3. Market Trends</h2>
        <div className="mt-6 space-y-4">
          {[
            ["Quality Commoditization", "AI-generated content quality has converged. The difference between Jasper, Copy.ai, and Claude/GPT-4 direct access is negligible for most use cases. This shifts competitive advantage from 'better AI' to 'better workflow.'"],
            ["Integration as Moat", "The winning tools in 2026 are those most deeply integrated into existing workflows. Surfer SEO's WordPress plugin, Writer's Chrome extension, and Copy.ai's CRM integrations create switching costs that raw content quality cannot."],
            ["Enterprise Migration", "Enterprise budgets are consolidating from multiple point tools to platform solutions. A company using Jasper + Surfer + Grammarly in 2024 now wants one platform."],
            ["Pricing Pressure", "Open-source alternatives and direct API access to Claude/GPT-4 are creating downward pricing pressure. Tools must justify their markup with workflow, integrations, and ease of use."],
            ["Regulatory Awareness", "EU AI Act provisions around content disclosure are creating demand for AI content governance tools. This benefits Writer and Jasper's enterprise tiers while creating compliance risks for tools without audit trails."],
          ].map(([title, body], i) => (
            <div key={title} className="rounded-xl border border-white/5 bg-surface p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Opportunities */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">4. Strategic Opportunities</h2>
        <div className="mt-6 space-y-6">
          {[
            {
              title: "Mid-Market Content Operations Platform",
              target: "Marketing teams of 10–50 people",
              gap: "No tool serves this segment with the right mix of content quality, SEO optimization, brand governance, and workflow automation at $200–500/mo",
              approach: "Build a workflow-first platform that embeds AI as a capability, not the product",
            },
            {
              title: "Vertical-Specific Content Tools",
              target: "Regulated industries (legal, healthcare, financial services)",
              gap: "Compliance-first content creation with industry-specific training data at accessible price points",
              approach: "Fork a general-purpose tool and specialize for one vertical, including compliance templates and audit trails",
            },
            {
              title: "Content Performance Analytics",
              target: "Content marketing teams measuring ROI",
              gap: "No tool effectively connects content creation to business outcomes (leads, revenue, rankings)",
              approach: "Build the analytics layer that sits on top of any AI writing tool and connects content to conversion data",
            },
          ].map((opp) => (
            <div key={opp.title} className="rounded-xl border border-accent/20 bg-accent/5 p-6">
              <h3 className="font-bold text-white">{opp.title}</h3>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex gap-2"><span className="shrink-0 font-medium text-zinc-400">Target:</span><span className="text-zinc-300">{opp.target}</span></div>
                <div className="flex gap-2"><span className="shrink-0 font-medium text-zinc-400">Gap:</span><span className="text-zinc-300">{opp.gap}</span></div>
                <div className="flex gap-2"><span className="shrink-0 font-medium text-zinc-400">Approach:</span><span className="text-zinc-300">{opp.approach}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16 rounded-xl border border-white/5 bg-surface p-8">
        <h3 className="text-xl font-bold">Need custom market research?</h3>
        <p className="mt-2 text-sm text-zinc-400">
          Kova Digital produces competitor analysis, market sizing, and strategic intelligence reports.
          Professional PDF format, 10–40+ pages, executive summary included.
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
