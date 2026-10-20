"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CvModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-ink/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative flex max-h-[92vh] w-full max-w-4xl flex-col rounded-2xl border border-line-strong bg-ink-raised shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-line px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blush/10 font-mono text-sm text-blush">
                CV
              </span>
              <div>
                <h2
                  id="cv-modal-title"
                  className="text-lg font-medium tracking-tight text-paper"
                >
                  Curriculum Vitae — Ela BEN KHEDHER
                </h2>
                <p className="font-mono text-xs uppercase tracking-wider text-blush">
                  Stage de fin d&apos;études (PFE) · Février 2027
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/cv-ela-ben-khedher.pdf"
                download="CV_Ela_Ben_Khedher.pdf"
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-blush px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink transition-all duration-200 hover:bg-blush-soft hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <span>Télécharger PDF</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-paper-dim transition-colors hover:border-blush hover:text-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
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
            </div>
          </div>

          {/* Body: Embedded PDF viewer + Structured Summary */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Embedded PDF iframe for desktop */}
            <div className="hidden sm:block h-[560px] w-full overflow-hidden rounded-xl border border-line bg-ink">
              <iframe
                src="/cv-ela-ben-khedher.pdf#toolbar=0&navpanes=0"
                title="CV Ela Ben Khedher"
                className="h-full w-full"
              />
            </div>

            {/* Mobile / Fallback structured preview */}
            <div className="space-y-6 text-sm">
              <div className="rounded-xl border border-line bg-ink p-5">
                <h3 className="font-mono text-xs uppercase tracking-widest text-blush">
                  Profil & Objectif
                </h3>
                <p className="mt-2 text-paper-dim leading-relaxed">
                  Étudiante en 3ème année de Licence en Technologies de l&apos;Informatique (DSI) à l&apos;ISET de Kélibia,
                  passionnée par le développement web et l&apos;architecture logicielle. Je maîtrise Symfony/PHP, React/Next.js, Node.js,
                  Django et Java. Présidente du club T&apos;SCAI, je recherche un stage de fin d&apos;études (PFE) de 4 à 6 mois
                  à partir de février 2027.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-paper-faint">
                  <span>📍 Nabeul / Kélibia, Tunisie</span>
                  <span>📞 +216 96 079 666</span>
                  <span>✉️ elabenkedher@gmail.com</span>
                </div>
              </div>

              {/* Expériences */}
              <div className="rounded-xl border border-line bg-ink p-5">
                <h3 className="font-mono text-xs uppercase tracking-widest text-blush">
                  Expériences professionnelles
                </h3>
                <div className="mt-3 space-y-4">
                  <div className="border-l-2 border-blush/60 pl-3">
                    <p className="font-medium text-paper">
                      Stage de perfectionnement – Aftercode
                    </p>
                    <p className="font-mono text-xs text-paper-faint">Janvier 2026</p>
                    <p className="mt-1 text-xs text-paper-dim">
                      Conception et développement complet de MediCare Hub (6 modules : RBAC 4 rôles, authentification, consultations, ordonnances).
                      Technologies : Django 5, DRF, Next.js 14, TypeScript, Tailwind CSS, Docker, MinIO. Rédaction d&apos;un rapport de stage de 38 pages.
                    </p>
                  </div>

                  <div className="border-l-2 border-line-strong pl-3">
                    <p className="font-medium text-paper">
                      Stage d&apos;initiation – Aftercode
                    </p>
                    <p className="font-mono text-xs text-paper-faint">Janvier 2025</p>
                    <p className="mt-1 text-xs text-paper-dim">
                      Développement d&apos;un mini-projet web et découverte du cycle complet de réalisation logiciel.
                    </p>
                  </div>
                </div>
              </div>

              {/* Leadership & Clubs */}
              <div className="rounded-xl border border-line bg-ink p-5">
                <h3 className="font-mono text-xs uppercase tracking-widest text-blush">
                  Vie associative & Leadership
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-paper-dim">
                  <li className="flex items-start gap-2">
                    <span className="text-blush">✦</span>
                    <span>
                      <strong className="text-paper">Présidente du club T&apos;SCAI – ISET Kélibia (2025 – Présent)</strong> :
                      Supervision des activités, organisation de conférences sur l&apos;IA agentique, formation Symfony, prise de parole devant 150 personnes.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blush">✦</span>
                    <span>
                      <strong className="text-paper">Responsable Marketing – Club T&apos;SCAI (2024 – 2025)</strong> :
                      Création des supports visuels et gestion de la communication numérique.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blush">✦</span>
                    <span>
                      <strong className="text-paper">Social Media Manager – Club Signal</strong> :
                      Gestion des réseaux sociaux, montage vidéo et publication.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Formations & Certifications */}
              <div className="rounded-xl border border-line bg-ink p-5">
                <h3 className="font-mono text-xs uppercase tracking-widest text-blush">
                  Formations & Certifications
                </h3>
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-mono">
                  <span className="rounded-md border border-line px-2.5 py-1 text-paper">
                    Licence DSI – ISET Kélibia (2024–Présent)
                  </span>
                  <span className="rounded-md border border-line px-2.5 py-1 text-paper">
                    Cisco Networking Basics + badge (2025)
                  </span>
                  <span className="rounded-md border border-line px-2.5 py-1 text-paper">
                    UX/UI (2024)
                  </span>
                  <span className="rounded-md border border-line px-2.5 py-1 text-paper">
                    WordPress (2 certificats, 2024)
                  </span>
                  <span className="rounded-md border border-line px-2.5 py-1 text-paper">
                    Webflow (2024)
                  </span>
                  <span className="rounded-md border border-line px-2.5 py-1 text-paper">
                    Symfony
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer action */}
          <div className="flex items-center justify-between border-t border-line px-6 py-4">
            <span className="font-mono text-xs text-paper-faint">
              Format PDF officiel (1 page)
            </span>
            <div className="flex items-center gap-3">
              <a
                href="/cv-ela-ben-khedher.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-wider text-paper-dim hover:text-blush"
              >
                Ouvrir en plein écran ↗
              </a>
              <a
                href="/cv-ela-ben-khedher.pdf"
                download="CV_Ela_Ben_Khedher.pdf"
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-blush px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:bg-blush-soft"
              >
                Télécharger (PDF)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CvModal;
