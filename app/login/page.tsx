"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CreateNewProject from "@/components/createNewProject";
import ConfigurEditingHost from "@/components/ConfigurEditingHost";
import ReviewAndDeploy from "@/components/reviewAndDeploy";


const slides = [
  { src: "/Media/loginscreen.jpg", alt: "Login screen" },
  { src: "/Media/HomeScreen.jpg", alt: "Home screen" },
];

export default function LoginPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  const scrollPrev = () =>
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  const scrollNext = () =>
    setActiveIndex((current) => (current + 1) % slides.length);

  return (
    <main style={{ padding: "2rem" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="mt-6">
            <span className="text-2xl font-bold">
              1: Log in with credentials
            </span>
          </div>
          <div>
            <span>
              Log in through the{" "}
              <a
                href="https://portal.sitecorecloud.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                Sitecore Cloud Portal
              </a>{" "}
              using your organizational credentials.
            </span>
          </div>
          <div className="mt-6">
            <span className="text-2xl font-bold mt-2">Optional</span>
          </div>
          <div>
            <span>
              No account yet?
              <a
                href="https://doc.sitecore.com/portal/en/developers/sitecore-cloud-portal/join-a-sitecore-cloud-portal-organization.html#sign-up-for-a-sitecore-cloud-portal-account"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Sign up
              </a>{" "}
              for one to continue to Sitecore Cloud Portal.
            </span>
          </div>
          <div className="mt-6">
            <span className="text-2xl font-bold pt-1">
              Choose your instance
            </span>
          </div>
          <div>
            <span>
              If you have more that one instance, choose the one you want to
              work on.
            </span>
          </div>
          <div className="mt-6">
            <span className="text-2xl font-bold pt-1">
              Navigate the workspace
            </span>
          </div>
          <div>
            <span>
             Navigate to your workspace.
            </span>
          </div>
        </div>

        <div className="p-4 w-full max-w-lg mx-auto">
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
                        className="object-cover"
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
        </div>
      </div>

      <CreateNewProject />
      <ConfigurEditingHost />
      <ReviewAndDeploy />
    </main>
  );
}
