"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Sparkles, Smartphone, Layers, ShieldCheck } from "lucide-react";
import { stickerDumpContent } from "@/content/stickerdump";

export function StickerDumpHero() {
  return (
    <section className="relative w-full overflow-hidden pt-8 sm:pt-14 md:pt-20 pb-16 sm:pb-24 px-4 sm:px-8 md:px-12">
      {/* Playful background decorative blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] md:w-[700px] h-[260px] sm:h-[400px] bg-gradient-to-tr from-pink-500/15 via-purple-500/10 to-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 dark:bg-pink-400/15 border border-pink-500/20 text-pink-700 dark:text-pink-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8 select-none">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{stickerDumpContent.eyebrow}</span>
        </div>

        {/* Hero Visual Collage: Prominent StickerDump Logo & Floating Accents */}
        <div className="relative w-full max-w-2xl h-[170px] sm:h-[240px] md:h-[300px] mb-8 sm:mb-12 flex items-center justify-center select-none">
          {/* Main Logo Container */}
          <div className="relative w-[300px] sm:w-[440px] md:w-[540px] h-full filter drop-shadow-[0_16px_36px_rgba(176,33,103,0.3)] transition-transform duration-500 hover:scale-103">
            <Image
              src={stickerDumpContent.assets.logo}
              alt="StickerDump.exe brand logo"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Floating Sticker Accent 1: Waterproof */}
          <div
            style={{ "--rot": "-6deg" } as React.CSSProperties}
            className="absolute -top-3 left-2 sm:left-6 animate-sticker-float hidden xs:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 font-mono text-[11px] sm:text-xs shadow-md select-none"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
            <span className="font-semibold">Waterproof Vinyl</span>
          </div>

          {/* Floating Sticker Accent 2: 300 DPI */}
          <div
            style={{ "--rot": "7deg" } as React.CSSProperties}
            className="absolute top-2 right-2 sm:right-6 animate-sticker-float-delayed hidden xs:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-100 text-purple-900 border border-purple-300 font-mono text-[11px] sm:text-xs shadow-md select-none"
          >
            <Layers className="w-3.5 h-3.5 text-purple-700" />
            <span className="font-semibold">300 DPI Rich Ink</span>
          </div>

          {/* Floating Sticker Accent 3: One-Tap NFC */}
          <div
            style={{ "--rot": "-4deg" } as React.CSSProperties}
            className="absolute -bottom-4 right-6 sm:right-16 animate-sticker-float hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-100 text-blue-900 border border-blue-300 font-mono text-[11px] sm:text-xs shadow-md select-none"
          >
            <Smartphone className="w-3.5 h-3.5 text-blue-700" />
            <span className="font-semibold">Tap-to-Share NFC</span>
          </div>

          {/* Floating Sticker Accent 4: Price Tag */}
          <div
            style={{ "--rot": "5deg" } as React.CSSProperties}
            className="absolute -bottom-4 left-6 sm:left-16 animate-sticker-float-delayed hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-xl bg-pink-100 text-pink-900 border border-pink-300 font-mono text-[11px] sm:text-xs shadow-md select-none"
          >
            <span className="font-bold">From ₹9 / sticker</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black dark:text-white leading-[1.05] max-w-3xl mb-5 sm:mb-6">
          {stickerDumpContent.headline}
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mb-8 sm:mb-10 font-normal">
          {stickerDumpContent.supportingCopy}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href="#stickers"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white font-medium text-sm sm:text-base transition-all shadow-md hover:shadow-lg hover:scale-102"
          >
            <span>Explore the Stickers</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#nfc-cards"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full glass-panel hover:glass-panel-hovered text-black dark:text-white font-medium text-sm sm:text-base transition-all border border-black/10 dark:border-white/15"
          >
            <span>Discover NFC Cards</span>
            <Smartphone className="w-4 h-4 text-blue-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
