export type ServiceDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  intro: string;
  promise: string;
  outcomes: string[];
  deliverables: { title: string; description: string }[];
  process: { title: string; description: string }[];
  workSlugs: string[];
  industries: { name: string; description: string }[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    eyebrow: 'Social media, with a strategy behind it',
    headline: 'Make your brand part of the conversation.',
    intro: 'Build a recognisable social presence with thoughtful planning, strong creative, and consistent community care. We turn the story of your business into content people want to stop for.',
    promise: 'A consistent voice, a clearer content plan, and more meaningful connections with the people you want to reach.',
    outcomes: ['A distinct, consistent brand voice', 'Content planned around real business goals', 'A community that feels heard and valued'],
    deliverables: [
      { title: 'Strategy & direction', description: 'Audience research, platform selection, content pillars, and a practical publishing plan.' },
      { title: 'Creative content', description: 'On-brand graphics, short-form video, captions, and campaign assets made for each platform.' },
      { title: 'Publishing & community', description: 'Reliable scheduling, thoughtful engagement, and a considered response to your community.' },
      { title: 'Reporting & refinement', description: 'Clear performance reporting that turns what is working into the next month’s plan.' },
    ],
    process: [
      { title: 'Find your point of view', description: 'We learn your goals, audience, voice, and what makes your brand worth following.' },
      { title: 'Build the content system', description: 'We agree on themes, formats, and a manageable cadence before creating.' },
      { title: 'Create, publish, learn', description: 'Content goes live with ongoing community care and regular performance reviews.' },
    ],
    workSlugs: ['verdikt-studios', 'chanceladys-coffee', 'wiktoria-nutrition'],
    industries: [
      { name: 'Food & beverage', description: 'Build a recognisable voice and share the people, products, and moments behind your brand.' },
      { name: 'Lifestyle & wellbeing', description: 'Create useful, audience-first content that earns attention without relying on hard sells.' },
      { name: 'Creative businesses', description: 'Turn your ideas, services, and launches into a consistent story across social channels.' },
    ],
  },
  {
    slug: 'growth-marketing',
    title: 'Growth Marketing',
    eyebrow: 'Growth marketing, built around outcomes',
    headline: 'Turn the right attention into action.',
    intro: 'Reach the people most likely to choose you, then give them a clear reason and route to act. We bring channels, creative, and conversion thinking together around measurable goals.',
    promise: 'A focused growth plan that makes your marketing easier to understand, measure, and improve.',
    outcomes: ['More qualified traffic and enquiries', 'Campaigns connected to business priorities', 'A clearer view of where growth comes from'],
    deliverables: [
      { title: 'Growth strategy', description: 'Channel and audience research, opportunity mapping, and goals tied to your business.' },
      { title: 'Search visibility', description: 'SEO foundations and useful content that help the right customers discover you.' },
      { title: 'Paid campaign management', description: 'Campaign planning, creative testing, audience refinement, and ongoing optimisation.' },
      { title: 'Conversion improvement', description: 'Landing-page and journey recommendations that make the next step easier to take.' },
    ],
    process: [
      { title: 'Set the goal', description: 'We agree on the audience, action, and metrics that matter before selecting channels.' },
      { title: 'Launch with a hypothesis', description: 'We create a focused plan, build the assets, and launch with clear tracking.' },
      { title: 'Learn and scale', description: 'We review the evidence, share what it means, and invest in what performs.' },
    ],
    workSlugs: ['amark-logistics', 'wiktoria-nutrition', 'a2z-finance-protection'],
    industries: [
      { name: 'Professional services', description: 'Clarify complex offers and help high-intent prospects find a confident next step.' },
      { name: 'eCommerce & retail', description: 'Connect discovery, product stories, and conversion-focused campaigns.' },
      { name: 'Travel & hospitality', description: 'Reach the right audiences with timely campaigns and a smoother path to enquire or book.' },
    ],
  },
  {
    slug: 'web-design-development',
    title: 'Web Design & Development',
    eyebrow: 'Web design & development',
    headline: 'A better website for your next stage.',
    intro: 'We design and build fast, considered websites that make your value clear and help visitors move forward. Every decision—from structure to interaction—starts with the people you need to reach.',
    promise: 'A distinctive, responsive website that earns trust, explains your offer, and makes enquiries feel easy.',
    outcomes: ['A clearer story and stronger first impression', 'A responsive experience across screen sizes', 'A site your team can confidently grow'],
    deliverables: [
      { title: 'Discovery & structure', description: 'Audience, goals, sitemap, and page flows shaped around your customers’ needs.' },
      { title: 'Brand-led UI/UX', description: 'A polished visual system and accessible interface designed to feel unmistakably yours.' },
      { title: 'Development & integrations', description: 'Responsive front-end development, CMS setup, forms, and the tools your workflow needs.' },
      { title: 'Launch & optimisation', description: 'Quality checks, analytics setup, handover, and a clear path for continued improvement.' },
    ],
    process: [
      { title: 'Discover', description: 'We align on what success means, who the site serves, and what needs to change.' },
      { title: 'Design & build', description: 'We shape the experience, review it together, and build the approved direction.' },
      { title: 'Launch & support', description: 'We test across devices, launch carefully, and help you take the next steps.' },
    ],
    workSlugs: ['a2z-finance-protection', 'verdikt-studios', 'chanceladys-coffee', 'amark-logistics', 'capraxis'],
    industries: [
      { name: 'Finance & professional services', description: 'Make specialist expertise easier to understand and take the next step with.' },
      { name: 'Food, retail & eCommerce', description: 'Create an inviting digital storefront for products, services, and customer stories.' },
      { name: 'Logistics & operations', description: 'Explain capabilities clearly and help business customers reach the right team.' },
    ],
  },
  {
    slug: 'ai-automations',
    title: 'AI Automations',
    eyebrow: 'AI & workflow automation',
    headline: 'Give repetitive work a better way.',
    intro: 'Make room for higher-value work by connecting the tools you already use and automating repeatable processes. We focus on practical, human-centred systems—not AI for its own sake.',
    promise: 'Less manual handover, more consistent workflows, and useful automation your team understands.',
    outcomes: ['Fewer repetitive admin tasks', 'Smoother handoffs between tools and teams', 'Automation designed with people and data in mind'],
    deliverables: [
      { title: 'Workflow discovery', description: 'We map the process, identify friction, and prioritise opportunities with a clear payoff.' },
      { title: 'Automation design', description: 'A practical plan for triggers, actions, approvals, exceptions, and human oversight.' },
      { title: 'AI & tool integrations', description: 'Carefully scoped connections between your business tools and suitable AI services.' },
      { title: 'Testing & enablement', description: 'Real-world testing, useful documentation, and support to help your team adopt the workflow.' },
    ],
    process: [
      { title: 'Map the work', description: 'We understand the current process, its edge cases, and where time is being lost.' },
      { title: 'Design responsibly', description: 'We choose the simplest reliable solution and define where people stay in control.' },
      { title: 'Test and improve', description: 'We validate with your team, refine the flow, and measure its day-to-day value.' },
    ],
    workSlugs: ['cs750', 'truston-finance', 'ready2sell-homes'],
    industries: [
      { name: 'Finance & professional services', description: 'Reduce repetitive intake and handoffs while keeping people in control of important decisions.' },
      { name: 'Property & real estate', description: 'Connect enquiry, follow-up, and scheduling tasks into more consistent workflows.' },
      { name: 'Membership & hospitality', description: 'Coordinate requests and routine operations across the tools your team already uses.' },
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    eyebrow: 'Mobile app development',
    headline: 'Make your next useful idea an app.',
    intro: 'From early product thinking to a store-ready release, we create mobile experiences that are simple to use and built to evolve. We keep the customer need at the centre of every screen and decision.',
    promise: 'A clear product direction and a thoughtful mobile experience built for real people and real use.',
    outcomes: ['A focused idea validated before build', 'Intuitive experiences for iOS and Android', 'A stable foundation for future features'],
    deliverables: [
      { title: 'Product discovery', description: 'User needs, core jobs, feature priorities, and a practical first release scope.' },
      { title: 'UX & interface design', description: 'User journeys, prototypes, and a cohesive interface shaped for mobile use.' },
      { title: 'App & backend development', description: 'Mobile implementation, backend foundations, integrations, and secure data flows.' },
      { title: 'Release & iteration', description: 'Device testing, store preparation, launch support, and a roadmap for what comes next.' },
    ],
    process: [
      { title: 'Shape the product', description: 'We define the audience, validate the core problem, and scope a meaningful first release.' },
      { title: 'Prototype & build', description: 'We test the experience early, then build in clear, reviewable increments.' },
      { title: 'Launch & learn', description: 'We prepare for release, monitor real-world use, and plan improvements with you.' },
    ],
    workSlugs: ['capraxis', 'rcf-inc', 'chanceladys-coffee'],
    industries: [
      { name: 'Professional services', description: 'Give clients a clearer way to access expertise, updates, and useful self-service tools.' },
      { name: 'Retail & commerce', description: 'Create convenient mobile journeys for discovering products and engaging with your brand.' },
      { name: 'Community & wellbeing', description: 'Make it easier for people to find resources, connect, and keep up with your service.' },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
