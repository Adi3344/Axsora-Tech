'use client';

import { ArrowUpRight, Check, Code2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { getProjectScreenshot, portfolioProjects } from '@/data/siteContent';

const featuredSlugs = ['spoken-free', 'sacred-qalam', 'ready2sell-homes'];
const projects = featuredSlugs
  .map((slug) => portfolioProjects.find((project) => project.slug === slug))
  .filter((project): project is (typeof portfolioProjects)[number] => Boolean(project));

export default function PortfolioShowcase() {
  const [activeProject, setActiveProject] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveProject(Number((entry.target as HTMLElement).dataset.index));
      });
    }, { rootMargin: '-35% 0px -45% 0px', threshold: 0 });
    stepRefs.current.forEach((step) => step && observer.observe(step));
    return () => observer.disconnect();
  }, []);

  const project = projects[activeProject];
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-heading section-shell">
        <div className="section-kicker"><span>05</span> Our portfolio</div>
        <h2>Stories of successful<br /><span>projects delivered.</span></h2>
        <p>Selected work that shows how we turn complex challenges into clear, useful digital products.</p>
      </div>
      <div className="portfolio-scroll-layout section-shell">
        <div className="portfolio-sticky">
          <article className="portfolio-card" key={project.slug}>
            <div className="portfolio-card-copy">
              <div className="portfolio-card-category"><Code2 size={16} /> {project.category}</div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <h4>Features</h4>
              <ul><li><Check size={14} /> Strategy-led website experience</li><li><Check size={14} /> Responsive customer journeys</li><li><Check size={14} /> Clear conversion paths</li></ul>
              <h4>Technologies used</h4>
              <div className="portfolio-tech"><span>Next.js</span><span>CMS</span><span>UX/UI</span><span>Responsive</span></div>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="portfolio-card-link">View live website <ArrowUpRight size={15} /></a>
            </div>
            <div className="portfolio-card-image"><Image src={getProjectScreenshot(project.url)} alt={`${project.name} website homepage preview`} fill sizes="(max-width: 900px) 90vw, 42vw" unoptimized /></div>
          </article>
          <div className="portfolio-progress"><span style={{ width: `${((activeProject + 1) / projects.length) * 100}%` }} /></div>
          <div className="portfolio-dots" aria-label="Choose portfolio project">
            {projects.map((item, index) => <button type="button" className={activeProject === index ? 'is-active' : ''} onClick={() => setActiveProject(index)} aria-label={`Show ${item.name}`} key={item.slug}><span /></button>)}
          </div>
        </div>
        <div className="portfolio-stage-track" aria-label="Portfolio projects">
          {projects.map((item, index) => (
            <div className={`portfolio-step${activeProject === index ? ' is-active' : ''}`} data-index={index} ref={(element) => { stepRefs.current[index] = element; }} key={item.slug} aria-hidden="true" />
          ))}
        </div>
      </div>
    </section>
  );
}