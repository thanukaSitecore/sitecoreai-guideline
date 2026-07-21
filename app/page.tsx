// app/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900 mt-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:flex-row md:items-center md:justify-between">
        <div className="space-y-6 md:max-w-xl">
          <p className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            SitecoreAI Training
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Learn Sitecore AI with guided steps
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            This training portal helps you build Sitecore-ready components, renderings, and data templates using Sitecore AI best practices. Start with the Sitecore content editor flow and complete hands-on exercises across templates, JSON renderings, and component code.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Start Training
            </Link>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
              Step 1: Login / Step 2: Create template / Step 3: Deploy
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center md:w-1/2">
          <div className="relative h-80 w-full max-w-[32rem] overflow-hidden rounded-3xl bg-slate-50 shadow-2xl">
            <Image
              src="/Media/SitecoreAI.png"
              alt="Sitecore AI training"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <section className="mx-auto mt-12 max-w-6xl space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Sitecore AI</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Use Sitecore AI to accelerate content creation, improve template design, and connect your rendering logic with Sitecore data sources.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Hands-on learning</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Follow the training flow to build a reusable component, configure Sitecore templates, and deploy your solution in a Sitecore-friendly way.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Practical outcomes</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Gain confidence with JSS component code, JSON renderings, and Sitecore data templates while using the SitecoreAI workflow.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}