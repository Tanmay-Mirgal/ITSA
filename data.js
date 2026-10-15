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
  { id: 'events', label: 'Events' },
  { id: 'team', label: 'Team' },
  { id: 'gallery', label: 'Gallery' },
];

export const MENU_LINKS = [...NAV_LINKS, { id: 'faq', label: 'FAQ' }, { id: 'connect', label: 'Connect' }];

export const COMMAND_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'events', label: 'Events' },
  { id: 'team', label: 'Team' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'faq', label: 'FAQ' },
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

// Core Team cards for the ITSA circular carousel and interactive Lanyard division modals.
export const TEAM_CARDS = [
  {
    id: 'president',
    title: 'President',
    subtitle: 'Anurag Dharmadhikari',
    src: photo('1534528741775-53994a69daeb', 900),
    alt: 'Anurag Dharmadhikari — President',
    headName: 'Anurag Dharmadhikari',
    headRole: 'President',
    handle: '@anurag.dharmadhikari',
    code: 'ITSA-2026-PRES',
    division: 'Executive Council',
    focus: 'Overall governance, strategic vision, university liaison, and student representation across all technical initiatives.',
    members: [
      { name: 'Aditya Sharma', role: 'Lead Strategist', image: photo('1507003211169-0a1dd7228f2d', 500), tags: ['Strategy', 'Policy'] },
      { name: 'Sneha Patel', role: 'Council Liaison', image: photo('1494790108377-be9c29b29330', 500), tags: ['Liaison', 'Coordination'] },
      { name: 'Rohan Verma', role: 'Operations Coordinator', image: photo('1500648767791-00dcc994a43e', 500), tags: ['Operations', 'Roadmap'] },
      { name: 'Ananya Iyer', role: 'Compliance Lead', image: photo('1517841905240-472988babdf9', 500), tags: ['Audit', 'Governance'] },
    ],
  },
  {
    id: 'vice-president',
    title: 'Vice President',
    subtitle: 'Diya Deshmukh · Executive Council',
    src: photo('1507003211169-0a1dd7228f2d', 900),
    alt: 'Diya Deshmukh — Vice President',
    headName: 'Diya Deshmukh',
    headRole: 'Vice President',
    handle: '@diya.deshmukh',
    code: 'ITSA-2026-VP',
    division: 'Executive Council',
    focus: 'Operational execution, inter-department synergy, resource management, and annual programme roadmap.',
    members: [
      { name: 'Kunal Joshi', role: 'Project Manager', image: photo('1519085360753-af0119f7cbe7', 500), tags: ['Execution', 'Agile'] },
      { name: 'Rhea Sen', role: 'External Affairs', image: photo('1524504388940-b1c1722653e1', 500), tags: ['Partnerships', 'Affairs'] },
      { name: 'Tanvi Kulkarni', role: 'Synergy Lead', image: photo('1534528741775-53994a69daeb', 500), tags: ['Coordination', 'Workflows'] },
      { name: 'Samir Khan', role: 'Executive Assistant', image: photo('1506794778202-cad84cf45f1d', 500), tags: ['Administration', 'Planning'] },
    ],
  },
  {
    id: 'general-secretary',
    title: 'General Secretary',
    subtitle: 'Varun Nair · Administration',
    src: photo('1500648767791-00dcc994a43e', 900),
    alt: 'Varun Nair — General Secretary',
    headName: 'Varun Nair',
    headRole: 'General Secretary',
    handle: '@varun.nair',
    code: 'ITSA-2026-GS',
    division: 'Secretariat',
    focus: 'Official communications, meeting protocols, institutional compliance, and archival oversight.',
    members: [
      { name: 'Priya Gaikwad', role: 'Joint Secretary', image: photo('1539571696357-5a69c17a67c6', 500), tags: ['Records', 'Protocols'] },
      { name: 'Nikhil Rane', role: 'Administrative Officer', image: photo('1492562080023-ab3db95bfbce', 500), tags: ['Administration', 'Docs'] },
      { name: 'Meera Rao', role: 'Records In-Charge', image: photo('1494790108377-be9c29b29330', 500), tags: ['Archives', 'Compliance'] },
      { name: 'Gaurav Sawant', role: 'Meeting Scribe', image: photo('1522075469751-3a6694fb2f61', 500), tags: ['Minutes', 'Notices'] },
    ],
  },
  {
    id: 'tech-head',
    title: 'Tech Head',
    subtitle: 'Kabir Kulkarni · Technology',
    src: photo('1519085360753-af0119f7cbe7', 900),
    alt: 'Kabir Kulkarni — Tech Head',
    headName: 'Kabir Kulkarni',
    headRole: 'Tech Head',
    handle: '@kabir.codes',
    code: 'ITSA-2026-TECH',
    division: 'Technical Division',
    focus: 'Platform infrastructure, portal development, Techgyanathon software stacks, and engineering labs.',
    members: [
      { name: 'Siddharth Patil', role: 'Full Stack Architect', image: photo('1507003211169-0a1dd7228f2d', 500), tags: ['Next.js', 'Node.js', 'React'] },
      { name: 'Neha Shinde', role: 'Cloud & DevOps Lead', image: photo('1517841905240-472988babdf9', 500), tags: ['AWS', 'Docker', 'CI/CD'] },
      { name: 'Aryan Gupta', role: 'AI & Data Specialist', image: photo('1506794778202-cad84cf45f1d', 500), tags: ['Machine Learning', 'Python'] },
      { name: 'Isha Merchant', role: 'Web Platform Engineer', image: photo('1524504388940-b1c1722653e1', 500), tags: ['TypeScript', 'Three.js'] },
      { name: 'Omkar Jadhav', role: 'Security & Systems', image: photo('1500648767791-00dcc994a43e', 500), tags: ['Cyber', 'Networks'] },
    ],
  },
  {
    id: 'creativity-head',
    title: 'Creativity Head',
    subtitle: 'Sanya Kapoor · Creative & UX',
    src: photo('1517841905240-472988babdf9', 900),
    alt: 'Sanya Kapoor — Creativity Head',
    headName: 'Sanya Kapoor',
    headRole: 'Creativity Head',
    handle: '@sanya.creative',
    code: 'ITSA-2026-CREAT',
    division: 'Creative Division',
    focus: 'Visual identity, experience design, motion design, fest branding, and UI design systems.',
    members: [
      { name: 'Harsh Vardhan', role: 'UI / UX Lead', image: photo('1519085360753-af0119f7cbe7', 500), tags: ['Figma', 'Design Systems'] },
      { name: 'Pooja More', role: 'Motion & 3D Artist', image: photo('1534528741775-53994a69daeb', 500), tags: ['After Effects', 'Spline'] },
      { name: 'Devansh Shah', role: 'Visual Identity Lead', image: photo('1492562080023-ab3db95bfbce', 500), tags: ['Brand Book', 'Posters'] },
      { name: 'Riddhi Sawant', role: 'Digital Illustrator', image: photo('1494790108377-be9c29b29330', 500), tags: ['Vector Art', 'Concepts'] },
    ],
  },
  {
    id: 'infra-head',
    title: 'Infra Head',
    subtitle: 'Yash Kadam · Operations & Stage',
    src: photo('1506794778202-cad84cf45f1d', 900),
    alt: 'Yash Kadam — Infra Head',
    headName: 'Yash Kadam',
    headRole: 'Infra Head',
    handle: '@yash.infra',
    code: 'ITSA-2026-INFRA',
    division: 'Infrastructure Division',
    focus: 'Event setup, staging architecture, networking hardware, lab administration, and AV rigging.',
    members: [
      { name: 'Prathamesh Mane', role: 'Hardware & Rigging', image: photo('1507003211169-0a1dd7228f2d', 500), tags: ['Hardware', 'Rigs'] },
      { name: 'Sanket Bhosale', role: 'Network Operations', image: photo('1500648767791-00dcc994a43e', 500), tags: ['Switches', 'Wi-Fi Hubs'] },
      { name: 'Akash Shirodkar', role: 'Venue & Logistics Lead', image: photo('1522075469751-3a6694fb2f61', 500), tags: ['Venue Plan', 'Security'] },
      { name: 'Gautam Pillai', role: 'AV Engineer', image: photo('1492562080023-ab3db95bfbce', 500), tags: ['Acoustics', 'Displays'] },
    ],
  },
  {
    id: 'social-media-head',
    title: 'Social Media Head',
    subtitle: 'Anushka Chawla · Digital Media',
    src: photo('1524504388940-b1c1722653e1', 900),
    alt: 'Anushka Chawla — Social Media Head',
    headName: 'Anushka Chawla',
    headRole: 'Social Media Head',
    handle: '@anushka.social',
    code: 'ITSA-2026-SOC',
    division: 'Social & Media Division',
    focus: 'Short-form content, campus reels, YouTube broadcasts, digital community building, and campaign momentum.',
    members: [
      { name: 'Dhruv Jain', role: 'Reels & Video Producer', image: photo('1519085360753-af0119f7cbe7', 500), tags: ['Premiere', 'Reels', 'Editing'] },
      { name: 'Shruti Tambe', role: 'Content Strategist', image: photo('1539571696357-5a69c17a67c6', 500), tags: ['Copywriting', 'Campaigns'] },
      { name: 'Manav Saxena', role: 'Community Manager', image: photo('1507003211169-0a1dd7228f2d', 500), tags: ['Instagram', 'LinkedIn'] },
      { name: 'Tanmayee Ghorpade', role: 'Creative Storyteller', image: photo('1494790108377-be9c29b29330', 500), tags: ['Broadcasts', 'Stories'] },
    ],
  },
  {
    id: 'publicity-head',
    title: 'Publicity Head',
    subtitle: 'Rishi Malhotra · PR & Outreach',
    src: photo('1492562080023-ab3db95bfbce', 900),
    alt: 'Rishi Malhotra — Publicity Head',
    headName: 'Rishi Malhotra',
    headRole: 'Publicity Head',
    handle: '@rishi.pr',
    code: 'ITSA-2026-PUB',
    division: 'Publicity Division',
    focus: 'Class-to-class campaigning, inter-collegiate PR, sponsor negotiations, and promotional tour operations.',
    members: [
      { name: 'Bhavya Trivedi', role: 'Outreach Coordinator', image: photo('1500648767791-00dcc994a43e', 500), tags: ['Campus Tours', 'PR'] },
      { name: 'Simran Sethi', role: 'Sponsorship Executive', image: photo('1534528741775-53994a69daeb', 500), tags: ['Sponsors', 'Pitching'] },
      { name: 'Karan Bhatia', role: 'College Liaison', image: photo('1506794778202-cad84cf45f1d', 500), tags: ['Inter-College', 'Media'] },
      { name: 'Zoya Mirza', role: 'Ambassador Program Lead', image: photo('1517841905240-472988babdf9', 500), tags: ['Ambassadors', 'Leads'] },
    ],
  },
  {
    id: 'documentation-head',
    title: 'Documentation Head',
    subtitle: 'Mihir Date · Editorial & Records',
    src: photo('1539571696357-5a69c17a67c6', 900),
    alt: 'Mihir Date — Documentation Head',
    headName: 'Mihir Date',
    headRole: 'Documentation Head',
    handle: '@mihir.docs',
    code: 'ITSA-2026-DOC',
    division: 'Documentation Division',
    focus: 'Technical journals, annual event logs, committee reports, speech drafting, and accreditation dossiers.',
    members: [
      { name: 'Avani Parab', role: 'Chief Editor', image: photo('1494790108377-be9c29b29330', 500), tags: ['Editing', 'Publications'] },
      { name: 'Soham Deshpande', role: 'Technical Scribe', image: photo('1519085360753-af0119f7cbe7', 500), tags: ['Tech Specs', 'Reports'] },
      { name: 'Nandini Joshi', role: 'Archivist & Photo Lead', image: photo('1524504388940-b1c1722653e1', 500), tags: ['Archives', 'Metadata'] },
      { name: 'Rahul Khedekar', role: 'Annual Dossier Lead', image: photo('1507003211169-0a1dd7228f2d', 500), tags: ['Accreditation', 'Logs'] },
    ],
  },
];

