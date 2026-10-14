import type { IconProps } from "@/core/interfaces/icon.interface";

export const LinuxIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="none"
    className={className}
  >
    <rect width="256" height="256" rx="32" fill="#18181B" />
    {/* Body */}
    <ellipse cx="128" cy="144" rx="56" ry="64" fill="#000000" />
    {/* Belly */}
    <ellipse cx="128" cy="152" rx="38" ry="46" fill="#FFFFFF" />
    {/* Head */}
    <circle cx="128" cy="80" r="36" fill="#000000" />
    {/* Eyes */}
    <ellipse cx="118" cy="74" rx="6" ry="10" fill="#FFFFFF" />
    <circle cx="120" cy="74" r="3" fill="#000000" />
    <ellipse cx="138" cy="74" rx="6" ry="10" fill="#FFFFFF" />
    <circle cx="136" cy="74" r="3" fill="#000000" />
    {/* Beak */}
    <polygon points="116,84 140,84 128,102" fill="#FFA500" />
    {/* Feet */}
    <ellipse cx="98" cy="204" rx="20" ry="10" fill="#FFA500" />
    <ellipse cx="158" cy="204" rx="20" ry="10" fill="#FFA500" />
  </svg>
);
