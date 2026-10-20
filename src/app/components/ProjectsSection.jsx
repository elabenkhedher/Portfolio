"use client";
import React, { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projectsData, PROJECT_CATEGORIES } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projectsData;
    return projectsData.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <section id="work" className="scroll-mt-24 border-b border-line py-20 md:py-28">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-4">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-blush">02</span>
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Selected work{" "}
              <span className="text-blush" aria-hidden="true">
                ✦
              </span>
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-paper-faint">
            {filteredProjects.length} / {projectsData.length} projets
          </p>
        </div>

        <p className="mb-10 max-w-xl text-paper-dim">
          Une sélection de projets applicatifs récents — solutions web full-stack,
          applications mobiles et logiciels de bureau. Cliquez sur un projet pour explorer son architecture et son code source.
        </p>

        {/* Category Filter Tabs with Animated Pill */}
        <div className="mb-10 flex flex-wrap items-center gap-2" role="tablist" aria-label="Filtrer les projets par catégorie">
          {PROJECT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count =
              cat.id === "all"
                ? projectsData.length
                : projectsData.filter((p) => p.categories.includes(cat.id)).length;

            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative min-h-[44px] rounded-lg px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush ${
                  isActive
                    ? "text-paper shadow-sm"
                    : "text-paper-dim hover:text-paper"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 rounded-lg border border-blush/40 bg-ink-raised shadow-glow"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{cat.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                      isActive
                        ? "bg-blush/20 text-blush"
                        : "bg-line/60 text-paper-faint"
                    }`}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 20 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              >
                <ProjectCard
                  project={project}
                  index={index + 1}
                  onSelect={setSelectedProject}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
