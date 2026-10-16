"use client";

import React from "react";

import Image from "next/image";

interface HeroTitleMorphProps {
  title: string;
  isStickerDump?: boolean;
}

export function HeroTitleMorph({ title, isStickerDump = false }: HeroTitleMorphProps) {
  return (
    <div
      className={`relative w-full flex justify-center items-center pointer-events-none select-none pt-0 sm:pt-1 pb-0 h-[85px] sm:h-[120px] md:h-[155px] lg:h-[180px] overflow-visible ${
        isStickerDump ? "z-20" : "z-0"
      }`}
    >
      {isStickerDump ? (
        <div
          key="stickerdump-hero-logo"
          className="relative flex items-center justify-center translate-y-2.5 sm:translate-y-3.5 md:translate-y-4"
        >
          <div className="animate-sticker-pop flex items-center justify-center filter drop-shadow-[0_16px_36px_rgba(0,0,0,0.65)] dark:drop-shadow-[0_16px_36px_rgba(0,0,0,0.9)]">
            <div className="relative w-[280px] sm:w-[380px] md:w-[460px] lg:w-[500px] h-[95px] sm:h-[125px] md:h-[155px] lg:h-[170px]">
              <Image
                src="/images/stickerdump/stickerdump-logo.png"
                alt="StickerDump.exe"
                fill
                priority
                className="object-contain"
              />
            </div>
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

