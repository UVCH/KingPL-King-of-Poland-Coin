'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootRedirect() {
  const router = useRouter();
  useEffect(() => {
    const lang = navigator.language?.toLowerCase().startsWith('pl') ? 'pl' : 'en';
    router.replace(`/${lang}`);
  }, [router]);
  return null;
}
