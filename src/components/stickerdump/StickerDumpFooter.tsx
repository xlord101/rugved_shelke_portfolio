"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { stickerDumpContent } from "@/content/stickerdump";

export function StickerDumpFooter() {
  const [currentYear, setCurrentYear] = React.useState("2026");

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="w-full border-t border-black/10 dark:border-white/10 pt-12 pb-14 px-4 sm:px-8 md:px-12 text-black dark:text-white transition-colors duration-500">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-black/5 dark:border-white/10">
          {/* Brand & Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9">
              <Image
                src={stickerDumpContent.assets.logo}
                alt="StickerDump logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-base sm:text-lg">
                StickerDump<span className="text-pink-600 dark:text-pink-400 font-mono">.exe</span>
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                Stickers &amp; Personalized NFC Products
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a
              href="#stickers"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Stickers
            </a>
            <a
              href="#pricing"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#nfc-cards"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              NFC Cards
            </a>
            <a
              href={stickerDumpContent.links.instagramProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors inline-flex items-center gap-1"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Row: Return to Portfolio & Copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-sans font-medium text-black dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Rugved Shelke&apos;s Portfolio</span>
          </Link>

          <span>
            © {currentYear} StickerDump.exe · An independent creative brand by Rugved Shelke
          </span>
        </div>
      </div>
    </footer>
  );
}
