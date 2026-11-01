import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import DetailPageShell from '@/components/DetailPageShell';
import { getProjectScreenshot, portfolioProjects, projectHighlights } from '@/data/siteContent';

export default function PortfolioPage() {
  return (
    <DetailPageShell eyebrow="OUR PORTFOLIO" title={<>Digital work for <span>ambitious businesses.</span></>} intro="Explore the websites and digital experiences we have delivered across business, eCommerce, legal, healthcare, property, finance, and service industries.">
      <section className="all-portfolio-grid section-shell">
        {portfolioProjects.map((project, index) => (
          <article className="all-portfolio-card" key={project.slug}>
            <div className="all-portfolio-copy">
              <p className="detail-eyebrow">{project.category}</p>
              <h2>{project.name}</h2>
              <p className="all-portfolio-description">{project.description}</p>
              <div className="all-portfolio-features">
                <h3>Project focus</h3>
                <ul>
                  {(projectHighlights[project.service] ?? ['Brand-led experience', 'Responsive design', 'Clear customer journey']).map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="all-portfolio-tags" aria-label="Project capabilities">
                <span>{project.service}</span>
                <span>{project.category}</span>
              </div>
              <a className="blog-read-link" href={project.url} target="_blank" rel="noopener noreferrer">View live website <ArrowUpRight size={15} /></a>
            </div>
            <a className="all-portfolio-image" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} website`}>
              <span className="all-portfolio-browser-bar"><i /><i /><i /><small>{new URL(project.url).hostname}</small></span>
              <Image
                loading="lazy"
                decoding="async"
                src={getProjectScreenshot(project.url)}
                alt={`${project.name} website homepage preview`}
                fill
                unoptimized
                sizes="(max-width: 760px) 100vw, 55vw"
              />
              <span className="all-portfolio-index">AX / {String(index + 1).padStart(2, '0')}</span>
            </a>
          </article>
        ))}
      </section>
    </DetailPageShell>
  );
}