"use client";
import { usePathname } from 'next/navigation';
import { company } from '@/data/company';

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  return (
    <footer className="bg-dark-pattern text-white no-print">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-12" suppressHydrationWarning>
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-black gradient-text mb-6">
              {isEnglish ? company.name : (company.nameAr || company.name)}
              <div className="text-base font-bold text-gray-400 mt-1">the future</div>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {company.description}
            </p>
            <div className="divider-gold w-24 mt-6" />
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-2xl font-extrabold mb-6 text-white tracking-wide drop-shadow-lg">
              {isEnglish ? 'Quick Links' : 'روابط سريعة'}
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={isEnglish ? '/en' : '/'} 
                  className="group flex items-center gap-3 text-white font-bold hover:text-[var(--secondary)] transition-colors duration-300 text-lg"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />
                  <span>{isEnglish ? 'Home' : 'الرئيسية'}</span>
                </a>
              </li>
              <li>
                <a 
                  href={isEnglish ? '/en#brands' : '/#brands'} 
                  className="group flex items-center gap-3 text-white font-bold hover:text-[var(--secondary)] transition-colors duration-300 text-lg"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />
                  <span>{isEnglish ? 'Brands' : 'علاماتنا التجارية'}</span>
                </a>
              </li>
              <li>
                <a 
                  href={isEnglish ? '/en#about' : '/#about'} 
                  className="group flex items-center gap-3 text-white font-bold hover:text-[var(--secondary)] transition-colors duration-300 text-lg"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />
                  <span>{isEnglish ? 'About Us' : 'من نحن'}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-2xl font-extrabold mb-6 text-white tracking-wide drop-shadow-lg">
              {isEnglish ? 'Contact Us' : 'تواصل معنا'}
            </h4>
            <div className="space-y-4 text-white text-lg font-bold">
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--secondary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>المملكة العربية السعودية</span>
              </p>
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--secondary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </p>
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--secondary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <a href={`tel:${company.phone}`}>{company.phone}</a>
                <a href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="ml-2">
                  <svg className="w-5 h-5 text-green-500 inline" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.48A12.07 12.07 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.26-1.64A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.26-1.44l-.38-.22-3.72.98.99-3.62-.25-.39A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.26-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.62.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-gray-400">
            <span>&copy; {new Date().getFullYear()} </span>
            <span className="text-[var(--secondary)] font-bold mx-1">{company.nameAr || company.name}</span>
            <span className="text-gray-400 font-bold mx-1">the future</span>
            <span>• جميع الحقوق محفوظة</span>
          </p>
        </div>
      </div>
    </footer>
  );
}


