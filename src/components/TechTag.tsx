interface TechTagProps {
  tech: string;
  variant?: "frontend" | "backend" | "image" | "database" | "deploy" | "tools";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantStyles = {
  frontend: "bg-blue-100 text-blue-800 border border-blue-800",
  backend: "bg-green-100 text-green-800 border border-green-800",
  image: "bg-yellow-100 text-yellow-800 border border-yellow-800",
  database: "bg-red-100 text-red-800 border border-red-800",
  deploy: "bg-purple-100 text-purple-800 border border-purple-800",
  tools: "bg-gray-100 text-gray-800 border border-gray-800",
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
