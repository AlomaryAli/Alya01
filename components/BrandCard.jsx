import Link from 'next/link';

export default function BrandCard({ brand }) {
  // Default colors for server-side rendering
  const primaryColor = brand.theme?.primary || '#111111';
  const secondaryColor = brand.theme?.secondary || '#C5A880';

  return (
    <Link href={`/brand/${brand.slug}`} className="group h-full">
      <div className="card cursor-pointer h-full flex flex-col">
        {/* Brand Card - Text Only */}
        <div className="p-6 md:p-8 flex flex-col flex-1 bg-black rounded-lg border border-gray-800 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg" style={{boxShadow: 'hover' ? '0 0 20px rgba(212, 175, 55, 0.2)' : 'none'}}>
          {/* Brand Name - Gold */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg" style={{color: '#D4AF37'}}>
            {brand.name}
          </h3>
          
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6 flex-1 font-bold drop-shadow">
            {brand.description}
          </p>
          
          {/* CTA */}
          <div className="flex items-center gap-2 font-extrabold group-hover:gap-3 transition-all duration-300 text-lg drop-shadow-lg" style={{color: secondaryColor}}>
            <span>استكشف</span>
            <svg 
              className="w-5 h-5 transform rotate-180 group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
