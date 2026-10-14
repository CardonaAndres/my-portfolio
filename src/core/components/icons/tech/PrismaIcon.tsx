import type { IconProps } from "@/core/interfaces/icon.interface";

export const PrismaIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
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
      d="M198 190.6l-84.3-143c-3-5.1-10.4-5.1-13.4 0L38.2 153.9c-3 5.1.7 11.6 6.7 11.6h50.9l-11.4 25.1c-1.9 4.2 1.2 9 5.8 9h101.1c5.8 0 9.7-6 6.7-11z"
      fill="#2D3748"
    />
    <path
      d="M107 47.6c-3-5.1-10.4-5.1-13.4 0L38.2 153.9c-3 5.1.7 11.6 6.7 11.6h50.9L107 47.6z"
      fill="#5A67D8"
    />
  </svg>
);
