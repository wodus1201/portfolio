import { MailIcon, GithubIcon, PhoneIcon, BookIcon } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const contactInfo = {
    email: "parkjaeyon1201@gmail.com",
    github: "https://github.com/wodus1201",
    cellphone: "010-5593-7732",
    blog: "https://wodus1201.github.io/",
  };

  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      const templateParams = {
        from_name: message.name,
        from_email: message.email,
        subject: message.subject,
        message: message.message,
        to_email: contactInfo.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setMessage({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("이메일 전송 실패:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openEmail = () => {
    window.open(`mailto:${contactInfo.email}`);
  };
  const openGithub = () => {
    window.open(`${contactInfo.github}`);
  };
  const openCellphone = () => {
    window.open(`tel:${contactInfo.cellphone}`);
  };
  const openBlog = () => {
    window.open(`${contactInfo.blog}`);
  };

  return (
    <section className="py-20 bg-custom-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact</h2>

        <div className="flex flex-row md:flex-row justify-between gap-[5vw] mb-6 md:gap-8 w-[80%] mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg w-[25%] py-4 cursor-pointer hover:bg-custom-200/20 transition-colors shadow-md" onClick={openEmail}>
            <div className="text-custom-200 text-2xl mb-2 flex items-center justify-center">
              <MailIcon />
            </div>
            <h3 className="text-white font-semibold md:text-lg">이메일</h3>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg w-[30%] py-4 cursor-pointer hover:bg-custom-200/20 transition-colors shadow-md" onClick={openCellphone}>
            <div className="text-custom-200 text-2xl mb-2 flex items-center justify-center">
              <PhoneIcon />
            </div>
            <h3 className="text-white font-semibold md:text-lg">전화번호</h3>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg w-[30%] py-4 cursor-pointer hover:bg-custom-200/20 transition-colors shadow-md" onClick={openGithub}>
            <div className="text-custom-200 text-2xl mb-2 flex items-center justify-center">
              <GithubIcon />
            </div>
            <h3 className="text-white font-semibold md:text-lg">GitHub</h3>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg w-[30%] py-4 cursor-pointer hover:bg-custom-200/20 transition-colors shadow-md" onClick={openBlog}>
            <div className="text-custom-200 text-2xl mb-2 flex items-center justify-center">
              <BookIcon />
            </div>
            <h3 className="text-white font-semibold md:text-lg">Blog</h3>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mx-auto w-[80%]">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">메시지 보내기</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="이름"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-500 focus:border-transparent"
                value={message.name}
                onChange={(e) => setMessage({ ...message, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="이메일"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-500 focus:border-transparent"
                value={message.email}
                onChange={(e) => setMessage({ ...message, email: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="제목"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
              value={message.subject}
              onChange={(e) => setMessage({ ...message, subject: e.target.value })}
            />
            <textarea
              placeholder="메시지"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
              value={message.message}
              onChange={(e) => setMessage({ ...message, message: e.target.value })}></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer bg-custom-600 text-white py-3 rounded-lg font-semibold hover:bg-custom-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? "전송 중..." : "메시지 보내기"}
            </button>

            {submitStatus === "success" && <div className="text-green-600 text-center mt-4">메시지가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.</div>}
            {submitStatus === "error" && <div className="text-red-600 text-center mt-4">메시지 전송에 실패했습니다. 다시 시도해주세요.</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
