import SectionHeader from "@/components/SectionHeader";
import { myData } from "@/data/projects";

export default function About() {
  const openPage = (url: string) => {
    window.open(url, "_blank");
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 w-full">
              <div className="rounded-xl p-4 text-center">
                <div className="text-gray-500">이름</div>
                <div className="font-medium">{myData.name}</div>
              </div>
              <div className="rounded-xl p-4 text-center">
                <div className="text-gray-500">생년월일</div>
                <div className="font-medium">{myData.birthday}</div>
              </div>
              <div className="rounded-xl p-4 text-center">
                <div className="text-gray-500">전화번호</div>
                <div
                  className="font-medium cursor-pointer underline hover:text-custom-600 transition-colors duration-300"
                  onClick={() => openPage(`tel:${myData.phone}`)}
                >
                  {myData.phone}
                </div>
              </div>

              <div className="rounded-xl p-4 text-center">
                <div className="text-gray-500">이메일</div>
                <div
                  className="font-medium cursor-pointer underline hover:text-custom-600 transition-colors duration-300"
                  onClick={() => openPage(`mailto:${myData.email}`)}
                >
                  {myData.email}
                </div>
              </div>
              <div className="rounded-xl p-4 text-center">
                <div className="text-gray-500">GitHub</div>
                <div
                  className="font-medium cursor-pointer underline hover:text-custom-600 transition-colors duration-300"
                  onClick={() => openPage(myData.github)}
                >
                  바로가기
                </div>
              </div>
              <div className="rounded-xl p-4 text-center">
                <div className="text-gray-500">Blog</div>
                <div
                  className="font-medium cursor-pointer underline hover:text-custom-600 transition-colors duration-300"
                  onClick={() => openPage(myData.blog)}
                >
                  바로가기
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
