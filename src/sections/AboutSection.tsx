import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'
import Sticker from '../components/Sticker'
import { stickers } from '../data/stickers'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      {stickers.map((sticker) => (
        <Sticker key={sticker.label} {...sticker} />
      ))}

      <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(2.25rem, 9vw, 120px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
            text="I'm studying tech & business at Masters' Union, but most of my education has happened outside the classroom — redesigning onboarding for 500+ counsellors, running go-to-market for an AI product's first 7,000 users, and growing my own bootstrapped brand to six figures — no funding, no co-founder, started from zero. I like problems nobody's structured yet, decks that actually get read, and turning 'we'll figure it out' into a plan with a deadline. Got something messy and ambiguous? I'm probably already interested."
          />
        </div>

        <ContactButton />
      </div>
    </section>
  )
}
