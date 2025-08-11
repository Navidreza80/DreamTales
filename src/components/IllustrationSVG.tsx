"use client"

import { JSX, useEffect, useState } from "react";

export default function IllustrationSVG(): JSX.Element {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

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
      {/* Background dreamy gradient */}
      <rect width="260" height="180" rx="16" fill="url(#backgroundGradient)" />

      {/* Stars for depth */}
      {isMounted && (
        <g opacity="0.7">
          {[...Array(12)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 260}
              cy={Math.random() * 180}
              r={Math.random() * 2 + 1}
              fill="white"
            />
          ))}
        </g>
      )}
      {/* Glowing moon */}
      <g transform="translate(30, 20)">
        <circle cx="40" cy="40" r="32" fill="url(#moonGradient)" />
        <circle
          cx="40"
          cy="40"
          r="36"
          fill="url(#moonGlow)"
          opacity="0.3"
          filter="url(#blur)"
        />
        {/* Moon craters */}
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

      {/* 3D Open Book */}
      <g transform="translate(100, 40)">
        {/* Shadow under book */}
        <ellipse
          cx="60"
          cy="110"
          rx="70"
          ry="10"
          fill="black"
          opacity="0.15"
          filter="url(#blur)"
        />
        {/* Book base */}
        <rect
          x="0"
          y="0"
          width="120"
          height="100"
          rx="12"
          fill="url(#pageGradient)"
          stroke="#E9D5FF"
          strokeWidth="2"
          filter="url(#shadow)"
        />
        {/* Book spine */}
        <rect x="-6" y="0" width="6" height="100" rx="2" fill="#7C3AED" />

        {/* Page text */}
        <text
          x="20"
          y="35"
          fill="#7C3AED"
          fontSize="14"
          fontFamily="'Segoe UI', sans-serif"
          fontWeight="bold"
        >
          Once upon
        </text>
        <text
          x="20"
          y="55"
          fill="#6B21A8"
          fontSize="12"
          fontFamily="'Segoe UI', sans-serif"
        >
          a moon..
        </text>
        <text
          x="20"
          y="73"
          fill="#6B21A8"
          fontSize="12"
          fontFamily="'Segoe UI', sans-serif"
        >
          The stars twinkled
        </text>
        <text
          x="20"
          y="91"
          fill="#6B21A8"
          fontSize="12"
          fontFamily="'Segoe UI', sans-serif"
        >
          brightly, as the m...
        </text>
      </g>

      {/* Gradients & filters */}
      <defs>
        <linearGradient id="backgroundGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A5F3FC" />
          <stop offset="50%" stopColor="#C7D2FE" />
          <stop offset="100%" stopColor="#FBCFE8" />
        </linearGradient>

        <linearGradient id="moonGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF9C4" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>

        <radialGradient id="moonGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFF9C4" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="pageGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F3E8FF" />
        </linearGradient>

        <filter id="blur">
          <feGaussianBlur stdDeviation="6" />
        </filter>

        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
        </filter>
      </defs>
    </svg>
  );
}
