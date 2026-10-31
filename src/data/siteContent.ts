export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  detail: string;
  tags: string[];
  outcomes: string[];
  process: string[];
  relatedProjects: string[];
};

export const services: Service[] = [
  {
    slug: 'social-media-management',
    number: '01',
    title: 'Social Media Management',
    shortTitle: 'Social Media Management',
    description: 'Build a brand people remember with content, community, and campaigns that keep your audience engaged.',
    detail: 'Your social channels should feel like a living extension of your brand. We create a clear content system, produce platform-ready creative, and use performance insight to turn attention into lasting community.',
    tags: ['Content strategy', 'Community growth', 'Analytics'],
    outcomes: ['A consistent and recognisable brand voice', 'Content that earns attention and conversation', 'Clear reporting tied to meaningful growth'],
    process: ['Discover your audience and point of view', 'Plan a flexible monthly content system', 'Create, publish, engage, and optimise'],
    relatedProjects: ['verdikt-studios', 'sacred-qalam'],
  },
  {
    slug: 'growth-marketing',
    number: '02',
    title: 'Growth Marketing',
    shortTitle: 'Growth Marketing',
    description: 'Turn attention into action with focused campaigns built around your audience and your goals for maximum ROI.',
    detail: 'We connect strategy, creative, SEO, paid media, and conversion thinking into one growth engine. Every campaign is designed to learn quickly and improve the path from first click to loyal customer.',
    tags: ['SEO & GEO', 'Paid media', 'Conversion'],
    outcomes: ['A sharper position in crowded markets', 'More qualified traffic and opportunities', 'Campaign decisions backed by useful data'],
    process: ['Define your growth goals and baseline', 'Build the right channel and message mix', 'Test, measure, and scale what works'],
    relatedProjects: ['wiktoria-nutrition', 'avera-travel', 'cogen-thc', 'amark-logistics'],
  },
  {
    slug: 'web-design-development',
    number: '03',
    title: 'Web Design & Development',
    shortTitle: 'Web Design & Development',
    description: 'Make a lasting first impression with a fast, intuitive website designed to move your business forward.',
    detail: 'We design and build digital experiences that make complex businesses easy to understand. From the first wireframe to a polished, scalable build, every decision balances brand, usability, speed, and conversion.',
    tags: ['Creative design', 'Full-stack development', 'CMS'],
    outcomes: ['A clearer story for your customers', 'Fast, accessible, responsive experiences', 'A foundation that your team can grow with'],
    process: ['Shape the content, structure, and user journeys', 'Design a distinctive visual system', 'Build, test, launch, and keep improving'],
    relatedProjects: ['igo-above', 'london-plant-maintenance', 'edge-pro-roofing', 'a2z-finance-protection', 'uc-homes', 'bani-jewellers'],
  },
  {
    slug: 'ai-automations',
    number: '04',
    title: 'AI Automations',
    shortTitle: 'AI Automations',
    description: 'Give your team more room to think by connecting tools and automating repetitive work that slows you down.',
    detail: 'The best automation is practical, secure, and quietly useful. We identify high-friction workflows, design intelligent systems around your team, and connect the tools you already use so work moves forward with less effort.',
    tags: ['AI agents', 'Workflow design', 'Integrations'],
    outcomes: ['Less manual work and fewer handoff delays', 'Smarter internal workflows', 'Automation your team can trust and manage'],
    process: ['Map the work and find the highest-value opportunities', 'Prototype the right AI or automation layer', 'Integrate, train, monitor, and refine'],
    relatedProjects: ['cs750', 'truston-finance', 'ready2sell-homes'],
  },
  {
    slug: 'mobile-app-development',
    number: '05',
    title: 'Mobile App Development',
    shortTitle: 'Mobile App Development',
    description: 'From a first sketch to the app store, we create useful mobile experiences people love to use every day.',
    detail: 'We turn product ideas into reliable mobile experiences with thoughtful UX, robust engineering, and a launch plan built around real users. Your app is designed to be useful on day one and ready to evolve.',
    tags: ['iOS & Android', 'UX/UI design', 'Scalable backend'],
    outcomes: ['A product experience users understand quickly', 'Reliable performance across devices', 'A roadmap for continuous product improvement'],
    process: ['Validate the idea and prioritise the first release', 'Prototype the experience and test it early', 'Build, launch, learn, and iterate'],
    relatedProjects: ['rcf-inc', 'capraxis'],
  },
];

