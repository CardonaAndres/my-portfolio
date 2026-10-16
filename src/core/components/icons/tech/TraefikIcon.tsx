import type { IconProps } from "@/core/interfaces/icon.interface";

export const TraefikIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="none"
    className={className}
  >
    <path
      d="M128 48C83.8 48 48 83.8 48 128s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm32 108l-32-20-32 20V92l32 20 32-20v64z"
      fill="#24A1C1"
    />
  </svg>
);
