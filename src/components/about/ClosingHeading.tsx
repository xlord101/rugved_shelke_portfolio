"use client";

import React from "react";
import { aboutContent } from "@/content/about";

export function ClosingHeading() {
  const text = aboutContent.closingHeading;
  const items = [text, text, text, text];

  return (
    <div className="w-full py-16 sm:py-28 overflow-hidden select-none">
      <div className="animate-marquee-slow flex items-center whitespace-nowrap">
        {items.map((item, idx) => (
          <div key={`marquee-1-${idx}`} className="flex items-center">
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-black dark:text-white leading-[1.05] mx-4 sm:mx-8">
              {item}
            </span>
            <span className="text-3xl sm:text-5xl text-zinc-400 dark:text-zinc-600 font-light">
              —
            </span>
          </div>
        ))}
        {items.map((item, idx) => (
          <div key={`marquee-2-${idx}`} className="flex items-center">
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-black dark:text-white leading-[1.05] mx-4 sm:mx-8">
              {item}
            </span>
            <span className="text-3xl sm:text-5xl text-zinc-400 dark:text-zinc-600 font-light">
              —
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
