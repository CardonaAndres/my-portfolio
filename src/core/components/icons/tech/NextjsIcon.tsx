import type { IconProps } from "@/core/interfaces/icon.interface";

export const NextjsIcon = ({ className = "w-5 h-5", size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 180 180"
    width={size}
    height={size}
    fill="none"
    className={className}
  >
    <mask
      id="next-mask"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="180"
      height="180"
      style={{ maskType: "alpha" }}
    >
      <circle cx="90" cy="90" r="90" fill="black" />
    </mask>
    <g mask="url(#next-mask)">
      <circle cx="90" cy="90" r="90" fill="currentColor" />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="var(--background, white)"
      />
      <rect
        x="115"
        y="54"
        width="12"
        height="72"
        fill="var(--background, white)"
      />
    </g>
  </svg>
);
