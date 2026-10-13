"use client";

import React from "react";
import { experienceContent } from "@/content/experience";

export function ExperienceTimeline() {
  return (
    <section className="w-full py-16 sm:py-24 border-t border-black/10 dark:border-white/10">
      <div className="flex flex-col">
        {experienceContent.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 py-8 sm:py-10 border-b border-black/8 dark:border-white/8 text-black dark:text-white transition-colors"
          >
            {/* Column 1: Date Range */}
            <div className="md:col-span-3">
              <span className="text-base sm:text-lg font-normal text-zinc-600 dark:text-zinc-400">
                {item.period}
              </span>
            </div>

            {/* Column 2: Role & Company */}
            <div className="md:col-span-3">
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight">
                {item.role}
              </h3>
              <p className="text-lg sm:text-xl font-normal text-zinc-600 dark:text-zinc-400">
                {item.company}
              </p>
            </div>

            {/* Column 3: Narrative Description */}
            <div className="md:col-span-6">
              <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
