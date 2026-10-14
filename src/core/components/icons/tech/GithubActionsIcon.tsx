import type { IconProps } from "@/core/interfaces/icon.interface";

export const GithubActionsIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="none"
    className={className}
  >
    <rect width="256" height="256" rx="32" fill="#2088FF" />
    {/* Workflow Play Node */}
    <circle cx="84" cy="84" r="26" stroke="#FFFFFF" strokeWidth="8" fill="none" />
    <path d="M80 74l14 10-14 10V74z" fill="#FFFFFF" />
    
    {/* Workflow Target Node */}
    <circle cx="172" cy="172" r="26" stroke="#FFFFFF" strokeWidth="8" fill="none" />
    <path d="M164 172l6 6 12-12" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />

    {/* Connecting path */}
    <path
      d="M110 84h36c14 0 26 12 26 26v36"
      stroke="#FFFFFF"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="172" cy="116" r="6" fill="#FFFFFF" />
  </svg>
);
