import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DictionaryProvider } from '@/components/DictionaryProvider';
import { getMessages } from '@/lib/i18n';
import { Web3Providers } from '@/components/Web3Providers';
import LangSetter from '@/components/LangSetter';

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const dict = getMessages(params.locale);
  return (
    <DictionaryProvider dict={dict} locale={params.locale}>
      <LangSetter locale={params.locale} />
      <Web3Providers>
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </Web3Providers>
    </DictionaryProvider>
  );
}

export async function generateStaticParams() {
  return [{ locale: 'pl' }, { locale: 'en' }];
}
