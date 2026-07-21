"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export type Slide = {
  src: string;
  alt: string;
};

interface ImgCarouselProps {
  slides: Slide[];
}

export default function ImgCarousel({ slides }: ImgCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [slides.length, showModal]);

  const scrollPrev = () =>
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  const scrollNext = () =>
    setActiveIndex((current) => (current + 1) % slides.length);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            willChange: "transform",
          }}
        >
          {slides.map((slide, index) => (
            <div key={slide.alt} className="min-w-full flex-shrink-0">
              <button
                type="button"
                onClick={openModal}
                className="relative h-80 w-full overflow-hidden focus:outline-none"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={slide.alt === "Login screen"}
                  className="object-contain"
                />
               
              </button>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
        aria-label="Next slide"
      >
        ›
      </button>

      {showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-400 text-black text-2xl font-extrabold leading-none shadow-lg hover:bg-sky-500 z-50"
              aria-label="Close image preview"
            >
              ×
            </button>
            <div className="relative h-[80vh] w-full overflow-hidden bg-slate-900">
              <Image
                src={slides[activeIndex].src}
                alt={slides[activeIndex].alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-6">
              <button
                type="button"
                onClick={() => {
                  scrollPrev();
                }}
                className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg hover:bg-white"
                aria-label="Previous image"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => {
                  scrollNext();
                }}
                className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg hover:bg-white"
                aria-label="Next image"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
