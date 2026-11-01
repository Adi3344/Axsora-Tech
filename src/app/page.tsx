'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedSolutions from '@/components/FeaturedSolutions';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import SiteFooter from '@/components/SiteFooter';
import ThemeToggle from '@/components/ThemeToggle';

const navigation = [
  { label: 'Home', href: '/#home' },
  { label: 'Clients', href: '#clients' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

type Client = {
  name: string;
  href: string;
  logo: string | null;
  logoBackground?: 'white' | 'dark' | 'cream' | 'navy';
};

const clients: Client[] = [
  { name: 'London Plant Maintenance', href: 'https://londonplantmaintenance.co.uk/', logo: '/client-logos/londonplantmaintenance.png', logoBackground: 'white' },
  { name: 'Edge Pro Roofing', href: 'https://edgeproroofing.com/', logo: '/client-logos/edgepro-roofing.png', logoBackground: 'navy' },
  { name: 'A2Z Finance Protection', href: 'https://a2zfinanceprotection.co.uk/', logo: '/client-logos/a2z-finance-protection-hires.png', logoBackground: 'white' },
  { name: 'UC Homes', href: 'https://uc-homes.co.uk/', logo: '/client-logos/uc-homes.png', logoBackground: 'white' },
  { name: 'CS750', href: 'https://cs750.com/', logo: null },
  { name: 'De Kinderen Auto', href: 'https://dekinderenauto.nl/', logo: '/client-logos/dekinderen-auto-hires.png', logoBackground: 'white' },
  { name: 'Wiktoria Nutrition', href: 'https://wiktorianutrition.co.uk/', logo: '/client-logos/wiktoria-nutrition-hires.png', logoBackground: 'white' },
  { name: 'Noma Counseling', href: 'https://nomacounseling.com/', logo: '/client-logos/noma-counseling-hires.png', logoBackground: 'white' },
  { name: 'Avera Travel', href: 'https://averatravel.com/', logo: '/client-logos/avera-travel.png', logoBackground: 'white' },
  { name: 'Verdikt Studios', href: 'https://verdiktstudios.com/', logo: null },
  { name: 'Bani Jewellers', href: 'https://banijewellers.com/', logo: '/client-logos/bani-jewellers.png', logoBackground: 'white' },
  { name: 'Truston Finance', href: 'https://trustonfinance.nl/', logo: '/client-logos/truston-finance-hires.png', logoBackground: 'navy' },
  { name: 'Cogen THC', href: 'https://cogenthc.com/', logo: '/client-logos/cogen-thc.png', logoBackground: 'white' },
  { name: 'Capraxis', href: 'http://capraxis.com/', logo: '/client-logos/capraxis-wordmark.png', logoBackground: 'white' },
  { name: 'Warm Walks Inc.', href: 'https://www.warmwalksinc.com/', logo: '/client-logos/warm-walks-hires.webp', logoBackground: 'white' },
  { name: 'Todle Legal', href: 'https://todlelegal.com/', logo: '/client-logos/todle-legal.png', logoBackground: 'white' },
  { name: 'RCF Inc.', href: 'https://rcfinc.org/', logo: '/client-logos/rcf-inc-hires.jpg', logoBackground: 'white' },
  { name: 'Ready2Sell Homes', href: 'https://ready2sell.homes/', logo: '/client-logos/ready2sell-homes.png', logoBackground: 'white' },
  { name: 'Amark Logistics', href: 'https://amarklogistics.com/', logo: '/client-logos/amark-logistics-hires.webp', logoBackground: 'white' },
  { name: 'Chanceladys Coffee', href: 'https://chanceladyscoffee.com/', logo: '/client-logos/chanceladys-coffee.png', logoBackground: 'white' },
];

const featuredClients = clients.filter(
  (client) => !['CS750', 'Verdikt Studios', 'Todle Legal', 'UC Homes'].includes(client.name),
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
    title: 'Social Media\nManagement',
    description:
      'Build a brand people remember. We plan, create, and manage content that grows your community and keeps your audience engaged.',
    tags: ['Content strategy', 'Community growth', 'Analytics'],
    video: '/WhatsApp Video 2026-10-29 at 12.59.32 AM (1).mp4',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
  },
  {
    number: '02',
    title: 'Growth\nMarketing',
    description:
      'Turn attention into action with focused campaigns built around your audience and your goals for maximum ROI.',
    tags: ['SEO & GEO', 'Paid media', 'Conversion'],
    video: '/Growth-Marketing.mp4',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    number: '03',
    title: 'Web Design &\nDevelopment',
    description:
      'Make a lasting first impression with a fast, intuitive website designed to move your business forward and convert visitors.',
    tags: ['Creative design', 'Full-stack dev', 'CMS'],
    video: '/Websites-2026-1.mp4',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
  },
  {
    number: '04',
    title: 'AI\nAutomations',
    description:
      'Give your team more room to think. We connect tools and automate repetitive work that slows your business down.',
    tags: ['AI agents', 'Workflow design', 'Integrations'],
    video: '/WhatsApp Video 2026-10-29 at 12.59.31 AM.mp4',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
  },
  {
    number: '05',
    title: 'Mobile App\nDevelopment',
    description:
      'From a first sketch to the app store, we create useful mobile experiences people love to use every day.',
    tags: ['iOS & Android', 'UX/UI design', 'Scalable backend'],
    video: '/WhatsApp Video 2026-10-29 at 12.59.31 AM (1).mp4',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
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
        className={`client-logo${client.logo ? ' client-logo-has-image' : ''}${
          client.logoBackground ? ` client-logo-surface-${client.logoBackground}` : ' client-logo-surface-white'
        }`}
      >
        {client.logo ? (
          <>
            <span className="client-logo-fallback" aria-hidden="true">
              {client.name}
            </span>
            <Image
              className="client-logo-image"
              fill
              src={client.logo}
              sizes="(max-width: 720px) 104px, 130px"
              alt={client.name}
              onError={(event) => {
                event.currentTarget.parentElement?.classList.add('client-logo-failed');
              }}
            />
          </>
        ) : (
          <span className="client-logo-fallback" aria-hidden="true">
            {client.name}
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

function HeroParticles() {
  const particles = Array.from({ length: 28 }, (_, index) => ({
    id: index,
    left: `${(index * 37) % 100}%`,
    top: `${(index * 61) % 100}%`,
    size: `${2 + (index % 3)}px`,
    delay: `${(index % 9) * -0.7}s`,
    duration: `${5 + (index % 5)}s`,
  }));

  return (
    <div className="hero-particles" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
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
          preload="none"
          aria-hidden="true"
        />
        <video
          className="hero-background-video hero-background-video--office"
          src="/mixkit-office-team-4809.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        />
        <HeroParticles />
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

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ThemeToggle />

              <button
                className="menu-toggle"
                type="button"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((isOpen) => !isOpen)}
              >
                {menuOpen ? <X size={25} /> : <Menu size={25} />}
              </button>
            </div>
          </header>
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <div className="hero-badge">
              <span className="hero-badge-mark" aria-hidden="true">✦</span>
              <span>Strategy · Creativity · Technology</span>
            </div>
            <h1 aria-label="Grow your business with websites that sell, marketing that converts, AI that saves time, and apps customers love.">
              <span className="hero-heading-intro">Grow your business with</span>
              <HeroTypewriter />
            </h1>
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
          {[featuredClients].map((row) => (
            <div className="client-marquee-row" key="all-clients">
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
        <div className="about-wrapper">
          {/* Two Column Layout - Image Left, Content Right */}
          <div className="about-content-row">
            {/* Left Column - Large Professional Team Image */}
            <div className="about-image-col">
              <figure className="about-gallery-large">
                <Image
                  src="/about-team/team-collaboration.jpg"
                  alt="Professional team working together with AI technology in modern office"
                  fill
                  sizes="(max-width: 720px) 100vw, 50vw"
                />
              </figure>
            </div>

            {/* Right Column - Content */}
            <div className="about-content-col">
              <h2 id="about-title">
                <span className="about-title-main">Digital Excellence Through</span>
                <span className="about-title-highlight">Innovation &amp; Technology</span>
              </h2>

              <p className="about-description">
                <strong>Axsora Tech</strong> is a premier digital transformation company specializing in end-to-end web development, mobile applications, digital marketing, and enterprise software solutions. With over a decade of proven expertise, we empower businesses across Pakistan, North America, Europe, Middle East, and Asia-Pacific regions to achieve digital excellence through cutting-edge technology and strategic innovation.
              </p>

              <p className="about-description">
                Our multidisciplinary team of expert developers, UX/UI designers, and digital strategists delivers comprehensive digital solutions that drive measurable business growth. We combine technical excellence with strategic thinking to create scalable, secure, and future-ready digital ecosystems for enterprises of all sizes.
              </p>

              {/* Stats */}
              <div className="about-stats">
                <div className="about-stat-item about-stat-primary">
                  <div className="about-stat-number">500+</div>
                  <div className="about-stat-label">Projects Delivered</div>
                </div>
                <div className="about-stat-item">
                  <div className="about-stat-number">50+</div>
                  <div className="about-stat-label">Expert Professionals</div>
                </div>
                <div className="about-stat-item">
                  <div className="about-stat-number">30+</div>
                  <div className="about-stat-label">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section section-shell" id="services">
        <div className="services-header">
          <div className="services-kicker">WHAT WE DO</div>
          <h2 className="services-title">
            Our <span className="services-title-highlight">Services</span>
          </h2>
          <div className="services-title-underline" />
        </div>

        <div className="services-grid-genxe">
          {services.map((service) => (
            <article className="service-card-genxe" key={service.number}>
              <div className="service-card-video-wrap">
                <span className="service-card-number">{service.number}</span>
                <span className="service-card-scanline" aria-hidden="true" />
                <ServicePreview src={service.video} />
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">
                  {service.title.split('\n').map((line, index) => (
                    <span key={line}>{index > 0 && <br />}{line}</span>
                  ))}
                </h3>
                <p className="service-card-desc">{service.description}</p>
                <div className="service-card-tags">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <Link className="service-card-btn" href="#contact">
                  Discuss this service <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="services-footer">
          <span className="services-footer-text">Lets Discover More</span>
          <Link className="services-footer-link" href="#contact">
            Discuss your project <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <WhyChooseUs />

      <FeaturedSolutions />

      <PortfolioShowcase />

      <Testimonials />

      <FaqSection />

      <ContactSection />

      <SiteFooter />
    </main>
  );
}
