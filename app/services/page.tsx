import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Kova Digital",
};

const services = [
  {
    title: "SEO Content Writing",
    description:
      "Keyword-researched articles that rank on Google and drive organic traffic to your site.",
  },
  {
    title: "Web Development",
    description:
      "Fast, responsive websites built with modern frameworks. Designed to convert visitors into customers.",
  },
  {
    title: "Market Research",
    description:
      "Deep-dive competitor and market analysis so you can make data-driven decisions with confidence.",
  },
  {
    title: "Email Sequences",
    description:
      "Automated email flows that nurture leads, onboard users, and recover abandoned carts.",
  },
  {
    title: "Programmatic SEO",
    description:
      "Scalable page generation targeting long-tail keywords to capture thousands of search queries.",
  },
  {
    title: "SaaS Development",
    description:
      "End-to-end SaaS product development — from idea validation to a live, paying product.",
  },
];

export default function Services() {
  return (
    <div className="animate-fade-in-up mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-4xl font-bold">Services</h1>
      <p className="mt-4 max-w-xl text-zinc-400">
        Everything you need to launch, grow, and scale your online business.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-white/5 bg-surface p-6 transition-colors hover:border-white/10"
          >
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-16 rounded-xl border border-white/5 bg-surface p-8 text-center">
        <h2 className="text-2xl font-bold">Ready to get started?</h2>
        <p className="mt-3 text-zinc-400">
          Tell us about your project and we&apos;ll get back to you within 4 hours.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
        >
          Get a quote
        </Link>
      </div>
    </div>
  );
}
