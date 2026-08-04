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
    <div className="mx-auto mt-8 mb-6 flex w-full max-w-6xl justify-between border-t border-learning-border/35 px-4 pt-6 sm:px-6 lg:px-8">
      {prevRoute ? (
        <Link
          href={prevRoute.href}
          className="btn-secondary group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm"
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
          className="btn-primary group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm"
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
