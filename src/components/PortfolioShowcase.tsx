'use client';

import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Code2, Database, Smartphone } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const projects = [
  { title: 'Smarter Gym Management', subtitle: 'Biometric access, payments, and performance in one connected product.', category: 'Product design & development', description: 'We designed a centralized gym platform that makes daily operations easier for staff and creates a clearer experience for members.', image: '/about-team/team-collaboration.jpg', points: ['Biometric access control', 'Membership and payment management', 'Attendance and revenue tracking'], tech: ['Python', 'FastAPI', 'React', 'Figma'], icon: Database, color: 'cyan' },
  { title: 'A storefront built to grow', subtitle: 'A focused digital experience designed around confident customer journeys.', category: 'Web design & development', description: 'A faster, clearer storefront that helps people discover products, understand value, and take action across every screen.', image: '/about-team/team-discussion.jpg', points: ['Conversion-focused UX', 'Responsive product journeys', 'Flexible content system'], tech: ['Next.js', 'TypeScript', 'CMS', 'Figma'], icon: Code2, color: 'navy' },
  { title: 'Mobile experience customers return to', subtitle: 'Complex workflows made intuitive, reliable, and effortless.', category: 'Mobile application development', description: 'A focused mobile product built to keep users informed, connected, and moving through their most important tasks.', image: '/about-team/team-planning.jpg', points: ['Cross-platform experience', 'Real-time notifications', 'Scalable backend foundation'], tech: ['React Native', 'Node.js', 'API', 'UX/UI'], icon: Smartphone, color: 'violet' },
];

export default function PortfolioShowcase() {
  const [activeProject, setActiveProject] = useState(0);

  const project = projects[activeProject];
  const ProjectIcon = project.icon;
  const previous = () => setActiveProject((activeProject - 1 + projects.length) % projects.length);
  const next = () => setActiveProject((activeProject + 1) % projects.length);

  return (
    <section className="portfolio-section portfolio-redesign" id="portfolio">
      <div className="portfolio-redesign-heading section-shell">
        <div className="section-kicker"><span>05</span> Our portfolio</div>
        <div className="portfolio-redesign-title-row"><div><h2>Work that moves<br /><span>business forward.</span></h2></div><p>Selected projects showing how we turn ambitious ideas into clear, useful digital products.</p></div>
      </div>
      <div className="portfolio-redesign-shell section-shell">
        <nav className="portfolio-tabs" aria-label="Portfolio projects">
          {projects.map((item, index) => <button type="button" className={activeProject === index ? 'is-active' : ''} onClick={() => setActiveProject(index)} key={item.title}><span>0{index + 1}</span><strong>{item.title}</strong><small>{item.category}</small></button>)}
        </nav>
        <article className={`portfolio-feature portfolio-feature-${project.color}`} key={project.title}>
          <div className="portfolio-feature-copy">
            <div className="portfolio-feature-kicker"><ProjectIcon size={16} /> {project.category}</div>
            <h3>{project.title}</h3>
            <p className="portfolio-feature-subtitle">{project.subtitle}</p>
            <p className="portfolio-feature-description">{project.description}</p>
            <div className="portfolio-feature-details"><div><h4>What we delivered</h4><ul>{project.points.map((point) => <li key={point}><Check size={14} /> {point}</li>)}</ul></div><div><h4>Technologies</h4><div className="portfolio-tech">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div></div></div>
            <a href="#contact" className="portfolio-feature-link">Discuss a similar project <ArrowUpRight size={16} /></a>
          </div>
          <div className="portfolio-feature-visual"><Image src={project.image} alt={project.title} fill sizes="(max-width: 800px) 100vw, 48vw" /><div className="portfolio-visual-label">AX / 0{activeProject + 1}</div></div>
        </article>
        <div className="portfolio-redesign-footer"><span>Selected work <b>0{activeProject + 1}</b> / 0{projects.length}</span><div className="portfolio-redesign-controls"><button type="button" onClick={previous} aria-label="Previous project"><ArrowLeft size={16} /></button><button type="button" onClick={next} aria-label="Next project"><ArrowRight size={16} /></button></div></div>
      </div>
    </section>
  );
}