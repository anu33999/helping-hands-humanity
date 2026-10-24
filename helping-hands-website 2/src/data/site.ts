/**
 * Central content for the Helping Hands Humanity (HHH) demo site.
 *
 * Facts are taken from helpinghandshumanity.com and should be re-confirmed
 * with the HHH team before launch. Anything marked `demo` is illustrative
 * placeholder content written for this concept.
 */

export const org = {
  name: 'Helping Hands Humanity',
  short: 'HHH',
  motto: 'Cheyyi cheyyi kalipi cheyutaniddam',
  mottoMeaning: 'Let’s join hands and help',
  founded: 2012,
  regNo: 'Govt. Reg. No. 84/2012',
  city: 'Hyderabad',
  email: 'helpinghandshumanity.hhh@gmail.com',
  phone: '+91 81061 09781',
  phoneHref: 'tel:+918106109781',
  address: 'Plot No. 8, Nizamia Co-op Housing Society, Jalal Garden, Laxmi Nagar, Picket, West Marredpally, Secunderabad, Telangana 500026',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=West+Marredpally+Secunderabad+Telangana+500026',
  volunteerFormHref: 'https://docs.google.com/forms/d/10kSzowwcYrBxnRMrQkLFz5Dsz9-m6pwAR7puptjuye0/viewform',
  requirementsHref: 'https://docs.google.com/spreadsheets/d/1SjPf8LlvyGdpzq5Szg_K3c13QqQgIqnXQ7wlkvHBB7U',
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/helpinghandshumanity' },
    { label: 'Instagram', href: 'https://www.instagram.com/helping_hands_humanity/' },
    { label: 'X', href: 'https://twitter.com/HHHjoinurhands' },
  ],
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Missions', to: '/missions' },
  { label: 'Impact', to: '/impact' },
  { label: 'Stories', to: '/stories' },
  { label: 'Get Involved', to: '/get-involved' },
]

const img = (name: string) => `/images/${name}`

export const images = {
  hero: img('hero-schoolgirls.jpg'),
  girlsWalking: img('girls-walking.jpg'),
  childAlone: img('child-alone.jpg'),
  girlDusk: img('girl-dusk.jpg'),
  education: img('m-education.jpg'),
  education2: img('m-education-2.jpg'),
  education3: img('m-education-3.jpg'),
  teaching: img('m-teaching.jpg'),
  teachingSlate: img('m-teaching-slate.jpg'),
  teachingBoard: img('m-teaching-board.jpg'),
  homes: img('m-homes.jpg'),
  homesBoys: img('m-homes-boys.jpg'),
  homesFestival: img('m-homes-festival.jpg'),
  homesGate: img('m-homes-gate.jpg'),
  grama: img('m-grama.jpg'),
  gramaBenches: img('m-grama-benches.jpg'),
  gramaBank: img('m-grama-bank.jpg'),
  gramaSchool: img('m-grama-school.jpg'),
  sevarth: img('m-sevarth.jpg'),
  sevarthCake: img('m-sevarth-cake.jpg'),
  sevarthVisit: img('m-sevarth-visit.jpg'),
  sahaya: img('m-sahaya.jpg'),
  awareness: img('m-awareness.jpg'),
  awarenessHealth: img('m-awareness-health.jpg'),
  awarenessSlum: img('m-awareness-slum.jpg'),
  volunteers: img('volunteers-group.jpg'),
}

/** Children supported by Mission Education each academic year, as published by HHH. */
export const educationByYear = [
  { year: '2013–14', children: 18 },
  { year: '2014–15', children: 43 },
  { year: '2015–16', children: 80 },
  { year: '2016–17', children: 90 },
  { year: '2017–18', children: 134 },
  { year: '2018–19', children: 164 },
  { year: '2019–20', children: 246 },
  { year: '2020–21', children: 335 },
  { year: '2021–22', children: 380 },
  { year: '2022–23', children: 326 },
  { year: '2023–24', children: 294 },
  { year: '2024–25', children: 249 },
]

export const studentYears = educationByYear.reduce((s, y) => s + y.children, 0)

/** Figures derived from helpinghandshumanity.com. Confirm before launch. */
export const publishedStats = [
  { value: studentYears, suffix: '', label: 'Student-years of education sponsored', display: undefined as string | undefined },
  { value: 249, suffix: '', label: 'Children supported in 2024–25' },
  { value: 63, suffix: '', label: 'Children living in HHH Homes' },
  { value: new Date().getFullYear() - 2012, suffix: '+', label: 'Years of service since 2012' },
]

