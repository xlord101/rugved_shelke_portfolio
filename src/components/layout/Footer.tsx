"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/content/site";
import { contactContent } from "@/content/contact";

export function Footer() {
  const [currentYear, setCurrentYear] = React.useState("2026");

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="w-full mt-24 sm:mt-36 border-t border-black/10 dark:border-white/10 pt-16 sm:pt-24 pb-16 px-4 sm:px-8 md:px-12 text-black dark:text-white transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16 sm:gap-24">
        {/* Top Callout Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-end pb-12 sm:pb-16 border-b border-black/10 dark:border-white/10">
          {/* Left: Have something good in mind? -> Let's make it matter */}
          <div className="lg:col-span-8 flex flex-col">
            <span className="text-xs sm:text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-medium mb-3 sm:mb-4">
              Have something good in mind?
            </span>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 sm:gap-6 text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tighter leading-[0.95] hover:opacity-75 transition-opacity"
            >
              <span>Let&apos;s make it matter</span>
              <ArrowUpRight className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 stroke-[1.5]" />
            </Link>
          </div>

          {/* Right: Direct Contacts */}
          <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-8 lg:items-start pb-2">
            <div>
              <span className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-medium block mb-2">
                Say hello
              </span>
              <a
                href={`mailto:${contactContent.email}`}
                className="text-xl sm:text-2xl font-medium hover:opacity-70 transition-opacity block mb-1"
              >
                {contactContent.email}
              </a>
              {contactContent.phone && (
                <a
                  href={`tel:${contactContent.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-lg sm:text-xl font-normal text-zinc-600 dark:text-zinc-400 hover:opacity-70 transition-opacity block"
                >
                  {contactContent.phone}
                </a>
              )}
            </div>

            {/* Social pills */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
              {contactContent.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs sm:text-sm font-medium transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Nav & Copyright Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-10 text-xs sm:text-sm">
          {/* Brand */}
          <Link
            href="/"
            className="text-base sm:text-lg font-medium tracking-tight hover:opacity-70 transition-opacity"
          >
            {siteContent.personName}
            <span className="text-zinc-400 dark:text-zinc-500">.</span>
          </Link>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 font-medium text-zinc-600 dark:text-zinc-400">
            <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="/portfolio" className="hover:text-black dark:hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link
              href="/stickerdump"
              className="inline-flex items-center gap-1.5 hover:text-black dark:hover:text-white transition-colors group"
            >
              <span>StickerDump</span>
              <span className="text-[10px] font-mono tracking-wider px-1.5 py-0.5 rounded-md bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">.exe</span>
            </Link>
            <Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">
              Contact
            </Link>
            <a
              href={siteContent.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors"
            >
              <span>Resume</span>
              <span className="text-xs">↗</span>
            </a>
          </nav>

          {/* Copyright */}
          <span className="text-zinc-500 dark:text-zinc-500 font-normal">
            © {currentYear} {siteContent.personName}
          </span>
        </div>
      </div>
    </footer>
  );
}
