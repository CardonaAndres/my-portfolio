import type { IconProps } from "@/core/interfaces/icon.interface";

export const NginxIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="none"
    className={className}
  >
    <rect width="256" height="256" rx="32" fill="#009639" />
    <path
      d="M74.8 56v144h22.6v-78.5l61.2 78.5h22.6V56h-22.6v78.5L97.4 56H74.8z"
      fill="#FFFFFF"
    />
  </svg>
);
