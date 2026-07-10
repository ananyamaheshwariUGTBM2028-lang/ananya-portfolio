import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import GhostButton from '../components/GhostButton'
import LogoPlaceholder from '../components/LogoPlaceholder'
import LogoImage from '../components/LogoImage'
import PhotoImage from '../components/PhotoImage'
import AnimatedCounter from '../components/AnimatedCounter'
import { experiences, type Experience } from '../data/experience'
import { LINKEDIN_URL } from '../data/contact'
import { ACCENT_WARM } from '../data/theme'

const TILE_ROUNDING = 'rounded-[30px] sm:rounded-[40px] md:rounded-[50px]'

function MediaRow({ exp }: { exp: Experience }) {
  const items = [
    ...(exp.logo ? [{ type: 'logo' as const, src: exp.logo }] : []),
    ...(exp.photos ?? []).map((photo) => ({ type: 'photo' as const, ...photo })),
  ]

  if (items.length === 0) {
    return (
      <div style={{ height: 'clamp(120px, 16vw, 180px)' }}>
        <LogoPlaceholder initial={exp.logoInitial} className={`${TILE_ROUNDING} w-full h-full`} />
      </div>
    )
  }

  return (
    <div className="flex gap-3" style={{ height: 'clamp(120px, 16vw, 180px)' }}>
      {items.map((item, i) =>
        item.type === 'logo' ? (
          <LogoImage
            key={i}
            src={item.src}
            alt={`${exp.company} logo`}
            accentColor={exp.logoAccent}
            className={`${TILE_ROUNDING} flex-1 h-full min-w-0`}
          />
        ) : (
          <PhotoImage
            key={i}
            src={item.src}
            alt={`${exp.company} photo`}
            caption={item.caption}
            objectPosition={item.objectPosition}
            zoom={item.zoom}
            className={`${TILE_ROUNDING} flex-1 h-full min-w-0`}
          />
        )
      )}
    </div>
  )
}

function ExperienceCard({ exp, index, total }: { exp: Experience; index: number; total: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  })

  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh] flex items-start justify-center"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#0C0C0C]"
              style={{
                fontSize: 'clamp(2.25rem, 7vw, 100px)',
                WebkitTextStroke: '2px #D7E2EA',
              }}
            >
              {exp.number}
            </span>
            <div>
              <p className="text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm opacity-60">
                {exp.category} · {exp.meta}
              </p>
              <h3
                className="hero-heading font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)' }}
              >
                {exp.company}
              </h3>
              <p className="text-[#D7E2EA] font-light opacity-80" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.1rem)' }}>
                {exp.role}
              </p>
            </div>
          </div>
          <GhostButton href={LINKEDIN_URL} label="LinkedIn" />
        </div>

        <p
          className="text-[#D7E2EA] font-light leading-relaxed max-w-3xl opacity-70"
          style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.05rem)' }}
        >
          {exp.highlight}
        </p>

        <div className="flex flex-wrap gap-6 sm:gap-10">
          {exp.stats.map((stat) => (
            <div key={stat.label}>
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className="font-black leading-none block text-[clamp(1.4rem,3vw,2.2rem)]"
                style={{ color: ACCENT_WARM }}
              />
              <p className="text-[#D7E2EA] uppercase tracking-widest opacity-60 mt-1" style={{ fontSize: 'clamp(0.6rem, 1vw, 0.8rem)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <MediaRow exp={exp} />
      </motion.div>
    </div>
  )
}

export default function WorkExperienceSection() {
  return (
    <section id="experience" className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.company} exp={exp} index={i} total={experiences.length} />
        ))}
      </div>
    </section>
  )
}
