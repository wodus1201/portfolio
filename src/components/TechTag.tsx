interface TechTagProps {
  tech: string;
  variant?: "frontend" | "backend" | "deploy" | "tools";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantStyles = {
  frontend: "bg-blue-100 text-blue-800",
  backend: "bg-green-100 text-green-800",
  deploy: "bg-purple-100 text-purple-800",
  tools: "bg-purple-100 text-purple-800",
};

const sizeStyles = {
  sm: "px-2 py-1 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-2 text-base",
};

export default function TechTag({ tech, variant = "frontend", size = "md", className = "" }: TechTagProps) {
  return (
    <span className={`${variantStyles[variant]} ${sizeStyles[size]} rounded-full font-medium ${className}`}>
      {tech}
    </span>
  );
}
