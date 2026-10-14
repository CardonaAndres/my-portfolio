import type { IconProps } from "@/core/interfaces/icon.interface";

export const AstroIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="none"
    className={className}
  >
    <rect width="256" height="256" rx="32" fill="#0C1017" />
    <path
      d="M174.5 178c-12.8 10.6-30.8 17-50.5 17-19.7 0-37.7-6.4-50.5-17 11.2-8.3 25-13.2 40-13.2h21c15 0 28.8 4.9 40 13.2z"
      fill="#FF5D01"
    />
    <path
      d="M141.8 141.4h-27.6c-4.1 0-7.4-3.3-7.4-7.4 0-1.8.6-3.5 1.8-4.8l20.4-23.7c1.4-1.6 3.4-2.5 5.6-2.5s4.2.9 5.6 2.5l20.4 23.7c1.2 1.3 1.8 3 1.8 4.8-.1 4.1-3.4 7.4-7.6 7.4h-7z"
      fill="#FF5D01"
    />
    <path
      d="M168.3 150.2c-11.7-8.3-25.9-13.2-41.2-13.2h-18.2c-15.3 0-29.5 4.9-41.2 13.2L128 36l40.3 114.2z"
      fill="#FFFFFF"
    />
  </svg>
);
