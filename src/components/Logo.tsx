import { JSX } from "react";

export default function Logo(): JSX.Element {
  return (
    <div className="flex items-center gap-3">
      {/* Animated book/magic sparkle logo */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Gradient background */}
        <rect width="40" height="40" rx="8" fill="url(#logoGradient)" />

        {/* Open book */}
        <path
          d="M12 12C12 8 16 8 20 8C24 8 28 8 28 12V28C28 32 24 32 20 32C16 32 12 32 12 28V12Z"
          fill="#FFFFFF"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />

        {/* Left page */}
        <path
          d="M12 12V28C12 28 16 28 20 28V12C16 12 12 12 12 12Z"
          fill="#F3E8FF"
        />

        {/* Story lines */}
        <path
          d="M14 16H18M14 20H26M14 24H22"
          stroke="#7C3AED"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Magic sparkle */}
        <path
          d="M25 15L27 13M27 17L29 15M23 15L21 13M21 17L23 15"
          stroke="#F59E0B"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Curved title underline */}
        <path
          d="M20 8C20 8 22 10 24 10"
          stroke="#FCD34D"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      </svg>

      {/* Text logo */}
      <span className="text-2xl font-butterfly font-bold bg-gradient-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">
        DreamTails
        <span className="absolute ml-1 text-amber-400">.</span>
      </span>
    </div>
  );
}
