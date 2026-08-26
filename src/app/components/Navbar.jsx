"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "Work", path: "/#work" },
  { title: "About", path: "/#about" },
  { title: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-ink/85 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-page items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="group font-medium tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          elaa<span className="text-blush">.</span>
          <span
            aria-hidden="true"
            className="ml-1 inline-block text-sm transition-transform duration-200 group-hover:-rotate-12 group-hover:scale-125"
          >
            🌸
          </span>
        </Link>

        <div className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <li>
              <a
                href="/#contact"
                className="flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 font-mono text-xs uppercase tracking-widest text-paper-dim transition-colors hover:border-blush hover:text-blush"
              >
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blush opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blush" />
                </span>
                Available for work
              </a>
            </li>
          </ul>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 items-center justify-center border border-line-strong text-paper-dim transition-colors hover:text-paper md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-5 bg-current transition-transform ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-transform ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {menuOpen ? (
        <MenuOverlay
          links={navLinks}
          onNavigate={() => setMenuOpen(false)}
        />
      ) : null}
    </header>
  );
};

export default Navbar;
