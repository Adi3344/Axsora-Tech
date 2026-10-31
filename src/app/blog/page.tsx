import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import DetailPageShell from '@/components/DetailPageShell';
import { blogPosts } from '@/data/siteContent';

export default function BlogPage() {
  return (
    <DetailPageShell eyebrow="THE AXSORA JOURNAL" title={<>Ideas for building <span>what&apos;s next.</span></>} intro="Perspectives on digital growth, design, technology, and the practical decisions that help ambitious businesses move forward.">
      <section className="blog-grid section-shell">{blogPosts.map((post, index) => <article className={`blog-card${index === 0 ? ' blog-card-featured' : ''}`} key={post.slug}><div className="blog-card-art"><span>AX / 0{index + 1}</span><i /></div><div className="blog-card-body"><p className="detail-eyebrow">{post.category} · {post.date}</p><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><Link className="blog-read-link" href={`/blog/${post.slug}`}>Read article <ArrowUpRight size={15} /></Link></div></article>)}</section>
      <section className="detail-section blog-note section-shell"><p className="detail-eyebrow">A NOTE FROM OUR TEAM</p><h2>Good digital work starts with a better question.</h2><p>We share what we are learning because the best partnerships are built on useful ideas, honest conversations, and a shared ambition to make things better.</p></section>
    </DetailPageShell>
  );
}