"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

import FloatingCard from "@/components/FloatingCards";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { MdLightMode, MdDarkMode  } from "react-icons/md";
import { GrSystem } from "react-icons/gr";

export function ThemeChanger({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering (to avoid hydration mismatch)
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className={cn(
      "p-2 rounded-full",
      "bg-foreground/60 hover:bg-foreground/50 text-background",
      "hover:text-background hover:bg-foreground",
      `${className || ""}`
      )}
      onClick={() => {
      setTheme(
        theme === "dark" ? "light" : theme === "light" ? "system" : "dark"
      );
      }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
      <MdDarkMode 
        className="w-5 h-5"
      />
      ) : theme === "light" ? (
      <MdLightMode
        className="w-5 h-5"
      />
      ) : (
      <GrSystem
        className="w-5 h-5"
      />
      )}
    </button>
  );
}

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
    <FloatingCard className={`${className || ""}`}>
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
