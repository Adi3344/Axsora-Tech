import { notFound } from 'next/navigation';
import Link from 'next/link';
import DetailPageShell from '@/components/DetailPageShell';
import { blogPosts } from '@/data/siteContent';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <DetailPageShell eyebrow={`${post.category} / ${post.date}`} title={post.title} intro={post.excerpt}>
      <article className="blog-article section-shell">
        <div className="blog-article-meta"><span>{post.readTime}</span><span>•</span><span>AX JOURNAL</span></div>
        {post.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <Link className="detail-primary-button" href="/blog">More from the journal</Link>
      </article>
    </DetailPageShell>
  );
}