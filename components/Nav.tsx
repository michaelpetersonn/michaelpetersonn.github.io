"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="flex gap-8 px-10 py-6 items-center max-w-[960px] mx-auto w-full">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`text-sm font-medium tracking-wide no-underline transition-colors duration-200 relative
            ${pathname === href
              ? "text-[#1a1a1a] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#1a6bca] after:rounded-sm"
              : "text-[#4a4a4a] hover:text-[#1a1a1a]"
            }`}
        >
          {label}
        </Link>
      ))}
      <Link
        href="/contact"
        className={`ml-auto px-5 py-2 text-[0.85rem] font-medium rounded-full transition-all duration-200 no-underline
          ${pathname === "/contact"
            ? "bg-[#155ba0] text-white"
            : "bg-[#1a6bca] text-white hover:bg-[#155ba0] hover:-translate-y-px"
          }`}
      >
        Contact
      </Link>
    </header>
  );
}