export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  description: string;
  url: string;
  image: string;
  service: string;
  imageBackground?: string;
};

export function getProjectScreenshot(url: string) {
  const localScreenshots: Record<string, string> = {
    'https://igoabove.com/': '/portfolio-screenshots/igo-above.gif',
    'https://londonplantmaintenance.co.uk/': '/portfolio-screenshots/london-plant-maintenance.gif',
    'https://edgeproroofing.com/': '/portfolio-screenshots/edge-pro-roofing.gif',
    'https://a2zfinanceprotection.co.uk/': '/portfolio-screenshots/a2z-finance-protection.gif',
    'https://uc-homes.co.uk/': '/portfolio-screenshots/uc-homes.gif',
    'https://cs750.com/': '/portfolio-screenshots/cs750.gif',
    'https://dekinderenauto.nl/': '/portfolio-screenshots/de-kinderen-auto.gif',
    'https://wiktorianutrition.co.uk/': '/portfolio-screenshots/wiktoria-nutrition.gif',
    'https://nomacounseling.com/': '/portfolio-screenshots/noma-counseling.gif',
    'https://renuwoundcare.com/': '/portfolio-screenshots/renu-wound-care.gif',
    'https://averatravel.com/': '/portfolio-screenshots/avera-travel.gif',
    'https://verdiktstudios.com/': '/portfolio-screenshots/verdikt-studios.gif',
    'https://banijewellers.com/': '/portfolio-screenshots/bani-jewellers.gif',
    'https://trustonfinance.nl/': '/portfolio-screenshots/truston-finance.gif',
    'https://cogenthc.com/': '/portfolio-screenshots/cogen-thc.gif',
    'https://stellalegalsolutions.com/': '/portfolio-screenshots/stella-legal-solutions.gif',
    'http://capraxis.com/': '/portfolio-screenshots/capraxis.gif',
    'https://www.warmwalksinc.com/': '/portfolio-screenshots/warm-walks.gif',
    'https://todlelegal.com/': '/portfolio-screenshots/todle-legal.gif',
    'https://rcfinc.org/': '/portfolio-screenshots/rcf-inc.gif',
    'https://sacredqalam.com/': '/portfolio-screenshots/sacred-qalam.gif',
    'https://amarklogistics.com/': '/portfolio-screenshots/amark-logistics.gif',
    'https://chanceladyscoffee.com/': '/portfolio-screenshots/chanceladys-coffee.gif',
    'https://spokenfree.com/': '/client-logos/spoken-free-hires.png',
  };
  return localScreenshots[url] ?? `https://image.thum.io/get/width/1400/crop/850/${url}`;
}

