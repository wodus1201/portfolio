"use client";

import { ArrowUpIcon } from "lucide-react";
import { useScroll, scrollToSection } from "@/hooks/useScroll";

export default function Navigation() {
  const isScrolled = useScroll(50);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all-colors duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
      >
        <div className="w-full mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold text-custom-700">Jason&apos;s Portfolio</div>
            <div className="hidden md:flex space-x-4">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id, 72)}
                  className="text-gray-700 cursor-pointer font-mono font-semibold hover:text-custom-300 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed bottom-0 right-0 h-13 w-13 rounded-full m-4 bg-custom-300 hover:bg-custom-500 ${isScrolled ? "opacity-100" : "opacity-0"} transition-opacity-colors duration-300`}
      >
        <button
          onClick={() => scrollToSection("hero", 72)}
          className="flex items-center justify-center h-full w-full cursor-pointer text-white font-mono font-semibold"
        >
          <ArrowUpIcon />
        </button>
      </div>
    </>
  );
}
