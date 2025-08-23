'use client';
import { useState } from 'react';
import Section from '@/components/Section';

export default function Contact() {
  const [sent, setSent] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch('/api/contact', { method: 'POST' });
    setSent(true);
  }
  return (
    <Section>
      <h1 className="h-display text-3xl mb-4">Kontakt</h1>
      <p>IR: <a href="mailto:ir@kingpl.example" className="underline">ir@kingpl.example</a></p>
      <form onSubmit={submit} className="mt-4 flex flex-col gap-2 max-w-md">
        <input required placeholder="Email" className="p-2 rounded bg-king-navy/40" />
        <textarea required placeholder="Wiadomość" className="p-2 rounded bg-king-navy/40" />
        <button className="rounded-2xl px-4 py-2 bg-king-gold text-king-black">Wyślij</button>
      </form>
      {sent && <p className="mt-4 text-sm">Dziękujemy!</p>}
      <p className="mt-8 text-xs text-white/60">RODO note.</p>
    </Section>
  );
}
