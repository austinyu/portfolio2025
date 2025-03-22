"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import clsx from "clsx";

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
    <NavigationMenu viewport={false} className={`w-full ${className || ""}`}>
      <NavigationMenuList>
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.name}>
              <NavigationMenuLink
                className={clsx(
                  navigationMenuTriggerStyle(),
                  "text-lg text-amber-800 bg-transparent",
                  "hover:bg-gray-900 hover:text-amber-500 transition-colors duration-300"
                )}
                href={link.href}
              >
                {link.name}
              </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
