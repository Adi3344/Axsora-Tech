import Image from 'next/image';
import DetailPageShell from '@/components/DetailPageShell';

export default function AboutPage() {
  return (
    <DetailPageShell eyebrow="ABOUT AXSORA TECH" title={<>Digital excellence through <span>innovation &amp; technology.</span></>} intro="We are a multidisciplinary digital partner helping ambitious businesses turn complex ideas into clear, useful, and future-ready experiences.">
      <section className="about-detail-story section-shell">
        <div className="about-detail-image"><Image src="/about-team/team-collaboration.jpg" alt="Axsora Tech team collaborating in a modern office" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        <div className="about-detail-copy"><p className="detail-eyebrow">MORE THAN AN AGENCY</p><h2>Strategy, creativity, and technology in one team.</h2><p>Axsora Tech is a digital transformation company specialising in web development, mobile applications, digital marketing, and intelligent automation. We bring senior thinking and practical delivery together to help businesses move with confidence.</p><p>Our people work across Pakistan, North America, Europe, the Middle East, and Asia-Pacific. Different perspectives make better products, so we build close partnerships with the people who know your business best.</p></div>
      </section>
      <section className="detail-section section-shell"><div className="about-values"><article><span>01</span><h3>Clarity over complexity</h3><p>We make the important things easier to understand, use, and act on.</p></article><article><span>02</span><h3>Useful by design</h3><p>Beautiful work matters more when it creates a real advantage for people.</p></article><article><span>03</span><h3>Built for momentum</h3><p>Every solution is shaped to support the next stage of your growth.</p></article></div></section>
      <section className="about-detail-stats section-shell"><strong>500<small>+</small><em>Projects delivered</em></strong><strong>50<small>+</small><em>Expert professionals</em></strong><strong>30<small>+</small><em>Countries served</em></strong></section>
    </DetailPageShell>
  );
}