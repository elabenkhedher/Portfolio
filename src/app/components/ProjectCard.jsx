"use client";
import React, { useState } from "react";
import Image from "next/image";

const ProjectCard = ({ index, project, onSelect }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group border-t border-line py-8 transition-colors last:border-b hover:bg-ink-raised md:py-10">
      <div className="grid grid-cols-1 gap-4 px-1 md:grid-cols-12 md:gap-8">
        {/* Index number */}
        <div className="font-mono text-xs text-paper-faint md:col-span-1 md:pt-1.5">
          {String(index).padStart(2, "0")}
        </div>

        {/* Project Thumbnail */}
        <div className="md:col-span-4">
          <div
            onClick={() => onSelect(project)}
            className="relative cursor-pointer overflow-hidden border border-line bg-ink"
          >
            {project.image && !imageError ? (
              <Image
                src={project.image}
                alt={`Aperçu du projet ${project.title}`}
                width={800}
                height={500}
                loading="lazy"
                onError={() => setImageError(true)}
                className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            ) : (
              <div
                className={`flex aspect-[16/10] w-full items-center justify-center bg-gradient-to-br ${
                  project.accentGradient || "from-blush/20 via-ink to-line"
                } p-4 text-center`}
              >
                <div className="space-y-1">
                  <span className="text-xl text-blush">✦</span>
                  <p className="font-mono text-xs uppercase tracking-widest text-paper-dim">
                    {project.title}
                  </p>
                </div>
              </div>
            )}
            <span
              className="pointer-events-none absolute right-3 top-2.5 animate-twinkle text-blush"
              aria-hidden="true"
            >
              ✦
            </span>
          </div>
        </div>

        {/* Title and Short Description */}
        <div className="md:col-span-4">
          <h3
            onClick={() => onSelect(project)}
            className="cursor-pointer text-xl font-medium tracking-tight text-paper transition-colors group-hover:text-blush sm:text-2xl"
          >
            {project.title}
            <span
              className="ml-2 inline-block text-blush opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
              aria-hidden="true"
            >
              ★
            </span>
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-paper-dim">
            {project.description}
          </p>
        </div>

        {/* Stack & Actions */}
        <div className="flex flex-col items-start gap-5 md:col-span-3 md:pt-1.5 lg:flex-row lg:items-start lg:justify-end lg:gap-8">
          <ul
            className="flex max-w-[12rem] flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-paper-faint"
            aria-label="Technologies utilisées"
          >
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="cursor-pointer font-mono text-xs uppercase tracking-widest text-paper-dim transition-colors hover:text-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
            >
              En savoir plus <span aria-hidden="true">→</span>
            </button>

            {project.gitUrl && (
              <a
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-paper-dim transition-colors hover:text-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
              >
                Code
              </a>
            )}

            {project.previewUrl && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-paper-dim transition-colors hover:text-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
              >
                Live <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
