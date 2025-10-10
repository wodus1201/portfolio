"use client";

import { useEffect } from "react";
import { usePortfolioStore } from "@/store/portfolioStore";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { projectsData } from "@/data/projects";

export default function Home() {
  const setProjects = usePortfolioStore(state => state.setProjects);

  useEffect(() => {
    setProjects(projectsData);
  }, [setProjects]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skill">
        <Skill />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
