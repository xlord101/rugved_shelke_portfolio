"use client";

import React from "react";
import { ArrowUpRight, MessageCircle, HelpCircle } from "lucide-react";
import { stickerDumpContent } from "@/content/stickerdump";

export function PricingOrdering() {
  const { small, large, minOrder, steps, customNote } = stickerDumpContent.pricing;

  return (
    <section id="pricing" className="w-full py-16 sm:py-24 px-4 sm:px-8 md:px-12 scroll-mt-20">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-mono text-pink-600 dark:text-pink-400 font-semibold mb-2 block">
            HONEST &amp; TRANSPARENT
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black dark:text-white leading-[1.1] mb-4">
            Pricing &amp; How to Order
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal">
            Direct pricing with no hidden markups. Orders are handled directly and fulfilled via Instagram.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Small Stickers */}
          <div className="rounded-[28px] glass-panel p-6 sm:p-8 flex flex-col justify-between border border-black/10 dark:border-white/15">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-medium block mb-2">
                Everyday Cut
              </span>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-1">
                Small Sticker
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 font-mono">
                Ideal for phones, earbuds, notebooks &amp; tight spaces
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-extrabold tracking-tight text-pink-600 dark:text-pink-400 font-mono">
                  {small}
                </span>
                <span className="text-xs font-mono text-zinc-500">/ sticker</span>
              </div>
            </div>

            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 border-t border-black/5 dark:border-white/10 pt-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                <span>Standard compact dimensions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                <span>Heavy-duty vinyl construction</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                <span>Part of minimum order mix</span>
              </li>
            </ul>
          </div>

          {/* Large Stickers */}
          <div className="rounded-[28px] glass-panel p-6 sm:p-8 flex flex-col justify-between border-2 border-pink-500/30 dark:border-pink-400/30 relative">
            <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-pink-600 text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
              Featured
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-pink-600 dark:text-pink-400 font-medium block mb-2">
                Statement Cut
              </span>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-1">
                Large Sticker
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 font-mono">
                Perfect for laptop lids, skateboards &amp; water bottles
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-extrabold tracking-tight text-pink-600 dark:text-pink-400 font-mono">
                  {large}
                </span>
                <span className="text-xs font-mono text-zinc-500">/ sticker</span>
              </div>
            </div>

            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 border-t border-black/5 dark:border-white/10 pt-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                <span>High-impact statement scale</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                <span>Die-cut precision edges</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                <span>High UV resistance &amp; scratch shield</span>
              </li>
            </ul>
          </div>

          {/* Minimum Order Policy */}
          <div className="rounded-[28px] glass-panel p-6 sm:p-8 flex flex-col justify-between border border-black/10 dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.02]">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-medium block mb-2">
                Batch Policy
              </span>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-1">
                Minimum Order
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 font-mono">
                Combine any mix of designs and sizes
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-extrabold tracking-tight text-black dark:text-white font-mono">
                  {minOrder}
                </span>
              </div>
            </div>

            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 border-t border-black/5 dark:border-white/10 pt-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                <span>Mix and match small &amp; large cuts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                <span>Allows small-batch individual runs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                <span>Direct packing &amp; personal care</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3-Step Ordering Guide */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white">
            Ordering in 3 Simple Steps
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {steps.map((s) => (
              <div
                key={s.num}
                className="p-6 rounded-[22px] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex flex-col gap-2"
              >
                <span className="text-2xl font-extrabold font-mono text-pink-600 dark:text-pink-400">
                  {s.num}
                </span>
                <h4 className="text-base font-semibold text-black dark:text-white">
                  {s.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Designs Notice & Instagram Action Bar */}
        <div className="p-6 sm:p-8 rounded-[24px] glass-panel border border-black/10 dark:border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-3.5 max-w-xl">
            <HelpCircle className="w-5 h-5 text-pink-600 dark:text-pink-400 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-black dark:text-white">
                Custom Designs &amp; Bulk Community Runs
              </span>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {customNote}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={stickerDumpContent.links.instagramProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-xs sm:text-sm font-medium transition-all shadow-xs hover:scale-102"
            >
              <MessageCircle className="w-4 h-4" />
              <span>DM on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={stickerDumpContent.links.instagramPost}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full border border-black/10 dark:border-white/15 text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <span>View Product Post</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
