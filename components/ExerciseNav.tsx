"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const lessonRoutes = [
  "/login",
  "/createTemplate",
  "/manualtemplate",
  "/Day2/DataSource",
  "/Day2/PageBuild",
  "/Day2/Forms",
  "/Day2/Workflow",
  "/Day2/GraphQL",
];

export default function ExerciseNav() {
  const pathname = usePathname();
  const currentIndex = lessonRoutes.indexOf(pathname);

  if (currentIndex === -1) return null;

  const prevRoute = currentIndex > 0 ? lessonRoutes[currentIndex - 1] : null;
  const nextRoute =
    currentIndex < lessonRoutes.length - 1
      ? lessonRoutes[currentIndex + 1]
      : null;

  return (
    <div className="flex justify-between mt-8 mb-6 border-t border-gray-200 pt-6">
      {prevRoute ? (
        <Link
          href={prevRoute}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-200"
        >
          ← Previous Exercise
        </Link>
      ) : (
        <span />
      )}
      {nextRoute ? (
        <Link
          href={nextRoute}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          Next Exercise →
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
