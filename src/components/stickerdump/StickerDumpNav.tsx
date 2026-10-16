"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Menu, X } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeContext";
import { stickerDumpContent } from "@/content/stickerdump";

export function StickerDumpNav() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full pt-3 pb-2 sm:pt-4 sm:pb-3 px-4 sm:px-8 md:px-12 flex items-center justify-between text-xs sm:text-sm font-normal tracking-tight text-black dark:text-white bg-[var(--bg-page)]/85 backdrop-blur-md border-b border-black/5 dark:border-white/10 transition-colors duration-500 z-50">
      {/* Left Column: Return to Portfolio + StickerDump Brand */}
      <div className="flex items-center gap-3 sm:gap-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="hidden sm:inline">Rugved Shelke</span>
          <span className="sm:hidden">Portfolio</span>
        </Link>

        <span className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">|</span>

        <Link
          href="/stickerdump"
          className="flex items-center gap-2 group select-none"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9">
            <Image
              src={stickerDumpContent.assets.logo}
              alt="StickerDump logo"
              fill
              className="object-contain group-hover:rotate-6 transition-transform duration-300"
            />
          </div>
          <span className="font-semibold tracking-tight text-sm sm:text-base text-black dark:text-white">
            StickerDump<span className="text-pink-600 dark:text-pink-400 font-mono">.exe</span>
          </span>
        </Link>
      </div>

      {/* Center Column: Anchor Navigation */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-zinc-600 dark:text-zinc-400">
        <a
          href="#pricing"
          className="hover:text-black dark:hover:text-white transition-colors"
        >
          Pricing &amp; Order
        </a>
        <a
          href="#nfc-cards"
          className="hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-1"
        >
          <span>NFC Cards</span>
          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            NEW
          </span>
        </a>
        <a
          href="#about"
          className="hover:text-black dark:hover:text-white transition-colors"
        >
          Behind the Brand
        </a>
      </nav>

      {/* Right Column: Order CTA + Theme Toggle + Mobile Menu Trigger */}
      <div className="flex items-center gap-2.5 sm:gap-4">
        <a
          href={stickerDumpContent.links.instagramProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white text-xs sm:text-sm font-medium transition-all shadow-xs hover:shadow-md hover:scale-102"
        >
          <span>Order on Instagram</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark/light mode"
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="group relative w-10 h-5.5 sm:w-11 sm:h-6 rounded-full border border-black/15 dark:border-white/20 p-0.5 flex items-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer bg-black/[0.08] dark:bg-white/[0.12] hover:border-black/30 dark:hover:border-white/40 shadow-2xs focus:outline-hidden"
        >
          <span
            className={`w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full transition-all duration-450 ease-[cubic-bezier(0.34,1.4,0.64,1)] ${
              theme === "dark"
                ? "translate-x-[18px] sm:translate-x-[20px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                : "translate-x-0.5 bg-black shadow-[0_0_6px_rgba(0,0,0,0.25)]"
            }`}
          />
        </button>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1.5 rounded-lg border border-black/10 dark:border-white/10 md:hidden text-black dark:text-white"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--bg-page)] border-b border-black/10 dark:border-white/10 p-6 flex flex-col gap-4 md:hidden z-50 shadow-xl">
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-black dark:text-white"
          >
            Pricing &amp; Order
          </a>
          <a
            href="#nfc-cards"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-black dark:text-white flex items-center justify-between"
          >
            <span>NFC Cards</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
              NEW
            </span>
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-black dark:text-white"
          >
            Behind the Brand
          </a>
          <a
            href={stickerDumpContent.links.instagramProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-pink-600 text-white font-medium text-sm mt-2"
          >
            <span>Order on Instagram (@stickerdump.exe)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
