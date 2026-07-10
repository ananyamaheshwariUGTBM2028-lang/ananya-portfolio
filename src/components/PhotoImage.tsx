import type { CSSProperties } from 'react'

export default function PhotoImage({
  src,
  alt,
  className = '',
  style,
  objectPosition = 'center',
  zoom = 1,
  caption,
}: {
  src: string
  alt: string
  className?: string
  style?: CSSProperties
  objectPosition?: string
  zoom?: number
  caption?: string
}) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ objectPosition, transform: zoom !== 1 ? `scale(${zoom})` : undefined }}
      />
      {caption && (
        <span
          className="absolute bottom-2 left-2 rounded-full px-3 py-1 text-[10px] sm:text-xs font-medium text-[#0C0C0C] backdrop-blur-sm"
          style={{ background: 'rgba(215, 226, 234, 0.85)' }}
        >
          {caption}
        </span>
      )}
    </div>
  )
}
