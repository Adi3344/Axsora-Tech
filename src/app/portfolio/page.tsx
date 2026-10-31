import { ArrowUpRight } from 'lucide-react';
import DetailPageShell from '@/components/DetailPageShell';
import { getProjectScreenshot, portfolioProjects } from '@/data/siteContent';

export default function PortfolioPage() {
  return (
    <DetailPageShell eyebrow="OUR PORTFOLIO" title={<>Digital work for <span>ambitious businesses.</span></>} intro="Explore the websites and digital experiences we have delivered across business, eCommerce, legal, healthcare, property, finance, and service industries.">
      <section className="all-portfolio-grid section-shell">
        {portfolioProjects.map((project, index) => (
          <article className="all-portfolio-card" key={project.slug}>
            <a className="all-portfolio-image" href={project.url} target="_blank" rel="noopener noreferrer"><img loading="lazy" decoding="async" src={getProjectScreenshot(project.url)} alt={`${project.name} website homepage preview`} /><span>AX / {String(index + 1).padStart(2, '0')}</span></a>
            <div className="all-portfolio-copy"><p className="detail-eyebrow">{project.category}</p><h2>{project.name}</h2><p>{project.description}</p><a className="blog-read-link" href={project.url} target="_blank" rel="noopener noreferrer">View live website <ArrowUpRight size={15} /></a></div>
          </article>
        ))}
      </section>
    </DetailPageShell>
  );
}