import Link from 'next/link';
import { useDict } from './DictionaryProvider';
interface Meta { title: string; date: string; category: string; excerpt: string; slug: string; }
export default function PostCard({ post }: { post: Meta }) {
  const { locale } = useDict();
  return (
    <Link href={`/${locale}/kings-word/${post.slug}`} className="block rounded-2xl bg-king-navy/40 p-4 hover:bg-king-navy/60">
      <div className="text-xs text-white/70">{new Date(post.date).toLocaleDateString(locale)}</div>
      <div className="font-medium h-display">{post.title}</div>
      <p className="text-sm text-white/80">{post.excerpt}</p>
    </Link>
  );
}
