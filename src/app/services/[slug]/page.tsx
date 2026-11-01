import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { notFound } from 'next/navigation';
import DetailPageShell from '@/components/DetailPageShell';
import ServiceQuoteForm from '@/components/ServiceQuoteForm';
import { getProjectScreenshot, portfolioProjects } from '@/data/siteContent';
import { getServiceBySlug, serviceDetails } from '@/data/services';

export function generateStaticParams() {
  return serviceDetails.map(({ slug }) => ({ slug }));
}

export default async function ServiceDetailPage({
  params,
}: PageProps<'/services/[slug]'>) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const selectedWork = service.workSlugs.flatMap((workSlug) => {
    const project = portfolioProjects.find(({ slug: projectSlug }) => projectSlug === workSlug);
    return project ? [project] : [];
  });
  const quoteHref = `/services/${service.slug}#quote`;

  return (
    <DetailPageShell
      eyebrow={service.eyebrow}
      title={<>{service.headline}</>}
      intro={service.intro}
      actionHref={quoteHref}
      actionLabel="Request a quote"
    >
      <section className="service-detail-overview section-shell">
        <div className="service-detail-overview-heading">
          <p className="service-detail-eyebrow">BUILT AROUND YOUR BUSINESS</p>
          <h2>More than a deliverable.<br /><span>A partner in progress.</span></h2>
        </div>
        <div className="service-detail-overview-copy">
          <p>{service.promise}</p>
          <Link className="service-detail-text-link" href={quoteHref}>Tell us what you need <ArrowDown size={16} /></Link>
        </div>
      </section>

      <section className="service-outcomes section-shell" aria-label={`${service.title} outcomes`}>
        {service.outcomes.map((outcome, index) => (
          <div className="service-outcome" key={outcome}>
            <span className="service-outcome-number">0{index + 1}</span>
            <Check size={18} aria-hidden="true" />
            <p>{outcome}</p>
          </div>
        ))}
      </section>

      <section className="service-deliverables section-shell">
        <div className="service-section-heading">
          <div>
            <p className="service-detail-eyebrow">WHAT WE CAN DO TOGETHER</p>
            <h2>A complete service.<br /><span>Thoughtfully delivered.</span></h2>
          </div>
          <p>Every engagement is shaped around your goals. Here are the building blocks we can bring together for your project.</p>
        </div>
        <div className="service-deliverables-grid">
          {service.deliverables.map((item, index) => (
            <article className="service-deliverable-card" key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-work section-shell">
        <div className="service-section-heading">
          <div>
            <p className="service-detail-eyebrow">SELECTED WORK</p>
            <h2>Good work starts<br /><span>with a clear idea.</span></h2>
          </div>
          <p>A few of the businesses and digital experiences we have been proud to work alongside.</p>
        </div>
        <div className="service-work-grid">
          {selectedWork.map((project, index) => (
            <article className="service-work-card" key={project.slug}>
              <a className="service-work-image" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} website`}>
                <Image
                  src={getProjectScreenshot(project.url)}
                  alt={`${project.name} website preview`}
                  fill
                  unoptimized
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
                <span className="service-work-index">AX / {String(index + 1).padStart(2, '0')}</span>
                <span className="service-work-open"><ArrowUpRight size={17} /></span>
              </a>
              <div className="service-work-copy">
                <div><p>{project.category}</p><h3>{project.name}</h3></div>
                <a href={project.url} target="_blank" rel="noopener noreferrer">View website <ArrowUpRight size={15} /></a>
              </div>
            </article>
          ))}
        </div>
        <Link className="service-detail-text-link service-work-all" href="/portfolio">Explore all work <ArrowRight size={16} /></Link>
      </section>

      <section className="service-process section-shell">
        <div className="service-section-heading">
          <div>
            <p className="service-detail-eyebrow">A CLEAR WAY FORWARD</p>
            <h2>From first conversation<br /><span>to real momentum.</span></h2>
          </div>
          <p>No guesswork or unnecessary complexity. You will know what happens next, who is doing it, and why.</p>
        </div>
        <div className="service-process-grid">
          {service.process.map((step, index) => (
            <article className="service-process-step" key={step.title}>
              <span className="service-process-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ServiceQuoteForm serviceName={service.title} />
    </DetailPageShell>
  );
}
