import { notFound } from 'next/navigation';
import DetailPageShell from '@/components/DetailPageShell';
import { getProjectScreenshot, portfolioProjects, services } from '@/data/siteContent';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const relatedProjects = portfolioProjects.filter((project) => service.relatedProjects.includes(project.slug));

  return (
    <DetailPageShell eyebrow={`SERVICE / ${service.number}`} title={<>{service.title.split(' ').map((word, index) => <span key={`${word}-${index}`}>{word} </span>)}</>} intro={service.detail}>
      <section className="detail-section section-shell">
        <div className="detail-section-heading"><p className="detail-eyebrow">THE OUTCOME</p><h2>Built around what your business needs next.</h2></div>
        <div className="detail-outcomes">{service.outcomes.map((outcome, index) => <article key={outcome}><span>0{index + 1}</span><h3>{outcome}</h3><p>{service.description}</p></article>)}</div>
      </section>
      <section className="detail-section detail-process section-shell">
        <div className="detail-section-heading"><p className="detail-eyebrow">HOW WE WORK</p><h2>A clear process from first idea to real momentum.</h2></div>
        <div className="detail-process-list">{service.process.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></div>)}</div>
      </section>
      <section className="detail-tags section-shell"><p className="detail-eyebrow">CAPABILITIES</p><div>{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></section>
      <section className="detail-projects detail-section section-shell">
        <div className="detail-section-heading"><p className="detail-eyebrow">SELECTED WORK</p><h2>Real businesses. Real digital momentum.</h2></div>
        <div className="detail-project-grid">{relatedProjects.map((project) => <a className="detail-project-card" href={project.url} target="_blank" rel="noopener noreferrer" key={project.slug}><div className="detail-project-image" style={{ background: project.imageBackground }}><img loading="lazy" decoding="async" src={getProjectScreenshot(project.url)} alt={`${project.name} website homepage preview`} /></div><div><p>{project.category}</p><h3>{project.name}</h3><span>View live website ↗</span></div></a>)}</div>
      </section>
    </DetailPageShell>
  );
}