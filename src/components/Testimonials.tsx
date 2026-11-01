'use client';

import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    quote: 'Axsora rebuilt our website from scratch and it’s faster, cleaner and much easier for customers to use. We started getting more enquiries within the first few weeks.',
    service: 'Website Development',
    client: 'London Plant Maintenance',
    role: 'Commercial plant care',
    logo: '/client-logos/londonplantmaintenance.png',
  },
  {
    quote: 'They listened to what we needed instead of pushing a template. The site looks great on mobile and we can update it ourselves without any hassle.',
    service: 'Website Development',
    client: 'A2Z Finance & Protection',
    role: 'Mortgage & finance',
    logo: '/client-logos/a2z-finance-protection-hires.png',
  },
  {
    quote: 'From the first call to launch day, communication was clear and every deadline was met. Honestly one of the smoothest projects we’ve done.',
    service: 'Website Development',
    client: 'De Kinderen Auto',
    role: 'Automotive',
    logo: '/client-logos/dekinderen-auto-hires.png',
  },
  {
    quote: 'Our Instagram went from random posts to a page that actually looks like a brand. The content calendar alone saves me hours every month.',
    service: 'Social Media Marketing',
    client: 'Chanceladys Coffee',
    role: 'Food & beverage',
    logo: '/client-logos/chanceladys-coffee.png',
  },
  {
    quote: 'They understood our audience quickly and the content felt natural, not salesy. Engagement has been steadily climbing since we started.',
    service: 'Social Media Marketing',
    client: 'Wiktoria Nutrition',
    role: 'Nutrition & wellbeing',
    logo: '/client-logos/wiktoria-nutrition-hires.png',
  },
  {
    quote: 'Reliable, creative and always on time. I never have to chase them for posts or reports.',
    service: 'Social Media Marketing',
    client: 'Avera Travel',
    role: 'Travel planning',
    logo: '/client-logos/avera-travel.png',
  },
  {
    quote: 'We were doing so much manual work every day. Axsora automated our lead follow ups and booking process, and our team finally has time to focus on clients.',
    service: 'AI Automation',
    client: 'Truston Finance & Advisory',
    role: 'Finance & accounting',
    logo: '/client-logos/truston-finance-hires.png',
  },
  {
    quote: 'They explained everything in simple terms and built a system that just runs in the background. It’s like having an extra team member.',
    service: 'AI Automation',
    client: 'Ready2Sell Homes',
    role: 'Property',
    logo: '/client-logos/ready2sell-homes.png',
  },
  {
    quote: 'Our ads finally make sense. They cut the wasted spend, focused on the right audience and the cost per lead dropped noticeably.',
    service: 'Growth Marketing',
    client: 'Amark Logistics',
    role: 'Logistics',
    logo: '/client-logos/amark-logistics-hires.webp',
  },
  {
    quote: 'Honest reporting, clear strategy and real results. They tell you what’s working and what isn’t, which is exactly what we needed.',
    service: 'Growth Marketing',
    client: 'Cogen THC',
    role: 'Specialist business',
    logo: '/client-logos/cogen-thc.png',
  },
  {
    quote: 'Axsora handled our website, social media and ads all in one place. Having one team that understands the whole picture made a huge difference.',
    service: 'Overall Experience',
    client: 'Capraxis',
    role: 'Business services',
    logo: '/client-logos/capraxis-wordmark.png',
  },
  {
    quote: 'Friendly, responsive and genuinely invested in our growth. They feel like part of our business, not an outside agency.',
    service: 'Overall Experience',
    client: 'Warm Walks',
    role: 'Community & care',
    logo: '/client-logos/warm-walks-hires.webp',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const pageSize = 3;
  const pageCount = Math.ceil(testimonials.length / pageSize);
  const visibleTestimonials = testimonials.slice(active * pageSize, (active + 1) * pageSize);

  return (
    <section className="testimonials-section section-shell" id="testimonials">
      <div className="testimonials-heading">
        <div className="section-kicker"><span>07</span> Client stories</div>
        <h2>Trusted by ambitious<br /><span>businesses like yours.</span></h2>
        <p>Experiences shared by clients across website development, social media, AI automation, and growth marketing.</p>
      </div>
      <div className="testimonial-grid" aria-live="polite">
        {visibleTestimonials.map((item) => (
          <article className="testimonial-card" key={item.client}>
            <div className="testimonial-client">
              <Image src={item.logo} width={120} height={44} alt={`${item.client} logo`} />
              <span>{item.client}</span>
            </div>
            <div className="testimonial-card-quote-icon"><Quote size={22} aria-hidden="true" /></div>
            <p className="testimonial-quote">{item.quote}</p>
            <div className="testimonial-meta">
              <div className="testimonial-avatar">{item.client.slice(0, 1)}</div>
              <div>
                <strong>{item.client}</strong>
                <span>{item.role}</span>
              </div>
            </div>
            </article>
        ))}
      </div>
      <div className="testimonial-controls">
        <span>{String(active + 1).padStart(2, '0')} / {String(pageCount).padStart(2, '0')}</span>
        <button type="button" onClick={() => setActive((active - 1 + pageCount) % pageCount)} aria-label="Previous set of client reviews"><ArrowLeft size={16} /></button>
        <button type="button" onClick={() => setActive((active + 1) % pageCount)} aria-label="Next set of client reviews"><ArrowRight size={16} /></button>
      </div>
    </section>
  );
}
