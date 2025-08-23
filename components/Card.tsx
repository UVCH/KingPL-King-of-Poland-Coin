import { clsx } from 'clsx';
export default function Card({ title, children, className }: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx('rounded-2xl bg-king-navy/40 p-6 shadow-soft', className)}>
      {title && <h3 className="mb-2 text-lg h-display">{title}</h3>}
      <div className="text-sm">{children}</div>
    </div>
  );
}
