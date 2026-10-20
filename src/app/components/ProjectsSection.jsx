"use client";
import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projectsData } from "@/data/projects";
import { motion, useInView } from "framer-motion";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="scroll-mt-24 border-b border-line py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mb-4 flex items-baseline justify-between gap-4">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-blush">02</span>
            <h2 className="text-3xl font-medium tracking-tight text-paper sm:text-4xl">
              Projets sélectionnés{" "}
              <span className="text-blush" aria-hidden="true">
                ✦
              </span>
            </h2>
          </div>
          <p className="hidden font-mono text-xs uppercase tracking-widest text-paper-faint sm:block">
            {projectsData.length} projets
          </p>
        </div>
        <p className="mb-12 max-w-xl text-paper-dim">
          Une sélection de projets applicatifs récents — solutions web full-stack,
          applications mobiles et logiciels de bureau. Cliquez sur un projet ou sur &laquo;&nbsp;En savoir plus&nbsp;&raquo; pour explorer son architecture et ses fonctionnalités.
        </p>

        <ul ref={ref}>
          {projectsData.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: "easeOut",
              }}
            >
              <ProjectCard
                index={index + 1}
                project={project}
                onSelect={setSelectedProject}
              />
            </motion.li>
          ))}
        </ul>
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
