import { ChevronDown } from 'lucide-react';
import type { ServiceDetail } from '@/data/services';

export default function ServiceFaqs({ service }: { service: ServiceDetail }) {
  const faqs = [
    {
      question: `What is included in your ${service.title.toLowerCase()} service?`,
      answer: `The scope can include ${service.deliverables.map(({ title }) => title.toLowerCase()).join(', ')}. We recommend the right combination after understanding your goals and current setup.`,
    },
    {
      question: 'Can the scope be tailored to my business?',
      answer: 'Yes. We shape the work around your audience, priorities, existing tools, and budget rather than forcing a fixed package.',
    },
    {
      question: 'How long does a project take?',
      answer: 'Timing depends on the scope, decision points, and any integrations or content involved. We outline milestones and timing after the initial discovery conversation.',
    },
    {
      question: 'What do you need from us to get started?',
      answer: 'A little context about your goals, audience, current challenges, and timing is enough to start. We will guide you through any additional information needed for this service.',
    },
    {
      question: 'How do we request a quote?',
      answer: 'Use the project form below to share your contact details and a short description of what you need. We will receive a prepared email specific to this service.',
    },
  ];

  return (
    <section className="service-faq-section section-shell">
      <div className="service-faq-heading">
        <p className="service-detail-eyebrow">FAQ</p>
        <h2>Questions, answered.</h2>
        <p>A few helpful details about getting started with {service.title.toLowerCase()}.</p>
      </div>
      <div className="service-faq-list">
        {faqs.map((faq, index) => (
          <details className="service-faq-item" key={faq.question} open={index === 0}>
            <summary><span>{faq.question}</span><ChevronDown size={17} aria-hidden="true" /></summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
