"use client";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="font-mono text-xs uppercase tracking-widest text-paper-dim transition-colors hover:text-paper"
    >
      {title}
    </Link>
  );
};

export default NavLink;
