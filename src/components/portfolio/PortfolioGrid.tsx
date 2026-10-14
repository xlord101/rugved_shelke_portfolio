"use client";

import React from "react";
import { projectsContent } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function PortfolioGrid() {
  const [p1, p2, p3, p4, p5, ...rest] = projectsContent;

  return (
    <div className="w-full flex flex-col gap-6 sm:gap-8">
      {/* Row 1: Two Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {p1 && <ProjectCard project={p1} />}
        {p2 && <ProjectCard project={p2} />}
      </div>

      {/* Row 2: Full-Width Card */}
      {p3 && (
        <div className="w-full">
          <ProjectCard project={p3} isFullWidth={true} />
        </div>
      )}

      {/* Row 3: Two Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {p4 && <ProjectCard project={p4} />}
        {p5 && <ProjectCard project={p5} />}
      </div>

      {/* Any additional projects in data */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}
