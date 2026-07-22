"use client";

import { useState } from "react";
import ImgCarousel, { Slide } from "./imgCarousel";

export default function CarresolCollapsible({ slides }: { slides: Slide[] }) {
  const [isOptionalconfiguration, setIsOptionalconfiguration] = useState(true);
  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={() => setIsOptionalconfiguration(!isOptionalconfiguration)}
        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-200"
        aria-expanded={!isOptionalconfiguration}
        aria-controls="carousel-preview-collapse"
      >
        <span
          className={`inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm transition-transform duration-200 ${
            isOptionalconfiguration ? "rotate-0" : "rotate-180"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
        {isOptionalconfiguration ? "Show carousel preview" : "Hide carousel preview"}
      </button>
      <div
        id="carousel-preview-collapse"
        className={`mt-3 overflow-hidden transition-all duration-300 ${
          isOptionalconfiguration ? "max-h-0 opacity-0" : "max-h-[500px] opacity-100"
        }`}
      >
        <div className="w-full">
          <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <ImgCarousel slides={slides} />
          </div>
        </div>
      </div>
    </div>
  );
}
