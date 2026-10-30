'use client';

import { useState } from 'react';
import {
  ArrowUpRight,
  Blocks,
  BrainCircuit,
  Check,
  Code2,
  Handshake,
  Rocket,
  Sparkles,
  Target,
} from 'lucide-react';

const values = [
  {
    label: '01',
    title: 'Built around your goals',
    description: 'We start with the outcome, not a template. Every recommendation is shaped around your audience, your workflow, and the next stage of growth.',
    icon: Target,
  },
  {
    label: '02',
    title: 'Strategy meets craft',
    description: 'Clear thinking and considered design come together to make digital experiences that look sharp and work even harder.',
    icon: Sparkles,
  },
  {
    label: '03',
    title: 'A partner that stays close',
    description: 'You get a responsive team, honest communication, and momentum from the first conversation through launch and beyond.',
    icon: Handshake,
  },
];

const orbitNodes = [
  { name: 'Web', icon: Code2, position: 'node-top' },
  { name: 'AI', icon: BrainCircuit, position: 'node-right' },
  { name: 'Growth', icon: Rocket, position: 'node-bottom' },
  { name: 'Mobile', icon: Blocks, position: 'node-left' },
];

export default function WhyChooseUs() {
  const [activeValue, setActiveValue] = useState(0);
  const featured = values[activeValue];
  const FeaturedIcon = featured.icon;

  return (
    <section className="why-section section-shell" id="why-us">
      <div className="why-heading">
        <div className="section-kicker"><span>02</span> Why Axsora Tech</div>
        <div className="why-heading-row">
          <h2>Good work starts<br /><span>with good reasons.</span></h2>
          <p>We bring strategy, creativity, and technology together to turn ambitious ideas into meaningful digital experiences.</p>
        </div>
      </div>

      <div className="why-values-layout">
        <div className="why-feature-card">
          <div className="why-card-topline"><span>Selected value</span><span>{featured.label} / 03</span></div>
          <div className="why-feature-icon"><FeaturedIcon size={24} strokeWidth={1.7} /></div>
          <h3>{featured.title}</h3>
          <p>{featured.description}</p>
          <a href="#contact" className="why-card-link">Let&apos;s work together <ArrowUpRight size={16} /></a>
          <div className="why-card-glow" aria-hidden="true" />
        </div>

        <div className="why-value-list">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <button
                className={`why-value-item${activeValue === index ? ' is-active' : ''}`}
                type="button"
                key={value.label}
                onClick={() => setActiveValue(index)}
                aria-pressed={activeValue === index}
              >
                <span className="why-value-number">{value.label}</span>
                <span className="why-value-icon"><Icon size={18} strokeWidth={1.7} /></span>
                <span className="why-value-copy"><strong>{value.title}</strong><small>{value.description}</small></span>
                <ArrowUpRight className="why-value-arrow" size={18} />
              </button>
            );
          })}
        </div>
      </div>

      <div className="why-trust-area">
        <div className="why-trust-copy">
          <div className="section-kicker"><span>03</span> Trusted by growing brands</div>
          <h3>Big ideas deserve<br /><span>a capable team.</span></h3>
          <p>From first sketch to final launch, Axsora Tech gives ambitious businesses the people and perspective to move forward with confidence.</p>
          <div className="why-trust-proof"><Check size={15} /><span>Clear communication at every step</span></div>
        </div>

        <div className="why-orbit" aria-label="Axsora Tech capabilities">
          <div className="orbit-ring orbit-ring-one" />
          <div className="orbit-ring orbit-ring-two" />
          <span className="orbit-line line-one" /><span className="orbit-line line-two" />
          <span className="orbit-line line-three" /><span className="orbit-line line-four" />
          <div className="orbit-core"><span>AX</span><small>TECH</small></div>
          {orbitNodes.map(({ name, icon: Icon, position }) => (
            <div className={`orbit-node ${position}`} key={name}><Icon size={15} /><span>{name}</span></div>
          ))}
          <span className="orbit-dot dot-one" /><span className="orbit-dot dot-two" /><span className="orbit-dot dot-three" />
        </div>
      </div>
    </section>
  );
}