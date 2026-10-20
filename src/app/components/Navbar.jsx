"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import ScrollProgress from "./ScrollProgress";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "Work", path: "#work", id: "work" },
  { title: "About", path: "#about", id: "about" },
  { title: "Contact", path: "#contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Scrollspy & navbar border appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) =>
        document.getElementById(link.id)
      );

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navLinks[i].id);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const elem = document.getElementById(targetId);
    if (elem) {
      const navOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-ink/85 shadow-sm backdrop-blur-md"
            : "border-b border-line/60 bg-ink/70 backdrop-blur-sm"
        }`}
      >
        <nav
          className="mx-auto flex max-w-page items-center justify-between px-6 py-3.5 lg:px-10"
          aria-label="Navigation principale"
        >
          {/* Logo */}
          <Link
            href="/"
            className="group flex min-h-[44px] items-center font-medium tracking-tight text-paper"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="text-lg">elaa</span>
            <span className="text-lg text-blush">.</span>
            <span
              aria-hidden="true"
              className="ml-1 inline-block text-sm transition-transform duration-200 group-hover:-rotate-12 group-hover:scale-125"
            >
              🌸
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-7">
            <ul className="flex items-center gap-6" role="list">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.title}>
                    <a
                      href={link.path}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`relative flex min-h-[44px] items-center px-2 font-mono text-xs uppercase tracking-widest transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush ${
                        isActive
                          ? "font-medium text-blush"
                          : "text-paper-dim hover:text-paper"
                      }`}
                    >
                      {link.title}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute -bottom-1 left-2 right-2 h-[2px] rounded-full bg-blush"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-4 border-l border-line pl-6">
              <ThemeToggle />

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="flex min-h-[44px] items-center gap-2 rounded-full border border-line-strong bg-ink px-4 py-2 font-mono text-xs uppercase tracking-widest text-paper-dim transition-all duration-200 hover:border-blush hover:text-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
              >
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blush opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blush" />
                </span>
                <span>Available for work</span>
              </a>
            </div>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
              aria-expanded={menuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-line-strong bg-ink text-paper transition-colors hover:border-blush hover:text-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
            >
              <div className="space-y-1.5" aria-hidden="true">
                <span
                  className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Drawer Menu with Framer Motion slide */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="border-b border-line bg-ink-raised px-6 pb-8 pt-4 shadow-xl md:hidden"
            >
              <ul className="space-y-1" role="list">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <li key={link.title} className="border-b border-line/60 last:border-none">
                      <a
                        href={link.path}
                        onClick={(e) => handleNavClick(e, link.id)}
                        className={`flex min-h-[48px] items-center justify-between py-3 text-xl tracking-tight transition-colors ${
                          isActive
                            ? "font-medium text-blush"
                            : "text-paper-dim hover:text-paper"
                        }`}
                      >
                        <span>{link.title}</span>
                        {isActive && <span className="text-blush">✦</span>}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 flex flex-col gap-4 border-t border-line pt-6">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-blush px-4 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:scale-[1.02]"
                >
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
                  </span>
                  Available for work
                </a>
                <p className="font-mono text-center text-xs uppercase tracking-widest text-paper-faint">
                  Kelibia, Tunisia<span className="text-blush">.</span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
