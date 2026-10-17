"use client";

import React from "react";
import Image from "next/image";
import { stickerDumpContent } from "@/content/stickerdump";

export function BehindTheBrand() {
  const { heading, story } = stickerDumpContent.behindTheBrand;

  return (
    <section id="about" className="w-full py-16 sm:py-24 px-4 sm:px-8 md:px-12 scroll-mt-20">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Section Header */}
        <div className="flex flex-col max-w-2xl">
          <span className="text-xs uppercase tracking-widest font-mono text-pink-600 dark:text-pink-400 font-semibold mb-2 block">
            THE STORY
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black dark:text-white leading-[1.1] mb-4">
            {heading}
          </h2>
        </div>

        {/* Story & Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Story Narrative Box */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              {story}
            </p>

            <div className="p-6 sm:p-8 rounded-[28px] glass-panel border border-black/10 dark:border-white/15 flex flex-col gap-4">
              <span className="text-xs font-mono text-pink-600 dark:text-pink-400 font-semibold uppercase tracking-wider">
                Design &amp; Build Ethos
              </span>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                No corporate committees or mass-market algorithms. Every sticker design and physical card prototype is cut, reviewed, and packed with a genuine obsession for good design, tactile individuality, and collaborative craft.
              </p>
              <div className="pt-2 text-xs text-zinc-500 font-mono">
                <span>Co-founded and built by Rugved Shelke &amp; Nupur in Kolhapur, India</span>
              </div>
            </div>
          </div>

          {/* Genuine Brand Art / The Social Network Inspiration Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="rounded-[32px] overflow-hidden glass-panel p-3.5 border border-black/10 dark:border-white/15 max-w-sm w-full group">
              <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-blue-900 shadow-md">
                <Image
                  src={stickerDumpContent.assets.beYourOwnCeo}
                  alt="Be Your Own CEO brand inspiration artwork"
                  fill
                  className="object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
              </div>
              <div className="flex items-center justify-between pt-3 px-2 text-[11px] text-zinc-500 font-mono">
                <span>The Social Network Inspiration</span>
                <span>StickerDump.exe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
