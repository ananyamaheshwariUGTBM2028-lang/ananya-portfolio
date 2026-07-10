export interface StickerData {
  label: string
  color: string
  story: string
  className: string
  duration: number
  rotate: number
}

export const stickers: StickerData[] = [
  {
    label: 'Strategy Nerd',
    color: '#FFF3B0',
    story:
      "I get genuinely excited about messy, unstructured problems — the kind where nobody agrees on the plan yet. Give me a whiteboard, a business problem, and forty-five minutes, and I'll have opinions.",
    className: 'flex top-[6%] left-[2%] sm:left-[4%] w-[100px] sm:w-[125px]',
    duration: 5,
    rotate: -8,
  },
  {
    label: 'Board Topper',
    color: '#B8D4E8',
    story:
      "97.4% in Class 10, 96% in Class 12 — commerce and math, back when I thought spreadsheets were just for homework. Turns out they weren't done with me yet.",
    className: 'hidden sm:flex top-[27%] left-[1%] md:left-[3%] w-[100px] md:w-[120px]',
    duration: 5.8,
    rotate: 7,
  },
  {
    label: 'Campus Leader',
    color: '#F5D6A8',
    story:
      "Led a 1,000+ member house to the top of inter-house competitions, then went on to interview prospective students as an Admissions Fellow. Turns out I just like being handed a room and a reason to organize it.",
    className: 'hidden sm:flex top-1/2 -translate-y-1/2 left-[1%] md:left-[2%] w-[100px] md:w-[120px]',
    duration: 5.1,
    rotate: -7,
  },
  {
    label: 'Automation Geek',
    color: '#F4C7D9',
    story:
      "I automate the boring stuff with n8n and lean on AI tools daily to move faster — research, drafts, dashboards, all of it. If a process repeats itself twice, I'm already trying to make it repeat itself without me.",
    className: 'hidden sm:flex bottom-[27%] left-[1%] md:left-[3%] w-[110px] md:w-[130px]',
    duration: 4.8,
    rotate: -5,
  },
  {
    label: 'State Champ',
    color: '#FFB4A2',
    story:
      "Competed at the state and district level in badminton for years before trading the court for case competitions. Turns out both reward the same thing: staying calm when the pressure's on.",
    className: 'flex bottom-[8%] left-[4%] sm:left-[8%] w-[105px] sm:w-[125px]',
    duration: 6,
    rotate: 6,
  },
  {
    label: 'Stage Junkie',
    color: '#B8E3D5',
    story:
      "Won my first national public speaking competition at IIM Indore, and I still can't walk past a guitar without picking it up. Different stages, same instinct — say something people actually remember.",
    className: 'flex top-[8%] right-[2%] sm:right-[4%] w-[115px] sm:w-[135px]',
    duration: 4.5,
    rotate: 5,
  },
  {
    label: 'Pitch Slayer',
    color: '#D6CDEA',
    story:
      "Beat 30+ schools to take first place at Shark Pool Express with a business pitch. I've been chasing that same rush — structure the story, land the ask — ever since.",
    className: 'hidden sm:flex top-[29%] right-[1%] md:right-[3%] w-[105px] md:w-[125px]',
    duration: 5.3,
    rotate: -6,
  },
  {
    label: 'Case Cracker',
    color: '#C7CEEA',
    story:
      "Built GTM strategies, business models, and B-plans for imaginary startups in class — a coffee brand, a peer-counselling app, a case-competition circuit. Turns out I can't resist a business problem, real or hypothetical.",
    className: 'hidden sm:flex top-1/2 -translate-y-1/2 right-[1%] md:right-[2%] w-[105px] md:w-[125px]',
    duration: 5.6,
    rotate: 6,
  },
  {
    label: 'Eco Innovator',
    color: '#C8E6C0',
    story:
      'Won ₹10,000 from India\'s Department of Science and Technology for an environmental sustainability project through the Inspire Manak Award. Proof that a good idea and a decent pitch can go a long way.',
    className: 'hidden sm:flex bottom-[29%] right-[1%] md:right-[3%] w-[110px] md:w-[130px]',
    duration: 6.4,
    rotate: 8,
  },
  {
    label: 'Bootstrap Boss',
    color: '#FFD9B3',
    story:
      "Ibn-e-Battuta started as a college side project selling tote bags and caps. Three months and ₹1,00,000+ in revenue later, I'd learned more about pricing, sourcing, and customers than any class could've taught me.",
    className: 'flex bottom-[6%] right-[3%] sm:right-[6%] w-[115px] sm:w-[135px]',
    duration: 5.5,
    rotate: -5,
  },
]
