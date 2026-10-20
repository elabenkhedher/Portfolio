"use client";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-paper-faint">
          © {year} Elaa Ben Khedher. Conçu avec{" "}
          <span className="text-blush" aria-hidden="true">
            ♡
          </span>{" "}
          et une touche de rose.
        </p>
        <a
          href="#top"
          onClick={scrollToTop}
          className="inline-flex min-h-[44px] items-center font-mono text-xs uppercase tracking-widest text-paper-faint transition-colors hover:text-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
        >
          Haut de page ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
