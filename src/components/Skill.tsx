import SectionHeader from "./SectionHeader";
import TechTag from "./TechTag";

export default function Skill() {
  return (
    <section className="py-20 bg-custom-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <SectionHeader title="Skills" className="text-gray-900" />
        <div className="space-y-4">
          {[
            {
              title: "Frontend",
              techs: [
                "React",
                "React Native",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "Zustand",
                "HTML",
                "CSS",
                "Three.js",
              ],
              variant: "frontend" as const,
            },
            { title: "Backend", techs: ["Node.js", "Express", "MongoDB"], variant: "backend" as const },
            { title: "Tools & Others", techs: ["Git", "Slack", "AWS", "Figma", "Jest"], variant: "tools" as const },
          ].map(section => (
            <div key={section.title}>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{section.title}</h4>
              <div className="flex flex-wrap gap-2">
                {section.techs.map(tech => (
                  <TechTag key={tech} tech={tech} variant={section.variant} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
