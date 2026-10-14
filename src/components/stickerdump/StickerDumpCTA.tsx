"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { stickerDumpContent } from "@/content/stickerdump";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function StickerDumpCTA() {
  const { heading, subheading } = stickerDumpContent.finalCta;

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8 md:px-12">
      <div className="max-w-[1240px] mx-auto rounded-[36px] bg-gradient-to-br from-pink-600/15 via-purple-600/10 to-blue-600/15 border border-pink-500/20 p-8 sm:p-14 md:p-16 flex flex-col items-center text-center relative overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-2xl">
          <div className="w-12 h-12 rounded-2xl bg-pink-600 text-white flex items-center justify-center shadow-lg mb-6 rotate-3">
            <InstagramIcon className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black dark:text-white leading-[1.1] mb-4">
            {heading}
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8 sm:mb-10 font-normal">
            {subheading}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href={stickerDumpContent.links.instagramProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-medium text-sm sm:text-base transition-all shadow-lg hover:shadow-xl hover:scale-102"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>DM @stickerdump.exe</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={stickerDumpContent.links.instagramPost}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass-panel hover:glass-panel-hovered text-black dark:text-white font-medium text-sm sm:text-base transition-all border border-black/10 dark:border-white/15"
            >
              <span>View Featured Post</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-6">
            Instagram: @stickerdump.exe · DM for orders, sizes &amp; custom prints
          </span>
        </div>
      </div>
    </section>
  );
}
