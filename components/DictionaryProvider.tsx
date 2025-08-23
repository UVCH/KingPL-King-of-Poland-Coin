'use client';
import { createContext, useContext } from 'react';
import type { Messages } from '@/lib/i18n';

const DictCtx = createContext<{ dict: Messages; locale: string } | null>(null);
export function DictionaryProvider({ dict, locale, children }: { dict: Messages; locale: string; children: React.ReactNode }) {
  return <DictCtx.Provider value={{ dict, locale }}>{children}</DictCtx.Provider>;
}
export function useDict() {
  const ctx = useContext(DictCtx);
  if (!ctx) throw new Error('Missing DictionaryProvider');
  return ctx;
}
