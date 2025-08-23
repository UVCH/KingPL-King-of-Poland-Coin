export function formatNumber(n: number, locale = 'pl') {
  return n.toLocaleString(locale);
}
export function formatDate(date: string, locale = 'pl') {
  return new Date(date).toLocaleDateString(locale);
}
