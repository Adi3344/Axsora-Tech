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

export const projectHighlights: Record<string, string[]> = {
  'Web design & development': ['Purposeful page structure', 'Responsive visual experience', 'Clear customer next steps'],
  'Growth marketing': ['Audience-focused messaging', 'Brand and campaign consistency', 'Discovery and engagement'],
  'Social media & content': ['Content-led storytelling', 'A recognisable brand presence', 'Audience engagement'],
  'AI & automation': ['Connected digital workflows', 'Clear information architecture', 'A smoother customer journey'],
  'Mobile app development': ['Mobile-first experience', 'Intuitive product interface', 'Room to grow over time'],
};

export function getProjectScreenshot(url: string) {
  const localScreenshots: Record<string, string> = {
    'https://londonplantmaintenance.co.uk/': '/portfolio-screenshots/london-plant-maintenance.gif',
    'https://edgeproroofing.com/': '/portfolio-screenshots/edge-pro-roofing.gif',
    'https://a2zfinanceprotection.co.uk/': '/portfolio-screenshots/a2z-finance-protection.gif',
    'https://uc-homes.co.uk/': '/portfolio-screenshots/uc-homes.gif',
    'https://cs750.com/': '/portfolio-screenshots/cs750.gif',
    'https://dekinderenauto.nl/': '/portfolio-screenshots/de-kinderen-auto.gif',
    'https://wiktorianutrition.co.uk/': '/portfolio-screenshots/wiktoria-nutrition.gif',
    'https://nomacounseling.com/': '/portfolio-screenshots/noma-counseling.gif',
    'https://averatravel.com/': '/portfolio-screenshots/avera-travel.gif',
    'https://verdiktstudios.com/': '/portfolio-screenshots/verdikt-studios.gif',
    'https://banijewellers.com/': '/portfolio-screenshots/bani-jewellers.gif',
    'https://trustonfinance.nl/': '/portfolio-screenshots/truston-finance.gif',
    'https://cogenthc.com/': '/portfolio-screenshots/cogen-thc.gif',
    'http://capraxis.com/': '/portfolio-screenshots/capraxis.gif',
    'https://www.warmwalksinc.com/': '/portfolio-screenshots/warm-walks.gif',
    'https://todlelegal.com/': '/portfolio-screenshots/todle-legal.gif',
    'https://rcfinc.org/': '/portfolio-screenshots/rcf-inc.gif',
    'https://amarklogistics.com/': '/portfolio-screenshots/amark-logistics.gif',
    'https://chanceladyscoffee.com/': '/portfolio-screenshots/chanceladys-coffee.gif',
  };
  return localScreenshots[url] ?? `https://image.thum.io/get/width/1400/crop/850/${url}`;
}

