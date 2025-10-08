"use client";

import { navLinks } from "@/constants/nav-links";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      let currentSection = "hero";

      for (const { href } of navLinks) {
        const id = href.replace("#", "");
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleButton = (): void => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-10 h-14 bg-white/15 px-4 shadow-sm backdrop-blur-lg grid items-center">
      <nav
        className="container mx-auto flex items-center justify-between"
        role="navigation"
      >
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="Nike Logo"
            priority
            className="object-cover"
          />
        </Link>

        <ul className="hidden md:flex space-x-3" role="list">
          {navLinks.map(({ label, href }) => {
            const sectionId = href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <li key={label}>
                <Link
                  href={href}
                  scroll={false}
                  aria-label={label}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative font-sans font-medium transition-colors duration-300 hover:text-red-500",
                    "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-red-500 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100",
                    isActive && "text-red-500 after:scale-x-100",
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          className="md:hidden p-2 text-foreground transition duration-300 ease-in-out active:rotate-180"
          aria-label="Toggle menu"
          onClick={toggleButton}
        >
          <span className="sr-only">Toggle menu</span>

          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        <section
          className={cn(
            "md:hidden fixed top-14 left-0 w-full bg-white/20 backfrop-blur-lg backdrop-blur-lg z-40 shadow-md transition-all duration-300",
            isMobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 overflow-hidden opacity-0",
          )}
        >
          <ul className="flex flex-col space-y-4 p-4" role="list">
            {navLinks.map(({ label, href }) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={label}>
                  <Link
                    href={href}
                    scroll={false}
                    aria-label={label}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative font-sans font-medium transition-colors duration-300 hover:text-red-500",
                      "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-red-500 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100",
                      isActive && "text-red-500 after:scale-x-100",
                    )}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </nav>
    </header>
  );
}
