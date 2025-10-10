"use client";

import { useParams, useRouter } from "next/navigation";
import { usePortfolioStore } from "@/store/portfolioStore";
import { useEffect, useState } from "react";
import { projectsData } from "@/data/projects";
import { Project } from "@/types/project";
import { ArrowUpIcon, DownloadIcon, GithubIcon, RocketIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TooltipButton from "@/components/TooltipButton";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const { setProjects, getProjectById } = usePortfolioStore(state => state);
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setProjects(projectsData);

    const foundProject = getProjectById(params.id as string);
    if (!foundProject) {
      router.push("/");
    } else {
      setProject(foundProject);
    }
    setIsLoading(false);
  }, [params.id, setProjects, getProjectById, router, isScrolled]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-600 mx-auto mb-4"></div>
          <p className="text-gray-600">로딩 중...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">프로젝트를 찾을 수 없습니다</h1>
          <Link href="/" className="text-custom-600 hover:text-custom-700">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-full mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <button
              onClick={() => window.history.back()}
              className="cursor-pointer text-custom-600 hover:text-white font-semibold text-xs sm:text-base px-2 py-1.5 sm:px-4 sm:py-2 rounded-md bg-custom-100 hover:bg-custom-700 transition-colors w-full sm:w-auto whitespace-nowrap"
            >
              <span className="hidden sm:inline">포트폴리오로 돌아가기</span>
              <span className="sm:hidden">돌아가기</span>
            </button>
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 text-gray-700 px-2 py-1.5 sm:px-4 sm:py-2 rounded-md hover:bg-gray-200 transition-colors text-xs sm:text-base flex-1 sm:flex-none text-center whitespace-nowrap"
                >
                  <span className="hidden sm:inline">GitHub 저장소</span>
                  <span className="sm:hidden">GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-custom-500 text-white px-2 py-1.5 sm:px-4 sm:py-2 rounded-md hover:bg-custom-700 transition-colors text-xs sm:text-base flex-1 sm:flex-none text-center whitespace-nowrap"
                >
                  <span className="hidden sm:inline">배포 사이트</span>
                  <span className="sm:hidden">사이트</span>
                </a>
              )}
              {project.downloadUrl && (
                <a
                  href={project.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-custom-500 text-white px-2 py-1.5 sm:px-4 sm:py-2 rounded-md hover:bg-custom-700 transition-colors text-xs sm:text-base flex-1 sm:flex-none text-center whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Download</span>
                  <span className="sm:hidden">다운로드</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 flex items-center">
            {project.title}
            <span
              className={`${project.soloOrTeam === "solo" ? "bg-orange-300 text-orange-800" : "bg-green-300 text-green-800"} ml-4 px-3 py-1.5 rounded-full text-lg font-normal`}
            >
              {project.soloOrTeam === "solo" ? "개인 프로젝트" : "2인 팀 프로젝트 (프론트엔드 담당)"}
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-2">{project.duration}</p>
          <p className="text-xl text-gray-600 mb-6">{project.description}</p>
        </div>

        <div className="mb-12">
          <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
            <Image src={project.image} alt={project.title} width={1000} height={1000} />
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">프로젝트 개요</h2>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">{project.content}</div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-12">기술 스택</h2>
          <div className="space-y-4">
            {project.technologies.map((techGroup, index) => (
              <div key={index} className="space-y-3">
                {techGroup.frontend && techGroup.frontend.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {techGroup.frontend.map(tech => (
                        <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {techGroup.backend && techGroup.backend.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {techGroup.backend.map(tech => (
                        <span key={tech} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {techGroup.deploy && techGroup.deploy.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Deployment</h3>
                    <div className="flex flex-wrap gap-2">
                      {techGroup.deploy.map(tech => (
                        <span key={tech} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-12">주요 기능</h2>
          <div className="text-gray-700 leading-relaxed">
            {project.features && Object.keys(project.features).length > 0 ? (
              Object.entries(project.features).map(([category, features]) => (
                <div key={category} className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{category}</h3>
                  <div className="space-y-0">
                    {features &&
                      features.map((featureGroup: string | Record<string, string[]>, groupIndex: number) => (
                        <div key={groupIndex}>
                          {typeof featureGroup === "object" && featureGroup !== null ? (
                            Object.entries(featureGroup).map(([subCategory, subFeatures]) => (
                              <div key={subCategory} className="mb-3">
                                <div className="font-medium text-gray-800 mb-2">
                                  <span className="mr-2 text-xl">•</span> {subCategory}
                                </div>
                                <ul className="list-disc list-inside ml-4 space-y-1">
                                  {Array.isArray(subFeatures) &&
                                    subFeatures.map((subFeature, subIndex) => (
                                      <li key={subIndex} className="text-sm text-gray-600">
                                        {subFeature}
                                      </li>
                                    ))}
                                </ul>
                              </div>
                            ))
                          ) : (
                            <div className="font-medium text-gray-800">
                              <span className="mr-2 text-xl">•</span> {featureGroup}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              ))
            ) : (
              <p>추후 추가</p>
            )}
          </div>
        </div>
      </main>

      <nav
        className={`fixed bottom-0 right-0 m-4  ${isScrolled ? "opacity-100" : "opacity-0"} transition-opacity-colors duration-300 flex flex-col gap-1`}
      >
        <TooltipButton
          icon={<GithubIcon />}
          tooltip="소스 코드 보기"
          onClick={() => project?.githubUrl && window.open(project.githubUrl, "_blank")}
        />
        <TooltipButton
          icon={<RocketIcon />}
          tooltip="배포 사이트 보기"
          onClick={() => project?.liveUrl && window.open(project.liveUrl, "_blank")}
        />
        <TooltipButton
          icon={<DownloadIcon />}
          tooltip="앱 다운로드"
          onClick={() => project?.downloadUrl && window.open(project.downloadUrl, "_blank")}
        />
        <TooltipButton
          icon={<ArrowUpIcon />}
          tooltip="맨 위로 이동"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </nav>
    </div>
  );
}
