export default function LogoImage({
  src,
  alt,
  className = '',
  accentColor,
}: {
  src: string
  alt: string
  className?: string
  accentColor?: string
}) {
  return (
    <div
      className={`flex items-center justify-center p-6 sm:p-8 ${className}`}
      style={{
        background: accentColor
          ? `radial-gradient(circle at 30% 25%, ${accentColor}55 0%, #0c0c0c 70%)`
          : 'linear-gradient(180deg, #2a2c31 0%, #0c0c0c 100%)',
        border: '1px solid rgba(215, 226, 234, 0.15)',
      }}
    >
      <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
    </div>
  )
}
