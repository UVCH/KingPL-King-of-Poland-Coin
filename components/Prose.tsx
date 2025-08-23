import { clsx } from 'clsx';
export default function Prose({ children }: { children: React.ReactNode }) {
  return <article className={clsx('prose max-w-none')}>{children}</article>;
}
