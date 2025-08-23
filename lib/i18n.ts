import pl from '@/locales/pl';
import en from '@/locales/en';
export type Messages = typeof pl;
const dict: Record<string, Messages> = { pl, en };
export function getMessages(locale: string): Messages {
  return dict[locale] || pl;
}
