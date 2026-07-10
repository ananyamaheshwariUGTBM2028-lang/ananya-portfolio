import FadeIn from './FadeIn'

const NAV_LINKS = ['About', 'Experience', 'Contact']

export default function Navbar() {
  return (
    <FadeIn delay={0} y={-20} as="nav" className="fixed top-0 inset-x-0 z-30">
      <div className="flex justify-between items-center px-6 md:px-10 py-6 md:py-8 backdrop-blur-md bg-[#0C0C0C]/30">
        <span className="text-[#D7E2EA] font-semibold lowercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          ananya.
        </span>
        <div className="flex gap-6 md:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