export type Program = {
  slug: string
  number: string
  title: string
  short: string
  summary: string
  image: string
  imageAlt: string
  gallery: { src: string; alt: string }[]
  body: { heading: string; text: string }[]
  highlights: string[]
}

export const programs: Program[] = [
  {
    slug: 'mission-education',
    number: '01',
    title: 'Mission Education',
    short: 'Where it all began in 2012: donors sponsor the schooling of children from families who could never afford it.',
    summary:
      'Since 2012, HHH has supported hundreds of underprivileged children across different states with their education — helping them secure brighter futures and stable jobs.',
    image: images.education,
    imageAlt: 'HHH volunteers with children holding notebooks and school supplies',
    gallery: [
      { src: images.education2, alt: 'Children seated in rows during an HHH education drive' },
      { src: images.education3, alt: 'Volunteers and children gathered outside a school building' },
    ],
    body: [
      {
        heading: 'Started on social media, powered by donors',
        text: 'People saw HHH’s work on social media and came forward to sponsor the education of children in need. Every sponsorship is matched to a real child.',
      },
      {
        heading: 'From 18 children to hundreds',
        text: 'HHH supported 18 children in 2013–14. By 2021–22 that number had grown to 380, and 249 children were supported in 2024–25.',
      },
      {
        heading: 'Education that leads to livelihoods',
        text: 'Hundreds of children have completed their studies, secured jobs and settled well in their careers — the clearest proof that the model works.',
      },
    ],
    highlights: ['Since 2012', '249 children in 2024–25', 'Across states', 'Donor-sponsored'],
  },
  {
    slug: 'teaching-mission',
    number: '02',
    title: 'Teaching Mission',
    short: 'Volunteers tutor children in slums, government schools and orphanages — and follow up on their health and studies.',
    summary:
      'HHH volunteers give their time to help children complete homework, understand each subject, and build habits of punctuality, discipline, cleanliness and sharing.',
    image: images.teaching,
    imageAlt: 'Children studying on a mat while volunteers help with their homework',
    gallery: [
      { src: images.teachingSlate, alt: 'Two young boys holding a chalk slate during a tutoring session' },
      { src: images.teachingBoard, alt: 'A boy writing on a whiteboard' },
    ],
    body: [
      {
        heading: 'In government schools',
        text: 'Encourage punctuality and discipline, monitor academic performance, and motivate bright students to support their classmates.',
      },
      {
        heading: 'In slum communities',
        text: 'Help children with homework, strengthen their understanding of each subject, teach the importance of health and cleanliness, and instil respect and the value of sharing.',
      },
      {
        heading: 'In orphanages',
        text: 'Offer care and affection like a family, build confidence and cooperation among children, and emphasise the importance of health and education.',
      },
    ],
    highlights: ['Homework help', 'Health follow-ups', 'Slums & schools', 'Volunteer-led'],
  },
  {
    slug: 'hhh-homes',
    number: '03',
    title: 'HHH Homes',
    short: 'Since 2016, separate homes for girls and boys give orphans and children of single parents a big, happy family.',
    summary:
      'HHH Children Homes shelter children from slum areas — orphans, semi-orphans and children of single parents. What began with 17 children now houses 38 girls and 25 boys.',
    image: images.homes,
    imageAlt: 'Children and volunteers from HHH Homes standing together under trees',
    gallery: [
      { src: images.homesFestival, alt: 'Children celebrating a festival at HHH Home' },
      { src: images.homesBoys, alt: 'Three boys from HHH Home smiling at the camera' },
    ],
    body: [
      {
        heading: 'From 17 children to 63',
        text: 'Established in 2016 with 17 children, the homes now accommodate 38 girls and 25 boys in separate homes for girls and boys.',
      },
      {
        heading: 'A big, happy family',
        text: 'Children live, study and celebrate festivals together, with education and health at the centre of daily life.',
      },
      {
        heading: 'Always improving',
        text: 'HHH keeps improving the homes and publishes a live list of requirements so donors can see exactly what is needed.',
      },
    ],
    highlights: ['Est. 2016', '38 girls, 25 boys', 'Separate homes', 'Live wish list'],
  },
  {
    slug: 'grama-seva',
    number: '04',
    title: 'Grama Seva',
    short: 'HHH adopted Nelavancha village in Warangal district — bringing clean water, banking access and better schools.',
    summary:
      'Real change in one village, built piece by piece: a water purification plant, bank accounts for government schemes, school toilets and benches, roads and power.',
    image: images.grama,
    imageAlt: 'Villagers of Nelavancha and HHH volunteers waving together',
    gallery: [
      { src: images.gramaBenches, alt: 'New classroom benches being delivered to the village school' },
      { src: images.gramaBank, alt: 'A villager being helped to open a bank account' },
    ],
    body: [
      {
        heading: 'Pure drinking water',
        text: 'HHH installed a water purification plant so the village has clean, safe drinking water.',
      },
      {
        heading: 'Access to government schemes',
        text: 'Volunteers helped residents open bank accounts so they could benefit from government schemes.',
      },
      {
        heading: 'Better schools and infrastructure',
        text: 'School toilets were renovated, benches provided for classrooms, and HHH helped with road construction and a three-phase power supply.',
      },
    ],
    highlights: ['Water purification plant', 'Bank accounts', 'School toilets & benches', 'Roads & power'],
  },
  {
    slug: 'sevarth-mission',
    number: '05',
    title: 'Sevarth Mission',
    short: 'Regular visits to homes for people affected by HIV and cancer, the hearing and speech impaired, orphans and the elderly.',
    summary:
      'Through Sevarth, HHH volunteers visit care homes across the city to spend time, celebrate occasions and extend practical help where it is needed most.',
    image: images.sevarth,
    imageAlt: 'Children sharing a meal during an HHH visit',
    gallery: [
      { src: images.sevarthCake, alt: 'Two girls cutting a birthday cake during a Sevarth visit' },
      { src: images.sevarthVisit, alt: 'Volunteers visiting children at a care home' },
    ],
    body: [
      {
        heading: 'Showing up for others',
        text: 'Volunteers visit homes for people affected by HIV and cancer, homes for the hearing and speech impaired, orphanages and old-age homes.',
      },
      {
        heading: 'Time, care and practical help',
        text: 'Visits combine companionship and celebrations with essentials that each home needs.',
      },
    ],
    highlights: ['HIV & cancer care homes', 'Orphanages', 'Old-age homes', 'Special-needs homes'],
  },
  {
    slug: 'sahaya-mission',
    number: '06',
    title: 'Sahaya Mission',
    short: 'Rescuing mentally challenged and destitute people from the streets, placing them in care homes and staying in touch.',
    summary:
      'Sahaya is where HHH’s story began. Volunteers help people living on the streets find a safe home — and keep in constant touch so they can live comfortably for the rest of their lives.',
    image: images.sahaya,
    imageAlt: 'A group of HHH volunteers standing together',
    gallery: [],
    body: [
      {
        heading: 'From the street to safety',
        text: 'HHH helps mentally challenged and destitute people get admitted to suitable care homes.',
      },
      {
        heading: 'A relationship, not a hand-off',
        text: 'Volunteers keep in constant touch, aiming to keep each person happy and comfortable for the rest of their lives.',
      },
    ],
    highlights: ['Street rescue', 'Care-home placement', 'Ongoing follow-up', 'Dignity first'],
  },
  {
    slug: 'mission-awareness',
    number: '07',
    title: 'Mission Awareness',
    short: 'Spreading the importance of education, health and being humane — especially in slum communities.',
    summary:
      'HHH spreads awareness among people from all walks of life about the importance of being humane and helping others grow — with a special focus on education and health in slum areas.',
    image: images.awareness,
    imageAlt: 'Children and volunteers in a classroom during an awareness session',
    gallery: [
      { src: images.awarenessHealth, alt: 'A volunteer doctor checking a woman’s health during an awareness camp' },
      { src: images.awarenessSlum, alt: 'Volunteers sitting with families in a slum community' },
    ],
    body: [
      {
        heading: 'Education and health first',
        text: 'Sessions in slum communities focus on why school matters and how simple health habits protect families.',
      },
      {
        heading: 'Responsible citizenship next',
        text: 'In the future, HHH plans to spread awareness on being responsible citizens and carrying out our duties honestly.',
      },
    ],
    highlights: ['Slum outreach', 'Health camps', 'School awareness', 'Citizenship'],
  },
]

