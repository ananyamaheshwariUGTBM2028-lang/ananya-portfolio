import gromoLogo from '../assets/work/gromo-logo.svg'
import vedantuLogo from '../assets/work/vedantu-logo.svg'
import artOfPujaLogo from '../assets/work/art-of-puja-logo.webp'
import zyraProfile from '../assets/work/zyra-profile.png'
import gromoTeam from '../assets/work/gromo-team.jpg'
import vedantuTeam from '../assets/work/vedantu-team.jpeg'
import vedantuPortrait from '../assets/work/vedantu-portrait.jpeg'
import ibnBattutaTote from '../assets/work/ibn-e-battuta-tote.jpeg'
import ibnBattutaCapsRooftop from '../assets/work/ibn-e-battuta-caps-rooftop.jpeg'
import ibnBattutaUnbotheredTote from '../assets/work/ibn-e-battuta-unbothered-tote.jpeg'
import dynamicOutdoorsLogo from '../assets/work/dynamic-outdoors-logo.png'

export interface Stat {
  value: number
  prefix?: string
  suffix?: string
  label: string
}

export interface PhotoItem {
  src: string
  caption?: string
  objectPosition?: string
  zoom?: number
}

export interface Experience {
  number: string
  category: string
  company: string
  role: string
  meta: string
  highlight: string
  logoInitial: string
  logo?: string
  logoAccent?: string
  photos?: PhotoItem[]
  stats: Stat[]
}

export const experiences: Experience[] = [
  {
    number: '01',
    category: 'Internship',
    company: 'Vedantu',
    role: "Founder's Office Intern",
    meta: "Mar '26 – May '26 · Bangalore",
    highlight:
      "Redesigned onboarding and training for 500+ academic counsellors, driving a 22% lift in call-to-demo conversion and 15% in demo-to-enrollment, then transitioned into the Founder's Office supporting the COO and Chief of Staff.",
    logoInitial: 'V',
    logo: vedantuLogo,
    logoAccent: '#FF693D',
    photos: [{ src: vedantuTeam }, { src: vedantuPortrait }],
    stats: [
      { value: 22, suffix: '%', label: 'call-to-demo lift' },
      { value: 500, suffix: '+', label: 'counsellors retrained' },
    ],
  },
  {
    number: '02',
    category: 'Internship',
    company: 'GroMo',
    role: 'Strategy & Marketing Intern',
    meta: "Jun '25 – Aug '25 · Gurugram",
    highlight:
      "Led GTM planning for Zyra, GroMo's AI-driven digital human — driving 5,000–7,000 pilot users, 250+ internal adoptions, and 1,000+ waitlist sign-ups across a 3-phase campaign.",
    logoInitial: 'G',
    logo: gromoLogo,
    photos: [{ src: zyraProfile, caption: 'Zyra — GroMo’s AI digital human' }, { src: gromoTeam }],
    stats: [
      { value: 7000, suffix: '+', label: 'pilot users reached' },
      { value: 1000, suffix: '+', label: 'waitlist sign-ups' },
    ],
  },
  {
    number: '03',
    category: 'Internship',
    company: 'Dynamic Outdoors',
    role: 'Brand Manager Intern',
    meta: "May '25 – Jun '25 · Gurugram",
    highlight:
      'Drove a multi-channel brand strategy that grew LinkedIn engagement by 65% and web traffic by 40%, activating 6 institutional partnerships and 20+ qualified B2B leads.',
    logoInitial: 'D',
    logo: dynamicOutdoorsLogo,
    logoAccent: '#1F6F5C',
    stats: [
      { value: 65, suffix: '%', label: 'LinkedIn engagement growth' },
      { value: 40, suffix: '%', label: 'web traffic growth' },
    ],
  },
  {
    number: '04',
    category: 'Internship',
    company: 'Art Of Puja',
    role: 'Social Media & Product Innovation Intern',
    meta: "Apr '25 – May '25 · Gurugram",
    highlight:
      'Ran an Instagram-first influencer initiative onboarding 55+ barter-based creators, while shaping new product lines through packaging, typography, and messaging.',
    logoInitial: 'A',
    logo: artOfPujaLogo,
    logoAccent: '#C9A227',
    stats: [
      { value: 55, suffix: '+', label: 'creators onboarded' },
      { value: 100, suffix: '+', label: 'creators contacted' },
    ],
  },
  {
    number: '05',
    category: 'Founder',
    company: 'Ibn-e-Battuta',
    role: 'Founder',
    meta: 'Nov 2024 · Gurugram',
    highlight:
      'Built a bootstrapped D2C brand from zero — ₹1,00,000+ revenue in 3 months, 200+ units sold to 120+ customers across 10+ SKUs.',
    logoInitial: 'I',
    photos: [
      { src: ibnBattutaCapsRooftop, objectPosition: 'center 80%' },
      { src: ibnBattutaUnbotheredTote, zoom: 1.35, objectPosition: 'center 25%' },
      { src: ibnBattutaTote },
    ],
    stats: [
      { value: 100000, prefix: '₹', suffix: '+', label: 'revenue in 3 months' },
      { value: 200, suffix: '+', label: 'units sold' },
    ],
  },
]
