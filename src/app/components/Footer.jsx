import React from "react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-paper-faint">
          © {year} Elaa. Made with{" "}
          <span className="text-blush" aria-hidden="true">
            ♡
          </span>{" "}
          and an unreasonable amount of pink.
        </p>
        <Link
          href="#top"
          className="font-mono text-xs uppercase tracking-widest text-paper-faint transition-colors hover:text-blush"
        >
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
