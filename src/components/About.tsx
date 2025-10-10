import SectionHeader from "@/components/SectionHeader";
import TechTag from "@/components/TechTag";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title="About Me"
          description="저는 사용자 경험을 최우선으로 생각하며,\n최신 기술을 활용하여 실용적이고 직관적인 인터페이스를 만드는 것을 좋아합니다."
        />

        <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">기술 스택</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Frontend",
                  techs: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Zustand", "HTML", "CSS", "Three.js"],
                  variant: "frontend" as const,
                },
                { title: "Backend", techs: ["Node.js", "Express", "MongoDB"], variant: "backend" as const },
                { title: "Tools & Others", techs: ["Git", "Slack", "AWS", "Figma", "Jest"], variant: "tools" as const },
              ].map(section => (
                <div key={section.title}>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{section.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {section.techs.map(tech => (
                      <TechTag key={tech} tech={tech} variant={section.variant} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
