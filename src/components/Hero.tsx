"use client";

import { useState, useEffect } from "react";
import GradientText from "./GradientText";

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const [animationState, setAnimationState] = useState<"visible" | "disappearing" | "hidden" | "appearing">("visible");

  const texts = ["프론트엔드 개발자", "React 개발자", "JavaScript 개발자", "웹 개발자"];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState("disappearing");

      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setAnimationState("hidden");

        setTimeout(() => {
          setAnimationState("appearing");

          setTimeout(() => {
            setAnimationState("visible");
          }, 500);
        }, 50);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-custom-100">
      <div className="text-center px-4 max-w-4xl mx-auto z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 font-sans">
          안녕하세요, <br />
          <span className="text-custom-400">
            <div className="inline-block overflow-hidden py-1" style={{ height: "1em", lineHeight: "1em" }}>
              <div
                className={`transition-all duration-500 ease-in-out ${
                  animationState === "visible"
                    ? "transform translate-y-0 opacity-100"
                    : animationState === "disappearing"
                    ? "transform translate-y-full opacity-0"
                    : animationState === "hidden"
                    ? "transform -translate-y-full opacity-0"
                    : "transform -translate-y-full opacity-0"
                }`}
                style={{ lineHeight: "1em" }}>
                <GradientText>{texts[currentText]}</GradientText>
              </div>
            </div>
          </span>
          <br />
          박재연입니다.
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full mx-auto">
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-custom-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-custom-700 transition-colors cursor-pointer w-full sm:w-auto min-w-[160px] sm:min-w-0">
            프로젝트 보기
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border-2 border-custom-600 text-custom-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-custom-600 hover:text-white transition-colors cursor-pointer w-full sm:w-auto min-w-[160px] sm:min-w-0">
            연락하기
          </button>
        </div>
      </div>
    </section>
  );
}
