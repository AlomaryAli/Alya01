import Link from 'next/link';
import Image from 'next/image';

export default function BrandCard({ brand }) {
  // Default colors for server-side rendering
  const primaryColor = brand.theme?.primary || '#111111';
  const secondaryColor = brand.theme?.secondary || '#C5A880';

  return (
    <Link href={`/brand/${brand.slug}`} className="group h-full">
      <div className="card cursor-pointer h-full flex flex-col">
        {/* Brand Image */}
        <div className="relative h-80 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
          {brand.heroImage && (
            <Image
              src={brand.heroImage}
              alt={brand.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          
          {/* Brand Logo */}
          {brand.logo && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="384px"
                />
              </div>
            </div>
          )}
        </div>

        {/* Brand Info */}
        <div className="p-6 md:p-8 flex flex-col flex-1 bg-black">
          {/* Brand Name */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
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
