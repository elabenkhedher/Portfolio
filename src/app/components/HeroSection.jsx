"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CvModal from "./CvModal";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Stage PFE — Fév 2027",
  "Développeuse Full Stack (Symfony / React / Node.js)",
  "Présidente Club T'SCAI",
  "Architecte Web & Mobile (Django, Flutter)",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isCvOpen, setIsCvOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="border-b border-line pb-20 pt-28 md:pb-28 md:pt-40">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <div className="mb-6 flex flex-wrap items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-paper-dim">
              <span
                className="h-2 w-2 animate-pulse rounded-full bg-blush"
                aria-hidden="true"
              />
              <div className="h-5 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -14, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block text-blush"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="text-paper-faint">· Nabeul & Kélibia, Tunisie</span>
              <span className="text-blush" aria-hidden="true">
                ✿
              </span>
            </div>

            <h1 className="max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight text-paper sm:text-5xl lg:text-6xl">
              Je conçois des applications web et logicielles, de la base de données au dernier pixel.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-paper-dim sm:text-lg">
              Je m&apos;appelle Elaa{" "}
              <span
                className="inline-block origin-bottom-right animate-wave"
                aria-hidden="true"
              >
                👋
              </span>{" "}
              Étudiante en 3ème année de Licence DSI à l&apos;ISET de Kélibia et Présidente du club T&apos;SCAI.
              Je développe principalement avec Symfony, React/Next.js, Node.js et Django, et j&apos;accorde une importance
              primordiale aux applications solides, lisibles et soignées. Je recherche un stage de fin d&apos;études (PFE)
              de 4 à 6 mois dès février 2027.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/#work"
                className="inline-flex min-h-[44px] items-center rounded-lg bg-blush px-6 py-3 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-blush-soft hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
              >
                Voir mes projets ✧
              </Link>

              {/* View / Download CV button */}
              <button
                type="button"
                onClick={() => setIsCvOpen(true)}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-blush/60 bg-blush/10 px-5 py-3 text-sm font-medium text-blush transition-all duration-200 hover:-translate-y-0.5 hover:border-blush hover:bg-blush/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                <span>Consulter mon CV 📄</span>
              </button>

              <Link
                href="/#contact"
                className="inline-flex min-h-[44px] items-center rounded-lg border border-line-strong px-5 py-3 text-sm font-medium text-paper-dim transition-all duration-200 hover:-translate-y-0.5 hover:border-blush hover:text-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
              >
                Me contacter ♡
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            <div className="relative mx-auto w-56 sm:w-64 lg:w-full lg:max-w-xs">
              <span
                className="pointer-events-none absolute -left-6 -top-5 animate-twinkle text-lg text-blush"
                aria-hidden="true"
              >
                ✦
              </span>
              <span
                className="pointer-events-none absolute -right-4 top-1/4 animate-floaty text-xl text-blush-deep"
                aria-hidden="true"
              >
                ♡
              </span>
              <span
                className="pointer-events-none absolute -right-6 bottom-16 animate-twinkle-slow text-sm text-blush-soft"
                aria-hidden="true"
              >
                ✧
              </span>
              <span
                className="pointer-events-none absolute -bottom-4 left-6 animate-floaty-slow text-base text-blush"
                aria-hidden="true"
              >
                ✿
              </span>
              <div className="overflow-hidden rounded-2xl border border-line bg-ink-raised shadow-card transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/images/hero-image.png"
                  alt="Portrait de Elaa Ben Khedher"
                  width={400}
                  height={400}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-blush-deep">
                Fig. 01 — enchantée, c&apos;est moi ♡
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CV Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </>
  );
};

export default HeroSection;
