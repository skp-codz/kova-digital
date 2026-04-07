import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Kova Digital",
};

const services = [
  {
    title: "SEO Content Writing",
    price: "From $55",
    description:
      "Keyword-researched articles that rank on Google and drive organic traffic to your site.",
  },
  {
    title: "Web Development",
    price: "From $350",
    description:
      "Fast, responsive websites built with modern frameworks. Designed to convert visitors into customers.",
  },
  {
    title: "Market Research",
    price: "From $85",
    description:
      "Deep-dive competitor and market analysis so you can make data-driven decisions with confidence.",
  },
  {
    title: "Email Sequences",
    price: "From $100",
    description:
      "Automated email flows that nurture leads, onboard users, and recover abandoned carts.",
  },
  {
    title: "Programmatic SEO",
    price: "From $600",
    description:
      "Scalable page generation targeting long-tail keywords to capture thousands of search queries.",
  },
  {
    title: "SaaS Development",
    price: "From $1,200",
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
            <p className="mt-1 text-sm font-medium text-accent">
              {service.price}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
