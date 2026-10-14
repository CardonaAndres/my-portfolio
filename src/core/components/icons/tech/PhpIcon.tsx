import type { IconProps } from "@/core/interfaces/icon.interface";

export const PhpIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="none"
    className={className}
  >
    <rect width="256" height="256" rx="32" fill="#18181B" />
    <ellipse cx="128" cy="128" rx="100" ry="60" fill="#777BB4" />
    <path
      d="M72 144h-10l-4-32h14c6 0 10 2 12 5 2 3 2 7 1 12-1 6-4 10-7 12-3 2-4 3-6 3zm-2-20h-4l2 12h4c3 0 4-1 5-2 1-2 1-4 1-6s-1-4-6-4zm46 20h-10l-4-32h10l1 8c3-3 6-5 9-7 3-1 6-1 8-1 4 0 7 1 8 4 2 2 2 6 1 10l-3 18h-10l3-18c0-2 0-3-.5-4s-1.5-1-3.5-1c-2 0-4 1-5 2s-3 3-4 6l-3 15zm54 0h-10l-4-32h14c6 0 10 2 12 5 2 3 2 7 1 12-1 6-4 10-7 12-3 2-4 3-6 3zm-2-20h-4l2 12h4c3 0 4-1 5-2 1-2 1-4 1-6s-1-4-6-4z"
      fill="#FFFFFF"
    />
  </svg>
);
