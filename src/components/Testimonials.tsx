'use client';

import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  { quote: 'Axsora understood what we were trying to build and turned it into a digital experience that feels clear, modern, and genuinely useful.', name: 'Sarah Mitchell', role: 'Founder, I Go Above', initials: 'SM' },
  { quote: 'The communication was excellent from the first call. We always knew what was happening, what was next, and why each decision mattered.', name: 'Daniel Brooks', role: 'Director, London Plant Maintenance', initials: 'DB', avatarLogo: '/client-logos/londonplantmaintenance.png' },
  { quote: 'They brought strategy and execution together beautifully. The result is a product we can confidently grow with.', name: 'Amina Khan', role: 'Operations Lead, Truston Finance', initials: 'AK', avatarLogo: '/client-logos/truston-finance-hires.png' },
  { quote: 'The project gave us a much clearer way to present our business online. The process felt considered from the first conversation through launch.', name: 'Sample client 01', role: 'Replace with verified reviewer details', initials: '01', sample: true },
  { quote: 'We needed a digital experience that felt like our brand and worked smoothly for customers. This sample quote should be replaced with approved client feedback.', name: 'Sample client 02', role: 'Replace with verified reviewer details', initials: '02', sample: true },
  { quote: 'The team helped us bring a complicated idea into focus and made the next steps easy to understand. Replace this sample with a real review.', name: 'Sample client 03', role: 'Replace with verified reviewer details', initials: '03', sample: true },
  { quote: 'From early planning to the finished experience, the collaboration kept our goals at the centre. Replace this sample with approved client feedback.', name: 'Sample client 04', role: 'Replace with verified reviewer details', initials: '04', sample: true },
  { quote: 'We appreciated the thoughtful communication and the care put into the details. Replace this sample text with a genuine client review.', name: 'Sample client 05', role: 'Replace with verified reviewer details', initials: '05', sample: true },
  { quote: 'The new experience makes it easier for people to understand what we offer and what to do next. Replace this sample with a verified review.', name: 'Sample client 06', role: 'Replace with verified reviewer details', initials: '06', sample: true },
  { quote: 'A practical, collaborative process helped us move from an early idea to a clear plan. Replace this sample with real client feedback.', name: 'Sample client 07', role: 'Replace with verified reviewer details', initials: '07', sample: true },
  { quote: 'We wanted a more confident digital presence and a smoother customer journey. Replace this sample quote with an approved review.', name: 'Sample client 08', role: 'Replace with verified reviewer details', initials: '08', sample: true },
  { quote: 'The team listened carefully, shared useful direction, and helped us make progress with confidence. Replace this sample with a genuine review.', name: 'Sample client 09', role: 'Replace with verified reviewer details', initials: '09', sample: true },
  { quote: 'The result feels more aligned with where our business is going next. Replace this sample text with approved feedback from a real client.', name: 'Sample client 10', role: 'Replace with verified reviewer details', initials: '10', sample: true },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];
  const count = String(testimonials.length).padStart(2, '0');
  return (
    <section className="testimonials-section section-shell" id="testimonials">
      <div className="testimonials-heading"><div className="section-kicker"><span>07</span> Client stories</div><h2>Good partnerships<br /><span>show in the work.</span></h2><p>We work closely with ambitious teams and measure our success by the confidence and momentum we help create.</p></div>
      <div className="testimonial-card">
        <Quote className="testimonial-quote-mark" size={56} />
        {item.sample && <span className="testimonial-sample-badge">Sample review — replace before publishing</span>}
        <p className="testimonial-quote">{item.quote}</p>
        <div className="testimonial-meta">
          <div className={`testimonial-avatar${item.avatarLogo ? ' testimonial-avatar--logo' : ''}`}>
            {item.avatarLogo ? <Image src={item.avatarLogo} width={42} height={42} alt="" /> : item.initials}
          </div>
          <div><strong>{item.name}</strong><span>{item.role}</span></div>
        </div>
        <div className="testimonial-controls"><span>{String(active + 1).padStart(2, '0')} / {count}</span><button type="button" onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial"><ArrowLeft size={16} /></button><button type="button" onClick={() => setActive((active + 1) % testimonials.length)} aria-label="Next testimonial"><ArrowRight size={16} /></button></div>
      </div>
    </section>
  );
}