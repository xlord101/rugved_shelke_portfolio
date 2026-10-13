"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pt-6 sm:pt-10 lg:pt-14 pb-16 sm:pb-24">
        {/* Left Column: Bold About Page Heading */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <h1 className="text-[clamp(74px,10.2vw,140px)] font-medium tracking-[-0.095em] text-black dark:text-white leading-[0.84] select-none">
            {aboutContent.heading}
          </h1>
        </div>

        {/* Right Column: Bio Paragraph with Scroll-driven Illuminating Words + Portrait Card */}
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

          {/* Portrait of Soren aligned to right column below bio */}
          <div className="w-full sm:w-[88%] lg:w-[68%] ml-auto mt-16 sm:mt-24">
            <figure className="w-full flex flex-col">
              <div className="w-full aspect-[4/5] relative rounded-[22px] sm:rounded-[28px] overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-black group">
                <Image
                  src={aboutContent.portraitImage}
                  alt="Portrait of Soren Weil"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-top grayscale contrast-125 dark:brightness-95 group-hover:scale-104 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  priority
                />
              </div>
              <figcaption className="flex items-center justify-between pt-3 px-1 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 select-none">
                <span className="font-medium text-black dark:text-white">Soren Weil</span>
                <span>AI Design Engineer</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

