export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            저는 사용자 경험을 최우선으로 생각하며,
            <br />
            최신 기술을 활용하여 실용적이고 직관적인 인터페이스를 만드는 것을 좋아합니다.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">기술 스택</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "JavaScript", "TypeScript", "Tailwind CSS", "Zustand", "HTML", "CSS", "Three.js"].map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "MongoDB"].map((tech) => (
                    <span key={tech} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Tools & Others</h4>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Slack", "AWS", "Figma", "Jest"].map((tech) => (
                    <span key={tech} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
