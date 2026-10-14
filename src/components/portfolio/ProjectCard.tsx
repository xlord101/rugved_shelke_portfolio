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
      className="group block w-full rounded-[28px] sm:rounded-[36px] overflow-hidden glass-panel hover:glass-panel-hovered p-3 sm:p-4 select-none cursor-pointer"
    >
      {/* Mockup Image Container */}
      <div
        className={`w-full relative rounded-[20px] sm:rounded-[28px] overflow-hidden bg-black/5 dark:bg-black ${
          isFullWidth
            ? "aspect-[16/10] sm:aspect-[16/8] md:aspect-[21/10]"
            : "aspect-[16/11] sm:aspect-[16/10]"
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
      <div className="flex items-center justify-between px-3 pt-4 pb-2 sm:px-4 sm:pt-5 sm:pb-3 text-black dark:text-white">
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight">
          {project.title}
        </h2>
        <span className="text-sm sm:text-base font-normal text-zinc-500 dark:text-zinc-400 inline-flex items-center gap-1.5">
          <span>{project.category}</span>
          <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </span>
      </div>
    </a>
  );
}
