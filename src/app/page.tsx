"use client";

import { useEffect } from "react";
import { usePortfolioStore } from "@/store/portfolioStore";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const projectsData = [
  {
    id: "project-1",
    title: "Noddy",
    duration: "2025.05 ~ 2025.06",
    description: "에어팟 모션 데이터를 활용해 머리 움직임만으로 시스템 커서를 제어하는 프로젝트",
    image: "/Noddy-demo-video.gif",
    staticImage: "/Noddy-static.jpeg",
    technologies: [
      { frontend: ["JavaScript", "React", "Vite", "React Router", "Zustand", "Tailwind CSS", "Three.js", "i18next"] },
      { backend: ["Node.js", "Express", "MongoDB"] },
      { deploy: ["Amazon EC2", "Amazon S3", "Amazon Route 53", "Amazon Cloudfront"] },
    ],
    githubUrl: "https://github.com/Noddyhub/Noddy-FE",
    liveUrl: "https://www.noddy.co.kr/main",
    downloadUrl: "https://www.noddy.co.kr/",
    content: "프로젝트 개요 추후 추가",
    features: ["반응형 웹 디자인", "사용자 인증 및 권한 관리", "실시간 데이터 동기화", "모바일 최적화", "SEO 최적화"],
    challenges: "프로젝트 개요 추후 추가",
  },
  {
    id: "project-2",
    title: "donuTool",
    duration: "2025.06 ~ 2025.07",
    description: "상단에서 공간을 상시 차지하는 메뉴 막대를 대체하는 실시간 커서 추적 툴바로 다양한 기능을 빠르게 실행할 수 있게 해주는 브라우저 확장프로그램 프로젝트",
    image: "/donuTool-preview.gif",
    staticImage: "/donuTool-static.jpeg",
    technologies: [
      { frontend: ["TypeScript", "React", "Chrome Extension", "Vite", "React Router", "Zustand", "Tailwind CSS", "i18next", "Chart.js", "DND Kit"] },
      { backend: ["Node.js", "MongoDB"] },
      { deploy: ["Amazon EC2", "Amazon S3", "Amazon Route 53", "Amazon Cloudfront"] },
    ],
    githubUrl: "https://github.com/donuTool/donuTool-extension",
    liveUrl: "https://www.donutool.site/",
    downloadUrl: "https://chromewebstore.google.com/detail/donutool/heabnlejdfhggjiapbfmbhnfmhlknlaa?hl=ko",
    content: "프로젝트 개요 추후 추가",
    features: ["반응형 웹 디자인", "사용자 인증 및 권한 관리", "실시간 데이터 동기화", "모바일 최적화", "SEO 최적화"],
    challenges: "프로젝트 개요 추후 추가",
  },
];

export default function Home() {
  const setProjects = usePortfolioStore((state) => state.setProjects);

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
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
