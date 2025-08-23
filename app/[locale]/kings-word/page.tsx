import Section from '@/components/Section';
import { getAllPosts } from '@/lib/posts';
import BlogFilter from './BlogFilter';

export default function Blog({ params }: { params: { locale: string } }) {
  const posts = getAllPosts(params.locale);
  return (
    <Section>
      <h1 className="h-display text-3xl mb-4">King's Word</h1>
      <BlogFilter posts={posts} />
    </Section>
  );
}
