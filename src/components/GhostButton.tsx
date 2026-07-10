interface GhostButtonProps {
  href: string
  label: string
  className?: string
}

export default function GhostButton({ href, label, className = '' }: GhostButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base text-[#D7E2EA] font-medium uppercase tracking-widest transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${className}`}
    >
      {label}
    </a>
  )
}
