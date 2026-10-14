import type { IconProps } from "@/core/interfaces/icon.interface";

export const ExpressIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="none"
    className={className}
  >
    <rect width="256" height="256" rx="32" fill="#18181B" />
    <text
      x="128"
      y="160"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="110"
      fontWeight="300"
      letterSpacing="-4"
    >
      ex
    </text>
  </svg>
);
