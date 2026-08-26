"use client";
import Link from "next/link";

const MenuOverlay = ({ links, onNavigate }) => {
  return (
    <div className="fixed inset-0 top-[61px] z-40 flex flex-col justify-between border-t border-line bg-ink px-6 pb-10 pt-16 md:hidden">
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.title} className="border-b border-line">
            <Link
              href={link.path}
              onClick={onNavigate}
              className="block py-5 text-3xl tracking-tight text-paper-dim transition-colors hover:text-blush"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <p className="font-mono text-xs uppercase tracking-widest text-paper-faint">
        Kelibia, Tunisia<span className="text-blush">.</span>
      </p>
    </div>
  );
};

export default MenuOverlay;
