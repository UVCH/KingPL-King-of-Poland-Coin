'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootRedirect() {
  const router = useRouter();
  useEffect(() => {
    const langs = (navigator.languages || [navigator.language]).map(l => l?.toLowerCase());
    const isPL = langs.some(l => l?.startsWith('pl'));
    router.replace(isPL ? '/pl' : '/en');
  }, [router]);
  return null;
}
