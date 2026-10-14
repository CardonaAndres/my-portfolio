import type { IconProps } from "@/core/interfaces/icon.interface";

export const RedisIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
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
      d="M208 108l-80-36-80 36 80 36 80-36z"
      fill="#D82C20"
    />
    <path
      d="M48 116v24l80 36 80-36v-24l-80 36-80-36z"
      fill="#A81C10"
    />
    <path
      d="M48 148v24l80 36 80-36v-24l-80 36-80-36z"
      fill="#7E1208"
    />
    <path
      d="M128 88l-4 8-8 1 6 6-2 8 8-4 8 4-2-8 6-6-8-1-4-8z"
      fill="#FFFFFF"
    />
  </svg>
);
