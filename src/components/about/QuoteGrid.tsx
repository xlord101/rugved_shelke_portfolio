"use client";

import React from "react";
import { testimonialsContent } from "@/content/testimonials";

export function QuoteGrid() {
  return (
    <section className="w-full py-16 sm:py-24 border-t border-black/10 dark:border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        {testimonialsContent.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between p-2 rounded-2xl transition-all"
          >
            <div>
              <span className="block text-3xl sm:text-4xl font-serif font-black text-black dark:text-white mb-3 select-none leading-none">
                “
              </span>
              <p className="text-xl sm:text-2xl font-medium tracking-tight text-black dark:text-white leading-snug">
                {item.quote}
              </p>
            </div>
            <div className="mt-8 flex items-baseline gap-2 text-sm font-normal text-zinc-500 dark:text-zinc-400">
              <span className="font-medium text-black dark:text-zinc-300">
                {item.author}
              </span>
              <span>{item.company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
