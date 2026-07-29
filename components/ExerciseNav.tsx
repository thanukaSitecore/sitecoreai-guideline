"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { lessonNavigation } from "./lessonNavigation";

export default function ExerciseNav() {
  const pathname = usePathname();
  const sequencedLessons = lessonNavigation.filter((lesson) => lesson.group !== "Bonus");
  const currentIndex = sequencedLessons.findIndex((lesson) => lesson.href === pathname);

  if (currentIndex === -1) return null;

  const prevRoute = currentIndex > 0 ? sequencedLessons[currentIndex - 1] : null;
  const nextRoute =
    currentIndex < sequencedLessons.length - 1
      ? sequencedLessons[currentIndex + 1]
      : null;

  return (
    <div className="flex justify-between mt-8 mb-6 border-t border-gray-200 pt-6">
      {prevRoute ? (
        <Link
          href={prevRoute.href}
          className="group inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 hover:shadow-md active:scale-95"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
          Previous Exercise
        </Link>
      ) : (
        <span />
      )}
      {nextRoute ? (
        <Link
          href={nextRoute.href}
          className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-95"
        >
          Next Exercise
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
