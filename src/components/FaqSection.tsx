'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  ['What services does Axsora Tech offer?', 'We help with web development, mobile applications, digital marketing, AI automation, product design, and scalable software solutions.'],
  ['How do we get started on a project?', 'Send us a short note about your goals. We will schedule a discovery conversation, understand the opportunity, and recommend a clear next step.'],
  ['Can you work with our existing team or technology?', 'Yes. We regularly join existing teams, improve current products, and work with the tools and technologies that fit the project best.'],
  ['How long does a project usually take?', 'Every project is different, but after discovery we provide a practical roadmap with milestones, responsibilities, and a realistic delivery window.'],
  ['Do you provide support after launch?', 'Yes. We can continue with improvements, monitoring, maintenance, optimization, and ongoing growth support after launch.'],
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);
  return <section className="faq-section section-shell" id="faqs"><div className="faq-heading"><div className="section-kicker"><span>08</span> Frequently asked questions</div><h2>Clear answers.<br /><span>No guesswork.</span></h2><p>Everything you need to know before taking the next step.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item${open === index ? ' is-open' : ''}`} key={question}><button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>0{index + 1}</span><strong>{question}</strong><ChevronDown size={19} /></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></section>;
}