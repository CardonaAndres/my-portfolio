import type { IconProps } from "@/core/interfaces/icon.interface";

export const FastapiIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="none"
    className={className}
  >
    <rect width="256" height="256" rx="32" fill="#009688" />
    <path
      d="M135.5 32L64 144h56.5L112 224l80-112h-56.5z"
      fill="#FFFFFF"
    />
  </svg>
);
