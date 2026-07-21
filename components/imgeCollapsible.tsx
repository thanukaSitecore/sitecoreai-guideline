"use client";
import Image from "next/image";
import { useState } from "react";

export default function ImgeCollapsible({
  imgscr,
  alttext,
}: {
  imgscr: string;
  alttext: string;
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState("center center");
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-200"
        aria-expanded={!isCollapsed}
        aria-controls="image-preview-collapse"
      >
        <span
          className={`inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm transition-transform duration-200 ${
            isCollapsed ? "rotate-0" : "rotate-180"
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
        {isCollapsed ? "Show image preview" : "Hide image preview"}
      </button>

      <div
        id="image-preview-collapse"
        className={`mt-3 overflow-hidden transition-all duration-300 ${
          isCollapsed ? "max-h-0 opacity-0" : "max-h-[500px] opacity-100"
        }`}
      >
        <div className="relative inline-block">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              const x = ((event.clientX - rect.left) / rect.width) * 100;
              const y = ((event.clientY - rect.top) / rect.height) * 100;
              setZoomOrigin(`${x}% ${y}%`);
            }}
            className="relative h-52 w-80 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-transform duration-200 hover:scale-[1.02]"
          >
            <div
              className="absolute inset-0 transition-transform duration-200"
              style={{
                transformOrigin: zoomOrigin,
                transform: isHovering ? "scale(1.1)" : "scale(1)",
              }}
            >
              <Image
                src={imgscr}
                alt={alttext}
                fill
                className="object-cover"
              />
            </div>
          </button>

          {showModal ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
              <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-400 text-black text-2xl font-extrabold leading-none shadow-lg hover:bg-sky-500 z-50"
                  aria-label="Close image preview"
                >
                  ×
                </button>
                <div className="relative h-[80vh] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={imgscr}
                    alt={alttext}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
