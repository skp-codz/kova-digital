"use client";

import { useState, type FormEvent } from "react";

const channels = [
  {
    title: "Email",
    description: "hello@kova-digital.com",
    href: "mailto:hello@kova-digital.com",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Upwork",
    description: "Hire us on Upwork",
    href: "https://upwork.com",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
      </svg>
    ),
  },
  {
    title: "Fiverr",
    description: "Hire us on Fiverr",
    href: "https://fiverr.com",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.838.272-.838.788v.263h1.688v1.276h-1.69v3.837h-1.497v-3.837h-.906v-1.276h.906v-.307c0-1.199.728-1.953 2.092-1.953h1.095v1.209zm-4.357 5.113h-1.496v-3.837h-.907v-1.276h.907v-.307c0-1.199.727-1.953 2.091-1.953h1.096v1.209h-.85c-.547 0-.84.272-.84.788v.263h1.69v1.276h-1.691v3.837zm-3.782 0h1.496V15.59h-1.496v1.406zm0-1.953h1.496v-1.276h-1.496v1.276zM7.854 17h1.497v-3.837h.906V11.89h-.906v-.307c0-.515.292-.787.838-.787h.85V9.586h-1.094c-1.365 0-2.092.754-2.092 1.953v.307H6.95v1.276h.905V17zm-3.24-1.03c-.623 0-1.04-.404-1.04-1.016 0-.614.417-1.015 1.04-1.015.625 0 1.043.4 1.043 1.015 0 .612-.418 1.015-1.043 1.015zM.49 15.59c0 1.118.772 1.86 2.124 1.86 1.353 0 2.125-.742 2.125-1.86 0-1.116-.772-1.857-2.125-1.857C1.262 13.733.49 14.474.49 15.59z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const service = data.get("service") as string;
    const budget = data.get("budget") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`New inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\nBudget: ${budget}\n\n${message}`
    );
    window.location.href = `mailto:hello@kova-digital.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const selectClass =
    "w-full rounded-lg border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent appearance-none";

  return (
    <div className="animate-fade-in-up mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-4xl font-bold">Get in Touch</h1>
      <p className="mt-4 max-w-xl text-zinc-400">
        Ready to start a project? Reach out through any channel below or fill
        out the form.
      </p>

      {/* Channel Cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {channels.map((channel) => (
          <a
            key={channel.title}
            href={channel.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-white/5 bg-surface p-6 transition-colors hover:border-white/10"
          >
            <div className="text-accent">{channel.icon}</div>
            <div>
              <h3 className="font-semibold">{channel.title}</h3>
              <p className="text-sm text-zinc-400">{channel.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <div className="mt-16 max-w-xl">
        {submitted ? (
          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-8 text-center">
            <h3 className="text-xl font-semibold text-green-400">
              Message sent!
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Your email client should have opened. We&apos;ll get back to you
              within 4 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-accent"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="service" className="mb-2 block text-sm font-medium">
                Service Interested In
              </label>
              <select id="service" name="service" required className={selectClass}>
                <option value="" disabled selected>Select a service</option>
                <option value="Web Development">Web Development</option>
                <option value="Content & SEO">Content &amp; SEO</option>
                <option value="Market Intelligence">Market Intelligence</option>
                <option value="Email Sequences">Email Sequences</option>
                <option value="Programmatic SEO">Programmatic SEO</option>
                <option value="SaaS Development">SaaS Development</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="mb-2 block text-sm font-medium">
                Budget Range
              </label>
              <select id="budget" name="budget" required className={selectClass}>
                <option value="" disabled selected>Select a budget</option>
                <option value="Under $500">Under $500</option>
                <option value="$500–$1,000">$500–$1,000</option>
                <option value="$1,000–$5,000">$1,000–$5,000</option>
                <option value="$5,000+">$5,000+</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-accent"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
