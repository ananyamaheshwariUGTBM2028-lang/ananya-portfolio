import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'
import portrait from '../assets/portrait.png'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      <div className="flex-1 flex flex-col justify-center overflow-hidden pb-16 sm:pb-20 md:pb-32">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[11vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw] mt-6 sm:mt-4 md:-mt-5">
            hi, i&apos;m ananya
          </h1>
        </FadeIn>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 w-[155px] sm:w-[200px] md:w-[250px] lg:w-[290px] pointer-events-none">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={260} strength={2.2} maxOffset={90} className="pointer-events-auto">
            <img src={portrait} alt="Ananya" className="w-full h-auto" />
          </Magnet>
        </FadeIn>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            i turn &apos;figure it out&apos; into a plan with a deadline
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
