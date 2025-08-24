import fs from 'fs';
import path from 'path';

function extractBody(html: string): string {
  const m = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return m ? m[1] : html;
}

function rewriteRelUrl(url: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const prefix = `${base}/template/file/`.replace(/\/+/g, '/');
  if (/^(?:https?:|\/|data:|mailto:|tel:|#)/i.test(url)) return url;
  return `${prefix}${url.replace(/^\.\/+/, '')}`;
}

function stripScripts(html: string): { html: string; scripts: string[] } {
  const scripts: string[] = [];
  const without = html.replace(/<script\b[^>]*src=["']([^"']+)["'][^>]*><\/script>/gi,
    (_m, src) => {
      scripts.push(rewriteRelUrl(src));
      return '';
    });
  return { html: without, scripts };
}

function rewriteRelUrls(html: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const prefix = `${base}/template/file/`.replace(/\/+/g, '/');
  html = html.replace(/\bsrc\s*=\s*"(?!https?:|\/|data:|mailto:|tel:|#)([^"]+)"/gi,
    (_m, p1) => `src="${prefix}${p1.replace(/^\.\/+/, '')}"`);
  html = html.replace(/\bhref\s*=\s*"(?!https?:|\/|data:|mailto:|tel:|#)([^"]+)"/gi,
    (_m, p1) => `href="${prefix}${p1.replace(/^\.\/+/, '')}"`);
  return html;
}

export interface TemplateData {
  html: string;
  scripts: string[];
}

export function loadTemplateFromFile(slug: string): TemplateData {
  const ROOT = process.cwd();
  const file = path.join(ROOT, 'template', 'file', `${slug}.html`);
  if (!fs.existsSync(file)) throw new Error(`Brak pliku: ${file}`);
  const raw = fs.readFileSync(file, 'utf8');
  const { html: noScripts, scripts } = stripScripts(raw);
  const body = extractBody(noScripts);
  return { html: rewriteRelUrls(body), scripts };
}

// Zachowaj starą nazwę dla zgodności, zwraca tylko HTML.
export function loadTemplateHtmlFromFile(slug: string): string {
  return loadTemplateFromFile(slug).html;
}
