'use client';

import { ArrowUpRight, Code2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, type KeyboardEvent } from 'react';
import { getProjectScreenshot, portfolioProjects } from '@/data/siteContent';

const featuredSlugs = [
  'de-kinderen-auto',
  'sacred-qalam',
  'ready2sell-homes',
  'igo-above',
  'wiktoria-nutrition',
];
const projects = featuredSlugs
  .map((slug) => portfolioProjects.find((project) => project.slug === slug))
  .filter((project): project is (typeof portfolioProjects)[number] => Boolean(project));

export default function PortfolioShowcase() {
  const [activeProject, setActiveProject] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const project = projects[activeProject];

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;

    if (event.key === 'ArrowRight') {
      nextIndex = (index + 1) % projects.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + projects.length) % projects.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = projects.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveProject(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section className="portfolio-section portfolio-redesign" id="portfolio">
      <div className="portfolio-redesign-heading section-shell">
        <div className="section-kicker"><span>05</span> Our portfolio</div>
        <div className="portfolio-redesign-title-row">
          <h2>Stories of successful <span>projects delivered.</span></h2>
          <p>Explore a selection of digital experiences built to help ambitious teams move forward.</p>
        </div>
      </div>
      <div className="portfolio-redesign-shell section-shell">
        <div className="portfolio-tabs" role="tablist" aria-label="Featured portfolio projects">
          {projects.map((item, index) => (
            <button
              type="button"
              id={`portfolio-tab-${item.slug}`}
              role="tab"
              aria-selected={activeProject === index}
              aria-controls={`portfolio-panel-${item.slug}`}
              tabIndex={activeProject === index ? 0 : -1}
              className={activeProject === index ? 'is-active' : ''}
              onClick={() => setActiveProject(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              ref={(element) => { tabRefs.current[index] = element; }}
              key={item.slug}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item.name}</strong>
              <small>{item.category}</small>
            </button>
          ))}
        </div>
        <article
          className="portfolio-feature"
          id={`portfolio-panel-${project.slug}`}
          role="tabpanel"
          aria-labelledby={`portfolio-tab-${project.slug}`}
          tabIndex={0}
          key={project.slug}
        >
          <div className="portfolio-feature-copy">
            <div className="portfolio-feature-kicker"><Code2 size={16} /> {project.category}</div>
            <h3>{project.name}</h3>
            <p className="portfolio-feature-subtitle">{project.service}</p>
            <p className="portfolio-feature-description">{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="portfolio-feature-link">
              Visit live website <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="portfolio-feature-visual">
            <Image
              src={getProjectScreenshot(project.url)}
              alt={`${project.name} website preview`}
              fill
              sizes="(max-width: 800px) 90vw, 55vw"
              unoptimized
            />
            <span className="portfolio-visual-label">PROJECT PREVIEW</span>
          </div>
        </article>
        <div className="portfolio-redesign-footer">
          <span>PROJECT <b>{String(activeProject + 1).padStart(2, '0')}</b> / {String(projects.length).padStart(2, '0')}</span>
          <Link className="portfolio-view-all" href="/portfolio">
            Explore all projects <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}