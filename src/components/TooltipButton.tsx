"use client";

import { useState, useRef } from "react";

interface TooltipButtonProps {
  icon: React.ReactNode;
  tooltip: string;
  onClick?: () => void;
  className?: string;
}

const useTooltip = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowTooltip(false);
  };

  return { showTooltip, handleMouseEnter, handleMouseLeave };
};

export default function TooltipButton({ icon, tooltip, onClick, className = "" }: TooltipButtonProps) {
  const tooltipHook = useTooltip();

  return (
    <div className="relative">
      <button
        onClick={onClick}
        onMouseEnter={tooltipHook.handleMouseEnter}
        onMouseLeave={tooltipHook.handleMouseLeave}
        className={`h-10 w-10 rounded-full bg-custom-300 hover:bg-custom-500 flex items-center justify-center cursor-pointer text-white font-mono font-semibold hover:scale-110 transition-all-colors duration-300 ${className}`}
      >
        {icon}
      </button>
      {tooltipHook.showTooltip && (
        <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 px-3 py-2 bg-custom-500 text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-50">
          {tooltip}
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-custom-500"></div>
        </div>
      )}
    </div>
  );
}
