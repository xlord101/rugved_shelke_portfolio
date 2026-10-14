"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Smartphone, Radio, Globe, UserCheck, Briefcase, Share2 } from "lucide-react";
import { stickerDumpContent } from "@/content/stickerdump";

export function NfcShowcase() {
  const { heading, subheading, conceptExplanation, potentialUses } =
    stickerDumpContent.nfcSection;

  const iconMap: Record<number, React.ReactNode> = {
    0: <Briefcase className="w-5 h-5 text-blue-500" />,
    1: <UserCheck className="w-5 h-5 text-pink-500" />,
    2: <Share2 className="w-5 h-5 text-purple-500" />,
    3: <Globe className="w-5 h-5 text-emerald-500" />,
  };

  return (
    <section id="nfc-cards" className="w-full py-16 sm:py-24 px-4 sm:px-8 md:px-12 scroll-mt-20">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-mono font-medium mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>NEW PRODUCT EXPANSION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black dark:text-white leading-[1.1] mb-4">
            {heading}
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Visual Showcase: Real User Mockup & Brand Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Card Mockup (Primary Visual) */}
          <div className="lg:col-span-7 rounded-[32px] overflow-hidden glass-panel p-4 sm:p-6 border border-black/10 dark:border-white/15 relative group">
            <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-inner">
              <Image
                src={stickerDumpContent.assets.nfcCardMockup}
                alt="StickerDump personalized NFC card mockup"
                fill
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              />
            </div>
            <div className="flex items-center justify-between pt-4 px-2 text-xs text-zinc-500 font-mono">
              <span>Authentic physical prototype mockup</span>
              <span>StickerDump.exe × Rugved Shelke</span>
            </div>
          </div>

          {/* Side Promo Banner & Concept */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Poster Graphic Container */}
            <div className="rounded-[28px] overflow-hidden glass-panel p-3 border border-black/10 dark:border-white/15 max-w-sm mx-auto lg:max-w-none">
              <div className="relative w-full aspect-[3/2] sm:aspect-[4/3] rounded-[20px] overflow-hidden bg-blue-600">
                <Image
                  src={stickerDumpContent.assets.nfcPoster}
                  alt="StickerDump custom NFC cards announcement"
                  fill
                  className="object-cover object-center hover:scale-104 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Concept Explanation Box */}
            <div className="p-6 rounded-[24px] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
                <Smartphone className="w-4 h-4" />
                <span>How NFC Works</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                {conceptExplanation}
              </p>
            </div>
          </div>
        </div>

        {/* Potential Uses Grid */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white">
              Potential Card Destinations
            </h3>
            <span className="text-xs sm:text-sm text-zinc-500">
              Personalized destinations configured according to your needs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {potentialUses.map((use, index) => (
              <div
                key={use.title}
                className="p-6 rounded-[24px] glass-panel border border-black/10 dark:border-white/15 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center">
                  {iconMap[index]}
                </div>
                <h4 className="text-base font-semibold text-black dark:text-white">
                  {use.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {use.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Inquiry CTA Bar */}
        <div className="p-6 sm:p-8 rounded-[28px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 border border-blue-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-1 max-w-xl">
            <span className="text-sm font-semibold text-black dark:text-white">
              Interested in a personalized NFC card?
            </span>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              Reach out on Instagram to discuss custom designs, destination linking, and prototype batches.
            </p>
          </div>

          <a
            href={stickerDumpContent.links.instagramProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium transition-all shadow-md hover:scale-102 shrink-0"
          >
            <span>Ask About NFC Cards</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
