"use client";

import { useState } from "react";
import ImgCarousel, { Slide } from "./imgCarousel";

export default function CarresolCollapsible({ slides }: { slides: Slide[] }) {
  const [isOptionalconfiguration, setIsOptionalconfiguration] = useState(true);
  return (
    <div className="mt-2 flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => setIsOptionalconfiguration(!isOptionalconfiguration)}
        className="btn btn-primary inline-flex items-center gap-2"
        aria-expanded={!isOptionalconfiguration}
        aria-controls="basic-collapse-heading"
      >
        <span
          className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm transition-transform duration-300 focus:outline-none dark:bg-slate-800 dark:text-slate-100"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-4 w-4 transition-transform duration-300 ${
              isOptionalconfiguration ? "rotate-0" : "rotate-180"
            }`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
        <span>{isOptionalconfiguration ? "Show details" : "Hide details"}</span>
      </button>
      <div
        id="basic-collapse-heading"
        className={`w-full overflow-hidden transition-all duration-300 mt-3 ${
          isOptionalconfiguration
            ? "max-h-0 opacity-0"
            : "max-h-[500px] opacity-100"
        }`}
        aria-labelledby="basic-collapse"
      >
        <div className="border-base-content/25 rounded-md border p-3">
          <p className="text-base-content/80">
            <ImgCarousel slides={slides} />
          </p>
        </div>
      </div>
    </div>
  );
}
