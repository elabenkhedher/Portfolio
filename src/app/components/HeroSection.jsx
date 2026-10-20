"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Full-stack developer",
  "React & Next.js engineer",
  "Python & Django builder",
  "Java & Desktop developer",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
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
            <span className="text-paper-faint">· Kelibia, Tunisia</span>
            <span className="text-blush" aria-hidden="true">
              ✿
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            I build web applications from the database to the last pixel.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper-dim sm:text-lg">
            My name is Elaa{" "}
            <span
              className="inline-block origin-bottom-right animate-wave"
              aria-hidden="true"
            >
              👋
            </span>{" "}
            I mostly work with Node.js, React and Angular, and I care about
            software that is solid, readable and actually finished. Right now I
            am open to freelance and full-time work.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/#work"
              className="inline-flex min-h-[44px] items-center rounded-lg bg-blush px-6 py-3 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-blush-soft hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
            >
              View my work ✧
            </Link>
            <Link
              href="/#contact"
              className="inline-flex min-h-[44px] items-center rounded-lg border border-line-strong px-6 py-3 text-sm font-medium text-paper-dim transition-all duration-200 hover:-translate-y-0.5 hover:border-blush hover:text-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
            >
              Get in touch ♡
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
                alt="Portrait of Elaa"
                width={400}
                height={400}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-blush-deep">
              Fig. 01 — hi, that&apos;s me ♡
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
