"use client";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() || '/';
  const [isEn, setIsEn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsEn(pathname.startsWith('/en'));
    setMounted(true);
  }, [pathname]);

  const handleSwitch = () => {
    if (isEn) {
      // go to root (Arabic)
      const dest = pathname.replace(/^\/en/, '') || '/';
      router.push(dest);
    } else {
      // go to English
      const dest = '/en' + (pathname === '/' ? '' : pathname);
      router.push(dest);
    }
  };

  if (!mounted) {
    return (
      <button
        disabled
        className="px-4 py-2 rounded-xl bg-[var(--secondary)] text-black font-bold text-lg shadow-md hover:bg-yellow-400 transition-all duration-300 ml-4"
        aria-label="تغيير اللغة"
      >
        English
      </button>
    );
  }

  return (
    <button
      onClick={handleSwitch}
      className="px-4 py-2 rounded-xl bg-[var(--secondary)] text-black font-bold text-lg shadow-md hover:bg-yellow-400 transition-all duration-300 ml-4"
      aria-label="تغيير اللغة"
    >
      {isEn ? 'العربية' : 'English'}
    </button>
  );
}
