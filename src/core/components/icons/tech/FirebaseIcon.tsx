import type { IconProps } from "@/core/interfaces/icon.interface";

export const FirebaseIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
  >
    <path
      d="M4.66 18.06l5.77-10.84a.8.8 0 0 1 1.44.02l2.36 4.67-4.43 8.35a1.76 1.76 0 0 1-2.45.65 1.74 1.74 0 0 1-.69-.85l-2-2"
      fill="#FFA000"
    />
    <path
      d="M3.56 16.27L7.33 9.2a.8.8 0 0 1 1.48.24l1.32 7.7-5.06 2.87a1.74 1.74 0 0 1-1.51-3.74z"
      fill="#F57C00"
    />
    <path
      d="M19.44 18.06l-4.22-7.94a.8.8 0 0 0-1.44-.02L4.66 18.06a1.74 1.74 0 0 0 2.45.65L12 16l4.89 2.71a1.74 1.74 0 0 0 2.55-.65z"
      fill="#FFCA28"
    />
  </svg>
);
