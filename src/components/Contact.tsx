import { MailIcon, PhoneIcon } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeader from "@/components/SectionHeader";
import ContactCard from "@/components/ContactCard";
import Button from "@/components/Button";

export default function Contact() {
  const contactInfo = {
    email: "parkjaeyon1201@gmail.com",
    cellphone: "010-5593-7732",
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
  const openCellphone = () => {
    window.open(`tel:${contactInfo.cellphone}`);
  };

  const contactCards = [
    { icon: <MailIcon />, title: "이메일", onClick: openEmail, width: "w-[50%]" },
    { icon: <PhoneIcon />, title: "전화번호", onClick: openCellphone, width: "w-[50%]" },
  ];

  return (
    <section className="py-20 bg-custom-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <SectionHeader title="Contact" className="text-white" />

        <div className="flex flex-row md:flex-row justify-between gap-[5vw] mb-6 md:gap-6 w-[80%] mx-auto">
          {contactCards.map(card => (
            <ContactCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              onClick={card.onClick}
              className={card.width}
            />
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 mx-auto w-[80%]">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">메시지 보내기</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="이름"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-custom-500 focus:border-transparent"
                value={message.name}
                onChange={e => setMessage({ ...message, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="이메일"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-custom-500 focus:border-transparent"
                value={message.email}
                onChange={e => setMessage({ ...message, email: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="제목"
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-stone-500 focus:border-transparent"
              value={message.subject}
              onChange={e => setMessage({ ...message, subject: e.target.value })}
            />
            <textarea
              placeholder="메시지"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-stone-500 focus:border-transparent"
              value={message.message}
              onChange={e => setMessage({ ...message, message: e.target.value })}
            ></textarea>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "전송 중..." : "메시지 보내기"}
            </Button>

            {submitStatus === "success" && (
              <div className="text-green-600 text-center mt-4">
                메시지가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="text-red-600 text-center mt-4">메시지 전송에 실패했습니다. 다시 시도해주세요.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
