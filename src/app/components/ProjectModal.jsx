"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-ink/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-line-strong bg-ink-raised p-6 shadow-2xl sm:p-8"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer la boîte de dialogue"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-ink text-paper-dim transition-colors hover:border-blush hover:text-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Header & Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-blush/40 bg-blush/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-blush">
              {project.categoryBadge}
            </span>
            {project.categories?.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-paper-faint"
              >
                {cat}
              </span>
            ))}
          </div>

          <h2
            id="modal-project-title"
            className="mt-3 text-2xl font-medium tracking-tight text-paper sm:text-3xl"
          >
            {project.title}
          </h2>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-blush">
            {project.subtitle}
          </p>

          {/* Project Preview Image */}
          <div className="relative mt-6 overflow-hidden rounded-lg border border-line bg-ink">
            {project.image ? (
              <Image
                src={project.image}
                alt={`Aperçu de ${project.title}`}
                width={800}
                height={480}
                className="h-auto max-h-[380px] w-full object-cover object-top"
              />
            ) : (
              <div
                className={`flex h-64 w-full items-center justify-center bg-gradient-to-br ${
                  project.accentGradient || "from-blush/20 via-ink to-line"
                }`}
              >
                <span className="font-mono text-sm tracking-widest text-paper-faint">
                  {project.title}
                </span>
              </div>
            )}
          </div>

          {/* Long Description */}
          <div className="mt-6 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-paper-faint">
              Présentation détaillée
            </h3>
            <p className="text-sm leading-relaxed text-paper-dim sm:text-base">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="mt-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-paper-faint">
                Points clés & Fonctionnalités
              </h3>
              <ul className="mt-3 space-y-2">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-paper-dim sm:text-sm"
                  >
                    <span className="mt-1 text-blush" aria-hidden="true">
                      ✦
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="mt-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-paper-faint">
              Technologies
            </h3>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-line bg-ink px-2.5 py-1 font-mono text-xs text-paper transition-colors hover:border-blush hover:text-blush"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-line pt-6">
            <a
              href={project.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-blush px-5 py-2.5 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-blush-soft hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
            >
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Voir le projet sur GitHub
            </a>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center rounded-md border border-line-strong px-5 py-2.5 text-sm font-medium text-paper-dim transition-colors hover:border-paper hover:text-paper"
            >
              Fermer
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
