import { ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  onClick: () => void;
  className?: string;
}

export default function ContactCard({ icon, title, onClick, className = "" }: ContactCardProps) {
  return (
    <div
      className={`bg-white/10 backdrop-blur-sm rounded-2xl py-4 cursor-pointer hover:bg-custom-200/20 transition-colors shadow-md ${className}`}
      onClick={onClick}
    >
      <div className="text-custom-200 text-2xl mb-2 flex items-center justify-center">{icon}</div>
      <h3 className="text-white font-semibold md:text-lg">{title}</h3>
    </div>
  );
}
