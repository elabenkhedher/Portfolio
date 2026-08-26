"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Application",
    description:
      "Storefront with a product catalog, cart and checkout, backed by a Node.js REST API and a small admin panel for inventory.",
    stack: ["Node.js", "React", "MongoDB"],
    image: "/images/projects/project-01.svg",
    gitUrl: "https://github.com/",
    previewUrl: "https://github.com/",
  },
  {
    id: 2,
    title: "Food Ordering Application",
    description:
      "Mobile app for ordering from local restaurants, with a live order status feed and a kitchen-side view for updating tickets.",
    stack: ["React Native", "Firebase"],
    image: "/images/projects/project-02.svg",
    gitUrl: "https://github.com/",
    previewUrl: "https://github.com/",
  },
  {
    id: 3,
    title: "Photography Portfolio",
    description:
      "Gallery site for a photographer friend. Lazy-loaded full-bleed images, keyboard navigation and a simple form for uploading new sets.",
    stack: ["Next.js", "Tailwind CSS"],
    image: "/images/projects/project-03.svg",
    gitUrl: "https://github.com/",
    previewUrl: "https://github.com/",
  },
  {
    id: 4,
    title: "React Firebase Template",
    description:
      "Starter kit with email and password auth, protected routes and CRUD examples wired up to Firestore, so new projects skip the boring part.",
    stack: ["React", "Firebase"],
    image: "/images/projects/project-04.svg",
    gitUrl: "https://github.com/",
    previewUrl: "https://github.com/",
  },
  {
    id: 5,
    title: "Full-stack Roadmap",
    description:
      "A step-by-step guide to becoming a full-stack developer, with one project idea per stage and notes on what each one actually teaches you.",
    stack: ["Next.js", "Markdown"],
    image: "/images/projects/project-05.svg",
    gitUrl: "https://github.com/",
    previewUrl: "https://github.com/",
  },
  {
    id: 6,
    title: "This Website",
    description:
      "The page you are reading. Built with Next.js and Tailwind CSS, with a contact form handled by an API route on Vercel.",
    stack: ["Next.js", "Tailwind CSS", "Resend"],
    image: "/images/projects/project-06.svg",
    gitUrl: "https://github.com/",
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
