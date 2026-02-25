import { Tajawal, Cairo } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FirebaseProvider from '@/components/FirebaseProvider';
import LanguageProvider from '@/components/LanguageProvider';
import '@/styles/globals.css';
import { company } from '@/data/company';

// Load Google Fonts
const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

// Root Metadata
export const metadata = {
  title: {
    default: company.nameAr || company.name,
    template: `%s | ${company.nameAr || company.name}`,
  },
  description: company.description,
  keywords: ['منصة أعمال', 'حلول متكاملة', 'علامات تجارية سعودية', 'ALYA', 'ألـيـا', 'تسويق', 'إدارة فعاليات', 'التصميم', 'الضيافة', 'الإعلام الرقمي'],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://alya.sa'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://alya.sa',
    siteName: company.nameAr || company.name,
    title: company.nameAr || company.name,
    description: company.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: company.nameAr || company.name,
    description: company.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${cairo.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body className={tajawal.className}>
        <FirebaseProvider />
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
