import { Link } from "react-router-dom";
import { ARTWORKS } from "../data/artworks";

export default function Home() {
  const featuredArtworks = ARTWORKS.filter((art) => art.featured).slice(0, 4);

  return (
    <div className="w-full">
      {/* =========================================================================
          1. HERO SECTION (Full-Width Cinematic Background Image)
          Features verified male artist working on mural, edge-to-edge layout,
          left-aligned content with smooth horizontal gradient overlay.
         ========================================================================= */}
      <section className="relative min-h-[calc(100vh-5rem)] bg-studio-charcoal text-gallery-ivory overflow-hidden flex items-center border-b border-gallery-ivory/10">
        {/* Full-bleed background image showing male artist painting wall mural */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-mural.jpg"
            alt="Male artist painting a large, colorful wall mural"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Smooth left-to-right charcoal gradient overlay for optimal readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(23,24,22,0.92) 0%, rgba(23,24,22,0.72) 38%, rgba(23,24,22,0.30) 68%, rgba(23,24,22,0.12) 100%)",
            }}
          />
          {/* Subtle bottom vignette gradient */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-studio-charcoal via-studio-charcoal/40 to-transparent" />
        </div>

        {/* Hero Content Overlay Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
          <div className="max-w-xl space-y-6 text-left">
            <span className="inline-block text-xs uppercase tracking-widest text-soft-stone font-semibold">
              VISUAL ARTIST
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gallery-ivory leading-[1.08]">
              Walls.
              <br />
              Canvases.
              <br />
              Stories.
            </h1>
            <p className="text-base sm:text-lg text-soft-stone/90 max-w-md leading-relaxed font-sans font-normal">
              Bold artwork, thoughtful spaces, and custom creations for modern
              living and working spaces.
            </p>
            <div className="pt-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3 bg-studio-charcoal/80 backdrop-blur-xs border border-gallery-ivory/30 text-gallery-ivory text-xs font-semibold uppercase tracking-widest hover:bg-gallery-ivory hover:text-studio-charcoal transition-all duration-200 group shadow-lg"
              >
                <span>View Portfolio</span>
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FEATURED PORTFOLIO SECTION (Gallery Ivory Background)
          Asymmetric editorial gallery on light background.
         ========================================================================= */}
      <section className="bg-gallery-ivory text-studio-charcoal py-20 sm:py-28 border-b border-studio-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-12 border-b border-studio-charcoal/15 pb-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-studio-charcoal tracking-tight">
              Featured Portfolio
            </h2>
            <Link
              to="/portfolio"
              className="text-xs uppercase tracking-widest font-semibold text-burnt-orange hover:text-studio-charcoal transition-colors flex items-center gap-1"
            >
              <span>VIEW ALL</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          {/* Featured Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArtworks.map((artwork) => (
              <Link
                key={artwork.id}
                to="/portfolio"
                className="group block space-y-3"
              >
                <div className="aspect-3/4 overflow-hidden bg-studio-charcoal/5 border border-studio-charcoal/10">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-studio-charcoal group-hover:text-burnt-orange transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="text-xs text-studio-charcoal/60 capitalize mt-0.5">
                    {artwork.category.replace("-", " ")} &bull; {artwork.medium}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SERVICES SECTION (Studio Charcoal Background)
          Dark coffee/charcoal atmosphere. Studio brushes on left, text on right.
         ========================================================================= */}
      <section className="bg-studio-charcoal text-gallery-ivory py-20 sm:py-28 border-b border-gallery-ivory/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Paintbrushes in Container / Studio Tool Photo */}
            <div className="lg:col-span-5">
              <div className="aspect-4/5 rounded-xs overflow-hidden border border-gallery-ivory/10 shadow-xl bg-studio-charcoal/50">
                <img
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80"
                  alt="Paintbrushes and artistic studio tools in jar"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right Column: Services Headline and Descriptions */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-burnt-orange font-semibold">
                Services
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gallery-ivory tracking-tight">
                Art for Every Space
              </h2>
              <p className="text-base text-soft-stone leading-relaxed max-w-xl">
                From original paintings to large-scale murals, custom drawings
                and personalized commissions.
              </p>

              <div className="pt-4">
                <Link
                  to="/services"
                  className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-gallery-ivory border-b border-burnt-orange pb-1 hover:text-burnt-orange transition-colors gap-2"
                >
                  <span>Explore Services</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. ABOUT HENOK SECTION (Gallery Ivory Background)
          Warm white background. Studio interior image on LEFT, dark text on RIGHT.
         ========================================================================= */}
      <section className="bg-gallery-ivory text-studio-charcoal py-20 sm:py-28 border-b border-studio-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Sunlit Studio Interior Image */}
            <div className="lg:col-span-6">
              <div className="aspect-4/3 rounded-xs overflow-hidden border border-studio-charcoal/10 shadow-md">
                <img
                  src="/images/mural2.jpg"
                  alt="Sunlit artist studio space with artworks on display"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-burnt-orange font-semibold">
                About Henok
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-studio-charcoal tracking-tight">
                The Artist Behind the Vision
              </h2>
              <p className="text-base text-studio-charcoal/80 leading-relaxed">
                My work is about people, culture, and the spaces we live in.
                Each piece tells a story — a moment, a feeling, a connection.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-studio-charcoal hover:text-burnt-orange transition-colors gap-2"
                >
                  <span>Learn More</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. PROJECT ENQUIRY CTA SECTION (Dark Forest Green #183D2B Background)
          Full-width deep forest green section with white/ivory text.
         ========================================================================= */}
      <section className="bg-[#183D2B] text-gallery-ivory py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gallery-ivory tracking-tight">
            Have a Project in Mind?
          </h2>
          <p className="text-base sm:text-lg text-gallery-ivory/85 leading-relaxed max-w-2xl mx-auto">
            Let's bring your vision to life. I'm open for commissions,
            collaborations and new opportunities.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-gallery-ivory/40 text-gallery-ivory text-xs font-semibold uppercase tracking-widest hover:bg-gallery-ivory hover:text-[#183D2B] transition-all duration-200"
            >
              Contact Me &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
