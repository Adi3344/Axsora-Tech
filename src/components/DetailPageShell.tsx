import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';
import ThemeToggle from '@/components/ThemeToggle';

export default function DetailPageShell({
  eyebrow,
  title,
  intro,
  children,
  actionHref = '/#contact',
  actionLabel = 'Get a quote',
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  children: React.ReactNode;
  actionHref?: string;
  actionLabel?: string;
}) {
  return (
    <main className="detail-page">
      <header className="detail-header section-shell">
        <Link className="detail-brand" href="/">axsora<span>tech</span></Link>
        <nav className="detail-nav" aria-label="Page navigation">
          <Link href="/#about">About</Link>
          <Link href="/#services">Services</Link>
          <Link className="detail-nav-cta" href={actionHref}>{actionLabel} <ArrowUpRight size={14} /></Link>
          <ThemeToggle />
        </nav>
      </header>
      <section className="detail-hero section-shell">
        <div className="detail-hero-copy">
          <Link className="detail-back-link" href="/">← Back to home</Link>
          <p className="detail-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="detail-intro">{intro}</p>
          <Link className="detail-primary-button" href={actionHref}>Start a conversation <ArrowUpRight size={16} /></Link>
        </div>
        <div className="detail-hero-orbit" aria-hidden="true"><span>AX</span><i /><i /><i /></div>
      </section>
      {children}
      <section className="detail-cta section-shell">
        <div><p className="detail-eyebrow">READY WHEN YOU ARE</p><h2>Let&apos;s make the next move count.</h2></div>
        <Link className="detail-primary-button" href={actionHref}>Talk to our team <ArrowRight size={16} /></Link>
      </section>
      <SiteFooter />
    </main>
  );
}