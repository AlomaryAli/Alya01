import Hero from '@/components/Hero';
import BrandCard from '@/components/BrandCard';
import SectionBlock from '@/components/SectionBlock';
import { company } from '@/data/company';
import { brands } from '@/data/brands';

export default function HomePageEn() {
  return (
    <>
      <Hero
        title={company.name || company.nameAr}
        subtitle="A global business platform"
        description={company.description}
        height="min-h-screen"
      />

      <section id="about" className="section bg-black text-white">
        <div className="container-custom">
          <div className="section-title">
            <h2 className="gradient-text">About Us</h2>
            <div className="divider-gold w-24 mx-auto mt-6 mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animation-slide-up">
            <SectionBlock
              icon={null}
              title="Vision"
              subtitle="Our Vision"
              content={company.vision}
              layout="right"
            />

            <SectionBlock
              icon={null}
              title="Mission"
              subtitle="Our Mission"
              content={company.mission}
              layout="right"
            />
          </div>

          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--text-primary)]">Our Values</h3>
            <div className="divider-gold w-20 mx-auto mb-12" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {company.values.map((value, index) => (
                <SectionBlock
                  key={index}
                  icon={value.icon}
                  title={value.titleEn || value.title}
                  subtitle={value.titleEn}
                  content={value.description}
                  layout="center"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="brands" className="section bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="section-title">
            <h2 className="gradient-text mb-6">Our Brands</h2>
            <div className="divider-gold w-24 mx-auto mb-8" />
            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              We proudly own and manage a variety of distinguished brands across sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animation-slide-up items-stretch">
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            <div className="group text-center p-10 bg-gradient-to-br from-black to-neutral-900 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-800">
              <div className="text-6xl md:text-7xl font-black gradient-text mb-4">8</div>
              <p className="text-lg text-white font-extrabold drop-shadow-lg">Integrated Sectors</p>
              <div className="divider-gold w-16 mx-auto mt-4" />
            </div>
            <div className="group text-center p-10 bg-gradient-to-br from-black to-neutral-900 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-800">
              <div className="text-6xl md:text-7xl font-black gradient-text mb-4">{brands.length}</div>
              <p className="text-lg text-white font-extrabold drop-shadow-lg">Brands</p>
              <div className="divider-gold w-16 mx-auto mt-4" />
            </div>
            <div className="group text-center p-10 bg-gradient-to-br from-black to-neutral-900 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-800">
              <div className="text-6xl md:text-7xl font-black gradient-text mb-4">100%</div>
              <p className="text-lg text-white font-extrabold drop-shadow-lg">Saudi Quality</p>
              <div className="divider-gold w-16 mx-auto mt-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-dark-pattern text-white">
        <div className="container-custom text-center">
          <h2 className="font-black mb-6 text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-[var(--secondary)] via-yellow-300 to-[var(--secondary)] bg-clip-text text-transparent">Are you interested in learning more?</span>
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-200 font-medium">Explore our brands and discover what makes each one unique</p>
          <a href="#brands" className="btn-primary inline-flex group">
            <span>Explore Brands</span>
            <svg className="w-5 h-5 transform rotate-180 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
