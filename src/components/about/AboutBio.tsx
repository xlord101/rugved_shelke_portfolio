"use client";

import React, { useEffect, useRef, useState } from "react";
import { aboutContent } from "@/content/about";

export function AboutBio() {
  const bioTextRef = useRef<HTMLParagraphElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!bioTextRef.current) {
            ticking = false;
            return;
          }
          const rect = bioTextRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Natural reading zone calibration matching vexoo.framer.website:
          // Starts highlighting when top of text enters ~78% of viewport height
          // Finishes highlighting when bottom of text rises to ~28% of viewport height
          const start = windowHeight * 0.78;
          const end = windowHeight * 0.28;
          const totalDistance = rect.height + (start - end);
          const currentDistance = start - rect.top;

          const progress = Math.max(0, Math.min(1, currentDistance / totalDistance));
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = aboutContent.introBioWords;
  // Compute floating active word index for buttery smooth illumination
  const activeWordFloat = scrollProgress * words.length;

  return (
    <div className="w-full">
      {/* Editorial Two-Column Lead Section */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pt-6 sm:pt-10 lg:pt-14 pb-14 sm:pb-20">
        {/* Left Column: Bold About Page Heading */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <h1 className="text-[clamp(74px,10.2vw,140px)] font-medium tracking-[-0.095em] text-black dark:text-white leading-[0.84] select-none">
            {aboutContent.heading}
          </h1>
        </div>

        {/* Right Column: Bio Paragraph with Scroll-driven Illuminating Words */}
        <div className="lg:col-span-7 flex flex-col justify-start pt-4 sm:pt-10 lg:pt-24">
          {/* Scroll-Illuminating Bio Paragraph */}
          <p
            ref={bioTextRef}
            className="text-[clamp(24px,3.1vw,40px)] font-normal sm:font-medium leading-[1.24] tracking-[-0.05em] select-none text-left"
          >
            {words.map((word, index) => {
              // Word is fully illuminated if below active threshold, with a smooth 1.5-word transition zone
              const isLit = index < activeWordFloat;
              const isTransition = !isLit && index < activeWordFloat + 1.2;

              return (
                <span
                  key={index}
                  className={`inline-block mr-[0.26em] transition-colors duration-300 ease-out will-change-[color] ${
                    isLit
                      ? "text-black dark:text-white"
                      : isTransition
                      ? "text-black/55 dark:text-white/55"
                      : "text-black/20 dark:text-white/20"
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

