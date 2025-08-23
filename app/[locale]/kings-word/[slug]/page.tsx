import { loadPost } from '@/lib/mdx';
import Prose from '@/components/Prose';

export default async function PostPage({ params }: { params: { locale: string; slug: string } }) {
  const { content, meta } = await loadPost(params.locale, params.slug);
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="h-display text-3xl mb-4">{meta.title}</h1>
      <Prose>{content}</Prose>
    </article>
  );
}
