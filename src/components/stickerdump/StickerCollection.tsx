"use client";

import React from "react";
import { ArrowUpRight, Sparkles, Tag, Check } from "lucide-react";
import { stickerDumpContent } from "@/content/stickerdump";

export function StickerCollection() {
  const { heading, subheading, categories } = stickerDumpContent.stickersSection;

  return (
    <section id="stickers" className="w-full py-16 sm:py-24 px-4 sm:px-8 md:px-12 scroll-mt-20">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 dark:border-white/10 pb-8 sm:pb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-mono text-pink-600 dark:text-pink-400 font-semibold mb-2 block">
              CATALOG &amp; EDITIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black dark:text-white leading-[1.1] mb-3 sm:mb-4">
              {heading}
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal">
              {subheading}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs sm:text-sm font-mono text-zinc-700 dark:text-zinc-300">
              Small: <span className="font-bold text-pink-600 dark:text-pink-400">₹9</span> · Large: <span className="font-bold text-pink-600 dark:text-pink-400">₹14</span>
            </div>
          </div>
        </div>

        {/* Expressive Editorial Sticker Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {categories.map((cat, index) => {
            const tiltAngles = ["-1deg", "1.5deg", "1deg", "-1.5deg"];
            const tilt = tiltAngles[index % tiltAngles.length];

            return (
              <div
                key={cat.id}
                style={{ transform: `rotate(${tilt})` }}
                className="group relative rounded-[28px] glass-panel hover:glass-panel-hovered p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 border border-black/10 dark:border-white/15 overflow-hidden"
              >
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-pink-500/10 dark:bg-pink-400/15 text-pink-700 dark:text-pink-300 font-medium border border-pink-500/20">
                    {cat.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                    {cat.tag}
                  </span>
                </div>

                {/* Restrained Artistic Sticker Frame / Showcase Canvas */}
                <div className="w-full aspect-[16/10] rounded-[20px] bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-amber-50/40 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 border border-dashed border-black/15 dark:border-white/20 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden mb-6 group-hover:border-pink-500/40 transition-colors">
                  {/* Playful background watermark element */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-10 pointer-events-none select-none text-7xl font-black font-mono">
                    STICKER
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-800 shadow-md flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-400">
                      <Sparkles className="w-7 h-7 text-pink-600 dark:text-pink-400" />
                    </div>
                    <span className="text-sm font-mono font-medium text-zinc-700 dark:text-zinc-300">
                      Print Run Showcase
                    </span>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
                      Die-cut • High Opacity • Scuff Proof
                    </span>
                  </div>

                  {/* Corner Price Tag */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black dark:bg-white text-white dark:text-black font-mono text-xs font-bold shadow-xs">
                    ₹9 – ₹14
                  </div>
                </div>

                {/* Content & Details */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {cat.description}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-wrap gap-2 pt-2 pb-4">
                    {cat.features.map((feat) => (
                      <span
                        key={feat}
                        className="inline-flex items-center gap-1 text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-md"
                      >
                        <Check className="w-3 h-3 text-pink-600 dark:text-pink-400" />
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Instagram Inquiry Action */}
                  <div className="pt-2 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                      <Tag className="w-3.5 h-3.5" />
                      <span>Min order: 6 pcs</span>
                    </div>

                    <a
                      href={stickerDumpContent.links.instagramProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 group/link transition-colors"
                    >
                      <span>Inquire on Instagram</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Banner Note */}
        <div className="w-full p-6 sm:p-8 rounded-[24px] bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 border border-pink-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-black dark:text-white">
              Every sticker engineered for real everyday use
            </span>
            <span className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              Weather-resistant, sun-safe UV inks, zero residue upon peeling. Tested on laptops, bottles, skateboards &amp; phones.
            </span>
          </div>

          <a
            href={stickerDumpContent.links.instagramProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium text-xs sm:text-sm shrink-0 hover:opacity-85 transition-opacity inline-flex items-center gap-1.5"
          >
            <span>Ask for Custom Designs</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
