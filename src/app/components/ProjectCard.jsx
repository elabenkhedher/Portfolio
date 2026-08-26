import React from "react";
import Image from "next/image";

const ProjectCard = ({ index, title, description, stack, image, gitUrl, previewUrl }) => {
  return (
    <article className="group border-t border-line py-8 transition-colors last:border-b hover:bg-ink-raised md:py-10">
      <div className="grid grid-cols-1 gap-4 px-1 md:grid-cols-12 md:gap-8">
        <div className="font-mono text-xs text-paper-faint md:col-span-1 md:pt-1.5">
          {String(index).padStart(2, "0")}
        </div>

        <div className="md:col-span-4">
          <div className="relative overflow-hidden border border-line">
            <Image
              src={image}
              alt={`Preview of ${title}`}
              width={800}
              height={500}
              loading="lazy"
              className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span
              className="pointer-events-none absolute right-3 top-2.5 animate-twinkle text-blush"
              aria-hidden="true"
            >
              ✦
            </span>
          </div>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-xl font-medium tracking-tight text-paper-dim transition-colors group-hover:text-blush sm:text-2xl">
            {title}
            <span
              className="ml-2 inline-block text-blush opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
              aria-hidden="true"
            >
              ♡
            </span>
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-paper-dim">
            {description}
          </p>
        </div>

        <div className="flex flex-col items-start gap-5 md:col-span-3 md:pt-1.5 lg:flex-row lg:items-start lg:justify-end lg:gap-10">
          <ul className="flex max-w-[12rem] flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-paper-faint">
            {stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="flex gap-6">
            <a
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-paper-dim transition-colors hover:text-paper"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
