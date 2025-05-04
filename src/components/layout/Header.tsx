"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X, Search, ShoppingBag } from "lucide-react";

const navItems = [
  { name: "Store", href: "/store" },
  { name: "Mac", href: "/mac" },
  { name: "iPad", href: "/ipad" },
  { name: "iPhone", href: "/iphone" },
  { name: "Watch", href: "/watch" },
  { name: "Vision", href: "/vision" },
  { name: "AirPods", href: "/airpods" },
  { name: "TV & Home", href: "/tv-home" },
  { name: "Entertainment", href: "/entertainment" },
  { name: "Accessories", href: "/accessories" },
  { name: "Support", href: "/support" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`apple-header fixed top-0 left-0 right-0 z-50 flex h-12 items-center justify-between px-4 md:px-8 ${
        isScrolled ? "border-b border-gray-200" : ""
      }`}
    >
      {/* Mobile Menu (visible on small screens) */}
      <div className="flex items-center md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu size={18} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-full p-0">
            <div className="flex h-12 items-center justify-between border-b border-gray-200 px-4">
              <Link href="/" className="text-2xl">
                <svg
                  height="44"
                  viewBox="0 0 14 44"
                  width="14"
                  className="h-12 w-3.5"
                >
                  <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1468 1.5906zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z" />
                </svg>
              </Link>
              <SheetClose className="focus:outline-none">
                <X size={18} />
              </SheetClose>
            </div>
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="py-3 text-base text-zinc-900 hover:text-zinc-600"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Apple Logo */}
      <div className="flex items-center justify-start flex-1 md:justify-center md:flex-none">
        <Link href="/" className="text-2xl">
          <svg height="44" viewBox="0 0 14 44" width="14" className="h-12 w-3.5">
            <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1468 1.5906zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z" />
          </svg>
        </Link>
      </div>

      {/* Desktop Navigation (hidden on small screens) */}
      <nav className="hidden md:flex items-center justify-center space-x-8 flex-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-xs text-zinc-900 hover:text-zinc-600"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Icons (Search and Shopping Bag) */}
      <div className="flex items-center justify-end space-x-4 flex-1 md:flex-none">
        <button
          className="focus:outline-none"
          aria-label="Search apple.com"
        >
          <Search size={18} />
        </button>
        <button
          className="focus:outline-none"
          aria-label="Shopping Bag"
        >
          <ShoppingBag size={18} />
        </button>
      </div>
    </header>
  );
}
