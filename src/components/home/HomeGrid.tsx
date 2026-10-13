"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/content/site";
import { HeroTitleMorph } from "./HeroTitleMorph";
import { ToolStack } from "./ToolStack";
import { ResumeCard } from "./ResumeCard";

type HoverCardKey = "about" | "portfolio" | "contact" | "portrait" | "stack" | "resume" | null;

export function HomeGrid() {
  const [activeHover, setActiveHover] = useState<HoverCardKey>(null);

  // Compute dynamic hero title based on hovered card
  const getHeroTitle = () => {
    switch (activeHover) {
      case "about":
        return "About";
      case "portfolio":
        return "Portfolio";
      case "contact":
        return "Contact";
      case "portrait":
        return "Hey 👋";
      case "stack":
        return "Stack";
      case "resume":
        return "Resume";
      default:
        return siteContent.personName;
    }
  };

  const isDimmed = (key: HoverCardKey) => {
    return activeHover !== null && activeHover !== key;
  };

  const isHovered = (key: HoverCardKey) => {
    return activeHover === key;
  };

  return (
    <div
      onMouseLeave={() => setActiveHover(null)}
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 pt-0 pb-12 sm:pb-20 flex flex-col items-center"
    >
      {/* Dynamic Background Hero Heading hugging header with no extra gap */}
      <HeroTitleMorph title={getHeroTitle()} />

      {/* Bento Grid overlapping the heading matching Image 2 reference */}
      <div className="w-full -mt-12 sm:-mt-16 md:-mt-22 lg:-mt-26 relative z-10 flex flex-col gap-3.5 sm:gap-5">
        {/* ROW 1: About (narrow) + Portfolio (wide) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-5 w-full">
          {/* Card 1: About */}
          <Link
            href="/about"
            aria-label="Navigate to About page"
            onMouseEnter={() => setActiveHover("about")}
            onMouseLeave={() => setActiveHover(null)}
            style={{ animationDelay: "100ms" }}
            className={`group animate-tile-in md:col-span-4 lg:col-span-3.5 xl:col-span-3 h-[210px] sm:h-[250px] md:h-[290px] p-6 sm:p-8 rounded-[22px] sm:rounded-[28px] glass-panel flex flex-col justify-end select-none overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isHovered("about")
                ? "glass-panel-hovered z-20"
                : isDimmed("about")
                ? "scale-[0.996]"
                : "scale-100"
            }`}
          >
            <div
              className={`flex items-center justify-between w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isHovered("about")
                  ? "opacity-100"
                  : isDimmed("about")
                  ? "opacity-60"
                  : "opacity-100"
              }`}
            >
              <span className="text-xl sm:text-2xl font-medium tracking-tight text-black dark:text-white transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                About
              </span>
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-white transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 group-hover:-translate-y-1.5" />
            </div>
          </Link>

          {/* Card 2: Portfolio */}
          <Link
            href="/portfolio"
            aria-label="Navigate to Portfolio page"
            onMouseEnter={() => setActiveHover("portfolio")}
            onMouseLeave={() => setActiveHover(null)}
            style={{ animationDelay: "180ms" }}
            className={`group animate-tile-in md:col-span-8 lg:col-span-8.5 xl:col-span-9 h-[210px] sm:h-[250px] md:h-[290px] p-6 sm:p-8 rounded-[22px] sm:rounded-[28px] glass-panel flex flex-col justify-end select-none overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isHovered("portfolio")
                ? "glass-panel-hovered z-20"
                : isDimmed("portfolio")
                ? "scale-[0.996]"
                : "scale-100"
            }`}
          >
            <div
              className={`flex items-center justify-between w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isHovered("portfolio")
                  ? "opacity-100"
                  : isDimmed("portfolio")
                  ? "opacity-60"
                  : "opacity-100"
              }`}
            >
              <span className="text-xl sm:text-2xl font-medium tracking-tight text-black dark:text-white transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                Portfolio
              </span>
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-white transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 group-hover:-translate-y-1.5" />
            </div>
          </Link>
        </div>

        {/* ROW 2: Contact (wide) + Portrait (square) + (ToolStack / Resume) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3.5 sm:gap-5 w-full">
          {/* Card 3: Contact */}
          <Link
            href="/contact"
            aria-label="Navigate to Contact page"
            onMouseEnter={() => setActiveHover("contact")}
            onMouseLeave={() => setActiveHover(null)}
            style={{ animationDelay: "260ms" }}
            className={`group animate-tile-in sm:col-span-1 md:col-span-6 h-[210px] sm:h-[250px] md:h-[290px] p-6 sm:p-8 rounded-[22px] sm:rounded-[28px] glass-panel flex flex-col justify-end select-none overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isHovered("contact")
                ? "glass-panel-hovered z-20"
                : isDimmed("contact")
                ? "scale-[0.996]"
                : "scale-100"
            }`}
          >
            <div
              className={`flex items-center justify-between w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isHovered("contact")
                  ? "opacity-100"
                  : isDimmed("contact")
                  ? "opacity-60"
                  : "opacity-100"
              }`}
            >
              <span className="text-xl sm:text-2xl font-medium tracking-tight text-black dark:text-white transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                Contact
              </span>
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-white transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 group-hover:-translate-y-1.5" />
            </div>
          </Link>

          {/* Card 4: Portrait Photo */}
          <div
            onMouseEnter={() => setActiveHover("portrait")}
            onMouseLeave={() => setActiveHover(null)}
            style={{ animationDelay: "320ms" }}
            className={`group animate-tile-in sm:col-span-1 md:col-span-3 h-[210px] sm:h-[250px] md:h-[290px] rounded-[22px] sm:rounded-[28px] overflow-hidden relative border transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer ${
              isHovered("portrait")
                ? "scale-[1.012] border-black/30 dark:border-white/35 z-20 shadow-2xl opacity-100"
                : isDimmed("portrait")
                ? "opacity-60 scale-[0.994] border-black/10 dark:border-white/10"
                : "opacity-100 scale-100 border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/30"
            } bg-black`}
          >
            <Image
              src="/images/profile-portrait.png"
              alt="Portrait of Soren Weil"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover object-center grayscale contrast-125 dark:brightness-95 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-106"
              priority
            />
          </div>

          {/* Card 5 & 6 Stack: Tools (top) + Resume (bottom) */}
          <div
            style={{ animationDelay: "380ms" }}
            className="animate-tile-in sm:col-span-2 md:col-span-3 h-auto sm:h-auto md:h-[290px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3.5 sm:gap-5"
          >
            <div className="h-[130px] sm:h-[135px] w-full">
              <ToolStack
                onHover={(hovered) => setActiveHover(hovered ? "stack" : null)}
                isHovered={isHovered("stack")}
                isDimmed={isDimmed("stack")}
              />
            </div>
            <div className="h-[130px] sm:h-[135px] w-full">
              <ResumeCard
                onHover={(hovered) => setActiveHover(hovered ? "resume" : null)}
                isHovered={isHovered("resume")}
                isDimmed={isDimmed("resume")}
              />
            </div>
          </div>
        </div>

        {/* Homepage Bottomline from vexooclone */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 sm:pt-12 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 select-none">
          <span>Independent by nature. Collaborative by choice.</span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-black dark:text-white font-medium hover:opacity-75 transition-opacity group"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
