'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import Image from 'next/image';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Clients', href: '#clients' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

type Client = {
  name: string;
  href: string;
  logo: string | null;
  logoBackground?: 'ice' | 'navy' | 'sage' | 'sand';
};

const clients: Client[] = [
  { name: 'I Go Above', href: 'https://igoabove.com/', logo: '/client-logos/igoabove-hires.png' },
  { name: 'London Plant Maintenance', href: 'https://londonplantmaintenance.co.uk/', logo: '/client-logos/londonplantmaintenance.png', logoBackground: 'ice' },
  { name: 'Edge Pro Roofing', href: 'https://edgeproroofing.com/', logo: '/client-logos/edgepro-roofing.png', logoBackground: 'navy' },
  { name: 'A2Z Finance Protection', href: 'https://a2zfinanceprotection.co.uk/', logo: '/client-logos/a2z-finance-protection-hires.png', logoBackground: 'ice' },
  { name: 'UC Homes', href: 'https://uc-homes.co.uk/', logo: '/client-logos/uc-homes.png' },
  { name: 'CS750', href: 'https://cs750.com/', logo: null },
  { name: 'De Kinderen Auto', href: 'https://dekinderenauto.nl/', logo: '/client-logos/dekinderen-auto.png' },
  { name: 'Elegant Scalp Lux Spa', href: 'https://elegantscalpluxspa.com/', logo: '/client-logos/elegant-scalp-lux-spa.png' },
  { name: 'Wiktoria Nutrition', href: 'https://wiktorianutrition.co.uk/', logo: '/client-logos/wiktoria-nutrition-hires.png', logoBackground: 'sage' },
  { name: 'Noma Counseling', href: 'https://nomacounseling.com/', logo: '/client-logos/noma-counseling-hires.png', logoBackground: 'ice' },
  { name: 'Renu Wound Care', href: 'https://renuwoundcare.com/', logo: '/client-logos/renu-wound-care.png' },
  { name: 'Avera Travel', href: 'https://averatravel.com/', logo: '/client-logos/avera-travel.png' },
  { name: 'Verdikt Studios', href: 'https://verdiktstudios.com/', logo: null },
  { name: 'Bani Jewellers', href: 'https://banijewellers.com/', logo: '/client-logos/bani-jewellers.png' },
  { name: 'Truston Finance', href: 'https://trustonfinance.nl/', logo: '/client-logos/truston-finance.png' },
  { name: 'Cogen THC', href: 'https://cogenthc.com/', logo: '/client-logos/cogen-thc.png' },
  { name: 'Stella Legal Solutions', href: 'https://stellalegalsolutions.com/', logo: '/client-logos/stella-legal-solutions.png' },
  { name: 'Capraxis', href: 'http://capraxis.com/', logo: '/client-logos/capraxis.png' },
  { name: 'Warm Walks Inc.', href: 'https://www.warmwalksinc.com/', logo: '/client-logos/warm-walks-hires.webp', logoBackground: 'sand' },
  { name: 'Todle Legal', href: 'https://todlelegal.com/', logo: '/client-logos/todle-legal.png' },
  { name: 'RS Motors', href: 'https://rs-motors.fr/', logo: '/client-logos/rs-motors.png', logoBackground: 'sand' },
  { name: 'RCF Inc.', href: 'https://rcfinc.org/', logo: '/client-logos/rcf-inc-hires.jpg' },
  { name: 'Spoken Free', href: 'https://spokenfree.com/', logo: '/client-logos/spoken-free-hires.png' },
  { name: 'Sacred Qalam', href: 'https://sacredqalam.com/', logo: '/client-logos/sacred-qalam.png' },
  { name: 'Aeterna Gin', href: 'https://aeternagin.it/', logo: '/client-logos/aeterna-gin.png' },
  { name: 'Ready2Sell Homes', href: 'https://ready2sell.homes/', logo: '/client-logos/ready2sell-homes.png' },
  { name: 'Amark Logistics', href: 'https://amarklogistics.com/', logo: '/client-logos/amark-logistics-hires.webp' },
  { name: 'Chanceladys Coffee', href: 'https://chanceladyscoffee.com/', logo: '/client-logos/chanceladys-coffee.png' },
];

