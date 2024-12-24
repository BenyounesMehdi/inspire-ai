"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const links = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "Pricing", href: "/pricing" },
    { id: 3, label: "Dashboard", href: "/dashboard" },
  ];

  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-3 text-lg font-normal">
      {links.map((link) => {
        return (
          <Link
            key={link.id}
            href={link.href}
            className={`hover:bg-secondary-foreground/15 p-2  ${
              pathname === link.href
                ? "bg-gradient-to-r from-green-400 to-green-600 text-muted py-2 px-4 rounded-full"
                : ""
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
