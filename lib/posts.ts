import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { loadPost } from './mdx';

export function getAllPosts(locale: string) {
  const dir = path.join(process.cwd(), 'content', locale, 'posts');
  const files = fs.readdirSync(dir);
  return files
    .map((f) => {
      const { data } = matter(fs.readFileSync(path.join(dir, f), 'utf8'));
      return { ...(data as any), slug: f.replace(/\.mdx$/, '') };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export { loadPost };
