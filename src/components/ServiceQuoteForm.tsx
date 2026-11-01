'use client';

import { ArrowUpRight, Mail } from 'lucide-react';
import { FormEvent } from 'react';

export default function ServiceQuoteForm({ serviceName }: { serviceName: string }) {
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `Quote request: ${serviceName}`;
    const body = [
      `Service: ${serviceName}`,
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      '',
      'Project details:',
      formData.get('project'),
    ].join('\n');

    window.location.href = `mailto:support@axsoratech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="service-quote section-shell" id="quote">
      <div className="service-quote-copy">
        <p className="service-detail-eyebrow">YOUR NEXT STEP</p>
        <h2>Let&apos;s talk about <span>{serviceName.toLowerCase()}.</span></h2>
        <p>Share a little about what you need. We&apos;ll open a ready-to-send email with your details so you can request a tailored quote.</p>
        <a href="mailto:support@axsoratech.com"><Mail size={17} /> support@axsoratech.com</a>
      </div>
      <form className="service-quote-form" onSubmit={prepareEmail}>
        <input type="hidden" name="service" value={serviceName} />
        <div className="service-quote-form-row">
          <label>Your name<input autoComplete="name" name="name" placeholder="How should we address you?" required /></label>
          <label>Email address<input autoComplete="email" name="email" type="email" placeholder="you@company.com" required /></label>
        </div>
        <label>What would you like to achieve?<textarea name="project" rows={5} placeholder={`Tell us a little about your ${serviceName.toLowerCase()} project, goals, or timeline.`} required /></label>
        <button className="detail-primary-button" type="submit">Prepare my quote request <ArrowUpRight size={17} /></button>
        <p className="service-quote-note">Your email app will open with your request ready to review and send.</p>
      </form>
    </section>
  );
}
