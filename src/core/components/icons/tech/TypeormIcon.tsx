import type { IconProps } from "@/core/interfaces/icon.interface";

export const TypeormIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="none"
    className={className}
  >
    <path
      d="M128 36L44 86v84l84 50 84-50V86l-84-50zm0 18.5l68.4 40.7-34.2 20.4L93.8 74.9 128 54.5zm-72 42.8l27.8 16.5-27.8 16.5V97.3zm0 44l27.8-16.5v33L56 141.3zm38.2 22.7l33.8-20.1 33.8 20.1-33.8 20.1-33.8-20.1zm72-8.7v-33l27.8 16.5-27.8 16.5zm0-44l27.8-16.5v33L166.2 111.3z"
      stroke="#FF3434"
      strokeWidth="6"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);
