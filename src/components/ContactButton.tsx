import { GMAIL_COMPOSE_URL } from '../data/contact'

interface ContactButtonProps {
  href?: string
  label?: string
  className?: string
}

export default function ContactButton({
  href = GMAIL_COMPOSE_URL,
  label = 'Contact Me',
  className = '',
}: ContactButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest transition-transform duration-200 hover:scale-[1.03] ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #3A1400 7%, #FF5F4D 37%, #FF9F45 72%, #FFD65C 100%)',
        boxShadow:
          '0px 4px 4px rgba(255, 95, 77, 0.3), 4px 4px 12px #FF8A3D inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </a>
  )
}
