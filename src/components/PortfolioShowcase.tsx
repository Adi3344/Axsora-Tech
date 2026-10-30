'use client';

import { ArrowUpRight, Check, Code2, Database, Smartphone } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const projects = [
  { title: 'Smarter Gym Management with Biometric Access', category: 'Product design & development', description: 'A centralized gym platform connecting biometric access, memberships, payments, attendance, and performance in one simple system.', image: '/about-team/team-collaboration.jpg', points: ['Biometric access control', 'Membership and payment management', 'Attendance and revenue tracking'], tech: ['Python', 'FastAPI', 'React', 'Figma'], icon: Database },
  { title: 'A digital storefront built for everyday growth', category: 'Web design & development', description: 'A faster, clearer customer journey that turns product discovery into confident action across every screen.', image: '/about-team/team-discussion.jpg', points: ['Conversion-focused UX', 'Responsive product journeys', 'Content management system'], tech: ['Next.js', 'TypeScript', 'CMS', 'Figma'], icon: Code2 },
  { title: 'A mobile experience customers return to', category: 'Mobile app development', description: 'A focused mobile product that makes complex workflows feel intuitive, reliable, and effortless for users.', image: '/about-team/team-planning.jpg', points: ['Cross-platform experience', 'Real-time notifications', 'Scalable backend'], tech: ['React Native', 'Node.js', 'API', 'UX/UI'], icon: Smartphone },
];

export default function PortfolioShowcase() {
  const [activeProject, setActiveProject] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProject = () => {
      const track = trackRef.current;
      if (!track || window.innerWidth <= 800) return;
      const trackTop = track.getBoundingClientRect().top + window.scrollY;
      const index = Math.max(0, Math.min(projects.length - 1, Math.floor((window.scrollY - trackTop + window.innerHeight * .5) / window.innerHeight)));
      setActiveProject(index);
    };
    updateProject();
    window.addEventListener('scroll', updateProject, { passive: true });
    window.addEventListener('resize', updateProject);
    return () => { window.removeEventListener('scroll', updateProject); window.removeEventListener('resize', updateProject); };
  }, []);

  const chooseProject = (index: number) => {
    setActiveProject(index);
    if (window.innerWidth > 800 && trackRef.current) {
      const trackTop = trackRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: trackTop + index * window.innerHeight + 8, behavior: 'smooth' });
    }
  };

  const project = projects[activeProject];
  const ProjectIcon = project.icon;

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-heading section-shell">
        <div className="section-kicker"><span>05</span> Our portfolio</div>
        <h2>Stories of successful<br /><span>projects delivered.</span></h2>
        <p>Selected work that shows how we turn complex challenges into clear, useful digital products.</p>
      </div>
      <div className="portfolio-scroll-layout section-shell">
        <div className="portfolio-sticky">
          <article className="portfolio-card" key={project.title}>
            <div className="portfolio-card-copy">
              <div className="portfolio-card-category"><ProjectIcon size={16} /> {project.category}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <h4>Features</h4>
              <ul>{project.points.map((point) => <li key={point}><Check size={14} /> {point}</li>)}</ul>
              <h4>Technologies used</h4>
              <div className="portfolio-tech">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
              <a href="#contact" className="portfolio-card-link">Explore this work <ArrowUpRight size={15} /></a>
            </div>
            <div className="portfolio-card-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 900px) 90vw, 42vw" /></div>
          </article>
          <div className="portfolio-progress"><span style={{ width: `${((activeProject + 1) / projects.length) * 100}%` }} /></div>
          <div className="portfolio-dots" aria-label="Choose portfolio project">
            {projects.map((item, index) => <button type="button" className={activeProject === index ? 'is-active' : ''} onClick={() => chooseProject(index)} aria-label={`Show ${item.title}`} key={item.title}><span /></button>)}
          </div>
        </div>
        <div className="portfolio-stage-track" ref={trackRef} aria-label="Portfolio projects">
          {projects.map((item, index) => (
            <div className={`portfolio-step${activeProject === index ? ' is-active' : ''}`} data-index={index} key={item.title} aria-hidden="true" />
          ))}
        </div>
      </div>
    </section>
  );
}