"use client";
import Link from "next/link";
import { useState } from "react";
import { lessonNavigation, type LessonGroup } from "./lessonNavigation";

const navGroups: Array<{ label: string; group: LessonGroup }> = [
  { label: "Day 1", group: "Day 01" },
  { label: "Day 2", group: "Day 02" },
  { label: "Bonus", group: "Bonus" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-learning-border/25 bg-learning-navy text-white shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-learning-teal to-learning-orange text-xs font-bold text-white shadow-lg shadow-learning-teal/20">
              O
            </div>
            <div className="leading-tight">
              <p className="text-xl font-extrabold tracking-wide">
                SitecireAI
              </p>
              <span className="rounded-md border border-white/10 bg-white/10 px-2 py-0.5 text-[10px] font-medium text-slate-100">
                workshop
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navGroups.map(({ label, group }) => {
              const items = lessonNavigation.filter((lesson) => lesson.group === group);

              return (
                <div key={group} className="group relative">
                  <button className="flex items-center gap-1 rounded-xl border border-transparent px-3 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/15 hover:bg-white/10 hover:text-white">
                    {label}
                    <span className="text-[10px]">v</span>
                  </button>

                  <div className="invisible absolute left-0 top-full mt-1 w-72 rounded-2xl border border-learning-border/30 bg-learning-navy/95 py-2 opacity-0 shadow-xl backdrop-blur-lg transition group-hover:visible group-hover:opacity-100">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-slate-100 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-learning-navy px-4 py-4 md:hidden">
          <div className="space-y-4">
            {navGroups.map(({ label, group }) => {
              const items = lessonNavigation.filter((lesson) => lesson.group === group);
              return (
                <div key={group} className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-learning-orange">
                    {label}
                  </p>
                  <div className="space-y-1">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-md px-2 py-1.5 text-sm text-slate-100 transition hover:bg-white/10"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
