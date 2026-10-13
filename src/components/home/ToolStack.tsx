"use client";

import React from "react";

interface ToolStackProps {
  onHover?: (hovered: boolean) => void;
  isDimmed?: boolean;
  isHovered?: boolean;
}

export function ToolStack({ onHover, isDimmed, isHovered }: ToolStackProps) {
  const tools = [
    {
      name: "Figma",
      icon: (
        <svg viewBox="0 0 38 57" className="w-5 h-5 fill-current">
          <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
          <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
          <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
          <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
          <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
        </svg>
      ),
    },
    {
      name: "Claude",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#D97757]">
          <path d="M17.5 12a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-2 0a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0z" />
          <circle cx="12" cy="12" r="2.5" fill="#CC785C" />
        </svg>
      ),
    },
    {
      name: "Notion",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-black dark:text-white">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l11.458-.84c1.12-.093 1.213.28 1.026.933l-2.053 12.693c-.187 1.026-.653 1.306-1.586 1.399l-11.205.84c-1.12.093-1.4-.28-1.12-1.399l2.052-12.693c.187-.933.28-1.213-.999-1.399zm5.32 3.826c-.84 0-1.12.466-1.12.933v7.278c0 .467.28.933 1.12.933s1.12-.466 1.12-.933v-3.733l3.639 4.479c.373.467.84.467 1.213.373.373-.093.56-.466.56-.933v-7.278c0-.467-.28-.933-1.12-.933s-1.12.466-1.12.933v3.732l-3.546-4.385c-.373-.467-.746-.467-.746-.467z" />
        </svg>
      ),
    },
    {
      name: "Framer",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-black dark:text-white">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
      ),
    },
    {
      name: "Raycast",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#FF6363]">
          <path d="M12 2L2 12l10 10 10-10L12 2zm0 4.5l5.5 5.5L12 17.5 6.5 12 12 6.5z" />
        </svg>
      ),
    },
    {
      name: "Linear",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#5E6AD2]">
          <path d="M3 12a9 9 0 0 1 15.36-6.36l-12.72 12.72A8.96 8.96 0 0 1 3 12zm18 0a9 9 0 0 1-15.36 6.36l12.72-12.72A8.96 8.96 0 0 1 21 12z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
      className={`group relative w-full h-full p-4 sm:p-5 rounded-[24px] sm:rounded-[28px] glass-panel select-none overflow-hidden flex items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isHovered
          ? "glass-panel-hovered z-20"
          : isDimmed
          ? "scale-[0.996]"
          : "scale-100"
      }`}
    >
      {/* Inner Viewport with Edge Fade Mask */}
      <div
        className={`w-full overflow-hidden flex items-center transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isHovered ? "opacity-100" : isDimmed ? "opacity-60" : "opacity-100"
        }`}
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
        }}
      >
        {/* Infinite scrolling ticker */}
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 w-max">
          {/* Set 1 */}
          {tools.map((tool, idx) => (
            <div
              key={`tool-1-${idx}`}
              title={tool.name}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center p-2.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-108 shrink-0 shadow-xs"
            >
              {tool.icon}
            </div>
          ))}

          {/* Set 2 for seamless loop */}
          {tools.map((tool, idx) => (
            <div
              key={`tool-2-${idx}`}
              title={tool.name}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center p-2.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-108 shrink-0 shadow-xs"
            >
              {tool.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
