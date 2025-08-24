import fs from 'fs';
import path from 'path';

function extractBody(html: string): string {
  const m = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return m ? m[1] : html;
}
// usuń <script>…</script> z body, bo skrypty doładujemy osobno
function stripScripts(html: string): string {
  return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}
function rewriteRelUrls(html: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const prefix = `${base}/template/file/`.replace(/\/+/g, '/');

  // src="rel"
  html = html.replace(/\bsrc\s*=\s*"(?!https?:|\/|data:|mailto:|tel:|#)([^"]+)"/gi,
    (_m, p1) => `src="${prefix}${p1.replace(/^\.\/+/, '')}"`);
  // href="rel"
  html = html.replace(/\bhref\s*=\s*"(?!https?:|\/|data:|mailto:|tel:|#)([^"]+)"/gi,
    (_m, p1) => `href="${prefix}${p1.replace(/^\.\/+/, '')}"`);
  return html;
}

export function loadTemplateHtmlFromFile(slug: string): string {
  const ROOT = process.cwd();
  const file = path.join(ROOT, 'template', 'file', `${slug}.html`);
  if (!fs.existsSync(file)) throw new Error(`Brak pliku: ${file}`);
  const raw = fs.readFileSync(file, 'utf8');
  const body = extractBody(raw);
  return rewriteRelUrls(stripScripts(body));
}