export type Story = {
  slug: string
  category: 'Origins' | 'Education' | 'Community' | 'Homes'
  date: string
  title: string
  excerpt: string
  image: string
  imageAlt: string
  readTime: string
  /** 'hhh' = written from facts published by HHH. 'demo' = sample update written for this concept. */
  source: 'hhh' | 'demo'
  body: string[]
}

export const stories: Story[] = [
  {
    slug: 'a-documentary-called-humanity',
    category: 'Origins',
    date: '2026-09-20',
    title: 'It started with a documentary called “Humanity”',
    excerpt:
      'A few young people made a film. It helped a mentally challenged man get legal care and return to his parents — and convinced them that determination to do good is enough to begin.',
    image: images.girlDusk,
    imageAlt: 'A young girl in soft evening light',
    readTime: '3 min read',
    source: 'hhh',
    body: [
      'A small group of friends made a documentary film and named it “Humanity”.',
      'The film led to the legal rehabilitation of a mentally challenged man — and to the moment he was reunited with his parents.',
      'That outcome gave the group a new kind of hope. One of them went on to start an NGO and named it after the film: Helping Hands Humanity.',
      'The lesson they took from it still guides HHH today: with the determination to do good and the commitment to act, success follows. Or, as the HHH motto puts it — cheyyi cheyyi kalipi cheyutaniddam. Let’s join hands and help.',
    ],
  },
  {
    slug: 'clean-water-for-nelavancha',
    category: 'Community',
    date: '2026-08-14',
    title: 'Clean water, bank accounts and new benches: one village, many changes',
    excerpt:
      'When HHH adopted Nelavancha in Warangal district, the first priority was safe drinking water. It didn’t stop there.',
    image: images.grama,
    imageAlt: 'Villagers of Nelavancha with HHH volunteers',
    readTime: '4 min read',
    source: 'hhh',
    body: [
      'Grama Seva is HHH’s commitment to one village: Nelavancha, in Warangal district.',
      'The first project was a water purification plant, giving residents access to clean drinking water.',
      'Volunteers then helped villagers open bank accounts so they could access government schemes. School toilets were renovated and classrooms received new benches.',
      'HHH has also contributed to road construction and a three-phase power supply — and aims to keep improving the village’s infrastructure.',
    ],
  },
  {
    slug: 'hhh-homes-17-to-63',
    category: 'Homes',
    date: '2026-07-02',
    title: 'From 17 children to 63: ten years of HHH Homes',
    excerpt:
      'Opened in 2016 for children from slum areas, HHH Homes now shelter 38 girls and 25 boys in separate homes.',
    image: images.homesFestival,
    imageAlt: 'Children at HHH Home celebrating a festival',
    readTime: '3 min read',
    source: 'hhh',
    body: [
      'HHH Homes opened in 2016 to give orphans, semi-orphans and children of single parents from slum areas a safe place to grow up.',
      'The first home welcomed 17 children. Today there are separate homes for girls and boys, sheltering 38 girls and 25 boys.',
      'HHH continues to improve the homes and keeps a public list of requirements, so every donor can see exactly what the children need next.',
    ],
  },
  {
    slug: 'every-rupee-every-month',
    category: 'Community',
    date: '2026-10-01',
    title: 'Every rupee, every month: how HHH reports to its donors',
    excerpt:
      'Each month, donors receive a spreadsheet of funds received and money spent — with bills for every rupee.',
    image: images.volunteers,
    imageAlt: 'HHH volunteers gathered together',
    readTime: '2 min read',
    source: 'hhh',
    body: [
      'HHH is known among its supporters for one habit above all: transparency.',
      'Every month, HHH emails donors an Excel sheet showing the funds received and every expense — including bills for every rupee spent.',
      'It is a simple practice, but it is why many donors have stayed with HHH year after year. As HHH puts it: our donors are our pillars of strength.',
    ],
  },
  {
    slug: 'a-saturday-with-the-teaching-mission',
    category: 'Education',
    date: '2026-09-06',
    title: 'A Saturday with the Teaching Mission',
    excerpt: 'Slates, homework and a lot of questions — what a typical volunteer tutoring session looks like.',
    image: images.teaching,
    imageAlt: 'Children studying on a mat with volunteers',
    readTime: '3 min read',
    source: 'demo',
    body: [
      'Sample update written for this design concept. Replace with an article from the HHH team.',
      'Teaching Mission volunteers spend their weekends helping children in slum communities finish their homework and understand each subject a little better.',
      'Sessions also cover the basics that make a difference beyond school: punctuality, cleanliness, respect and sharing.',
    ],
  },
  {
    slug: 'sponsored-students-in-careers',
    category: 'Education',
    date: '2026-06-12',
    title: 'From sponsored student to working professional',
    excerpt: 'Hundreds of children supported by Mission Education have finished their studies and settled into careers.',
    image: images.education3,
    imageAlt: 'Students and volunteers outside a school building',
    readTime: '3 min read',
    source: 'demo',
    body: [
      'Sample update written for this design concept. Replace with an alumni story shared (with consent) by the HHH team.',
      'Mission Education has supported children every year since 2012. HHH reports that hundreds of them have completed their studies, secured jobs and settled well in their careers.',
      'An alumni series on this page could follow some of those journeys — with names and photos shared only with permission.',
    ],
  },
]

