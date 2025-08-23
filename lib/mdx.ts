import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

export async function loadPost(locale: string, slug: string) {
  const filePath = path.join(process.cwd(), 'content', locale, 'posts', `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, frontmatter } = await compileMDX<{ [key: string]: any }>({
    source,
    options: { parseFrontmatter: true, mdxOptions: { remarkPlugins: [remarkGfm] } },
  });
  return { content, meta: frontmatter };
}
