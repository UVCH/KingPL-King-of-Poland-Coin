export function publicPath(p: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Upewnij się, że p zaczyna się od "/"
  const rel = p.startsWith('/') ? p : `/${p}`;
  return `${base}${rel}`.replace(/\/+/g, '/');
}

