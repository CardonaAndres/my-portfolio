import type { IconProps } from "@/core/interfaces/icon.interface";

export const MongodbIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
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
      d="M127.5 28c-2.3 2.7-27.1 32.7-39.7 65.5-14.7 38.3-9.5 70.3 15.6 96.6 7.6 8 16.5 13.9 23.9 20.3.3.3.4.4.6.6v-183h-.4z"
      fill="#47A248"
    />
    <path
      d="M128.5 28c2.3 2.7 27.1 32.7 39.7 65.5 14.7 38.3 9.5 70.3-15.6 96.6-7.6 8-16.5 13.9-23.9 20.3-.3.3-.4.4-.6.6v-183h.4z"
      fill="#499D4A"
    />
    <path
      d="M127.7 212.8c-1.3-.9-2.6-1.8-3.9-2.8-1.5 5.8-2 11.7-.2 17.5 1.5 4.8 4.2 8.5 4.2 8.5s2.7-3.7 4.2-8.5c1.8-5.8 1.3-11.7-.2-17.5-1.4 1-2.7 1.9-4.1 2.8z"
      fill="#FFFFFF"
    />
  </svg>
);
