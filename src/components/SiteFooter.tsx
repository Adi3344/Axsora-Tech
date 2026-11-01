import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div><Link className="brand footer-brand" href="/"><Image src="/logo.png" width={512} height={512} alt="" /><span>axsora<span className="brand-tech">tech</span></span></Link><p>More than an agency — your growth partner.</p></div>
        <div className="footer-column"><span>Explore</span><Link href="/#about">About us</Link><Link href="/#services">Services</Link><Link href="/portfolio">Portfolio</Link></div>
        <div className="footer-column"><span>Connect</span><Link href="/#testimonials">Testimonials</Link><Link href="/#faqs">FAQs</Link><Link href="/#contact">Contact us <ArrowUpRight size={13} /></Link></div>
        <div className="footer-column footer-contact"><span>Have a project in mind?</span><a href="mailto:support@axsoratech.com">support@axsoratech.com</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Axsora Tech. All rights reserved.</span><span>Built with intention.</span></div>
    </footer>
  );
}