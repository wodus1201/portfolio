interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({ title, description, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
      {description && <p className="text-xl text-gray-600 max-w-3xl mx-auto whitespace-pre-line mb-6">{description}</p>}
    </div>
  );
}
