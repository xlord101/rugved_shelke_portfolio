"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/content/site";

interface ResumeCardProps {
  onHover?: (hovered: boolean) => void;
  isDimmed?: boolean;
  isHovered?: boolean;
}

export function ResumeCard({ onHover, isDimmed, isHovered }: ResumeCardProps) {
  return (
    <Link
      href={siteContent.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download or view Resume"
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
      className={`group relative w-full h-full p-6 sm:p-7 rounded-[24px] sm:rounded-[28px] glass-panel flex flex-col justify-end select-none overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isHovered
          ? "glass-panel-hovered z-20"
          : isDimmed
          ? "scale-[0.996]"
          : "scale-100"
      }`}
    >
      <div
        className={`flex items-center justify-between w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isHovered
            ? "opacity-100"
            : isDimmed
            ? "opacity-60"
            : "opacity-100"
        }`}
      >
        <span className="text-xl sm:text-2xl font-medium tracking-tight text-black dark:text-white transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
          Resume
        </span>
        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-white transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 group-hover:-translate-y-1.5" />
      </div>
    </Link>
  );
}
