import { Mail } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import { LinkedinIcon, InstagramIcon } from '../components/SocialIcons'
import { GMAIL_COMPOSE_URL, LINKEDIN_URL, INSTAGRAM_URL } from '../data/contact'

const SOCIALS = [
  { icon: Mail, href: GMAIL_COMPOSE_URL, label: 'Email' },
  { icon: LinkedinIcon, href: LINKEDIN_URL, label: 'LinkedIn' },
  { icon: InstagramIcon, href: INSTAGRAM_URL, label: 'Instagram' },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center gap-10 sm:gap-14 px-5 sm:px-8 md:px-10 py-20"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Let's connect
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <ContactButton />
      </FadeIn>

      <FadeIn delay={0.3} y={20}>
        <div className="flex items-center gap-6 sm:gap-8">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#D7E2EA] opacity-70 transition-opacity duration-200 hover:opacity-100"
            >
              <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
