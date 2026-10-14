import type { IconProps } from "@/core/interfaces/icon.interface";

export const BootstrapIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="none"
    className={className}
  >
    <rect width="256" height="256" rx="32" fill="#7952B3" />
    <path
      d="M87.4 68.2h50.3c15.6 0 26.6 3.4 33 10.3 6.4 6.8 9.6 15.6 9.6 26.3 0 7.8-1.9 14.5-5.8 20-3.9 5.5-9.6 9.4-17.1 11.6v.7c9.5 1.8 16.7 6 21.6 12.6 4.9 6.6 7.4 14.8 7.4 24.6 0 11.9-3.9 21.7-11.7 29.5-7.8 7.8-19.1 11.7-33.9 11.7H87.4V68.2zm27.4 56.4h22.6c7.4 0 13-1.6 16.8-4.7 3.8-3.1 5.7-7.7 5.7-13.7 0-5.8-1.8-10.3-5.5-13.3-3.7-3.1-9.3-4.6-17-4.6h-22.6v36.3zm0 69.8h25.4c8.4 0 14.8-1.8 19.1-5.4 4.3-3.6 6.5-8.8 6.5-15.7 0-6.7-2.1-11.9-6.4-15.6-4.3-3.7-10.9-5.5-19.8-5.5h-24.8v42.2z"
      fill="#FFFFFF"
    />
  </svg>
);
