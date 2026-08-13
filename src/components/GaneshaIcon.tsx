/**
 * Premium gold-line SVG Ganesha icon for the wedding invitation.
 */
export default function GaneshaIcon({ size = 48, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {/* Decorative Outer Aura */}
      <circle cx="50" cy="50" r="44" stroke="url(#goldGradient)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="50" cy="50" r="41" stroke="url(#goldGradient)" strokeWidth="0.5" opacity="0.3" />

      {/* Stylized Ganesha Line Art */}
      {/* Crown / Mukut */}
      <path d="M42 22 L50 10 L58 22 L50 26 Z" stroke="url(#goldGradient)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M45 22 H55" stroke="url(#goldGradient)" strokeWidth="1.2" />

      {/* Head / Ears */}
      <path d="M35 34 C35 30 42 26 50 26 C58 26 65 30 65 34" stroke="url(#goldGradient)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M35 34 C25 35 24 45 32 46 C35 46.5 36 43 36 40" stroke="url(#goldGradient)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M65 34 C75 35 76 45 68 46 C65 46.5 64 43 64 40" stroke="url(#goldGradient)" strokeWidth="1.8" strokeLinecap="round" />

      {/* Forehead Tilak */}
      <path d="M48 29 H52 M50 29 V37" stroke="url(#goldGradient)" strokeWidth="1.8" strokeLinecap="round" />

      {/* Eyes */}
      <circle cx="43" cy="39" r="1.2" fill="url(#goldGradient)" />
      <circle cx="57" cy="39" r="1.2" fill="url(#goldGradient)" />

      {/* Trunk (Sondh) sweeping gracefully to the right (auspicious Valampuri position) */}
      <path
        d="M50 38 C50 48 38 48 38 60 C38 72 62 72 62 60 C62 55 58 54 58 57"
        stroke="url(#goldGradient)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Modak (sweet) in trunk tip */}
      <circle cx="58" cy="53" r="2.5" fill="url(#goldGradient)" opacity="0.9" />

      {/* Tusk */}
      <path d="M37 43 L33 44" stroke="url(#goldGradient)" strokeWidth="1.8" strokeLinecap="round" />

      {/* Definitions for Premium Gold Gradient */}
      <defs>
        <linearGradient id="goldGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C9A24B" />
          <stop offset="50%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
    </svg>
  );
}
