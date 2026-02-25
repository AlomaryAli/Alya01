# ALYA - Corporate Holding Company Website

<div dir="rtl">

## 🌟 نظرة عامة

موقع إلكتروني احترافي لشركة **ALYA** القابضة، يعرض محفظة العلامات التجارية المتنوعة عبر قطاعات مختلفة.

</div>

## 🚀 Features

- ✅ **Next.js 14** with App Router
- ✅ **React 18** - Latest features
- ✅ **TailwindCSS** - Utility-first styling
- ✅ **Full RTL Support** - Arabic-first design
- ✅ **Mobile-First** - Responsive design
- ✅ **Dynamic Theming** - Brand-specific color schemes
- ✅ **SEO Optimized** - Metadata API implementation
- ✅ **Performance** - Image optimization with next/image
- ✅ **Accessibility** - WCAG compliant
- ✅ **No External Backend** - Hardcoded data structure

## 📁 Project Structure

```
Alya01/
├── app/
│   ├── layout.jsx              # Root layout with RTL
│   ├── page.jsx                # Homepage
│   ├── not-found.jsx           # 404 page
│   └── brand/
│       └── [slug]/
│           ├── page.jsx        # Dynamic brand page
│           └── BrandThemeWrapper.jsx
├── components/
│   ├── Navbar.jsx              # Navigation with mobile menu
│   ├── Footer.jsx              # Footer component
│   ├── BrandCard.jsx           # Brand card component
│   ├── Hero.jsx                # Hero section
│   └── SectionBlock.jsx        # Reusable section block
├── data/
│   ├── company.js              # Company information
│   └── brands.js               # Brands data & helpers
├── styles/
│   └── globals.css             # Global styles & RTL
├── public/
│   └── images/                 # Static images
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Brands

### 1. **By LJ Official**
- **Category:** Luxury Fashion (أزياء فاخرة)
- **Theme:** Black (#111111) & Gold (#C5A880)
- **Font:** Tajawal

### 2. **لذة السبايسي (Lathat Spicy)**
- **Category:** Sauces & Food Products
- **Theme:** Red (#B91C1C) & Black (#111111)
- **Font:** Cairo

### 3. **Third Brand**
- **Category:** Coming Soon
- **Theme:** Blue (#1E3A8A) & Amber (#F59E0B)
- **Font:** Tajawal

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📱 Development

Open [http://localhost:3000](http://localhost:3000) to view the website.

The website will automatically:
- Apply RTL direction
- Load Arabic fonts (Tajawal & Cairo)
- Optimize images
- Generate static pages for all brands

## 🎯 Routes

- `/` - Homepage
- `/brand/by-lj-official` - By LJ Official brand page
- `/brand/lathat-spicy` - Lathat Spicy brand page
- `/brand/third-brand` - Third brand page
- Any invalid route → 404 page

## 🎨 Theme System

Each brand has its own theme that is dynamically applied:

```javascript
theme: {
  primary: "#111111",      // Main color
  secondary: "#C5A880",    // Accent color
  accent: "#F5F5F5",       // Background accent
  font: "Tajawal"          // Typography
}
```

Theme is applied via CSS variables:
- `--primary`
- `--secondary`
- `--accent`
- `--font-family`

## 📝 Adding New Brands

Edit `data/brands.js`:

```javascript
{
  id: 4,
  name: "Brand Name",
  slug: "brand-slug",
  category: "Category",
  goal: "...",
  vision: "...",
  mission: "...",
  description: "...",
  heroImage: "/images/brand-hero.jpg",
  theme: {
    primary: "#000000",
    secondary: "#FFFFFF",
    accent: "#F5F5F5",
    font: "Tajawal"
  },
  links: {
    website: "#",
    instagram: "#",
    twitter: "#"
  }
}
```

## 🖼️ Images

Place brand images in `public/images/`:

- `by-lj-hero.jpg` - By LJ Official hero
- `by-lj-logo.png` - By LJ Official logo
- `lathat-hero.jpg` - Lathat Spicy hero
- `lathat-logo.png` - Lathat Spicy logo
- `third-brand-hero.jpg` - Third brand hero
- `third-brand-logo.png` - Third brand logo

## 🌐 SEO

Each page includes:
- Dynamic metadata
- Open Graph tags
- Twitter Card tags
- Structured data ready
- Sitemap ready (can be added)

## 📱 Mobile-First Design

Tailwind breakpoints:
- Default: Mobile
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+
- `2xl:` - 1536px+

## 🔧 Technologies

- **Framework:** Next.js 14.2.0
- **React:** 18.3.0
- **Styling:** TailwindCSS 3.4.3
- **Fonts:** Google Fonts (Tajawal, Cairo)
- **Language:** JavaScript (ES6+)
- **Direction:** RTL (Right-to-Left)

## 📄 License

Private - All rights reserved to ALYA

## 👥 Authors

ALYA Development Team - 2026

---

<div dir="rtl">

## 🚀 للبدء

```bash
npm install
npm run dev
```

افتح المتصفح على: http://localhost:3000

</div>
