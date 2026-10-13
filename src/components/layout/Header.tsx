"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { siteContent } from "@/content/site";

interface HeaderProps {
  customBackLabel?: string;
  customBackHref?: string;
}

export function Header({ customBackLabel, customBackHref }: HeaderProps) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [timeString, setTimeString] = useState<string>("");

  const isHome = pathname === "/";
  const isProjectDetail = pathname.startsWith("/portfolio/") && pathname !== "/portfolio";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        const formatter = new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: siteContent.timezone,
        });
        setTimeString(formatter.format(now));
      } catch {
        // Fallback to local time
        const formatter = new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        setTimeString(formatter.format(now));
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 w-full pt-3 pb-2 sm:pt-4 sm:pb-3 px-4 sm:px-8 md:px-12 flex items-center justify-between text-xs sm:text-sm font-normal tracking-tight text-black dark:text-white bg-[var(--bg-page)]/80 backdrop-blur-md transition-colors duration-500 z-40">
      {/* Left Column: Brand / Nav Back */}
      <div className="flex items-center gap-3 sm:gap-6 z-10">
        {isHome ? (
          <Link
            href="/"
            className="font-medium hover:opacity-70 transition-opacity tracking-tight"
          >
            {siteContent.personName}
          </Link>
        ) : isProjectDetail ? (
          <Link
            href={customBackHref || "/portfolio"}
            className="inline-flex items-center gap-1.5 font-medium hover:opacity-70 transition-opacity group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{customBackLabel || "Back"}</span>
          </Link>
        ) : (
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-medium hover:opacity-70 transition-opacity group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Home</span>
          </Link>
        )}
      </div>

      {/* Center Column: Perfectly Centered Professional Title */}
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none hidden sm:block">
        <span className="text-zinc-500 dark:text-zinc-400 font-normal tracking-tight text-sm sm:text-base">
          {siteContent.professionalTitle}
        </span>
      </div>

      {/* Right Column: Location + Live Clock + Theme Toggle */}
      <div className="flex items-center gap-3 sm:gap-6 z-10">
        <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-normal flex items-center">
          <span>{siteContent.location}</span>
          {timeString && (
            <>
              <span className="mx-1.5 opacity-60">•</span>
              <span className="tabular-nums font-mono text-xs sm:text-sm">{timeString}</span>
            </>
          )}
        </div>

        {/* Sleek Tactile Theme Toggle Pill Switch */}
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
      </div>
    </header>
  );
}