export const portfolioProjects: PortfolioProject[] = [
  { slug: 'igo-above', name: 'Above & Beyond Clean', category: 'Property services', description: 'A conversion-focused service website for a professional cleaning, landscaping, and property care company.', url: 'https://igoabove.com/', image: '/client-logos/igoabove-hires.png', service: 'Web design & development' },
  { slug: 'london-plant-maintenance', name: 'London Plant Maintenance', category: 'Commercial plant care', description: 'A polished digital presence for London workspace plant rental, installation, and maintenance services.', url: 'https://londonplantmaintenance.co.uk/', image: '/client-logos/londonplantmaintenance.png', service: 'Web design & development' },
  { slug: 'edge-pro-roofing', name: 'Edge Pro Roofing', category: 'Roofing & sheet metal', description: 'A trust-led website communicating craftsmanship, roofing expertise, and reliable residential and commercial services.', url: 'https://edgeproroofing.com/', image: '/client-logos/edgepro-roofing.png', service: 'Web design & development' },
  { slug: 'a2z-finance-protection', name: 'A2Z Finance & Protection', category: 'Mortgage & finance', description: 'A clear lead-generation experience that helps homebuyers find mortgage, protection, and finance guidance.', url: 'https://a2zfinanceprotection.co.uk/', image: '/client-logos/a2z-finance-protection-hires.png', service: 'Web design & development' },
  { slug: 'uc-homes', name: 'UC-Homes UK', category: 'Residential construction', description: 'A project management and lead-generation portal designed for premium residential construction.', url: 'https://uc-homes.co.uk/', image: '/client-logos/uc-homes.png', service: 'Web design & development' },
  { slug: 'cs750', name: 'CS750', category: 'Luxury membership', description: 'An exclusive digital experience for premium lifestyle access, private deals, travel, and concierge services.', url: 'https://cs750.com/', image: '/logo.png', service: 'AI & automation', imageBackground: '#06143b' },
  { slug: 'de-kinderen-auto', name: 'De Kinderen Auto', category: 'Automotive', description: 'A confident, high-trust digital experience for a specialist automotive business.', url: 'https://dekinderenauto.nl/', image: '/client-logos/dekinderen-auto-hires.png', service: 'Web design & development' },
  { slug: 'wiktoria-nutrition', name: 'Wiktoria Nutrition', category: 'Nutrition & wellbeing', description: 'An approachable online nutrition platform supporting blood sugar, gut health, and sustainable lifestyle change.', url: 'https://wiktorianutrition.co.uk/', image: '/client-logos/wiktoria-nutrition-hires.png', service: 'Growth marketing' },
  { slug: 'noma-counseling', name: 'Noma Counseling', category: 'Mental health', description: 'A gentle, human-centred website for counselling through transition, loss, identity, and becoming.', url: 'https://nomacounseling.com/', image: '/client-logos/noma-counseling-hires.png', service: 'Web design & development' },
  { slug: 'renu-wound-care', name: 'ReNu Wound Solutions', category: 'Mobile healthcare', description: 'A patient-first mobile wound care website built around trust, accessibility, and appointment conversion.', url: 'https://renuwoundcare.com/', image: '/client-logos/renu-wound-care-hires.png', service: 'Mobile app development' },
  { slug: 'avera-travel', name: 'Avera Travel', category: 'Travel planning', description: 'A refined travel planning experience for personalised itineraries, destination expertise, and ongoing support.', url: 'https://averatravel.com/', image: '/client-logos/avera-travel.png', service: 'Growth marketing' },
  { slug: 'verdikt-studios', name: 'Verdikt Studios', category: 'Music & artist growth', description: 'A bold platform for artist promotion, media campaigns, live opportunities, and strategic growth.', url: 'https://verdiktstudios.com/', image: '/logo.png', service: 'Social media & content', imageBackground: '#06143b' },
  { slug: 'bani-jewellers', name: 'Bani Jewellers', category: 'eCommerce jewellery', description: 'An eCommerce storefront presenting gold, diamond, bridal, men’s, and baby jewellery collections.', url: 'https://banijewellers.com/', image: '/client-logos/bani-jewellers.png', service: 'Web design & development' },
  { slug: 'truston-finance', name: 'Truston Finance & Advisory', category: 'Finance & accounting', description: 'A clear advisory platform for bookkeeping, tax advice, international structures, and business growth.', url: 'https://trustonfinance.nl/', image: '/client-logos/truston-finance-hires.png', service: 'AI & automation' },
  { slug: 'cogen-thc', name: 'Cogen THC', category: 'Specialist business', description: 'A focused brand experience designed to make a specialist service easier to understand and enquire about.', url: 'https://cogenthc.com/', image: '/client-logos/cogen-thc.png', service: 'Growth marketing' },
  { slug: 'stella-legal-solutions', name: 'Stella Legal Solutions', category: 'Legal services', description: 'A professional digital presence built to communicate expertise and make legal support feel accessible.', url: 'https://stellalegalsolutions.com/', image: '/client-logos/stella-legal-solutions.png', service: 'Web design & development' },
  { slug: 'capraxis', name: 'Capraxis', category: 'Business services', description: 'A purposeful business website focused on clear positioning, useful content, and confident enquiries.', url: 'http://capraxis.com/', image: '/client-logos/capraxis-wordmark.png', service: 'Mobile app development' },
  { slug: 'warm-walks', name: 'Warm Walks', category: 'Community & care', description: 'A warm, accessible web presence for a service built around people, connection, and support.', url: 'https://www.warmwalksinc.com/', image: '/client-logos/warm-walks-hires.webp', service: 'Web design & development' },
  { slug: 'todle-legal', name: 'Todle Legal', category: 'Legal services', description: 'A direct and credible legal website helping visitors understand their next step.', url: 'https://todlelegal.com/', image: '/client-logos/todle-legal.png', service: 'Web design & development' },
  { slug: 'rcf-inc', name: 'RCF Inc.', category: 'Professional services', description: 'A structured digital presence that turns a complex offer into a clear customer journey.', url: 'https://rcfinc.org/', image: '/client-logos/rcf-inc-hires.jpg', service: 'Mobile app development' },
  { slug: 'sacred-qalam', name: 'Sacred Qalam', category: 'Education & culture', description: 'A distinctive digital home for a mission-led organisation and its educational offering.', url: 'https://sacredqalam.com/', image: '/client-logos/sacred-qalam.png', service: 'Social media & content' },
  { slug: 'ready2sell-homes', name: 'Ready2Sell Homes', category: 'Property', description: 'A focused property platform designed to support lead generation and confident decisions.', url: 'https://ready2sell.homes/', image: '/client-logos/ready2sell-homes.png', service: 'AI & automation' },
  { slug: 'amark-logistics', name: 'Amark Logistics', category: 'Logistics', description: 'A clear business website for a logistics company built around reliable service and enquiries.', url: 'https://amarklogistics.com/', image: '/client-logos/amark-logistics-hires.webp', service: 'Growth marketing' },
  { slug: 'chanceladys-coffee', name: 'Chanceladys Coffee', category: 'Food & beverage', description: 'A welcoming brand experience for a coffee business with a memorable, community-led feel.', url: 'https://chanceladyscoffee.com/', image: '/client-logos/chanceladys-coffee.png', service: 'Growth marketing' },
  { slug: 'spoken-free', name: 'Spoken Free', category: 'Mental health & community', description: 'A supportive community platform helping people share their stories, find hope, and grow through self-care.', url: 'https://spokenfree.com/', image: '/client-logos/spoken-free-hires.png', service: 'Web design & development' },
];

