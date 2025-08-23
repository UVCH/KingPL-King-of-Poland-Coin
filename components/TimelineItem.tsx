interface Item { date: string; title: string; summary: string; }
export default function TimelineItem({ item }: { item: Item }) {
  return (
    <div className="border-l border-king-gold pl-4 ml-2">
      <div className="text-xs text-white/70">{new Date(item.date).toLocaleDateString()}</div>
      <div className="font-medium">{item.title}</div>
      <div className="text-sm text-white/80">{item.summary}</div>
    </div>
  );
}
