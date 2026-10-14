"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/lib/types";

interface ProjectCardProps {
  project: ProjectItem;
  isFullWidth?: boolean;
}

export function ProjectCard({ project, isFullWidth = false }: ProjectCardProps) {
  const targetUrl = project.liveUrl || `/portfolio/${project.slug}`;
  const isExternal = Boolean(project.liveUrl);

  return (
    <a
      href={targetUrl}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group block w-full rounded-[22px] sm:rounded-[28px] overflow-hidden glass-panel hover:glass-panel-hovered p-2.5 sm:p-3.5 select-none cursor-pointer"
    >
      {/* Mockup Image Container */}
      <div
        className={`w-full relative rounded-[16px] sm:rounded-[22px] overflow-hidden bg-black/5 dark:bg-black ${
          isFullWidth
            ? "aspect-[16/9] sm:aspect-[21/9]"
            : "aspect-[16/10] sm:aspect-[16/9.5]"
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={isFullWidth ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
          className="object-cover object-center group-hover:scale-106 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
        />
      </div>

      {/* Meta Bar */}
      <div className="flex items-center justify-between px-2 pt-3 pb-1 sm:px-3 sm:pt-4 sm:pb-1.5 text-black dark:text-white">
        <h2 className="text-base sm:text-lg md:text-xl font-medium tracking-tight">
          {project.title}
        </h2>
        <span className="text-xs sm:text-sm font-normal text-zinc-500 dark:text-zinc-400 inline-flex items-center gap-1.5 shrink-0 ml-3">
          <span>{project.category}</span>
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </span>
      </div>
    </a>
  );
}
