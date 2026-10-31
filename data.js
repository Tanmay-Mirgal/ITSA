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
    image: "https://res.cloudinary.com/dexndlfut/image/upload/v1793454979/Techgyanathon_2026.webp",
  },
  {
    name: 'Querry Jaal',
    date: '26th Sep',
    kicker: '2025 / Technical Programme',
    blurb: 'Hands-on learning designed around practical technology.',
    image: "https://res.cloudinary.com/dexndlfut/image/upload/v1793455091/QueryJaal.webp"
  },
  {
    name: 'Competitions',
    date: 'Upcoming',
    kicker: '2026 / Student Challenges',
    blurb: 'Built to test ideas, teamwork and technical thinking.',
    image: "https://res.cloudinary.com/dexndlfut/image/upload/v1793455772/Poster_Presentation.png",
  },
  {
    name: 'Himachal IV',
    date: '26th Dec - 5th Jan',
    kicker: 'IV',
    blurb: 'A 10-day immersive journey through the heart of Himachal Pradesh, blending education, culture, and adventure.',
    image: "https://res.cloudinary.com/dexndlfut/image/upload/v1793455838/iv.png",
  },
];

// Faculty Leadership data — Head of Department & Faculty Coordinator
// Institutional academic guidance and leadership for ITSA
export const FACULTY_LEADERSHIP = {
  meta: '02 / FACULTY LEADERSHIP',
  heading: 'THE PEOPLE BEHIND THE DIRECTION.',
  intro: 'ITSA is student-driven, guided by experienced departmental faculty leadership.',
  visionStatement: 'Faculty mentorship connects academic learning with practical technology, leadership, innovation and professional growth.',
  members: [
    {
      id: 'hod',
      index: '01',
      role: 'HOD',
      roleTag: 'PRIMARY LEADERSHIP',
      roleFull: 'Head of Department',
      name: 'Dr. Pradip Suresh Mane',
      shortName: 'Dr. Pradip S. Mane',
      designation: 'HOD — Department of Information Technology',
      academicDesignation: 'Associate Professor',
      department: 'Department of Information Technology',
      departmentShort: 'Information Technology',
      institution: "Vasantdada Patil Pratishthan's College of Engineering and Visual Arts (VPPCOE & VA), Mumbai",
      institutionShort: 'VPPCOEVA · SION, MUMBAI',
      image: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793453225/WhatsApp_Image_2026-10-31_at_6.52.45_PM.jpg',
      alt: 'Dr. Pradip Suresh Mane — HOD & Associate Professor, Department of Information Technology',
      experience: '10 years',
      experienceFull: '10 years of academic experience',
      intro: "Dr. Pradip Suresh Mane is an Associate Professor in the Department of Information Technology at Vasantdada Patil Pratishthan's College of Engineering and Visual Arts (VPPCOE & VA), Mumbai. He has 10 years of academic experience and specializes in Data Science, Machine Learning, Big Data Analytics, DBMS, Web Mining, and IoT.",
      specialisations: [
        'Data Science',
        'Machine Learning',
        'Big Data Analytics',
        'DBMS',
        'Web Mining',
        'IoT',
      ],
      sections: [
        {
          id: 'intro',
          title: 'Introduction',
          content: "Dr. Pradip Suresh Mane is an Associate Professor in the Department of Information Technology at Vasantdada Patil Pratishthan's College of Engineering and Visual Arts (VPPCOE & VA), Mumbai. He has 10 years of academic experience and specializes in Data Science, Machine Learning, Big Data Analytics, DBMS, Web Mining, and IoT.",
        },
        {
          id: 'specialisation',
          title: 'Research Specialisation',
          type: 'tags',
          tags: [
            'Data Science',
            'Machine Learning',
            'Big Data Analytics',
            'DBMS',
            'Web Mining',
            'IoT',
          ],
          content: 'Active research and specialization across core computing domains: Data Science, Machine Learning, Big Data Analytics, DBMS, Web Mining, and IoT.',
        },
        {
          id: 'experience',
          title: 'Professional Experience',
          content: '10 years of academic, research, and departmental leadership experience in the Department of Information Technology, VPPCOE & VA, Mumbai.',
        },
        {
          id: 'education',
          title: 'Education',
          content: 'Doctoral (Ph.D.) and Postgraduate academic credentials in Information Technology & Computer Engineering.',
        },
        {
          id: 'teaching',
          title: 'Courses / Subjects Teaching',
          content: 'Data Science, Machine Learning, Database Management Systems, Big Data Analytics, and Advanced Data Technologies.',
        },
        {
          id: 'sttp',
          title: 'STTP / FDP',
          content: 'Participation in and organization of Short Term Training Programmes (STTP) and Faculty Development Programmes (FDP) in emerging AI and computing fields.',
        },
        {
          id: 'publications',
          title: 'Research Publications',
          content: 'Scholarly publications in peer-reviewed national & international journals and academic conferences.',
        },
      ],
    },
    {
      id: 'coordinator',
      index: '02',
      role: 'PROFESSOR COORDINATOR',
      roleTag: 'ACADEMIC COORDINATION',
      roleFull: 'Professor Coordinator — ITSA',
      name: 'Ms. Priyanka S. Manke',
      shortName: 'Ms. Priyanka S. Manke',
      designation: 'Professor Coordinator — ITSA',
      academicDesignation: 'Assistant Professor',
      department: 'Department of Information Technology',
      departmentShort: 'Information Technology',
      institution: "Vasantdada Patil Pratishthan's College of Engineering and Visual Arts (VPPCOE & VA), Mumbai",
      institutionShort: 'VPPCOEVA · SION, MUMBAI',
      image: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793453224/WhatsApp_Image_2026-10-31_at_6.53.02_PM.jpg',
      alt: 'Ms. Priyanka S. Manke — Professor Coordinator & Assistant Professor, Department of Information Technology',
      experience: 'Over 7 years',
      experienceFull: 'Over 7 years of teaching, research, and administrative experience',
      intro: "Ms. Priyanka S. Manke is an Assistant Professor in the Department of Information Technology at Vasantdada Patil Pratishthan's College of Engineering & Visual Arts, Mumbai. She has over 7 years of teaching, research, and administrative experience and is recognized for her academic excellence and commitment to quality education.",
      specialisations: [
        'Information Technology',
        'Academic Coordination',
        'Technical Mentorship',
        'Engineering Education',
      ],
      sections: [
        {
          id: 'intro',
          title: 'Introduction',
          content: "Ms. Priyanka S. Manke is an Assistant Professor in the Department of Information Technology at Vasantdada Patil Pratishthan's College of Engineering & Visual Arts, Mumbai. She has over 7 years of teaching, research, and administrative experience and is recognized for her academic excellence and commitment to quality education.",
        },
        {
          id: 'experience',
          title: 'Professional Experience',
          content: 'Over 7 years of teaching, research, and administrative experience in Information Technology, recognized for academic excellence and dedication to student mentorship.',
        },
        {
          id: 'education',
          title: 'Education',
          content: 'Postgraduate and Undergraduate degrees in Information Technology and Computer Engineering.',
        },
        {
          id: 'specialisation',
          title: 'Research Specialisation',
          type: 'tags',
          tags: [
            'Information Technology',
            'Applied Computing',
            'Software Systems',
            'Engineering Pedagogy',
          ],
          content: 'Research and academic focus in Information Technology applications, computing systems, and technical education methodologies.',
        },
        {
          id: 'teaching',
          title: 'Courses / Subjects Teaching',
          content: 'Undergraduate Information Technology courses, laboratory sessions, technical project guidance, and continuous academic assessment.',
        },
        {
          id: 'sttp',
          title: 'STTP / FDP',
          content: 'Active participation in Faculty Development Programmes, technical workshops, and higher education pedagogical trainings.',
        },
        {
          id: 'publications',
          title: 'Research Publications',
          content: 'Research contributions and papers presented in national and international engineering conferences and proceedings.',
        },
      ],
    },
  ],
};

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

