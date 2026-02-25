export default function SectionBlock({ 
  title, 
  subtitle, 
  content, 
  icon,
  layout = 'center',
  background = 'bg-black',
  textColor = 'text-white'
}) {
  const alignmentClasses = {
    center: 'text-center items-center',
    left: 'text-right items-start',
    right: 'text-right items-end'
  };

  // Get secondary color from CSS variables
  const getSecondaryColor = () => {
    if (typeof window !== 'undefined') {
      return getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim() || '#FFD700';
    }
    return '#FFD700';
  };

  const secondaryColor = getSecondaryColor();

  return (
    <div className={`${background} ${textColor} p-8 md:p-10 rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-800 relative overflow-hidden group`}>
      <div className={`relative flex flex-col ${alignmentClasses[layout]} gap-4`}>
        {/* Icon */}
        {icon && (
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl mb-3 shadow-md group-hover:shadow-lg transition-all duration-300" style={{background: `linear-gradient(to bottom right, ${secondaryColor}, #b8941f)`}}>
            {typeof icon === 'string' ? (
              <span className="text-3xl md:text-4xl">{icon}</span>
            ) : (
              icon
            )}
          </div>
        )}

        {/* Subtitle */}
        {/* Removed - keeping only Arabic title */}

        {/* Title */}
        {title && (
          <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-3 drop-shadow-lg text-right" dir="rtl" style={{color: secondaryColor}}>
            {title}
          </h3>
        )}

        {/* Content */}
        {content && (
          <div className="text-base md:text-lg leading-relaxed max-w-3xl text-gray-200 font-bold drop-shadow" dir="rtl">
            {typeof content === 'string' ? (
              <p>{content}</p>
            ) : (
              content
            )}
          </div>
        )}
      </div>
      
      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: `linear-gradient(to right, transparent, ${secondaryColor}, transparent)`}} />
    </div>
  );
}
