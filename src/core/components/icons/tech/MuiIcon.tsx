import type { IconProps } from "@/core/interfaces/icon.interface";

export const MuiIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="none"
    className={className}
  >
    <path d="M0 64l64-36.9v73.9L0 137.9V64z" fill="#007FFF" />
    <path d="M64 27.1l64 36.9v73.9L64 101V27.1z" fill="#007FFF" />
    <path d="M128 64l64-36.9v73.9L128 137.9V64z" fill="#007FFF" />
    <path d="M64 174.9L128 211.8v-73.9L64 101v73.9z" fill="#0059B2" />
    <path d="M128 137.9l64 37v73.9L128 211.8v-73.9z" fill="#007FFF" />
    <path d="M192 101l64-37v73.9L192 174.9V101z" fill="#0059B2" />
  </svg>
);
