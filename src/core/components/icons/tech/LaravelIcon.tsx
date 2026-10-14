import type { IconProps } from "@/core/interfaces/icon.interface";

export const LaravelIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="none"
    className={className}
  >
    <rect width="256" height="256" rx="32" fill="#18181B" />
    <path
      d="M208 88.5l-39.7 23.3-39.4-23.1 39.4-23.1L208 88.5zm-44.5 32.1v45.5l-34.8 20.4V141l34.8-20.4zm9.6 0l34.9-20.4v45.5L173.1 166v-45.4zm-49.4 63.8l-34.8 20.4-39.5-23.1 34.8-20.4 39.5 23.1zm-44.4-32l-34.8 20.4v-45.5l34.8-20.4v45.5zm-9.6-53.7L39.7 75.4l39.5-23.1 39.5 23.1-40 23.3z"
      fill="#FF2D20"
    />
  </svg>
);