const featuredClientNames = new Set([
  'I Go Above',
  'London Plant Maintenance',
  'Edge Pro Roofing',
  'A2Z Finance Protection',
  'Wiktoria Nutrition',
  'Noma Counseling',
  'Warm Walks Inc.',
  'RS Motors',
  'RCF Inc.',
  'Spoken Free',
  'Sacred Qalam',
  'Amark Logistics',
]);
const featuredClients = clients.filter(
  (client) => client.logo && featuredClientNames.has(client.name),
);

const heroPhrases = [
  { before: '', accent: 'Websites that sell', after: '.' },
  { before: '', accent: 'Marketing that converts', after: '.' },
  { before: '', accent: 'AI that saves time', after: '.' },
  { before: '', accent: 'Apps customers love', after: '.' },
];

const services = [
  {
    number: '01',
    title: 'Social media\nmanagement',
    description:
      'Build a brand people remember. We plan, create, and manage content that grows your community.',
    tags: ['Content strategy', 'Community growth', 'Analytics'],
    video: '/WhatsApp Video 2026-10-29 at 12.59.32 AM (1).mp4',
  },
  {
    number: '02',
    title: 'Growth\nmarketing',
    description:
      'Turn attention into action with focused campaigns built around your audience and your goals.',
    tags: ['SEO & GEO', 'Paid media', 'Conversion'],
    video: '/Growth-Marketing.mp4',
  },
  {
    number: '03',
    title: 'Web design &\ndevelopment',
    description:
      'Make a lasting first impression with a fast, intuitive website designed to move your business forward.',
    tags: ['Creative design', 'Full-stack dev', 'CMS'],
    video: '/Websites-2026-1.mp4',
  },
  {
    number: '04',
    title: 'AI\nautomations',
    description:
      'Give your team more room to think. We connect tools and automate the work that slows you down.',
    tags: ['AI agents', 'Workflow design', 'Integrations'],
    video: '/WhatsApp Video 2026-10-29 at 12.59.31 AM.mp4',
  },
  {
    number: '05',
    title: 'Mobile app\ndevelopment',
    description:
      'From a first sketch to the app store, we create useful mobile experiences people love to use.',
    tags: ['iOS & Android', 'UX/UI design', 'Scalable backend'],
    video: '/WhatsApp Video 2026-10-29 at 12.59.31 AM (1).mp4',
  },
];

const process = [
  {
    number: '01',
    title: 'Get to know you',
    description:
      'We listen first: your goals, your audience, and what success looks like for your business.',
  },
  {
    number: '02',
    title: 'Find the opportunity',
    description:
      'We research your market and map out the clearest path from your challenge to a smart solution.',
  },
  {
    number: '03',
    title: 'Make it happen',
    description:
      'Our team brings the plan to life with thoughtful design, reliable technology, and care.',
  },
  {
    number: '04',
    title: 'Keep growing',
    description:
      'We launch together, learn from the results, and keep improving as your business evolves.',
  },
];

