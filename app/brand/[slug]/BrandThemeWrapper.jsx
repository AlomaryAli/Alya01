'use client';

export default function BrandThemeWrapper({ brand, children }) {
  return (
    <>
      <style>{`
        :root {
          --primary: ${brand.theme.primary} !important;
          --secondary: ${brand.theme.secondary} !important;
          --accent: ${brand.theme.accent || '#F5F5F5'} !important;
          --font-family: '${brand.theme.font || 'Tajawal'}', sans-serif !important;
        }
      `}</style>
      {children}
    </>
  );
}
