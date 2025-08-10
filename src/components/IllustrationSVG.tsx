import { JSX } from "react";

export default function IllustrationSVG(): JSX.Element {
  return (
    <svg
      width="260"
      height="180"
      viewBox="0 0 260 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a smiling moon and an open book"
    >
      {/* Background with subtle gradient */}
      <rect width="260" height="180" rx="16" fill="url(#backgroundGradient)" />

      {/* Moon with friendly face */}
      <g transform="translate(30, 20)">
        <circle cx="40" cy="40" r="30" fill="#FEF9C3" />
        {/* Moon craters for texture */}
        <circle cx="50" cy="30" r="4" fill="#FDE047" opacity="0.8" />
        <circle cx="30" cy="35" r="3" fill="#FDE047" opacity="0.8" />
        <circle cx="40" cy="50" r="5" fill="#FDE047" opacity="0.8" />

        {/* Smiling face */}
        <path
          d="M28 55 Q40 65 52 55"
          stroke="#7C3AED"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="30" cy="35" r="2" fill="#7C3AED" />
        <circle cx="50" cy="35" r="2" fill="#7C3AED" />
      </g>

      {/* Book with more details */}
      <g transform="translate(100, 30)">
        <rect
          x="0"
          y="0"
          width="120"
          height="120"
          rx="12"
          fill="#FFFFFF"
          stroke="#E9D5FF"
          strokeWidth="2"
        />

        {/* Book spine */}
        <rect x="-6" y="0" width="6" height="120" rx="2" fill="#7C3AED" />

        {/* Book content */}
        <text
          x="20"
          y="40"
          fill="#7C3AED"
          fontSize="14"
          fontFamily="'Segoe UI', sans-serif"
          fontWeight="bold"
        >
          Once upon a moon...
        </text>
        <text
          x="20"
          y="60"
          fill="#6B21A8"
          fontSize="12"
          fontFamily="'Segoe UI', sans-serif"
        >
          The stars twinkled brightly
        </text>
        <text
          x="20"
          y="80"
          fill="#6B21A8"
          fontSize="12"
          fontFamily="'Segoe UI', sans-serif"
        >
          as the moon smiled down
        </text>
        <text
          x="20"
          y="100"
          fill="#6B21A8"
          fontSize="12"
          fontFamily="'Segoe UI', sans-serif"
        >
          on the sleeping town.
        </text>

        {/* Decorative page lines */}
        <line
          x1="15"
          y1="25"
          x2="105"
          y2="25"
          stroke="#E9D5FF"
          strokeWidth="1"
        />
        <line
          x1="15"
          y1="115"
          x2="105"
          y2="115"
          stroke="#E9D5FF"
          strokeWidth="1"
        />
      </g>

      <defs>
        <linearGradient
          id="backgroundGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#A5F3FC" />
          <stop offset="50%" stopColor="#C7D2FE" />
          <stop offset="100%" stopColor="#FBCFE8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
