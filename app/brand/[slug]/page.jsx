import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import SectionBlock from '@/components/SectionBlock';
import { getBrandBySlug, getAllBrandSlugs } from '@/data/brands';
import { company } from '@/data/company';
import BrandThemeWrapper from './BrandThemeWrapper';

// Generate static params for all brands
export async function generateStaticParams() {
  const slugs = getAllBrandSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each brand page
export async function generateMetadata({ params }) {
  const brand = getBrandBySlug(params.slug);
  
  if (!brand) {
    return {
      title: 'العلامة غير موجودة',
      description: 'العلامة التجارية المطلوبة غير موجودة',
    };
  }

  return {
    title: `${brand.name}`,
    description: brand.description || brand.goal,
    keywords: [brand.name, brand.category, company.name, 'علامة تجارية سعودية'],
    openGraph: {
      title: `${brand.name} | ${company.nameAr || company.name}`,
      description: brand.description || brand.goal,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${brand.name} | ${company.nameAr || company.name}`,
      description: brand.description || brand.goal,
    },
  };
}

export default function BrandPage({ params }) {
  const brand = getBrandBySlug(params.slug);

  // If brand not found, show 404
  if (!brand) {
    notFound();
  }

  return (
    <BrandThemeWrapper brand={brand}>
      {/* Hero Section */}
      <Hero
        title={brand.name}
        description={brand.description}
        imageSrc={brand.heroImage}
        imageAlt={`${brand.name} Hero Image`}
      />

      {/* Brand Info Section */}
      <section className="section bg-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <SectionBlock
              icon={null}
              title="الهدف"
              subtitle="Goal"
              content={brand.goal}
              layout="right"
            />
            
            <SectionBlock
              icon={null}
              title="الرؤية"
              subtitle="Vision"
              content={brand.vision}
              layout="right"
            />
            
            <SectionBlock
              icon={null}
              title="الرسالة"
              subtitle="Mission"
              content={brand.mission}
              layout="right"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-dark-pattern text-white">
        <div className="container-custom text-center">
          <h2 className="font-black mb-4 text-5xl md:text-6xl lg:text-7xl gradient-text drop-shadow-2xl">تواصل معنا</h2>
          <div className="divider-gold w-32 mx-auto mb-8" />
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-300">
            لمعرفة المزيد عن {brand.name} أو للاستفسارات التجارية
          </p>
          
          {/* Store Button - Large and prominent */}
          {brand.links?.store && brand.links.store !== '#' && (
            <div className="mb-8">
              <a 
                href={brand.links.store}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-[var(--secondary)] to-amber-600 hover:from-amber-600 hover:to-[var(--secondary)] text-white text-xl md:text-2xl font-black rounded-2xl shadow-2xl hover:shadow-[var(--secondary)]/50 transition-all duration-300 hover:scale-105 transform"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>زيارة المتجر الإلكتروني</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {brand.links?.website && brand.links.website !== '#' && (
              <a 
                href={brand.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                <span>زيارة الموقع الإلكتروني</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            
            <a 
              href="/"
              className="btn-outline inline-flex"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>العودة للرئيسية</span>
            </a>
          </div>

          {/* Social Links */}
          {(brand.links?.instagram || brand.links?.twitter || brand.links?.snapchat || brand.links?.tiktok || brand.links?.phone || brand.links?.whatsapp) && (
            <div className="flex gap-4 justify-center mt-12">
              {brand.links.instagram && brand.links.instagram !== '#' && (
                <a
                  href={brand.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-pink-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="إنستغرام"
                >
                  {/* Instagram Icon */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
              {brand.links.snapchat && brand.links.snapchat !== '#' && (
                <a
                  href={brand.links.snapchat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-yellow-400 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="سناب شات"
                >
                  {/* Snapchat Icon */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10C22 6.477 17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm3.293-7.293a1 1 0 00-1.414 0L12 13.586l-1.879-1.879a1 1 0 10-1.414 1.414l2.586 2.586a1 1 0 001.414 0l2.586-2.586a1 1 0 000-1.414zm-6.586 0a1 1 0 011.414 0L12 13.586l1.879-1.879a1 1 0 111.414 1.414l-2.586 2.586a1 1 0 01-1.414 0l-2.586-2.586a1 1 0 010-1.414zm9.293 2.293a1 1 0 00-1.414 0L12 17.586l-1.879-1.879a1 1 0 00-1.414 1.414l2.586 2.586a1 1 0 001.414 0l2.586-2.586a1 1 0 000-1.414z" />
                  </svg>
                </a>
              )}
              {brand.links.tiktok && brand.links.tiktok !== '#' && (
                <a
                  href={brand.links.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-black rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="تيك توك"
                >
                  {/* TikTok Icon */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.75 2v12.25a2.25 2.25 0 11-2.25-2.25c.414 0 .75.336.75.75s-.336.75-.75.75a.75.75 0 100 1.5 3.75 3.75 0 003.75-3.75V2h-1.5zm4.5 2.25V8a4.5 4.5 0 01-4.5 4.5V11A3 3 0 0018 8V4.25h-.75z" />
                  </svg>
                </a>
              )}
              {brand.links.phone && (
                <a
                  href={`tel:${brand.links.phone}`}
                  className="w-12 h-12 bg-white/10 hover:bg-green-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="اتصال هاتفي"
                >
                  {/* Phone Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.518 4.554a1 1 0 01-.217.976l-2.1 2.1a16.001 16.001 0 006.586 6.586l2.1-2.1a1 1 0 01.976-.217l4.554 1.518A1 1 0 0121 18.72V22a2 2 0 01-2 2h-1C7.163 24 0 16.837 0 8V7a2 2 0 012-2z" />
                  </svg>
                </a>
              )}
              {brand.links.whatsapp && (
                <a
                  href={`https://wa.me/${brand.links.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-green-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="واتساب"
                >
                  {/* WhatsApp Icon */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.48A12.07 12.07 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.26-1.64A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.26-1.44l-.38-.22-3.72.98.99-3.62-.25-.39A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.26-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.62.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </section>
    </BrandThemeWrapper>
  );
}
