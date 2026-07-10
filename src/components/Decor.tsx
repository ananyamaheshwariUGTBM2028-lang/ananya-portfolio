// Self-contained decorative icons for the About section -- no external image
// dependency, so nothing to swap or update later. Each one nods to a piece
// of the "about me" story: direction, momentum, precision, and the wins.

export function CompassDecor({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="compassGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D7E2EA" />
          <stop offset="100%" stopColor="#4a4f57" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="42" fill="url(#compassGrad)" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="#0C0C0C" strokeOpacity="0.15" strokeWidth="3" />
      <path d="M50 22 L60 50 L50 78 L40 50 Z" fill="#0C0C0C" opacity="0.75" />
      <path d="M50 22 L60 50 L50 50 Z" fill="#0C0C0C" opacity="0.35" />
      <circle cx="50" cy="50" r="5" fill="#D7E2EA" />
    </svg>
  )
}

export function RocketDecor({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="rocketGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D7E2EA" />
          <stop offset="100%" stopColor="#646973" />
        </linearGradient>
      </defs>
      <path
        d="M50 8 C64 22 68 42 64 62 L36 62 C32 42 36 22 50 8 Z"
        fill="url(#rocketGrad)"
      />
      <path d="M36 62 L24 78 L36 74 Z" fill="#4a4f57" />
      <path d="M64 62 L76 78 L64 74 Z" fill="#4a4f57" />
      <circle cx="50" cy="36" r="7" fill="#0C0C0C" opacity="0.55" />
      <path d="M42 74 L50 92 L58 74 Z" fill="#BBCCD7" opacity="0.7" />
    </svg>
  )
}

export function TargetDecor({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="42" fill="#D7E2EA" />
      <circle cx="50" cy="50" r="30" fill="#0C0C0C" opacity="0.85" />
      <circle cx="50" cy="50" r="18" fill="#D7E2EA" />
      <circle cx="50" cy="50" r="7" fill="#0C0C0C" opacity="0.85" />
    </svg>
  )
}

export function TrophyDecor({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="trophyGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#BBCCD7" />
          <stop offset="100%" stopColor="#646973" />
        </linearGradient>
      </defs>
      <path d="M34 18 H66 V40 C66 54 58 62 50 62 C42 62 34 54 34 40 Z" fill="url(#trophyGrad)" />
      <path d="M34 22 C24 22 20 30 24 38 C27 44 32 46 35 45" fill="none" stroke="#4a4f57" strokeWidth="4" />
      <path d="M66 22 C76 22 80 30 76 38 C73 44 68 46 65 45" fill="none" stroke="#4a4f57" strokeWidth="4" />
      <rect x="44" y="62" width="12" height="14" fill="#4a4f57" />
      <rect x="32" y="76" width="36" height="8" rx="3" fill="#D7E2EA" />
    </svg>
  )
}
