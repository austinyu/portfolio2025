"use client";

import * as React from "react";
import Link from "next/link";

import FloatingCard from "@/components/FloatingCards";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blogs" },
];

export function MainNav({ className }: { className?: string }) {
  return (
    <FloatingCard className={`${className} flex flex-col`}>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="transition-transform transform hover:scale-110"
        >
          {link.name}
        </Link>
      ))}
    </FloatingCard>
  );
}