// Core Team cards for the ITSA circular carousel and interactive Lanyard modals.
export const TEAM_CARDS = [
  {
    id: 'anurag-dharmadhikari',
    name: 'Anurag Dharmadhikari',
    role: 'President',
    designation: 'President',
    title: 'Anurag Dharmadhikari',
    subtitle: 'President',
    src: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381967/2.png',
    image: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381967/2.png',
    alt: 'Anurag Dharmadhikari — President',
    headName: 'Anurag Dharmadhikari',
    headRole: 'President',
    handle: '@anurag.dharmadhikari',
    code: 'ITSA-2026-PRES',
    division: 'Executive Council',
    focus: 'Overall governance, institutional leadership, strategic roadmap, and student representation across all technical initiatives.',
  },
  {
    id: 'avanish-kamble',
    name: 'Avanish Kamble',
    role: 'Vice President',
    designation: 'Vice President',
    title: 'Avanish Kamble',
    subtitle: 'Vice President',
    src: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381967/3.png',
    image: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381967/3.png',
    alt: 'Avanish Kamble — Vice President',
    headName: 'Avanish Kamble',
    headRole: 'Vice President',
    handle: '@avanish.kamble',
    code: 'ITSA-2026-VP',
    division: 'Executive Council',
    focus: 'Operational execution, inter-department synergy, resource management, and annual programme roadmap.',
  },
  {
    id: 'atharva-borate',
    name: 'Atharva Borate',
    role: 'General Secretary',
    designation: 'General Secretary',
    title: 'Atharva Borate',
    subtitle: 'General Secretary',
    src: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381967/4.png',
    image: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381967/4.png',
    alt: 'Atharva Borate — General Secretary',
    headName: 'Atharva Borate',
    headRole: 'General Secretary',
    handle: '@atharva.borate',
    code: 'ITSA-2026-GS',
    division: 'Secretariat',
    focus: 'Official communications, meeting protocols, institutional compliance, and archival oversight.',
  },
  {
    id: 'aditya-ambure',
    name: 'Aditya Ambure',
    role: 'Treasurer & Documentation',
    designation: 'Treasurer & Documentation',
    title: 'Aditya Ambure',
    subtitle: 'Treasurer & Documentation',
    src: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381967/6.png',
    image: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381967/6.png',
    alt: 'Aditya Ambure — Treasurer & Documentation',
    headName: 'Aditya Ambure',
    headRole: 'Treasurer & Documentation',
    handle: '@aditya.ambure',
    code: 'ITSA-2026-TREAS-DOC',
    division: 'Finance & Documentation',
    focus: 'Financial administration, budget allocation, institutional documentation, and official records management.',
  },
  {
    id: 'sairaj-sakpal',
    name: 'Sairaj Sakpal',
    role: 'Publicity Head',
    designation: 'Publicity Head',
    title: 'Sairaj Sakpal',
    subtitle: 'Publicity Head',
    src: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381969/10.png',
    image: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381969/10.png',
    alt: 'Sairaj Sakpal — Publicity Head',
    headName: 'Sairaj Sakpal',
    headRole: 'Publicity Head',
    handle: '@sairaj.sakpal',
    code: 'ITSA-2026-PUB',
    division: 'Publicity & Outreach',
    focus: 'Classroom campaigning, inter-collegiate outreach, campus visibility, and event publicity drives.',
  },
  {
    id: 'shruti-ozarkar',
    name: 'Shruti Ozarkar',
    role: 'Ladies Representative',
    designation: 'Ladies Representative',
    title: 'Shruti Ozarkar',
    subtitle: 'Ladies Representative',
    src: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381969/11.png',
    image: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381969/11.png',
    alt: 'Shruti Ozarkar — Ladies Representative',
    headName: 'Shruti Ozarkar',
    headRole: 'Ladies Representative',
    handle: '@shruti.ozarkar',
    code: 'ITSA-2026-LR',
    division: 'Student Welfare',
    focus: 'Student advocacy, department representation, inclusive community initiatives, and peer mentorship.',
  },
  {
    id: 'atharva-dicholkar',
    name: 'Atharva Dicholkar',
    role: 'Mentor',
    designation: 'Mentor',
    title: 'Atharva Dicholkar',
    subtitle: 'Mentor',
    src: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381967/7.png',
    image: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381967/7.png',
    alt: 'Atharva Dicholkar — Mentor',
    headName: 'Atharva Dicholkar',
    headRole: 'Mentor',
    handle: '@atharva.dicholkar',
    code: 'ITSA-2026-MENTOR-1',
    division: 'Advisory Council',
    focus: 'Senior technical mentorship, architectural guidance, project incubation, and student advisory.',
  },
  {
    id: 'om-kandalgaonkar',
    name: 'Om Kandalgaonkar',
    role: 'Mentor',
    designation: 'Mentor',
    title: 'Om Kandalgaonkar',
    subtitle: 'Mentor',
    src: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381968/8.png',
    image: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381968/8.png',
    alt: 'Om Kandalgaonkar — Mentor',
    headName: 'Om Kandalgaonkar',
    headRole: 'Mentor',
    handle: '@om.kandalgaonkar',
    code: 'ITSA-2026-MENTOR-2',
    division: 'Advisory Council',
    focus: 'Executive mentorship, hackathon strategy, workshop coordination, and operational guidance.',
  },
  {
    id: 'anuska-patil',
    name: 'Anuska Patil',
    role: 'Creative Head',
    designation: 'Creative Head',
    title: 'Anuska Patil',
    subtitle: 'Creative Head',
    src: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381969/12.png',
    image: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381969/12.png',
    alt: 'Anuska Patil — Creative Head',
    headName: 'Anuska Patil',
    headRole: 'Creative Head',
    handle: '@anuska.patil',
    code: 'ITSA-2026-CREAT-1',
    division: 'Creative & Design',
    focus: 'Visual identity, creative campaign concepts, motion graphics, and brand design systems.',
  },
  {
    id: 'varsha-patil',
    name: 'Varsha Patil',
    role: 'Creative Head',
    designation: 'Creative Head',
    title: 'Varsha Patil',
    subtitle: 'Creative Head',
    src: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381970/13.png',
    image: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381970/13.png',
    alt: 'Varsha Patil — Creative Head',
    headName: 'Varsha Patil',
    headRole: 'Creative Head',
    handle: '@varsha.patil',
    code: 'ITSA-2026-CREAT-2',
    division: 'Creative & Design',
    focus: 'Event aesthetic design, experience staging, visual media, and promotional design collateral.',
  },
  {
    id: 'kartik-vengurlekar',
    name: 'Kartik Vengurlekar',
    role: 'Social Media Head',
    designation: 'Social Media Head',
    title: 'Kartik Vengurlekar',
    subtitle: 'Social Media Head',
    src: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381969/9.png',
    image: 'https://res.cloudinary.com/dexndlfut/image/upload/v1793381969/9.png',
    alt: 'Kartik Vengurlekar — Social Media Head',
    headName: 'Kartik Vengurlekar',
    headRole: 'Social Media Head',
    handle: '@kartik.vengurlekar',
    code: 'ITSA-2026-SOC',
    division: 'Digital Media',
    focus: 'Digital community engagement, short-form content creation, reel production, and online brand presence.',
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
  {
    index: '01',
    tag: 'ARCHIVE / 01',
    caption: 'ITSA Gallery Image 01',
    alt: 'ITSA Gallery Image 01',
    src: 'https://res.cloudinary.com/dexndlfut/image/upload/f_auto,q_auto/v1793456732/IMG_6042.jpg',
    image: 'https://res.cloudinary.com/dexndlfut/image/upload/f_auto,q_auto/v1793456732/IMG_6042.jpg',
  },
  {
    index: '02',
    tag: 'ARCHIVE / 02',
    caption: 'ITSA Gallery Image 02',
    alt: 'ITSA Gallery Image 02',
    src: 'https://res.cloudinary.com/dexndlfut/image/upload/f_auto,q_auto/v1793456730/IMG_6055.jpg',
    image: 'https://res.cloudinary.com/dexndlfut/image/upload/f_auto,q_auto/v1793456730/IMG_6055.jpg',
  },
  {
    index: '03',
    tag: 'ARCHIVE / 03',
    caption: 'ITSA Gallery Image 03',
    alt: 'ITSA Gallery Image 03',
    src: 'https://res.cloudinary.com/dexndlfut/image/upload/f_auto,q_auto/v1793456729/IMG_6820.jpg',
    image: 'https://res.cloudinary.com/dexndlfut/image/upload/f_auto,q_auto/v1793456729/IMG_6820.jpg',
  },
  {
    index: '04',
    tag: 'ARCHIVE / 04',
    caption: 'ITSA Gallery Image 04',
    alt: 'ITSA Gallery Image 04',
    src: 'https://res.cloudinary.com/dexndlfut/image/upload/f_auto,q_auto/v1793456729/IMG_6045.jpg',
    image: 'https://res.cloudinary.com/dexndlfut/image/upload/f_auto,q_auto/v1793456729/IMG_6045.jpg',
  },
  {
    index: '05',
    tag: 'ARCHIVE / 05',
    caption: 'ITSA Gallery Image 05',
    alt: 'ITSA Gallery Image 05',
    src: 'https://res.cloudinary.com/dexndlfut/image/upload/f_auto,q_auto/v1793456728/IMG_5974.jpg',
    image: 'https://res.cloudinary.com/dexndlfut/image/upload/f_auto,q_auto/v1793456728/IMG_5974.jpg',
  },
  {
    index: '06',
    tag: 'ARCHIVE / 06',
    caption: 'ITSA Gallery Image 06',
    alt: 'ITSA Gallery Image 06',
    src: 'https://res.cloudinary.com/dexndlfut/image/upload/f_auto,q_auto/v1793456726/IMG_6822.jpg',
    image: 'https://res.cloudinary.com/dexndlfut/image/upload/f_auto,q_auto/v1793456726/IMG_6822.jpg',
  },
  {
    index: '07',
    tag: 'ARCHIVE / 07',
    caption: 'ITSA Gallery Image 07',
    alt: 'ITSA Gallery Image 07',
    src: 'https://res.cloudinary.com/dexndlfut/image/upload/f_auto,q_auto/v1793456726/IMG_6043.jpg',
    image: 'https://res.cloudinary.com/dexndlfut/image/upload/f_auto,q_auto/v1793456726/IMG_6043.jpg',
  },
  {
    index: '08',
    tag: 'ARCHIVE / 08',
    caption: 'ITSA Gallery Image 08',
    alt: 'ITSA Gallery Image 08',
    src: 'https://res.cloudinary.com/dexndlfut/image/upload/f_auto,q_auto/v1793456725/IMG_5989.jpg',
    image: 'https://res.cloudinary.com/dexndlfut/image/upload/f_auto,q_auto/v1793456725/IMG_5989.jpg',
  },
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