export const blogPosts = [
  {
    slug: 'why-your-website-should-work-harder',
    category: 'Web & Growth',
    date: 'October 24, 2026',
    title: 'Why your website should work harder than your sales deck',
    excerpt: 'A high-performing website is more than a digital brochure. It should explain your value, build confidence, and make the next step obvious.',
    readTime: '5 min read',
    paragraphs: [
      'Your website is often the first serious conversation a potential customer has with your business. Before they speak to your team, they are looking for clarity: what you do, who you help, and why they should believe you.',
      'The strongest websites make that decision easier. They pair a clear point of view with useful proof, a focused user journey, and calls to action that feel like a natural next step rather than an interruption.',
      'At Axsora Tech, we bring strategy, design, and development together so your website does not just look the part. It becomes a measurable part of your growth engine.',
    ],
  },
  {
    slug: 'practical-ai-for-growing-teams',
    category: 'AI & Automation',
    date: 'October 16, 2026',
    title: 'Practical AI: where growing teams should start',
    excerpt: 'AI creates the most value when it removes friction from real work. Here are three places to look before choosing a tool.',
    readTime: '4 min read',
    paragraphs: [
      'The most useful AI projects are rarely the loudest ones. They are the systems that remove repetitive admin, make information easier to find, or help a team respond with more consistency.',
      'Start by mapping the work that happens repeatedly and requires the most handoffs. Then choose one workflow where a small, well-designed automation can create a clear improvement without asking your team to change everything at once.',
      'Good implementation matters as much as the technology. Secure data handling, clear ownership, and a simple feedback loop are what turn an experiment into a dependable business capability.',
    ],
  },
  {
    slug: 'building-a-brand-people-remember',
    category: 'Brand & Content',
    date: 'October 8, 2026',
    title: 'Building a brand people remember in a noisy feed',
    excerpt: 'Consistency is not repetition. It is the system that lets your best ideas become recognisable, relevant, and trusted.',
    readTime: '6 min read',
    paragraphs: [
      'Memorable brands are not created by posting more. They are created by making a clear promise and expressing it consistently through language, visuals, and the way the business shows up for customers.',
      'A practical content system gives your team enough structure to stay recognisable and enough flexibility to respond to the moment. It defines your themes, voice, visual cues, and the kinds of conversations you want to own.',
      'The result is a brand that feels coherent without feeling predictable — one that earns attention because people know what it stands for and why it matters to them.',
    ],
  },
];