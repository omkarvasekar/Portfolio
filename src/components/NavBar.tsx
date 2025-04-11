
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-2 bg-background/80 dark:bg-background/80 backdrop-blur-md shadow-sm"
          : "py-4 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="#home"
              className="text-xl font-bold flex items-center gap-2"
            >
              <span className="text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Omkar.dev
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-2 px-3 text-sm font-medium rounded-md hover:bg-accent transition duration-150 ease-in-out"
              >
                {link.name}
              </a>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden",
          isOpen
            ? "fixed inset-0 top-16 bg-background/95 dark:bg-background/95 backdrop-blur-sm z-40"
            : "hidden"
        )}
      >
        <div className="pt-2 pb-4 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-6 text-base font-medium border-b border-gray-200 dark:border-gray-800 hover:bg-accent transition duration-150 ease-in-out"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