export const BODIES = [
  {
    name: 'ITSA',
    logo: 'https://res.cloudinary.com/dexndlfut/image/upload/v1792091134/2a56216f-fb41-479f-8b8c-1d900ebe7f60.jpg',
    alt: 'ITSA logo',
  },
  {
    name: 'CSI',
    logo: '/csi-logo.jpg',
    alt: 'CSI logo',
  },
  {
    name: 'ISTE',
    logo: 'https://res.cloudinary.com/dexndlfut/image/upload/v1792083326/OIP.webp',
    alt: 'ISTE logo',
  },
  {
    name: 'IEEE',
    logo: 'https://res.cloudinary.com/dexndlfut/image/upload/v1792083882/IEEE-LOGO-300x250.png',
    alt: 'IEEE logo',
  },
];

export const GALLERY = [
  { tag: 'BUILD / 01', caption: 'Ideas become prototypes', image: IMAGES.collab },
  { tag: 'WORKSHOP / 02', caption: 'Learning in public', image: IMAGES.workshop },
  { tag: 'CODE / 03', caption: 'Deep in the build', image: IMAGES.code },
  { tag: 'EVENT / 04', caption: 'Competition energy', image: IMAGES.event },
  { tag: 'COMMUNITY / 05', caption: 'Together by design', image: IMAGES.community },
];

