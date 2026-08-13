/**
 * SVG floral corner decoration — hand-painted style roses and leaves.
 * Rendered as inline SVG for crisp rendering and color theming.
 */
export default function FloralCorner({ className }: { className?: string }) {
  return (
    <svg
      className={`floral-corner ${className || ''}`}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main rose bloom */}
      <ellipse cx="40" cy="40" rx="22" ry="20" fill="#D4A59A" opacity="0.5" />
      <ellipse cx="36" cy="36" rx="14" ry="13" fill="#C99088" opacity="0.6" />
      <ellipse cx="42" cy="34" rx="8" ry="9" fill="#BE7B73" opacity="0.5" />
      <circle cx="38" cy="38" r="5" fill="#B06C64" opacity="0.4" />

      {/* Secondary small rose */}
      <ellipse cx="75" cy="25" rx="12" ry="11" fill="#D4A59A" opacity="0.4" />
      <ellipse cx="73" cy="23" rx="7" ry="7" fill="#C99088" opacity="0.5" />
      <circle cx="74" cy="24" r="3.5" fill="#BE7B73" opacity="0.4" />

      {/* Small bud */}
      <ellipse cx="25" cy="75" rx="9" ry="8" fill="#D4A59A" opacity="0.4" />
      <ellipse cx="24" cy="73" rx="5" ry="5" fill="#C99088" opacity="0.5" />

      {/* Leaves */}
      <path d="M55 50 Q70 35 85 50 Q70 55 55 50Z" fill="#5E7A5E" opacity="0.35" />
      <path d="M20 55 Q35 40 50 58 Q32 60 20 55Z" fill="#5E7A5E" opacity="0.3" />
      <path d="M60 15 Q75 8 80 25 Q68 22 60 15Z" fill="#6B8B6B" opacity="0.3" />
      <path d="M10 45 Q20 25 35 45 Q20 48 10 45Z" fill="#6B8B6B" opacity="0.25" />
      <path d="M85 30 Q100 18 105 38 Q92 35 85 30Z" fill="#5E7A5E" opacity="0.2" />

      {/* Tiny leaf accents */}
      <path d="M48 65 Q58 55 65 68 Q55 68 48 65Z" fill="#7A9A7A" opacity="0.2" />
      <path d="M15 85 Q28 72 32 90 Q22 88 15 85Z" fill="#7A9A7A" opacity="0.2" />

      {/* Decorative stems/vines */}
      <path
        d="M45 45 Q55 60 50 80 Q48 95 55 110 Q60 125 52 140"
        stroke="#5E7A5E"
        strokeWidth="1"
        opacity="0.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M60 40 Q75 55 80 75 Q82 90 95 100"
        stroke="#5E7A5E"
        strokeWidth="0.8"
        opacity="0.15"
        fill="none"
        strokeLinecap="round"
      />

      {/* Gold accents - tiny dots */}
      <circle cx="90" cy="45" r="2" fill="#C9A24B" opacity="0.3" />
      <circle cx="50" cy="85" r="1.5" fill="#C9A24B" opacity="0.25" />
      <circle cx="30" cy="95" r="1.5" fill="#C9A24B" opacity="0.2" />
    </svg>
  );
}
