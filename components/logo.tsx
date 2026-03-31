"use client";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="sunriseGrad" x1="60" y1="15" x2="60" y2="65" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f5c9a8" />
          <stop offset="45%" stopColor="#e8926a" />
          <stop offset="100%" stopColor="#c04a2a" />
        </linearGradient>
      </defs>
      
      <g transform="translate(0, 10)">
        {/* The Rising Sun (Semi-circle) */}
        <path d="M 22 60 A 38 38 0 0 1 98 60 Z" fill="url(#sunriseGrad)" />
        
        {/* Crisp Horizon Line */}
        <rect x="14" y="66" width="92" height="7" rx="3.5" fill="currentColor" />
        
        {/* Subtle Geometric Reflection */}
        <rect x="38" y="80" width="44" height="4" rx="2" fill="currentColor" opacity="0.3" />
      </g>
    </svg>
  );
}

