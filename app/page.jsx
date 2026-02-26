import Hero from '@/components/Hero';
import BrandCard from '@/components/BrandCard';
import { company } from '@/data/company';
import { brands } from '@/data/brands';

export const metadata = {
  title: company.nameAr || company.name,
  description: company.description,
  keywords: ['منصة أعمال عالمية', 'حلول متكاملة', 'علامات تجارية', 'تسويق', 'فعاليات', 'تصميم', 'ضيافة'],
  openGraph: {
    title: company.nameAr || company.name,
    description: company.description,
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={company.nameAr || company.name}
        subtitle="منصة أعمال عالمية متكاملة"
        description={company.description}
        height="min-h-screen"
      />

      {/* Brands Section */}
      <section id="brands" className="section bg-black text-white py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6" style={{color: '#FFD700'}}>علاماتنا التجارية</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent rounded-full mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              مجموعة من العلامات التجارية المتميزة في مختلف القطاعات، كل واحدة تمتلك هويتها الفريدة ورؤيتها الخاصة
            </p>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <div key={brand.id} className="h-full">
                <BrandCard brand={brand} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-neutral-950 text-white py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6" style={{color: '#FFD700'}}>من نحن</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent rounded-full mx-auto" />
          </div>

          {/* Vision, Mission, Values */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
            {/* Vision */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-gray-800 hover:border-[#FFD700] transition-all duration-300">
              <h3 className="text-3xl font-black text-[#FFD700] mb-5">الرؤية</h3>
              <p className="text-lg leading-relaxed text-gray-200 font-medium">
                {company.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-[#FFD700] hover:border-yellow-400 transition-all duration-300">
              <h3 className="text-3xl font-black text-[#FFD700] mb-5">الرسالة</h3>
              <p className="text-lg leading-relaxed text-gray-200 font-medium">
                {company.mission}
              </p>
            </div>

            {/* Values Intro */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-gray-800 hover:border-[#FFD700] transition-all duration-300">
              <h3 className="text-3xl font-black text-[#FFD700] mb-5">القيم الأساسية</h3>
              <ul className="space-y-4">
                {company.values.slice(0, 3).map((value, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#FFD700] font-bold text-2xl mt-0 flex-shrink-0">✓</span>
                    <span className="text-gray-200 font-medium text-base">{value.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* All Values Grid */}
          <div className="pt-16 border-t border-gray-800">
            <h3 className="text-4xl font-black text-center mb-12" style={{color: '#FFD700'}}>جميع قيمنا</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {company.values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-[#FFD700] transition-all duration-300 group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#FFD700] mb-3">{value.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-black text-white py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-gray-800 hover:border-[#FFD700] transition-all duration-300 text-center group">
              <div className="text-6xl md:text-7xl font-black text-[#FFD700] mb-4 group-hover:scale-110 transition-transform duration-300">
                8
              </div>
              <p className="text-lg text-white font-bold">قطاعات متكاملة</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-gray-800 hover:border-[#FFD700] transition-all duration-300 text-center group">
              <div className="text-6xl md:text-7xl font-black text-[#FFD700] mb-4 group-hover:scale-110 transition-transform duration-300">
                {brands.length}
              </div>
              <p className="text-lg text-white font-bold">علامات تجارية</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-gray-800 hover:border-[#FFD700] transition-all duration-300 text-center group">
              <div className="text-6xl md:text-7xl font-black text-[#FFD700] mb-4 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <p className="text-lg text-white font-bold">جودة سعودية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-neutral-950 text-white py-24">
        <div className="container-custom text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6" style={{color: '#FFD700'}}>تواصل معنا</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent rounded-full mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            لأي استفسارات أو اقتراحات، نحن هنا للاستماع إليك
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 flex-wrap">
            <a 
              href={`mailto:${company.email}`} 
              className="px-8 py-4 bg-[#FFD700] text-black font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              البريد الإلكتروني
            </a>
            {company.phone && (
              <a 
                href={`https://wa.me/${company.phone.replace(/\D/g, '')}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
