import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const variantStyles = {
  primary: "bg-custom-600 text-white hover:bg-custom-700",
  secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
  outline: "border-2 border-custom-600 text-custom-600 hover:bg-custom-600 hover:text-white",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-3 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        font-semibold rounded-xl transition-colors cursor-pointer
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
