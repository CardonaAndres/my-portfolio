import type { IconProps } from "@/core/interfaces/icon.interface";

export const NextjsIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
  >
    <g transform="scale(.35556)">
        <circle cx="90" cy="90" r="90" fill="#000" />
        <path fill="url(#nextjs-b)" d="M149.508 157.52 69.142 54H54v71.97h12.114V69.384l73.885 95.461a90 90 0 0 0 9.509-7.325" />
        <path fill="url(#nextjs-c)" d="M115 54h12v72h-12z" />
    </g>
    <defs>
        <linearGradient id="nextjs-b" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff"/>
            <stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="nextjs-c" x1="121" x2="120.799" y1="54" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff"/>
            <stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </linearGradient>
    </defs>
  </svg>
);
