import Link from 'next/link';
import { company } from '@/data/company';

export const metadata = {
  title: 'الصفحة غير موجودة - 404',
  description: 'عذراً، الصفحة التي تبحث عنها غير موجودة',
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom text-center px-4">
        {/* 404 Number */}
        <div className="mb-8 animation-scale-in">
          <h1 className="text-8xl md:text-9xl font-black gradient-text">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="max-w-2xl mx-auto animation-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text-primary)]">
            عذراً، الصفحة غير موجودة
          </h2>
          <div className="divider-gold w-24 mx-auto mb-8" />
          
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-12 leading-relaxed">
            يبدو أن الصفحة التي تبحث عنها قد تم نقلها أو حذفها أو لم تكن موجودة من الأساس
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/"
              className="btn-primary inline-flex"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              العودة للرئيسية
            </Link>
            
            <Link 
              href="/#brands"
              className="btn-secondary inline-flex"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              تصفح العلامات التجارية
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto animation-fade-in">
          <Link href="/" className="group p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="font-bold text-xl mb-2 text-[var(--text-primary)]">الصفحة الرئيسية</h3>
            <p className="text-[var(--text-secondary)]">ابدأ من جديد</p>
            <div className="divider-gold w-16 mt-4" />
          </Link>
          
          <Link href="/#about" className="group p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="font-bold text-xl mb-2 text-[var(--text-primary)]">عن {company.nameAr || company.name}</h3>
            <p className="text-[var(--text-secondary)]">تعرف علينا</p>
            <div className="divider-gold w-16 mt-4" />
          </Link>
          
          <Link href="/#brands" className="group p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="text-5xl mb-4">💼</div>
            <h3 className="font-bold text-xl mb-2 text-[var(--text-primary)]">العلامات التجارية</h3>
            <p className="text-[var(--text-secondary)]">استكشف علاماتنا</p>
            <div className="divider-gold w-16 mt-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

