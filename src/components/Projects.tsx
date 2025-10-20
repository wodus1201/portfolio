"use client";

import Link from "next/link";
import { usePortfolioStore } from "@/store/portfolioStore";
import Image from "next/image";
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import TechTag from "@/components/TechTag";

export default function Projects() {
  const projects = usePortfolioStore(state => state.projects);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section className="py-20 bg-custom-300">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title="Projects"
          className="text-gray-900"
          description={
            "제가 작업한 주요 프로젝트들을 소개합니다.\n각 프로젝트를 클릭하면 자세한 내용을 확인할 수 있습니다."
          }
        />

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 max-w-[1050px] mx-auto justify-center">
          {projects.map(project => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className="group bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0 w-80 relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute top-3 right-3 z-10">
                <span
                  className={`px-2 py-1 text-xs font-normal rounded-full ${
                    project.soloOrTeam === "team" ? "bg-green-300 text-green-800" : "bg-orange-300 text-orange-800"
                  }`}
                >
                  {project.soloOrTeam === "team" ? "2인 팀 프로젝트" : "개인 프로젝트"}
                </span>
              </div>
              <div className="aspect-video bg-gray-200 flex items-center justify-center overflow-hidden relative">
                <Image
                  src={project.staticImage || project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${hoveredProject === project.id ? "opacity-0" : "opacity-100"}`}
                />
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${hoveredProject === project.id ? "opacity-100" : "opacity-0"}`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-custom-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((techGroup, index) => (
                    <div key={index} className="flex flex-wrap gap-1">
                      {techGroup.frontend?.slice(0, 2).map(tech => (
                        <TechTag key={tech} tech={tech} variant="frontend" size="sm" />
                      ))}
                      {techGroup.backend?.slice(0, 1).map(tech => (
                        <TechTag key={tech} tech={tech} variant="backend" size="sm" />
                      ))}
                      {techGroup.image?.slice(0, 1).map(tech => (
                        <TechTag key={tech} tech={tech} variant="image" size="sm" />
                      ))}
                      {techGroup.database?.slice(0, 1).map(tech => (
                        <TechTag key={tech} tech={tech} variant="database" size="sm" />
                      ))}
                      {techGroup.deploy?.slice(0, 1).map(tech => (
                        <TechTag key={tech} tech={tech} variant="deploy" size="sm" />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      onClick={e => {
                        e.stopPropagation();
                        window.open(project.githubUrl, "_blank");
                        e.preventDefault();
                      }}
                      className="text-gray-500 font-bold hover:bg-custom-200 hover:text-gray-700 text-xs px-2 py-1 rounded bg-custom-100"
                    >
                      GitHub 저장소
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      onClick={e => {
                        e.stopPropagation();
                        window.open(project.liveUrl, "_blank");
                        e.preventDefault();
                      }}
                      className="text-gray-500 font-bold hover:bg-custom-200 hover:text-gray-700 text-xs px-2 py-1 rounded bg-custom-100"
                    >
                      배포 사이트
                    </a>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
