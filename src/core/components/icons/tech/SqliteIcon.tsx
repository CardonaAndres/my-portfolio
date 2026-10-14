import type { IconProps } from "@/core/interfaces/icon.interface";

export const SqliteIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="none"
    className={className}
  >
    <rect width="256" height="256" rx="32" fill="#003B57" />
    <path
      d="M175.5 54.8c-28.5-7.6-59.4-4.8-85.7 7.9-26.3 12.7-46.7 35.2-56.3 62.1-4.8 13.5-6.5 27.9-5.1 42.1 1.4 14.2 6.1 27.8 13.8 39.8l10.2 13.3c3.8-15.2 11.2-29.3 21.6-40.8 10.4-11.5 23.3-20.5 37.6-26.2l39.5-15.8c11.9-4.8 22.4-12.5 30.6-22.3 8.2-9.8 13.6-21.5 15.7-34l-21.9-26.1z"
      fill="#0F80CC"
    />
    <text
      x="95"
      y="90"
      fill="#FFFFFF"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="42"
      fontStyle="italic"
      fontWeight="700"
    >
      SQLite
    </text>
  </svg>
);
