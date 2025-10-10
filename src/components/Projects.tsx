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
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title="Projects"
          description="제가 작업한 주요 프로젝트들을 소개합니다.\n각 프로젝트를 클릭하면 자세한 내용을 확인할 수 있습니다."
        />

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map(project => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-sm"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
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
