"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 72;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="w-full mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-4xl font-bold text-custom-700 font-mono">Portfolio</div>
          <div className="hidden md:flex space-x-4">
            <button onClick={() => scrollToSection("hero")} className="text-gray-700 cursor-pointer font-mono font-semibold hover:text-custom-300 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-700 cursor-pointer font-mono font-semibold hover:text-custom-300 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-gray-700 cursor-pointer font-mono font-semibold hover:text-custom-300 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-700 cursor-pointer font-mono font-semibold hover:text-custom-300 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
