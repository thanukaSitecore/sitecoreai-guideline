"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

interface ImgCarouselProps {
  slides: Slide[];
}

export default function ImgCarousel({ slides }: ImgCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, []);

  const scrollPrev = () =>
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  const scrollNext = () =>
    setActiveIndex((current) => (current + 1) % slides.length);

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
          {slides.map((slide) => (
            <div key={slide.alt} className="min-w-full flex-shrink-0">
              <div className="relative h-80 w-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={slide.alt === "Login screen"}
                  className="object-contain"
                />
              </div>
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
    </div>
  );
}
