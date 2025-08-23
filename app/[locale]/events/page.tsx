import fs from 'fs';
import path from 'path';
import Section from '@/components/Section';
import TimelineItem from '@/components/TimelineItem';

export default function Events({ params }: { params: { locale: string } }) {
  const file = path.join(process.cwd(), 'content', params.locale, 'events', 'events.json');
  const items = JSON.parse(fs.readFileSync(file, 'utf8')) as any[];
  return (
    <Section>
      <h1 className="h-display text-3xl mb-4">Events</h1>
      <div className="space-y-4">
        {items.map((i) => (
          <TimelineItem key={i.title} item={i} />
        ))}
      </div>
    </Section>
  );
}
