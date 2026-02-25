'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero({ 
  title, 
  subtitle, 
  description, 
  imageSrc, 
  imageAlt = 'Hero Image',
  height = 'min-h-[85vh]',
  overlay = 'bg-gradient-to-b from-black/70 via-black/50 to-black/80'
}) {
  const [secondaryColor, setSecondaryColor] = useState('#FFD700');

  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim();
    if (color) setSecondaryColor(color);
  }, []);

  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden bg-black`}>
      {/* Background with Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {imageSrc && (
          <div className="absolute inset-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="object-cover opacity-20"
              sizes="100vw"
              quality={90}
            />
          </div>
        )}
        <div className={`absolute inset-0 ${overlay}`} />
      </div>

      {/* Geometric Decoration */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        {/* Top Section */}
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] border-2 rounded-full animate-pulse-glow" style={{borderColor: secondaryColor}} />
        <div className="absolute -top-20 left-1/4 w-[600px] h-[600px] border-2 rounded-full animate-pulse-glow animation-delay-200" style={{borderColor: secondaryColor}} />
        <div className="absolute top-10 -left-32 w-[700px] h-[700px] border-2 rounded-full animate-pulse-glow animation-delay-400" style={{borderColor: secondaryColor}} />
        
        {/* Middle Section */}
        <div className="absolute top-1/3 right-1/3 w-[900px] h-[900px] border-2 rounded-full animate-pulse-glow animation-delay-600" style={{borderColor: secondaryColor}} />
        <div className="absolute top-1/2 -right-48 w-[750px] h-[750px] border-2 rounded-full animate-pulse-glow animation-delay-400" style={{borderColor: secondaryColor}} />
        <div className="absolute top-1/2 -left-64 w-[850px] h-[850px] border-2 rounded-full animate-pulse-glow animation-delay-800" style={{borderColor: secondaryColor}} />
        
        {/* Bottom Section */}
        <div className="absolute -bottom-48 right-1/4 w-[950px] h-[950px] border-2 rounded-full animate-pulse-glow animation-delay-200" style={{borderColor: secondaryColor}} />
        <div className="absolute -bottom-40 -left-48 w-[800px] h-[800px] border-2 rounded-full animate-pulse-glow animation-delay-600" style={{borderColor: secondaryColor}} />
        <div className="absolute bottom-20 right-0 w-[650px] h-[650px] border-2 rounded-full animate-pulse-glow animation-delay-800" style={{borderColor: secondaryColor}} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white py-20">
        {subtitle && (
          <div className="mb-8 animation-fade-in">
            <span className="inline-block px-8 py-3 backdrop-blur-sm rounded-full text-white font-bold text-lg shadow-2xl" style={{backgroundColor: `${secondaryColor}E6`}}>
              {subtitle}
            </span>
          </div>
        )}
        
        <h1 className="font-black mb-8 animation-slide-up text-balance leading-tight">
          <span className="inline-block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        
        {description && (
          <p className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed animation-fade-in font-normal text-gray-200 mb-12">
            {description}
          </p>
        )}
        
        {/* Decorative Accent */}
        <div className="flex justify-center animation-scale-in">
          <div className="h-1 w-32 rounded-full" style={{background: `linear-gradient(to right, transparent, ${secondaryColor}, transparent)`}} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-1/2 transform translate-x-1/2 animation-fade-in z-10">
        <div className="flex flex-col items-center gap-2 animate-float">
          <span className="text-white/70 text-sm font-medium mb-2">تصفح المزيد</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
