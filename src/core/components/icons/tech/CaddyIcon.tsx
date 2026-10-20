import type { IconProps } from "@/core/interfaces/icon.interface";

export const CaddyIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
  >
    <path
      d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.24l6.75 3.75v7.51L12 19.25l-6.75-3.75V7.99L12 4.24z"
      fill="#22b573"
    />
    <path
      d="M14.5 9.5c-.7-.5-1.6-.7-2.5-.7-2.2 0-4 1.8-4 4s1.8 4 4 4c.9 0 1.8-.2 2.5-.7v-2c-.6.4-1.2.6-1.9.6-1.2 0-2.2-.9-2.3-2.1h5v-.8c0-1.3-.3-2.4-.8-2.9zm-2.8 1.4c.7 0 1.3.4 1.5 1.1h-3c.2-.7.8-1.1 1.5-1.1z"
      fill="#11834f"
    />
  </svg>
);
