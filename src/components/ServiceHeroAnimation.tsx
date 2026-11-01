import { ArrowDown, ArrowUpRight, Bot, Heart, MessageCircle, MousePointer2, Play, Sparkles } from 'lucide-react';

type ServiceHeroAnimationProps = {
  slug: string;
  title: string;
};

const animationLabels: Record<string, string> = {
  'web-design-development': 'DIGITAL EXPERIENCE',
  'social-media-management': 'CONTENT IN MOTION',
  'ai-automations': 'CONNECTED WORKFLOW',
  'growth-marketing': 'GROWTH IN ACTION',
};

export default function ServiceHeroAnimation({ slug, title }: ServiceHeroAnimationProps) {
  const label = animationLabels[slug] ?? 'SERVICE IN MOTION';

  return (
    <div className={`service-hero-visual service-hero-visual--${slug}`} role="img" aria-label={`${title} animated illustration`}>
      <div className="service-motion-orbit service-motion-orbit--outer" />
      <div className="service-motion-orbit service-motion-orbit--inner" />
      <span className="service-motion-label">{label}</span>

      {slug === 'web-design-development' && (
        <div className="motion-browser">
          <div className="motion-browser-top"><span /><span /><span /><i /></div>
          <div className="motion-browser-content">
            <div className="motion-browser-copy">
              <i className="motion-line motion-line--short" />
              <i className="motion-line motion-line--title" />
              <i className="motion-line motion-line--title motion-line--second" />
              <i className="motion-line motion-line--body" />
              <i className="motion-button" />
            </div>
            <div className="motion-browser-art"><span /><i /><b /></div>
          </div>
          <div className="motion-cursor"><MousePointer2 size={26} fill="currentColor" /></div>
        </div>
      )}

      {slug === 'social-media-management' && (
        <div className="motion-social">
          <div className="motion-social-card motion-social-card--back"><div /><i /><i /><i /></div>
          <div className="motion-social-card motion-social-card--front">
            <div className="motion-social-image"><Play size={20} fill="currentColor" /></div>
            <span className="motion-social-avatar" />
            <i className="motion-line motion-line--title" />
            <i className="motion-line motion-line--body" />
            <div className="motion-social-actions"><Heart size={15} /><MessageCircle size={15} /><ArrowUpRight size={15} /></div>
          </div>
          <span className="motion-social-bubble motion-social-bubble--one"><Heart size={17} fill="currentColor" /></span>
          <span className="motion-social-bubble motion-social-bubble--two"><MessageCircle size={17} /></span>
        </div>
      )}

      {slug === 'ai-automations' && (
        <div className="motion-workflow">
          <span className="motion-flow-line motion-flow-line--one" />
          <span className="motion-flow-line motion-flow-line--two" />
          <span className="motion-flow-line motion-flow-line--three" />
          <div className="motion-flow-node motion-flow-node--start"><MessageCircle size={21} /></div>
          <div className="motion-flow-node motion-flow-node--ai"><Bot size={27} /><Sparkles className="motion-sparkle" size={14} /></div>
          <div className="motion-flow-node motion-flow-node--end"><ArrowDown size={21} /></div>
          <span className="motion-flow-caption motion-flow-caption--start">NEW ENQUIRY</span>
          <span className="motion-flow-caption motion-flow-caption--ai">SMART ROUTING</span>
          <span className="motion-flow-caption motion-flow-caption--end">NEXT STEP</span>
          <i className="motion-flow-pulse" />
        </div>
      )}

      {slug === 'growth-marketing' && (
        <div className="motion-growth">
          <div className="motion-growth-top"><span>CAMPAIGN PERFORMANCE</span><i><b /> LIVE</i></div>
          <div className="motion-growth-chart">
            <span className="motion-chart-grid motion-chart-grid--one" />
            <span className="motion-chart-grid motion-chart-grid--two" />
            <span className="motion-chart-grid motion-chart-grid--three" />
            <div className="motion-chart-bars"><i /><i /><i /><i /><i /><i /><i /></div>
            <svg viewBox="0 0 300 160" preserveAspectRatio="none" aria-hidden="true">
              <path className="motion-growth-path" d="M5 137 C38 132 42 110 75 119 S117 94 145 99 S189 61 215 72 S258 32 295 12" />
              <circle cx="295" cy="12" r="5" />
            </svg>
          </div>
          <div className="motion-growth-footer"><span>REACH</span><ArrowUpRight size={15} /><strong>TURNING INTO ACTION</strong></div>
        </div>
      )}

      <span className="service-motion-index" aria-hidden="true">AX / 0{Object.keys(animationLabels).indexOf(slug) + 1}</span>
    </div>
  );
}
