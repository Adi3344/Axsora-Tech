import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { notFound } from 'next/navigation';
import DetailPageShell from '@/components/DetailPageShell';
import ServiceHeroAnimation from '@/components/ServiceHeroAnimation';
import ServiceFaqs from '@/components/ServiceFaqs';
import ServiceJourney from '@/components/ServiceJourney';
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
  const isAiService = service.slug === 'ai-automations';

  return (
    <DetailPageShell
      eyebrow={service.eyebrow}
      title={<>{service.headline}</>}
      intro={service.intro}
      actionHref={quoteHref}
      actionLabel="Request a quote"
      showBottomCta={false}
      homeHref="/#services"
      heroVisual={<ServiceHeroAnimation slug={service.slug} title={service.title} />}
    >
      <section className="service-insights section-shell">
        <div className="service-insights-heading">
          <p className="service-detail-eyebrow">WHY THIS WORK MATTERS</p>
          <h2>Better outcomes start<br /><span>with the right foundations.</span></h2>
          <p>{service.promise}</p>
        </div>
        <div className="service-insights-grid">
          {service.outcomes.map((outcome, index) => (
            <article className="service-insight-card" key={outcome}>
              <span className="service-insight-icon"><Check size={17} aria-hidden="true" /></span>
              <p>{outcome}</p>
              <span className="service-insight-tag">{service.deliverables[index]?.title ?? service.title}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="service-framework section-shell">
        <div className="service-section-heading">
          <div>
            <p className="service-detail-eyebrow">THE AXSORA FRAMEWORK</p>
            <h2>A considered approach.<br /><span>Built around your goal.</span></h2>
          </div>
          <p>Good work comes from clear priorities, the right craft, and a process that keeps you in the loop.</p>
        </div>
        <div className="service-framework-grid">
          {service.process.map((step, index) => (
            <article className="service-framework-step" key={step.title}>
              <span className="service-framework-icon">{String(index + 1).padStart(2, '0')}</span>
              <p>STEP {String(index + 1).padStart(2, '0')}</p>
              <h3>{step.title}</h3>
              <span>{step.description}</span>
            </article>
          ))}
        </div>
      </section>

      {isAiService && (
        <section className="ai-capabilities section-shell">
          <div className="ai-capabilities-visual">
            <video
              src="/WhatsApp Video 2026-10-29 at 12.59.31 AM.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
            <span>AI THAT FITS YOUR WORK</span>
          </div>
          <div className="ai-capabilities-copy">
            <p className="service-detail-eyebrow">ARTIFICIAL INTELLIGENCE &amp; AUTOMATION</p>
            <h2>Useful AI solutions.<br /><span>Real work made lighter.</span></h2>
            <p>We look for repetitive tasks and disconnected systems that slow a team down, then design practical automations that support people and improve everyday workflows.</p>
            <div className="ai-capability-grid">
              {service.deliverables.slice(0, 3).map((capability, index) => (
                <article className="ai-capability-card" key={capability.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </article>
              ))}
            </div>
            <Link className="service-detail-text-link" href={quoteHref}>Explore an automation idea <ArrowRight size={16} /></Link>
          </div>
        </section>
      )}

      <section className="service-deliverables section-shell">
        <div className="service-section-heading">
          <div>
            <p className="service-detail-eyebrow">WHAT WE DELIVER</p>
            <h2>Useful outputs.<br /><span>Clear next steps.</span></h2>
            <p className="service-deliverables-intro">Every engagement is tailored. These are practical pieces we can shape with you to move the work forward.</p>
          </div>
        </div>
        <div className="service-artifact-list">
          {service.deliverables.map((item, index) => (
            <article className="service-artifact" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
              <Check size={17} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="service-industries section-shell">
        <div className="service-section-heading">
          <div>
            <p className="service-detail-eyebrow">WHERE IT CAN MAKE A DIFFERENCE</p>
            <h2>Different industries.<br /><span>Same thoughtful approach.</span></h2>
          </div>
          <p>We adapt the work to the customers, context, and priorities that make your business unique.</p>
        </div>
        <div className="service-industries-grid">
          {service.industries.map((industry, index) => (
            <article className="service-industry-card" key={industry.name}>
              <span>0{index + 1}</span>
              <h3>{industry.name}</h3>
              <p>{industry.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-journey-section section-shell">
        <div className="service-faq-heading">
          <p className="service-detail-eyebrow">HOW WE WORK</p>
          <h2>A clear path from idea to impact.</h2>
          <p>Choose a step to see how we move your {service.title.toLowerCase()} project forward.</p>
        </div>
        <ServiceJourney steps={service.process} />
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
          {selectedWork.slice(0, 3).map((project, index) => (
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

      <ServiceFaqs service={service} />
      <ServiceQuoteForm serviceName={service.title} />
    </DetailPageShell>
  );
}
