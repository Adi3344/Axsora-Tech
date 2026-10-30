import { ArrowUpRight, BrainCircuit, Eye, Layers3, Workflow } from 'lucide-react';

const capabilities = [
  { icon: BrainCircuit, title: 'AI strategy', text: 'Practical AI roadmaps that connect ambitious ideas to measurable business outcomes.' },
  { icon: Eye, title: 'Intelligent experiences', text: 'Interfaces that feel simple, useful, and genuinely designed around people.' },
  { icon: Workflow, title: 'Connected systems', text: 'Automations and integrations that make your operations faster and easier to scale.' },
];

export default function FeaturedSolutions() {
  return (
    <section className="featured-solutions section-shell" id="solutions">
      <div className="featured-solutions-visual">
        <div className="featured-solutions-grid" aria-hidden="true" />
        <div className="featured-solutions-orb"><BrainCircuit size={58} strokeWidth={1} /></div>
        <div className="featured-solutions-label">AX / 01</div>
      </div>
      <div className="featured-solutions-content">
        <div className="section-kicker"><span>04</span> Artificial intelligence &amp; automation</div>
        <h2>Build what&apos;s next<br /><span>with intelligence.</span></h2>
        <p>We combine strategy, design, and emerging technology to create digital products that are more useful, more efficient, and ready for what comes next.</p>
        <div className="featured-capabilities">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <article key={title} className="featured-capability"><Icon size={21} /><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
        <a className="featured-solutions-link" href="#contact">Explore our approach <ArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}