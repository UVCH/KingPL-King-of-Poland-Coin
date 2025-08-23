'use client';
import { useState } from 'react';
import PostCard from '@/components/PostCard';
import { useDict } from '@/components/DictionaryProvider';
interface Post { slug: string; title: string; date: string; category: string; excerpt: string; }
export default function BlogFilter({ posts }: { posts: Post[] }) {
  const { dict } = useDict();
  const [cat, setCat] = useState<string>('all');
  const filtered = cat === 'all' ? posts : posts.filter((p) => p.category === cat);
  return (
    <div>
      <div className="flex gap-4 mb-6">
        <button onClick={() => setCat('all')} className={cat==='all'?"underline":""}>All</button>
        <button onClick={() => setCat('dekret')} className={cat==='dekret'?"underline":""}>{dict.blog.dekret}</button>
        <button onClick={() => setCat('mysl')} className={cat==='mysl'?"underline":""}>{dict.blog.mysl}</button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
}
