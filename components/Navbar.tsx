"use client";
import Link from "next/link";
import { lessonNavigation, type LessonGroup } from "./lessonNavigation";

const navGroups: LessonGroup[] = ["Day 01", "Day 02", "Bonus"];

export default function Navbar() {

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex gap-6 items-center">
        <Link href="/" className="hover:text-blue-600 font-bold">
          Home
        </Link>

        {navGroups.map((group) => {
          const items = lessonNavigation.filter((lesson) => lesson.group === group);

          return (
            <div key={group} className="group relative">
              <button className="hover:text-blue-600 flex items-center gap-1">
                {group}
                <span className="text-xs">▼</span>
              </button>

              <div className="absolute left-0 top-full hidden w-56 rounded-md border border-gray-200 bg-white py-2 shadow-xl group-hover:block">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
