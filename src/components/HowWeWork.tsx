import { ArrowRight } from 'lucide-react';

const phases = [
  {
    number: '01',
    title: 'Find the signal',
    description: 'We learn about your business, audience, and the opportunity that matters most.',
  },
  {
    number: '02',
    title: 'Shape the plan',
    description: 'We turn the strongest ideas into a focused roadmap with clear priorities.',
  },
  {
    number: '03',
    title: 'Make it real',
    description: 'We design, build, and refine the experience together, with regular check-ins.',
  },
  {
    number: '04',
    title: 'Grow what works',
    description: 'We launch, learn from real results, and help your next stage take shape.',
  },
];

export default function HowWeWork() {
  return (
      <section className="how-we-work section-shell" id="how-we-work">
        <div className="how-we-work-heading">
          <p className="proof-eyebrow">HOW WE WORK</p>
          <h2>From first signal to real momentum</h2>
          <p>Four clear phases. One close partnership. A digital experience built around where you want to go.</p>
        </div>
        <div className="process-legend" aria-hidden="true">
          <span><i className="process-legend-dot process-legend-dot--start" /> START</span>
          <ArrowRight size={14} />
          <span><i className="process-legend-dot process-legend-dot--finish" /> GROW</span>
        </div>
        <div className="process-grid">
          {phases.map((phase, index) => (
            <article
              className={`process-card${index === 0 ? ' process-card--start' : ''}${index === phases.length - 1 ? ' process-card--final' : ''}`}
              key={phase.number}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="process-visual" aria-hidden="true">
                <span className="process-node">{phase.number}</span>
              </div>
              <h3>{phase.title}</h3>
              <p className="process-description">{phase.description}</p>
            </article>
          ))}
        </div>
      </section>
  );
}
