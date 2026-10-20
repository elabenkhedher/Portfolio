"use client";
import React, { useState } from "react";
import CvModal from "./CvModal";
import { motion } from "framer-motion";

const details = [
  {
    label: "Stack & Technologies",
    items: [
      "Symfony",
      "PHP",
      "React",
      "Next.js",
      "Node.js",
      "Django / DRF",
      "Python",
      "Java / JavaFX",
      "Flutter",
      "SQL",
      "MongoDB",
      "Tailwind CSS",
      "Docker",
    ],
  },
  {
    label: "Formation",
    items: ["Licence DSI — ISET Kélibia (2024 – Présent)"],
  },
  {
    label: "Certifications",
    items: [
      "Cisco Networking Basics (2025)",
      "UX / UI Design (2024)",
      "WordPress, 2 certificats (2024)",
      "Webflow (2024)",
      "Symfony",
    ],
  },
  {
    label: "Langues",
    items: ["Arabe (maternelle)", "Français (B2)", "Anglais (B1)"],
  },
];

const AboutSection = () => {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <>
      <section id="about" className="scroll-mt-24 border-b border-line py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-blush">01</span>
              <h2 className="text-3xl font-medium tracking-tight text-paper sm:text-4xl">
                À propos{" "}
                <span className="text-blush" aria-hidden="true">
                  ✿
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsCvOpen(true)}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-blush/50 bg-blush/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-blush transition-colors hover:bg-blush/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
              >
                <span>Consulter le CV (PDF)</span>
                <span aria-hidden="true">↗</span>
              </button>

              <a
                href="/cv-ela-ben-khedher.pdf"
                download="CV_Ela_Ben_Khedher.pdf"
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-blush px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:bg-blush-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <span>Télécharger</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-paper-dim">
                Je suis une développeuse full-stack basée entre Nabeul et Kélibia, en Tunisie.
                J&apos;ai découvert la programmation à l&apos;ISET de Kélibia en Licence DSI et me suis
                spécialisée dans ce qui me passionne le plus : bâtir des interfaces intuitives et agréables,
                adossées à des architectures backend solides, fiables et bien pensées.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-paper-dim">
                Au quotidien, je conçois des solutions avec Symfony, React/Next.js, Node.js et Django,
                tout en explorant le développement mobile avec Flutter et les applications de bureau avec JavaFX.
                Présidente du club T&apos;SCAI, j&apos;aime la dynamique d&apos;équipe, la clarté dans la communication,
                et je préfère toujours livrer un code soigné, maintenable et testé plutôt qu&apos;une solution rapide et fragile.
              </p>
              <p className="mt-5 text-base leading-relaxed text-blush">
                ✦ Actuellement à la recherche d&apos;un stage de fin d&apos;études (PFE) de 4 à 6 mois à partir de février 2027.
              </p>
            </div>

            <div className="lg:col-span-5">
              <dl>
                {details.map((group) => (
                  <div
                    key={group.label}
                    className="border-t border-line py-5 last:border-b"
                  >
                    <dt className="mb-3 font-mono text-xs uppercase tracking-widest text-paper-faint">
                      {group.label}
                    </dt>
                    <dd className="flex flex-wrap gap-x-2 gap-y-1 text-sm text-paper-dim">
                      {group.items.map((item, i) => (
                        <React.Fragment key={item}>
                          {i > 0 && (
                            <span className="text-blush-deep" aria-hidden="true">
                              ·
                            </span>
                          )}
                          <span>{item}</span>
                        </React.Fragment>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CV Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </>
  );
};

export default AboutSection;