function ClientLogoCard({
  client,
  duplicate = false,
}: {
  client: (typeof clients)[number];
  duplicate?: boolean;
}) {
  return (
    <a
      className={`client-logo-card${duplicate ? ' client-logo-card-duplicate' : ''}`}
      href={client.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={client.name}
      aria-hidden={duplicate || undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      <span
        className={`client-logo${client.logo ? ' client-logo-has-image' : ''}${client.logoBackground ? ` client-logo-surface-${client.logoBackground}` : ''}`}
      >
        {client.logo ? (
          <>
            <span className="client-logo-fallback" aria-hidden="true">
              {client.name.slice(0, 1)}
            </span>
            <Image
              className="client-logo-image"
              fill
              src={client.logo}
              sizes="(max-width: 720px) 90px, 108px"
              alt=""
              onError={(event) => {
                event.currentTarget.parentElement?.classList.add('client-logo-failed');
              }}
            />
          </>
        ) : (
          <span className="client-logo-fallback" aria-hidden="true">
            {client.name.slice(0, 1)}
          </span>
        )}
      </span>
    </a>
  );
}

function HeroTypewriter() {
  const [typed, setTyped] = useState(() => {
    const phrase = heroPhrases[0];
    return {
      text: `${phrase.before}${phrase.accent}${phrase.after}`,
      accentStart: phrase.before.length,
      accentEnd: phrase.before.length + phrase.accent.length,
    };
  });

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let phraseIndex = 0;
    let characterIndex = `${heroPhrases[0].before}${heroPhrases[0].accent}${heroPhrases[0].after}`.length;
    let deleting = false;
    let timeoutId: number;

    const typeNextCharacter = () => {
      const phrase = heroPhrases[phraseIndex];
      const fullText = `${phrase.before}${phrase.accent}${phrase.after}`;
      const accentStart = phrase.before.length;
      const accentEnd = accentStart + phrase.accent.length;

      if (deleting) {
        characterIndex -= 1;
        setTyped({ text: fullText.slice(0, characterIndex), accentStart, accentEnd });

        if (characterIndex === 0) {
          phraseIndex = (phraseIndex + 1) % heroPhrases.length;
          deleting = false;
        }

        timeoutId = window.setTimeout(typeNextCharacter, characterIndex === 0 ? 300 : 36);
        return;
      }

      characterIndex += 1;
      setTyped({ text: fullText.slice(0, characterIndex), accentStart, accentEnd });

      if (characterIndex >= fullText.length) {
        deleting = true;
        timeoutId = window.setTimeout(typeNextCharacter, 1600);
        return;
      }

      timeoutId = window.setTimeout(typeNextCharacter, 65);
    };

    timeoutId = window.setTimeout(typeNextCharacter, 1800);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <span className="hero-typed-line" aria-hidden="true">
      {typed.text.slice(0, typed.accentStart)}
      <span className="hero-typed-accent">
        {typed.text.slice(typed.accentStart, typed.accentEnd)}
      </span>
      {typed.text.slice(typed.accentEnd)}
      <span className="hero-typewriter-caret" />
    </span>
  );
}

function ServicePreview({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(console.error);
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: '100px' },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const aboutRef = useRef<HTMLElement>(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const section = aboutRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="hero" id="home">
        <video
          className="hero-background-video hero-background-video--robot"
          src="/pexels-human-robot-8086907.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <video
          className="hero-background-video hero-background-video--office"
          src="/mixkit-office-team-4809.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="hero-background-shade" aria-hidden="true" />
        <div className="hero-topbar">
          <a href="mailto:support@axsoratech.com">
            <span className="topbar-icon">@</span>
            support@axsoratech.com
          </a>
          <span className="topbar-note">Digital solutions for ambitious ideas</span>
          <a className="topbar-cta" href="#contact">
            Get a quote <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
        <div className="hero-header-wrap">
          <header className="site-header">
            <a className="brand" href="#home" aria-label="Axsora Tech home" onClick={closeMenu}>
              <Image src="/logo.png" width={512} height={512} alt="" />
              <span>
                axsora<span className="brand-tech">tech</span>
              </span>
            </a>

            <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((isOpen) => !isOpen)}
            >
              {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </header>
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <div className="hero-badge">
              <span className="hero-badge-mark" aria-hidden="true">✦</span>
              <span>Helping ambitious businesses grow</span>
            </div>
            <p className="eyebrow">Strategy · Creativity · Technology</p>
            <h1 aria-label="Grow your business with websites that sell, marketing that converts, AI that saves time, and apps customers love.">
              <span className="hero-heading-intro">Grow your business with</span>
              <HeroTypewriter />
            </h1>
            <p className="hero-description">
              We bring marketing, web, AI, and app development together to help your business stand
              out, connect with customers, and grow.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">
                Explore our services <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a className="button button-glass" href="#contact">
                Get Quote
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>28</strong>
                <span>Client brands</span>
              </div>
              <div className="hero-stat">
                <strong>05</strong>
                <span>Digital services</span>
              </div>
              <div className="hero-stat">
                <strong>04</strong>
                <span>Steps to move forward</span>
              </div>
              <div className="hero-stat">
                <strong>360°</strong>
                <span>Strategy to execution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="clients-section" id="clients" aria-labelledby="clients-title">
        <div className="clients-heading">
          <p className="clients-kicker">Trusted by ambitious teams</p>
          <h2 id="clients-title">Companies That Trust Us</h2>
          <p className="clients-subtitle">
            A few of the businesses we&apos;re proud to work alongside.
          </p>
        </div>
        <div className="client-marquees" aria-label="Client website logos">
          {[featuredClients.slice(0, 6), featuredClients.slice(6)].map((row, rowIndex) => (
            <div
              className={`client-marquee-row${rowIndex === 1 ? ' client-marquee-row-reverse' : ''}`}
              key={rowIndex}
            >
              <div className="client-track">
                {row.map((client) => (
                  <ClientLogoCard client={client} key={client.href} />
                ))}
                {row.map((client) => (
                  <ClientLogoCard client={client} duplicate key={`${client.href}-duplicate`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="about-section section-shell"
        id="about"
        aria-labelledby="about-title"
        ref={aboutRef}
      >
        <div className="about-gallery" aria-label="Our team collaborating">
          <div className="about-gallery-column about-gallery-column-left">
            <figure className="about-gallery-card">
              <Image
                src="/about-team/team-collaboration.jpg"
                alt="Team members collaborating around a laptop"
                fill
                sizes="(max-width: 720px) 46vw, 22vw"
              />
            </figure>
            <figure className="about-gallery-card">
              <Image
                src="/about-team/team-planning.jpg"
                alt="Colleagues sharing ideas during a project discussion"
                fill
                sizes="(max-width: 720px) 46vw, 22vw"
              />
            </figure>
          </div>
          <div className="about-gallery-column about-gallery-column-right">
            <figure className="about-gallery-card">
              <Image
                src="/about-team/team-workshop.jpg"
                alt="A team working together during a strategy workshop"
                fill
                sizes="(max-width: 720px) 46vw, 22vw"
              />
            </figure>
            <figure className="about-gallery-card">
              <Image
                src="/about-team/team-discussion.jpg"
                alt="Coworkers discussing ideas around a table"
                fill
                sizes="(max-width: 720px) 46vw, 22vw"
              />
            </figure>
          </div>
        </div>

        <div className="about-content">
          <p className="about-kicker">About us</p>
          <h2 id="about-title">
            Your trusted partner for
            <br />
            <span>digital growth</span>
          </h2>
          <p className="about-description">
            Axsora Tech brings social media, growth marketing, web design and development, AI
            automation, and mobile app development together under one roof. We pair creative
            thinking with practical technology to help businesses build stronger digital
            experiences and keep growing.
          </p>
          <ul className="about-points">
            <li>We listen closely to understand your goals and your customers.</li>
            <li>Creative, marketing, and technology expertise work as one team.</li>
            <li>We build thoughtful digital solutions around real business needs.</li>
            <li>We support your project from the first conversation through launch.</li>
          </ul>
          <a className="about-contact-link" href="#contact">
            Contact Us <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="services-section section-shell" id="services">
        <div className="section-heading">
          <div>
            <div className="section-kicker"><span>02</span> What we do</div>
            <h2>One team.<br /><span>More possibilities.</span></h2>
          </div>
          <p>
            The right mix of creative, digital, and technical expertise to take your business
            where it needs to go.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-media">
                <ServicePreview src={service.video} />
                <span className="service-number">{service.number}</span>
                <span className="service-arrow"><ArrowUpRight size={18} aria-hidden="true" /></span>
              </div>
              <div className="service-info">
                <h3>{service.title.split('\n').map((line, index) => (
                  <span key={line}>{index > 0 && <br />}{line}</span>
                ))}</h3>
                <p>{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section section-shell" id="process">
        <div className="process-heading">
          <div className="section-kicker"><span>03</span> Simple by design</div>
          <h2>Clear steps.<br /><span>Better outcomes.</span></h2>
          <p>Great work starts with a good conversation. Here&apos;s how we turn yours into progress.</p>
        </div>
        <div className="process-list">
          {process.map((step) => (
            <article className="process-step" key={step.number}>
              <span className="process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <ArrowUpRight className="process-arrow" size={20} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <div className="section-kicker"><span>04</span> Have a good one in mind?</div>
        <div className="contact-content">
          <h2>Let&apos;s make<br /><span>it happen.</span></h2>
          <div className="contact-action">
            <p>Tell us where you want to go. We&apos;ll help you find the way.</p>
            <a className="button button-primary" href="mailto:support@axsoratech.com">
              Start a conversation <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <Image src="/logo.png" width={512} height={512} alt="" />
          <span>axsora<span className="brand-tech">tech</span></span>
        </a>
        <p>More than an agency — your growth partner.</p>
        <a className="footer-email" href="mailto:support@axsoratech.com">support@axsoratech.com</a>
        <span className="copyright">© 2026 Axsora Tech. All rights reserved.</span>
      </footer>
    </main>
  );
}
