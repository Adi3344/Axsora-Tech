const technologies = [
  { mark: 'N', name: 'Next.js' },
  { mark: '⚛', name: 'React' },
  { mark: 'TS', name: 'TypeScript' },
  { mark: 'Py', name: 'Python' },
  { mark: 'JS', name: 'Node.js' },
  { mark: 'F', name: 'Flutter' },
  { mark: 'AI', name: 'AI platforms' },
  { mark: 'WP', name: 'WordPress' },
  { mark: 'Sh', name: 'Shopify' },
  { mark: 'Fi', name: 'Figma' },
  { mark: 'GA', name: 'Analytics' },
  { mark: 'Ads', name: 'Paid media' },
  { mark: '↔', name: 'Zapier' },
  { mark: 'M', name: 'Make' },
  { mark: 'DB', name: 'PostgreSQL' },
  { mark: 'M', name: 'MongoDB' },
  { mark: 'Tw', name: 'Tailwind CSS' },
  { mark: 'W', name: 'Webflow' },
  { mark: 'S', name: 'Stripe' },
  { mark: 'Fb', name: 'Firebase' },
  { mark: 'GH', name: 'GitHub' },
  { mark: 'SEO', name: 'Search tools' },
  { mark: 'API', name: 'APIs' },
  { mark: 'UX', name: 'UX tools' },
];

export default function TechnologyStack() {
  return (
    <section className="technology-stack section-shell" aria-labelledby="technology-stack-title">
      <div className="technology-stack-heading">
        <p className="service-detail-eyebrow">TOOLS &amp; TECHNOLOGIES</p>
        <h2 id="technology-stack-title">Modern tools for thoughtful digital work.</h2>
        <p>We choose technologies and platforms to fit the needs of each project—not the other way around.</p>
      </div>
      <div className="technology-stack-grid">
        {technologies.map((technology, index) => (
          <div className="technology-tile" key={`${technology.name}-${index}`}>
            <span aria-hidden="true">{technology.mark}</span>
            <small>{technology.name}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