export const steps = [
  { title: 'Find', text: 'Volunteers meet children and families in slums, schools, villages and care homes, and listen to what they need.' },
  { title: 'Fund', text: 'Donors sponsor a child’s education, a home’s requirements or a village project — matched to real needs.' },
  { title: 'Follow up', text: 'Volunteers stay in touch: tutoring, checking on health and studies, and visiting regularly.' },
  { title: 'Report', text: 'Every month, donors receive a sheet of funds received and spent, with bills for every rupee.' },
]

export const documents = [
  { title: 'Monthly Donor Statement — Sept 2026', type: 'Monthly statement', size: 'XLSX · sample' },
  { title: 'Annual Report 2025–26', type: 'Annual report', size: 'PDF · sample' },
  { title: 'Audited Financial Statements FY 2025–26', type: 'Financial statement', size: 'PDF · sample' },
  { title: 'Trust Deed & Registration', type: 'Governance', size: 'PDF · sample' },
  { title: 'Child Protection Policy', type: 'Policy', size: 'PDF · sample' },
  { title: 'Privacy & Data Protection Policy', type: 'Policy', size: 'PDF · sample' },
]

/** Illustrative amounts — HHH does not publish fixed donation tiers. */
export const oneTimeAmounts = [500, 1000, 2500, 5000, 10000, 25000]
export const monthlyAmounts = [300, 500, 1000, 2000, 5000, 10000]

