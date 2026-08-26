"use client";
import React from "react";
import { motion } from "framer-motion";

const details = [
  {
    label: "Stack",
    items: [
      "Node.js",
      "React",
      "Angular",
      "Java / JEE",
      "Python",
      "SQL",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
  {
    label: "Education",
    items: ["ISET Kelibia"],
  },
  {
    label: "Certifications",
    items: ["Cisco Networking Basics", "WordPress, Udemy"],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 border-b border-line py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mb-12 flex items-baseline gap-4">
          <span className="font-mono text-xs text-blush">01</span>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            About{" "}
            <span className="text-blush" aria-hidden="true">
              ✿
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-paper-dim">
              I am a full-stack developer from Kelibia, Tunisia. I got into
              programming at ISET Kelibia and stuck with the parts I like
              most: building interfaces that feel right, and writing the
              backend that keeps them honest.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-paper-dim">
              Day to day that means Node.js services, React and Angular front
              ends, and the occasional Java or Python detour. I work well on a
              team, I ask questions early, and I would rather ship something
              small and correct than something big and fragile.
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
  );
};

export default AboutSection;
