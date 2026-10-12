const photo = (id, width) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=82`;

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
  { id: 'gallery', label: 'Gallery' },
];

export const MENU_LINKS = [...NAV_LINKS, { id: 'connect', label: 'Connect' }];

export const COMMAND_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'events', label: 'Events' },
  { id: 'people', label: 'People' },
  { id: 'technology', label: 'Technology' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'connect', label: 'Connect' },
];

export const CORE_LABELS = ['AI', 'WEB', 'DATA', 'CLOUD', 'CYBER', 'DESIGN'];

// Replace the XX+ placeholders with the real figures when they are ready.
export const IMPACT_STATS = [
  { value: 'XX+', label: 'EVENTS' },
  { value: 'XX+', label: 'STUDENTS' },
  { value: 'XX+', label: 'WORKSHOPS' },
  { value: 'XX+', label: 'PROJECTS' },
];

export const FEATURED_FACTS = [
  { value: '₹60K', label: 'PRIZE POOL' },
  { value: '5+', label: 'EVENTS' },
  { value: '2', label: 'WORKSHOPS' },
  { value: '3', label: 'DAYS' },
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

export const BODIES = ['ITSA', 'CSI', 'ISTE', 'IACC'];

export const GALLERY = [
  { tag: 'BUILD / 01', caption: 'Ideas become prototypes', image: IMAGES.collab },
  { tag: 'WORKSHOP / 02', caption: 'Learning in public', image: IMAGES.workshop },
  { tag: 'CODE / 03', caption: 'Deep in the build', image: IMAGES.code },
  { tag: 'EVENT / 04', caption: 'Competition energy', image: IMAGES.event },
  { tag: 'COMMUNITY / 05', caption: 'Together by design', image: IMAGES.community },
];
