"use client";

import { useParams, useRouter } from "next/navigation";
import { usePortfolioStore } from "@/store/portfolioStore";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const getProjectById = usePortfolioStore((state) => state.getProjectById);
  const [project, setProject] = useState(getProjectById(params.id as string));

  useEffect(() => {
    const foundProject = getProjectById(params.id as string);
    if (!foundProject) {
      router.push("/");
    } else {
      setProject(foundProject);
    }
  }, [params.id, getProjectById, router]);

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
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.history.back()}
              className="cursor-pointer text-custom-600 hover:text-white font-semibold px-4 py-2 rounded-lg bg-custom-100 hover:bg-custom-700 transition-colors">
              포트폴리오로 돌아가기
            </button>
            <div className="flex gap-2">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  GitHub 저장소
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-custom-500 text-white px-4 py-2 rounded-lg hover:bg-custom-700 transition-colors">
                  배포 사이트
                </a>
              )}
              {project.downloadUrl && (
                <a href={project.downloadUrl} target="_blank" rel="noopener noreferrer" className="bg-custom-500 text-white px-4 py-2 rounded-lg hover:bg-custom-700 transition-colors">
                  Download
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-4">{project.duration}</p>
          <p className="text-xl text-gray-600 mb-6">{project.description}</p>
        </div>

        <div className="mb-12">
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <Image src={project.image} alt={project.title} width={1000} height={1000} />
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">프로젝트 개요</h2>
          <div className="text-gray-700 leading-relaxed">{project.content}</div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-12">기술 스택</h2>
          <div className="space-y-4">
            {project.technologies.map((techGroup, index) => (
              <div key={index} className="space-y-3">
                {techGroup.frontend && techGroup.frontend.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {techGroup.frontend.map((tech) => (
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
                      {techGroup.backend.map((tech) => (
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
                      {techGroup.deploy.map((tech) => (
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
            <p className="list-disc list-inside text-gray-700 space-y-2">{project.features?.map((feature) => <li key={feature}>{feature}</li>) || "추후 추가"}</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-12">기술적 도전과 해결</h2>
          <div className="text-gray-700 leading-relaxed">
            <p>{project.challenges || "추후 추가"}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
