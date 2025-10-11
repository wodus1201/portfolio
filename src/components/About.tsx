import SectionHeader from "@/components/SectionHeader";
import { myData } from "@/data/projects";
import { useEffect, useMemo, useRef, useState } from "react";

export default function About() {
  const openPage = (url: string) => {
    window.open(url, "_blank");
  };

  const containerRef = useRef<HTMLDivElement | null>(null);
  const cellRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intermediateIndex, setIntermediateIndex] = useState<number | null>(null);
  const [cellSize, setCellSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const [gap, setGap] = useState<number>(4);
  const cols = 3;

  const items = useMemo(
    () => [
      { label: "이름", content: myData.name },
      { label: "생년월일", content: myData.birthday },
      { label: "전화번호", content: myData.phone, href: `tel:${myData.phone}` },
      { label: "이메일", content: myData.email, href: `mailto:${myData.email}` },
      { label: "GitHub", content: "바로가기", href: myData.github },
      { label: "Blog", content: "바로가기", href: myData.blog },
    ],
    []
  );

  useEffect(() => {
    const measure = () => {
      const firstCell = cellRefs.current[0];
      const container = containerRef.current;
      if (firstCell) {
        const rect = firstCell.getBoundingClientRect();
        setCellSize({ width: rect.width, height: rect.height });
      }
      if (container) {
        const style = getComputedStyle(container);
        const gapPx = parseFloat(style.gap || "4");
        if (!Number.isNaN(gapPx)) setGap(gapPx);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const indexToRowCol = (index: number) => ({ row: Math.floor(index / cols), col: index % cols });
  const rcToTranslate = (row: number, col: number) => ({
    x: col * (cellSize.width + gap),
    y: row * (cellSize.height + gap),
  });

  const moveHighlight = (targetIndex: number) => {
    if (targetIndex === currentIndex) return;
    const curr = indexToRowCol(currentIndex);
    const next = indexToRowCol(targetIndex);
    if (curr.row === next.row || curr.col === next.col) {
      setCurrentIndex(targetIndex);
      setIntermediateIndex(null);
      return;
    }
    const stage1Index = curr.row * cols + next.col;
    setIntermediateIndex(stage1Index);
    setTimeout(() => {
      setCurrentIndex(targetIndex);
      setIntermediateIndex(null);
    }, 180);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title="About Me"
          description={
            "저는 사용자 경험을 최우선으로 생각하며,\n최신 기술을 활용하여 실용적이고 직관적인 인터페이스를 만드는 것을 좋아합니다."
          }
        />

        <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
          <div className="w-[70%] mx-auto">
            <div
              ref={containerRef}
              className="relative grid grid-cols-1 sm:grid-cols-3 gap-1 w-full"
              style={{ isolation: "isolate" }}
            >
              {cellSize.width > 0 && (
                <div
                  className="absolute rounded-xl bg-custom-100/70 transition-transform duration-300 ease-out pointer-events-none -z-0"
                  style={{
                    width: `${cellSize.width}px`,
                    height: `${cellSize.height}px`,
                    transform: (() => {
                      const idx = intermediateIndex ?? currentIndex;
                      const { row, col } = indexToRowCol(idx);
                      const { x, y } = rcToTranslate(row, col);
                      return `translate(${x}px, ${y}px)`;
                    })(),
                  }}
                />
              )}

              {items.map(({ label, content, href }, idx) => (
                <div
                  key={label}
                  ref={el => {
                    cellRefs.current[idx] = el;
                  }}
                  className="relative rounded-xl p-4 text-center z-10 cursor-pointer hover:text-custom-600 transition-colors duration-300"
                  onMouseEnter={() => moveHighlight(idx)}
                  onClick={() => href && openPage(href)}
                >
                  <div className="text-gray-500">{label}</div>
                  {href ? (
                    <div className="font-medium underline">{content}</div>
                  ) : (
                    <div className="font-medium">{content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