/** Illustrative only — the HHH team should replace these with real costs. */
export const amountImpact: Record<number, string> = {
  300: 'helps towards notebooks and stationery for a child',
  500: 'helps towards a school bag and supplies',
  1000: 'helps towards a month of groceries for a child at HHH Homes',
  2000: 'helps towards a child’s school fees',
  2500: 'helps towards uniforms and books for a child',
  5000: 'helps towards a term of school fees',
  10000: 'helps towards a year of a child’s schooling',
  25000: 'helps towards a village infrastructure project',
}

/** Sample wish-list items for HHH Homes. Prices are illustrative. */
export const wishlist = [
  { name: 'Notebook & stationery kit', detail: 'For one child, one term', price: 600, icon: 'pencil' },
  { name: 'School bag', detail: 'Sturdy bag for daily use', price: 800, icon: 'backpack' },
  { name: 'School uniform set', detail: 'Two sets for a child', price: 1500, icon: 'shirt' },
  { name: 'Monthly groceries', detail: 'Rice, dal and oil for one child', price: 1200, icon: 'wheat' },
  { name: 'Bedding set', detail: 'Mattress, sheet and blanket', price: 2500, icon: 'bed' },
  { name: 'Medical check-up', detail: 'Health camp for one child', price: 1000, icon: 'stethoscope' },
  { name: 'Water purifier service', detail: 'Annual upkeep, Nelavancha plant', price: 7500, icon: 'droplet' },
  { name: 'A year of schooling', detail: 'Fees for one sponsored child', price: 12000, icon: 'graduation' },
]

export const values = [
  { title: 'Transparency', text: 'Every month donors receive a statement of funds received and spent — with bills for every rupee.' },
  { title: 'Togetherness', text: 'Cheyyi cheyyi kalipi — join hands. Volunteers, donors and communities working as one.' },
  { title: 'Follow-through', text: 'We stay in touch with every child and every person we help, long after the first visit.' },
  { title: 'Humanity', text: 'Named after a film about compassion, HHH puts dignity and kindness at the heart of every mission.' },
]

export const formatINR = (n: number) => '₹' + n.toLocaleString('en-IN')

export const formatDate = (iso: string) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
