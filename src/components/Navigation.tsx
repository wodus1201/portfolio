"use client";

import { ArrowUpIcon } from "lucide-react";
import { useScroll, scrollToSection } from "@/hooks/useScroll";
import TooltipButton from "./TooltipButton";
import VisitorStats from "./VisitorStats";

export default function Navigation() {
  const isScrolled = useScroll(50);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all-colors duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
      >
        <div className="w-full mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold text-custom-700 flex items-center gap-2">
              Jason&apos;s Portfolio <VisitorStats />
            </div>
            <div className="hidden md:flex space-x-4">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
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
      <nav
        className={`fixed bottom-0 right-0 m-4  ${isScrolled ? "opacity-100" : "opacity-0"} transition-opacity-colors duration-300 flex flex-col gap-1`}
      >
        <TooltipButton icon={<ArrowUpIcon />} tooltip="맨 위로 이동" onClick={() => scrollToSection("hero", 72)} />
      </nav>
    </>
  );
}
