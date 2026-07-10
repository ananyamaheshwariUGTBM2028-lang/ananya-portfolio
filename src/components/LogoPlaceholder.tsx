import type { CSSProperties } from 'react'

// Placeholder tile for company logos/images inside a WorkExperience card.
// Swap for a real <img src="..." /> once you have the logo -- drop the file
// in src/assets/work/ and replace the usage in data/experience.ts.
export default function LogoPlaceholder({
  initial,
  className = '',
  style,
}: {
  initial: string
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        background: 'linear-gradient(180deg, #2a2c31 0%, #0c0c0c 100%)',
        border: '1px solid rgba(215, 226, 234, 0.15)',
        ...style,
      }}
    >
      <span
        className="font-black text-[#D7E2EA] opacity-30"
        style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
      >
        {initial}
      </span>
    </div>
  )
}
