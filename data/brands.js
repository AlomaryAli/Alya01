export const brands = [
  {
    id: 1,
    name: "By LJ Official",
    slug: "by-lj-official",
    category: "أزياء فاخرة",
    categoryEn: "Luxury Fashion",
    goal: "أن نحوّل الأقمشة الفاخرة إلى قطع خالدة تجسد الأناقة والمشاعر والهوية، لتعيش كل امرأة تجربة الجمال من خلال ما ترتديه.",
    vision: "أن نصبح علامة سعودية فاخرة معترف بها عالميًا، ترتقي بالأقمشة لتصبح فنًا يُرتدى، من خلال الجودة الاستثنائية والتصميم والحرفية العالية.",
    mission: "تلتزم By LJ Official باختيار أجود الأقمشة وتحويلها إلى قطع راقية تجمع بين الفخامة والدقة والمعنى، لتكون رفيقة دائمة للحظات الحياة اليومية والمناسبات المميزة.",
    description: "علامة أزياء فاخرة سعودية متخصصة في تصميم وتصنيع الملابس النسائية من أجود الأقمشة",
    heroImage: "/images/by-lj-hero.jpg",
    logo: "/images/by-lj-logo.png",
    theme: {
      primary: "#111111",
      secondary: "#FFD700",
      accent: "#F5F5F5",
      font: "Tajawal"
    },
    links: {
      website: "#",
      instagram: "#",
      twitter: "#",
      store: "https://salla.sa/ByLJOfficial"
    }
  },
  {
    id: 2,
    name: "لذة سبايسي",
    nameEn: "Lathat Spicy",
    slug: "lathat-spicy",
    category: "صوصات ومنتجات غذائية",
    categoryEn: "Sauces & Food Products",
    goal: "تقديم صوصات سبايسي بجودة عالية وطعم ثابت يميزنا في السوق.",
    vision: "أن نصبح علامة سعودية متخصصة في الصوصات الحارة والمعبوج، مع خطة واضحة للنمو والانتشار.",
    mission: "نصنع نكهة لذيذة ومختلفة تبني علامة تجارية قوية ومستدامة.",
    description: "علامة تجارية سعودية متخصصة في تصنيع الصوصات الحارة والمعبوج بجودة عالية ونكهات مميزة",
    heroImage: "/images/lathat-hero.jpg",
    logo: "/images/lathat-logo.png",
    theme: {
      primary: "#B91C1C",
      secondary: "#FFD700",
      accent: "#FEF2F2",
      font: "Tajawal"
    },
    links: {
      website: "#",
      instagram: "https://www.instagram.com/li.spicee?igsh=d3BhNnFoamY5dWtz&utm_source=qr",
      snapchat: "https://snapchat.com/t/S5eySiWG",
      tiktok: "https://www.tiktok.com/@li.spicee?_r=1&_t=ZS-949IsYSFcf2",
      store: "https://salla.sa/LISPICEE",
      phone: "+966 55 517 4670",
      whatsapp: "+966579593032"
    }
  },
  {
    id: 3,
    name: "SOUTHRN SOUL",
    nameEn: "SOUTHRN SOUL",
    slug: "southrn-soul",
    category: "ألعاب الورق والبطولات",
    categoryEn: "Card Games & Tournaments",
    goal: "أن نحول ألعاب الورق إلى تجربة تنافسية ممتعة تجمع بين الحماس والاحترافية وروح المجتمع، لنصنع مساحة يعيش فيها اللاعبون شغفهم بكل ثقة وإثارة.",
    vision: "أن نصبح العلامة السعودية الرائدة في مجال ألعاب الورق وتنظيم بطولات البلوت، معترفًا بنا إقليميًا كمركز يجمع بين الترفيه، التنافس، وبناء مجتمع لاعبين قوي ومترابط.",
    mission: "نلتزم بتنظيم بطولات احترافية وتجارب لعب متكاملة في ألعاب الورق، مع التركيز على الجودة، العدالة، وروح المنافسة، لنمنح اللاعبين منصة يبرزون فيها مهاراتهم ويصنعون ذكريات لا تُنسى.",
    description: "علامة تجارية متخصصة في تنظيم بطولات ألعاب الورق والبلوت بمعايير احترافية عالية",
    heroImage: "/images/southrn-soul-hero.jpg",
    logo: "/images/southrn-soul-hero.jpg",
    theme: {
      primary: "#3B5998",
      secondary: "#F4C430",
      accent: "#1E293B",
      font: "Tajawal"
    },
    links: {
      website: "#",
      instagram: "#",
      twitter: "#",
      store: "https://salla.sa/ALYA-SOTHRN-SOUL"
    }
  }
];

// Helper function to get brand by slug
export const getBrandBySlug = (slug) => {
  return brands.find(brand => brand.slug === slug);
};

// Helper function to get all brand slugs (for static generation)
export const getAllBrandSlugs = () => {
  return brands.map(brand => brand.slug);
};
