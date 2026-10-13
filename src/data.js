const photo = (id, width) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=82`;

// Same photo at another width, for places that render it small.
const withWidth = (url, width) => url.replace(/w=\d+/, `w=${width}`);

export const IMAGES = {
  collab: photo('1522071820081-009f0129c71c', 1600),
  workshop: photo('1565688256340-249dbb31f25d', 1600),
  code: photo('1568333261345-0918efdce2d9', 1400),
  event: photo('1695067058684-da5a90013c57', 1600),
  community: photo('1756273343749-63f7d6ea0cda', 1200),
  team: photo('1637073849667-91120a924221', 1400),
};

export const CONTACT = {
  email: 'techgyanathon@pvppcoe.ac.in',
  instagram: 'https://www.instagram.com/itsa_vppcoe/',
  linkedin: 'https://www.linkedin.com/company/96393125/',
};

export const LOCATION = {
  place: 'VPPCOEVA · SION · MUMBAI',
  coordinates: ['19.0760° N', '72.8777° E'],
};

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'technology', label: 'Technology' },
  { id: 'events', label: 'Events' },
  { id: 'people', label: 'People' },
  { id: 'team', label: 'Team' },
  { id: 'gallery', label: 'Gallery' },
];

export const MENU_LINKS = [...NAV_LINKS, { id: 'connect', label: 'Connect' }];

export const COMMAND_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'events', label: 'Events' },
  { id: 'people', label: 'People' },
  { id: 'team', label: 'Team' },
  { id: 'technology', label: 'Technology' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'connect', label: 'Connect' },
];

export const CORE_LABELS = ['AI', 'WEB', 'DATA', 'CLOUD', 'CYBER', 'DESIGN'];

// Placeholders from the design. To publish real figures, replace `value: 'XX+'`
// with `to: 40, suffix: '+'` and the number will count up when it scrolls into view.
// `image` is the card photo (stand-ins until real ITSA photos are in) and `accent` its glow colour.
export const IMPACT_STATS = [
  { value: 'XX+', label: 'EVENTS', image: withWidth(IMAGES.event, 900), accent: '#9b6cff' },
  { value: 'XX+', label: 'STUDENTS', image: withWidth(IMAGES.collab, 900), accent: '#4cd8f8' },
  { value: 'XX+', label: 'WORKSHOPS', image: withWidth(IMAGES.workshop, 900), accent: '#4f7cff' },
  { value: 'XX+', label: 'PROJECTS', image: withWidth(IMAGES.code, 900), accent: '#b394ff' },
];

export const FEATURED_FACTS = [
  { prefix: '₹', to: 60, suffix: 'K', label: 'PRIZE POOL' },
  { to: 5, suffix: '+', label: 'EVENTS' },
  { to: 2, label: 'WORKSHOPS' },
  { to: 3, label: 'DAYS' },
];

export const EVENTS = [
  {
    name: 'Techgyanathon',
    date: '16—18 March',
    kicker: '2026 / Technical Festival',
    blurb: 'A technical autopsy in three acts.',
    image: IMAGES.event,
  },
  {
    name: 'Workshops',
    date: 'Upcoming',
    kicker: '2026 / Learning Programme',
    blurb: 'Hands-on learning designed around practical technology.',
    image: IMAGES.workshop,
  },
  {
    name: 'Competitions',
    date: 'Upcoming',
    kicker: '2026 / Student Challenges',
    blurb: 'Built to test ideas, teamwork and technical thinking.',
    image: IMAGES.code,
  },
  {
    name: 'Community Archive',
    date: 'Archive',
    kicker: '2025 / Past Activities',
    blurb: 'Moments from the ITSA community and its programmes.',
    image: IMAGES.collab,
  },
];

export const LIVE_MODULES = [
  {
    label: 'CURRENTLY / 01',
    title: ['BUILDING THE', '2026 EXPERIENCE.'],
    body: 'Planning, designing and preparing the next cycle of workshops, competitions and community programmes.',
    main: true,
  },
  { label: 'NEXT EVENT / 02', title: ['TECHGYANATHON'], body: '16—18 March 2026' },
  { label: 'COMMUNITY / 03', title: ['OPEN TO', 'COLLABORATION'], body: 'Ideas, events and partnerships.' },
  { label: 'LATEST / 04', title: ['ITSA / 2026'], body: 'System active · Sion, Mumbai' },
];

export const TECH_NODES = [
  { label: 'Programming', tags: ['Python', 'C++', 'Java'] },
  { label: 'Web', tags: ['JavaScript', 'TypeScript', 'React', 'Node.js'] },
  { label: 'Data & AI', tags: ['Machine Learning', 'Deep Learning', 'Generative AI'] },
  { label: 'Databases', tags: ['MongoDB', 'MySQL', 'PostgreSQL'] },
  { label: 'Cloud', tags: ['AWS', 'Google Cloud', 'Docker'] },
  { label: 'Cybersecurity', tags: ['Networks', 'Security', 'Systems'] },
  { label: 'Design', tags: ['Figma', 'UI / UX', 'Visual Systems'] },
  { label: 'Emerging Tech', tags: ['IoT', 'Computer Vision', 'Automation'] },
];

export const TEAMS = [
  { name: 'Technical', focus: 'Code / Systems / Web', image: IMAGES.team },
  { name: 'Documentation', focus: 'Stories / Records / Editorial', image: IMAGES.code },
  { name: 'Creativity', focus: 'Design / Visuals / Experience', image: IMAGES.community },
  { name: 'Publicity', focus: 'Community / Media / Outreach', image: IMAGES.collab },
  { name: 'Infrastructure', focus: 'Operations / Stage / Support', image: IMAGES.workshop },
];

// Cards for the ITSA Team ring. The real committee photos and names are not available yet, so each card
// stands for a team (same copy as the People section). To show people instead, replace an entry with
// { title: 'Full Name', subtitle: 'Role', src: '<portrait url>', alt: 'Full Name' }.
export const TEAM_CARDS = [
  { title: 'Technical', subtitle: 'Code / Systems / Web', src: withWidth(IMAGES.code, 800), alt: 'ITSA Technical team' },
  {
    title: 'Documentation',
    subtitle: 'Stories / Records / Editorial',
    src: withWidth(IMAGES.collab, 800),
    alt: 'ITSA Documentation team',
  },
  {
    title: 'Creativity',
    subtitle: 'Design / Visuals / Experience',
    src: withWidth(IMAGES.workshop, 800),
    alt: 'ITSA Creativity team',
  },
  {
    title: 'Publicity',
    subtitle: 'Community / Media / Outreach',
    src: withWidth(IMAGES.event, 800),
    alt: 'ITSA Publicity team',
  },
  {
    title: 'Infrastructure',
    subtitle: 'Operations / Stage / Support',
    src: withWidth(IMAGES.team, 800),
    alt: 'ITSA Infrastructure team',
  },
];

export const BODIES = ['ITSA', 'CSI', 'ISTE', 'IACC'];

export const GALLERY = [
  { tag: 'BUILD / 01', caption: 'Ideas become prototypes', image: IMAGES.collab },
  { tag: 'WORKSHOP / 02', caption: 'Learning in public', image: IMAGES.workshop },
  { tag: 'CODE / 03', caption: 'Deep in the build', image: IMAGES.code },
  { tag: 'EVENT / 04', caption: 'Competition energy', image: IMAGES.event },
  { tag: 'COMMUNITY / 05', caption: 'Together by design', image: IMAGES.community },
];
