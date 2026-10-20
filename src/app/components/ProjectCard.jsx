"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index, onSelect }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-line bg-ink-raised/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blush/40 hover:bg-ink-raised hover:shadow-card-hover"
    >
      {/* Top Meta: Index & Category Badge */}
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-paper-faint">
            {String(index).padStart(2, "0")}
          </span>
          <span className="inline-flex items-center rounded-full border border-blush/30 bg-blush/10 px-2.5 py-0.5 font-mono text-[11px] font-normal uppercase tracking-wider text-blush">
            {project.categoryBadge}
          </span>
        </div>

        {/* Project Image Preview or Gradient Cover */}
        <div
          onClick={() => onSelect(project)}
          className="relative mt-4 aspect-video w-full cursor-pointer overflow-hidden rounded-lg border border-line/80 bg-ink"
        >
          {project.image && !imageError ? (
            <Image
              src={project.image}
              alt={`Aperçu du projet ${project.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${
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

          {/* Sparkle decorative indicator */}
          <span
            className="pointer-events-none absolute right-2.5 top-2.5 animate-twinkle text-blush opacity-80"
            aria-hidden="true"
          >
            ✦
          </span>

          {/* Quick view overlay hint on hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-ink/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100">
            <span className="rounded-full border border-blush/40 bg-ink/90 px-3 py-1 font-mono text-xs text-paper">
              Aperçu détaillé ↗
            </span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="mt-5">
          <h3
            onClick={() => onSelect(project)}
            className="cursor-pointer text-xl font-medium tracking-tight text-paper transition-colors group-hover:text-blush"
          >
            {project.title}
            <span
              className="ml-2 inline-block text-blush opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
              aria-hidden="true"
            >
              ♡
            </span>
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-wider text-blush">
            {project.subtitle}
          </p>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-paper-dim">
            {project.description}
          </p>
        </div>
      </div>

      {/* Bottom: Tech Chips & Actions */}
      <div className="mt-6 border-t border-line/80 pt-4">
        {/* Tech chips */}
        <ul
          className="flex flex-wrap gap-1.5 font-mono text-[11px] text-paper-faint"
          aria-label="Technologies utilisées"
        >
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line bg-ink/60 px-2 py-0.5 transition-all duration-200 hover:border-blush/60 hover:bg-ink-hover hover:text-paper"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <a
            href={project.gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-line-strong bg-ink/80 px-3.5 py-2 font-mono text-xs uppercase tracking-wider text-paper transition-all duration-200 hover:border-blush hover:bg-blush/10 hover:text-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
          >
            <svg
              className="h-3.5 w-3.5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex min-h-[44px] items-center gap-1 font-mono text-xs uppercase tracking-wider text-paper-dim transition-colors hover:text-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
          >
            <span>En savoir plus</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
