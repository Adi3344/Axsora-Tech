'use client';

import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  { quote: 'Axsora understood what we were trying to build and turned it into a digital experience that feels clear, modern, and genuinely useful.', name: 'Sarah Mitchell', role: 'Founder, I Go Above', initials: 'SM' },
  { quote: 'The communication was excellent from the first call. We always knew what was happening, what was next, and why each decision mattered.', name: 'Daniel Brooks', role: 'Director, London Plant Maintenance', initials: 'DB' },
  { quote: 'They brought strategy and execution together beautifully. The result is a product we can confidently grow with.', name: 'Amina Khan', role: 'Operations Lead, Truston Finance', initials: 'AK' },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];
  return (
    <section className="testimonials-section section-shell" id="testimonials">
      <div className="testimonials-heading"><div className="section-kicker"><span>07</span> Client stories</div><h2>Good partnerships<br /><span>show in the work.</span></h2><p>We work closely with ambitious teams and measure our success by the confidence and momentum we help create.</p></div>
      <div className="testimonial-card">
        <Quote className="testimonial-quote-mark" size={56} />
        <p className="testimonial-quote">{item.quote}</p>
        <div className="testimonial-meta"><div className="testimonial-avatar">{item.initials}</div><div><strong>{item.name}</strong><span>{item.role}</span></div></div>
        <div className="testimonial-controls"><span>0{active + 1} / 0{testimonials.length}</span><button type="button" onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial"><ArrowLeft size={16} /></button><button type="button" onClick={() => setActive((active + 1) % testimonials.length)} aria-label="Next testimonial"><ArrowRight size={16} /></button></div>
      </div>
    </section>
  );
}