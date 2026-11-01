import { ArrowUpRight, BadgeCheck } from 'lucide-react';
import Link from 'next/link';

export default function Testimonials() {
  return (
    <section className="testimonials-section section-shell" id="testimonials">
      <div className="testimonials-heading">
        <div className="section-kicker"><span>07</span> Client stories</div>
        <h2>Good partnerships<br /><span>start with trust.</span></h2>
        <p>We only share client feedback that has been genuinely provided and approved for publication. We&apos;re currently gathering those stories.</p>
      </div>
      <div className="testimonial-card testimonial-pending">
        <div className="testimonial-pending-icon"><BadgeCheck size={26} /></div>
        <p className="testimonial-pending-label">VERIFIED CLIENT FEEDBACK</p>
        <h3>Client stories are coming soon.</h3>
        <p className="testimonial-pending-copy">In the meantime, explore the work we&apos;ve created for growing businesses.</p>
        <Link className="testimonial-work-link" href="/portfolio">Explore our work <ArrowUpRight size={16} /></Link>
      </div>
    </section>
  );
}