export const FAQS = [
  {
    q: 'What is ITSA?',
    a: "ITSA stands for Information Technology Student Association. It is the official departmental student council representing Information Technology engineering students at Vasantdada Patil Pratishthan's College of Engineering and Visual Arts (VPPCOEVA), Sion, Mumbai.",
  },
  {
    q: 'What is Techgyanathon organized by ITSA?',
    a: 'Techgyanathon is the flagship annual national technical festival hosted by ITSA VPPCOEVA. It features 48-hour hackathons, competitive coding tournaments, tech project arenas, robotics showcases, and workshops with attractive prize pools.',
  },
  {
    q: 'What is the official website of ITSA VPPCOE?',
    a: 'The official portal is https://itsa-xi.vercel.app/. Students and visitors can access event registrations, technical workshops, leadership councils, project showcases, and community contact info.',
  },
  {
    q: 'Where is ITSA located?',
    a: "ITSA operates from the Department of Information Technology at VPPCOEVA Campus, Eastern Express Highway, Near Everard Nagar, Chunabhatti, Sion, Mumbai, Maharashtra 400022.",
  },
  {
    q: 'What initiatives and workshops does ITSA organize?',
    a: 'ITSA regularly conducts practical bootcamps in Artificial Intelligence, Full-Stack Web Development, Cloud Computing, Cyber Security, Competitive Programming, and Industry Mentorship sessions.',
  },
  {
    q: 'How can students join or contact ITSA?',
    a: 'Students can reach out via email at techgyanathon@pvppcoe.ac.in, connect through Instagram @itsa_vppcoe, or visit the official web portal at https://itsa-xi.vercel.app/.',
  },
];
