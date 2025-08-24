import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="body">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