export const portfolioProjects: PortfolioProject[] = [
  { slug: 'london-plant-maintenance', name: 'London Plant Maintenance', category: 'Commercial plant care', description: 'A polished digital presence for London workspace plant rental, installation, and maintenance services.', url: 'https://londonplantmaintenance.co.uk/', image: '/client-logos/londonplantmaintenance.png', service: 'Web design & development' },
  { slug: 'edge-pro-roofing', name: 'Edge Pro Roofing', category: 'Roofing & sheet metal', description: 'A trust-led website communicating craftsmanship, roofing expertise, and reliable residential and commercial services.', url: 'https://edgeproroofing.com/', image: '/client-logos/edgepro-roofing.png', service: 'Web design & development' },
  { slug: 'a2z-finance-protection', name: 'A2Z Finance & Protection', category: 'Mortgage & finance', description: 'A clear lead-generation experience that helps homebuyers find mortgage, protection, and finance guidance.', url: 'https://a2zfinanceprotection.co.uk/', image: '/client-logos/a2z-finance-protection-hires.png', service: 'Web design & development' },
  { slug: 'uc-homes', name: 'UC-Homes UK', category: 'Residential construction', description: 'A project management and lead-generation portal designed for premium residential construction.', url: 'https://uc-homes.co.uk/', image: '/client-logos/uc-homes.png', service: 'Web design & development' },
  { slug: 'cs750', name: 'CS750', category: 'Luxury membership', description: 'An exclusive digital experience for premium lifestyle access, private deals, travel, and concierge services.', url: 'https://cs750.com/', image: '/logo.png', service: 'AI & automation', imageBackground: '#06143b' },
  { slug: 'de-kinderen-auto', name: 'De Kinderen Auto', category: 'Automotive', description: 'A confident, high-trust digital experience for a specialist automotive business.', url: 'https://dekinderenauto.nl/', image: '/client-logos/dekinderen-auto-hires.png', service: 'Web design & development' },
  { slug: 'wiktoria-nutrition', name: 'Wiktoria Nutrition', category: 'Nutrition & wellbeing', description: 'An approachable online nutrition platform supporting blood sugar, gut health, and sustainable lifestyle change.', url: 'https://wiktorianutrition.co.uk/', image: '/client-logos/wiktoria-nutrition-hires.png', service: 'Growth marketing' },
  { slug: 'noma-counseling', name: 'Noma Counseling', category: 'Mental health', description: 'A gentle, human-centred website for counselling through transition, loss, identity, and becoming.', url: 'https://nomacounseling.com/', image: '/client-logos/noma-counseling-hires.png', service: 'Web design & development' },
  { slug: 'avera-travel', name: 'Avera Travel', category: 'Travel planning', description: 'A refined travel planning experience for personalised itineraries, destination expertise, and ongoing support.', url: 'https://averatravel.com/', image: '/client-logos/avera-travel.png', service: 'Growth marketing' },
  { slug: 'verdikt-studios', name: 'Verdikt Studios', category: 'Music & artist growth', description: 'A bold platform for artist promotion, media campaigns, live opportunities, and strategic growth.', url: 'https://verdiktstudios.com/', image: '/logo.png', service: 'Social media & content', imageBackground: '#06143b' },
  { slug: 'bani-jewellers', name: 'Bani Jewellers', category: 'eCommerce jewellery', description: 'An eCommerce storefront presenting gold, diamond, bridal, men’s, and baby jewellery collections.', url: 'https://banijewellers.com/', image: '/client-logos/bani-jewellers.png', service: 'Web design & development' },
  { slug: 'truston-finance', name: 'Truston Finance & Advisory', category: 'Finance & accounting', description: 'A clear advisory platform for bookkeeping, tax advice, international structures, and business growth.', url: 'https://trustonfinance.nl/', image: '/client-logos/truston-finance-hires.png', service: 'AI & automation' },
  { slug: 'cogen-thc', name: 'Cogen THC', category: 'Specialist business', description: 'A focused brand experience designed to make a specialist service easier to understand and enquire about.', url: 'https://cogenthc.com/', image: '/client-logos/cogen-thc.png', service: 'Growth marketing' },
  { slug: 'capraxis', name: 'Capraxis', category: 'Business services', description: 'A purposeful business website focused on clear positioning, useful content, and confident enquiries.', url: 'http://capraxis.com/', image: '/client-logos/capraxis-wordmark.png', service: 'Mobile app development' },
  { slug: 'warm-walks', name: 'Warm Walks', category: 'Community & care', description: 'A warm, accessible web presence for a service built around people, connection, and support.', url: 'https://www.warmwalksinc.com/', image: '/client-logos/warm-walks-hires.webp', service: 'Web design & development' },
  { slug: 'todle-legal', name: 'Todle Legal', category: 'Legal services', description: 'A direct and credible legal website helping visitors understand their next step.', url: 'https://todlelegal.com/', image: '/client-logos/todle-legal.png', service: 'Web design & development' },
  { slug: 'rcf-inc', name: 'RCF Inc.', category: 'Professional services', description: 'A structured digital presence that turns a complex offer into a clear customer journey.', url: 'https://rcfinc.org/', image: '/client-logos/rcf-inc-hires.jpg', service: 'Mobile app development' },
  { slug: 'ready2sell-homes', name: 'Ready2Sell Homes', category: 'Property', description: 'A focused property platform designed to support lead generation and confident decisions.', url: 'https://ready2sell.homes/', image: '/client-logos/ready2sell-homes.png', service: 'AI & automation' },
  { slug: 'amark-logistics', name: 'Amark Logistics', category: 'Logistics', description: 'A clear business website for a logistics company built around reliable service and enquiries.', url: 'https://amarklogistics.com/', image: '/client-logos/amark-logistics-hires.webp', service: 'Growth marketing' },
  { slug: 'chanceladys-coffee', name: 'Chanceladys Coffee', category: 'Food & beverage', description: 'A welcoming brand experience for a coffee business with a memorable, community-led feel.', url: 'https://chanceladyscoffee.com/', image: '/client-logos/chanceladys-coffee.png', service: 'Growth marketing' },
];
