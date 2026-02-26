'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { company } from '@/data/company';

// Static nav items - don't change based on pathname to avoid hydration issues
const AR_NAV_ITEMS = [
  { href: '/', label: 'الرئيسية' },
  { href: '/#brands', label: 'علاماتنا التجارية' },
  { href: '/#about', label: 'من نحن' }
];

const EN_NAV_ITEMS = [
  { href: '/en', label: 'Home' },
  { href: '/en#brands', label: 'Brands' },
  { href: '/en#about', label: 'About Us' }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navItems, setNavItems] = useState(AR_NAV_ITEMS); // Default to Arabic for SSR
  const pathname = usePathname();

  useEffect(() => {
    // Update nav items after mount based on actual pathname
    const isEnglish = pathname.startsWith('/en');
    setNavItems(isEnglish ? EN_NAV_ITEMS : AR_NAV_ITEMS);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 no-print transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-lg shadow-lg border-b border-gray-900' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Company Name */}
          <Link 
            href="/" 
            className="group flex flex-col items-center justify-center transition-all duration-300 h-full"
          >
            <div className="text-2xl md:text-3xl font-black transition-all duration-300 group-hover:scale-110" style={{color: '#D4AF37'}}>
              Alya The Future
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1" suppressHydrationWarning>
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className={`group relative px-6 py-3 text-base font-bold transition-all duration-300 rounded-xl ${
                  scrolled ? 'text-[var(--text-primary)] hover:text-[var(--secondary)]' : 'text-white hover:text-[var(--secondary)]'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-[var(--secondary)]/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-3 rounded-xl transition-all duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center ${
              scrolled ? 'bg-[var(--secondary)]/10 hover:bg-[var(--secondary)]/20' : 'bg-black/10 hover:bg-black/20'
            }`}
            aria-label="قائمة التنقل"
            aria-expanded={isMenuOpen}
          >
            <svg
              className={`w-6 h-6 ${scrolled ? 'text-[var(--primary)]' : 'text-white'}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 animation-slide-down" suppressHydrationWarning>
            <div className="flex flex-col gap-2 bg-black rounded-2xl p-4 shadow-xl border border-gray-900">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-3 text-base font-bold py-4 px-5 text-white hover:text-[var(--secondary)] transition-all duration-300 rounded-xl hover:bg-[var(--secondary)]/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)] group-hover:scale-150 transition-transform" />
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
