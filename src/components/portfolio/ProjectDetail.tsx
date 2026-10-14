"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { ProjectItem } from "@/lib/types";

interface ProjectDetailProps {
  project: ProjectItem;
  nextProject?: ProjectItem;
}

export function ProjectDetail({ project, nextProject }: ProjectDetailProps) {
  return (
    <article className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-8 sm:pt-16 pb-20 text-black dark:text-white transition-colors">
      {/* Title & Category Header */}
      <div className="mb-10 sm:mb-16">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9]">
          {project.title}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-zinc-500 dark:text-zinc-400 mt-4 font-normal">
          {project.category}
        </p>
      </div>

      {/* Hero Image */}
      <div className="w-full aspect-[16/10] sm:aspect-[16/9] relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-black/8 dark:border-white/10 bg-black/5 dark:bg-black mb-16 sm:mb-24">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Project Metadata Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-black/10 dark:border-white/10 mb-16 sm:mb-24 text-sm sm:text-base">
        {project.client && (
          <div>
            <span className="block text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 font-medium">
              Client
            </span>
            <span className="font-medium">{project.client}</span>
          </div>
        )}

        <div>
          <span className="block text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 font-medium">
            Year
          </span>
          <span className="font-medium">{project.year}</span>
        </div>

        {project.role && (
          <div>
            <span className="block text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 font-medium">
              Role
            </span>
            <span className="font-medium">{project.role}</span>
          </div>
        )}

        {project.liveUrl && (
          <div>
            <span className="block text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 font-medium">
              Website
            </span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium hover:opacity-70 transition-opacity"
            >
              <span>Visit Site</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>

      {/* Narrative Section: Overview, Challenge, Solution */}
      <div className="max-w-4xl flex flex-col gap-12 sm:gap-16 mb-20">
        <div>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4">
            Overview
          </h2>
          <p className="text-lg sm:text-xl font-normal leading-relaxed text-zinc-600 dark:text-zinc-300">
            {project.overview}
          </p>
        </div>

        {project.challenge && (
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4">
              The Challenge
            </h2>
            <p className="text-lg sm:text-xl font-normal leading-relaxed text-zinc-600 dark:text-zinc-300">
              {project.challenge}
            </p>
          </div>
        )}

        {project.solution && (
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4">
              The Solution
            </h2>
            <p className="text-lg sm:text-xl font-normal leading-relaxed text-zinc-600 dark:text-zinc-300">
              {project.solution}
            </p>
          </div>
        )}

        {project.scope && project.scope.length > 0 && (
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4">
              Scope of Work
            </h2>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {project.scope.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 text-sm sm:text-base font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Next Project Teaser */}
      {nextProject && (
        <div className="pt-16 border-t border-black/10 dark:border-white/10">
          <span className="block text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4 font-medium">
            Next Project
          </span>
          <Link
            href={`/portfolio/${nextProject.slug}`}
            className="group flex items-center justify-between py-6 hover:opacity-75 transition-opacity"
          >
            <div>
              <h3 className="text-3xl sm:text-5xl font-medium tracking-tight group-hover:underline">
                {nextProject.title}
              </h3>
              <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 mt-1">
                {nextProject.category}
              </p>
            </div>
            <ArrowUpRight className="w-8 h-8 sm:w-12 sm:h-12 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
          </Link>
        </div>
      )}
    </article>
  );
}
