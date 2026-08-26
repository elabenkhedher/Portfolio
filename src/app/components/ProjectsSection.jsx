"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Medicare Hub",
    description:
      "MediCare Hub is a healthcare management app built with Next.js, TypeScript, and Tailwind CSS, featuring role-based portals for Doctors, Secretaries, and Patients to manage appointments, medical records, and digital prescriptions.",
    stack: ["Next.js", "Django", "SQL"],
    image: "/images/projects/project-01.png",
    gitUrl: "https://github.com/elabenkhedher/MediCare_frontend",
    previewUrl: "https://github.com/",
  },
  {
    id: 2,
    title: "KbadhaPay",
    description:
      "Digital municipal payment and revenue collection platform built with Symfony 7.",
    stack: ["Symfony", "SQL"],
    image: "/images/projects/project-02.png",
    gitUrl: "https://github.com/elabenkhedher/kbadhapay",
  },
  {
    id: 3,
    title: "Pomodoro Timer",
    description:
      "A visual Pomodoro timer and task manager built for deep work.",
    stack: ["Next.js", "Tailwind CSS"],
    image: "/images/projects/project-03.png",
    gitUrl: "https://github.com/elabenkhedher/timer/",
    previewUrl: "https://github.com/",
  },
  {
    id: 4,
    title: "CovoISET",
    description:
      "CovoISET is a Tunisian carpooling platform connecting drivers and passengers to share inter-city rides, book seats, and track routes in real time.",
    stack: ["Symfony", "MongoDB", "Tailwind CSS"],
    image: "/images/projects/project-04.png",
    gitUrl: "https://github.com/elabenkhedher/covo",
    previewUrl: "https://github.com/",
  },
];

const ProjectsSection = () => {
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
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Selected work{" "}
              <span className="text-blush" aria-hidden="true">
                ✦
              </span>
            </h2>
          </div>
          <p className="hidden font-mono text-xs uppercase tracking-widest text-paper-faint sm:block">
            {projectsData.length} projects
          </p>
        </div>
        <p className="mb-12 max-w-xl text-paper-dim">
          A few things I have built, from school projects to client work. The
          list is short on purpose; I would rather show finished work than
          everything I have ever started.
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
                title={project.title}
                description={project.description}
                stack={project.stack}
                image={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
