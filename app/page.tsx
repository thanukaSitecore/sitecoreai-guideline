// app/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen py-10 text-learning-charcoal">
      <div className="glass-card mx-auto flex max-w-5xl flex-col gap-10 rounded-3xl border border-learning-border/35 bg-white/90 p-8 shadow-[0_12px_35px_rgba(26,82,118,0.08)] md:flex-row md:items-center md:justify-between">
        <div className="space-y-6 md:max-w-2xl">
          <p className="inline-flex rounded-full border border-learning-teal/20 bg-learning-teal/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-learning-teal">
            Interactive Training Suite
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-learning-charcoal sm:text-6xl">
            SitecoreAI <span className="text-learning-teal">Headless</span>
            <br />
            <span className="text-learning-navy">Workshop</span>
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-learning-charcoal/80">
            Welcome to the developer playground for learning headless layouts,
            content APIs, and personalization rules. Work through the daily
            modules using live mock sandboxes.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/Day1/login"
              className="btn-primary inline-flex items-center justify-center rounded-xl px-7 py-3 text-sm"
            >
              Get Started
            </Link>
            <span className="btn-secondary inline-flex items-center rounded-xl px-5 py-3 text-sm">
              Est. time: 3.5 Hours
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center md:w-1/2">
          <div className="relative h-80 w-full max-w-[32rem] overflow-hidden rounded-3xl border border-learning-border/30 bg-learning-background shadow-xl">
            <Image
              src="/Media/SitecoreAI.png"
              alt="Sitecore AI training"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <section className="mx-auto mt-12 max-w-5xl space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass-card rounded-3xl border border-learning-border/35 bg-white/85 p-6">
            <h2 className="text-xl font-bold text-learning-navy">Completed Tasks</h2>
            <p className="mt-3 text-sm leading-6 text-learning-charcoal/80">
              Exercises checked
            </p>
            <p className="mt-4 text-4xl font-extrabold text-learning-charcoal">0</p>
            <p className="text-sm font-semibold text-learning-teal">/14</p>
          </div>

          <div className="glass-card rounded-3xl border border-learning-border/35 bg-white/85 p-6">
            <span className="rounded-md bg-learning-teal/10 px-2 py-1 text-xs font-semibold text-learning-teal">
              Foundations
            </span>
            <h2 className="mt-3 text-xl font-bold text-learning-navy">Day 1 Modules</h2>
            <p className="mt-3 text-sm leading-6 text-learning-charcoal/80">
              Covers CLI scaffolding, component manifest definition, SDK tags,
              and placeholders.
            </p>
          </div>

          <div className="glass-card rounded-3xl border border-learning-border/35 bg-white/85 p-6">
            <span className="rounded-md bg-learning-orange/15 px-2 py-1 text-xs font-semibold text-learning-orange">
              Advanced
            </span>
            <h2 className="mt-3 text-xl font-bold text-learning-navy">Day 2 Modules</h2>
            <p className="mt-3 text-sm leading-6 text-learning-charcoal/80">
              Covers Connected Mode configs, GraphQL integrations, Simulator
              sandbox, and deployment rules.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}