"use client";

import React from "react";

import Image from "next/image";

interface HeroTitleMorphProps {
  title: string;
  isStickerDump?: boolean;
}

export function HeroTitleMorph({ title, isStickerDump = false }: HeroTitleMorphProps) {
  return (
    <div className="relative w-full flex justify-center items-center pointer-events-none select-none z-0 pt-0 sm:pt-1 pb-0 h-[85px] sm:h-[120px] md:h-[155px] lg:h-[180px] overflow-visible">
      {isStickerDump ? (
        <div
          key="stickerdump-hero-logo"
          className="animate-sticker-pop flex items-center justify-center filter drop-shadow-[0_12px_32px_rgba(176,33,103,0.35)]"
        >
          <div className="relative w-[220px] sm:w-[320px] md:w-[420px] lg:w-[480px] h-[75px] sm:h-[105px] md:h-[135px] lg:h-[155px]">
            <Image
              src="/images/stickerdump/stickerdump-logo.png"
              alt="StickerDump.exe"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      ) : (
        /* Clean, staggered incoming characters rising from below with progressive blur */
        <h1
          key={`hero-title-${title}`}
          className="text-[clamp(80px,12.2vw,176px)] font-medium tracking-[-0.105em] text-black dark:text-white leading-[0.78] text-center whitespace-nowrap pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_1px_4px_rgba(255,255,255,0.3)]"
        >
          {Array.from(title).map((char, i) => (
            <span
              key={`char-${title}-${i}`}
              className="inline-block animate-char-in will-change-transform will-change-filter"
              style={{
                animationDelay: `${i * 22}ms`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      )}
    </div>
  );
}

