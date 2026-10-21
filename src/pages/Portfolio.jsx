import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ARTWORKS, ARTWORK_CATEGORIES } from "../data/artworks";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const filteredArtworks =
    activeCategory === "all"
      ? ARTWORKS
      : ARTWORKS.filter((art) => art.category === activeCategory);

  // Lightbox keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (!selectedArtwork) return;

      if (e.key === "Escape") {
        setSelectedArtwork(null);
      } else if (e.key === "ArrowRight") {
        const currentIndex = filteredArtworks.findIndex(
          (art) => art.id === selectedArtwork.id,
        );

        if (currentIndex !== -1 && currentIndex < filteredArtworks.length - 1) {
          setSelectedArtwork(filteredArtworks[currentIndex + 1]);
        }
      } else if (e.key === "ArrowLeft") {
        const currentIndex = filteredArtworks.findIndex(
          (art) => art.id === selectedArtwork.id,
        );

        if (currentIndex > 0) {
          setSelectedArtwork(filteredArtworks[currentIndex - 1]);
        }
      }
    },
    [selectedArtwork, filteredArtworks],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = selectedArtwork ? "hidden" : "";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown, selectedArtwork]);

  const activeIndex = selectedArtwork
    ? filteredArtworks.findIndex((art) => art.id === selectedArtwork.id)
    : -1;

  const hasNext = activeIndex >= 0 && activeIndex < filteredArtworks.length - 1;
  const hasPrev = activeIndex > 0;

  return (
    <div className="min-h-screen w-full bg-gallery-ivory text-studio-charcoal pb-20">
      {/* 1. PORTFOLIO HERO */}
      <section className="bg-gallery-ivory border-b border-studio-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <span className="inline-block text-xs uppercase tracking-widest text-burnt-orange font-semibold">
                Gallery & Archive
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-studio-charcoal tracking-tight leading-tight">
                Selected Works
                <br className="hidden sm:block" /> & Murals
              </h1>

              <p className="text-base sm:text-lg text-studio-charcoal/75 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                A comprehensive showcase of original paintings, site-specific
                murals, charcoal drawings, and relief wall sculptures.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="aspect-4/3 overflow-hidden border border-studio-charcoal/10">
                  <img
                    src="/images/portfolio-hero.jpg"
                    alt="Visual artwork in an artist's studio"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTERS */}
      <section className="sticky top-20 z-30 bg-gallery-ivory/95 backdrop-blur-md border-b border-studio-charcoal/10 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 sm:gap-3 py-1">
            {ARTWORK_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              const count =
                category.id === "all"
                  ? ARTWORKS.length
                  : ARTWORKS.filter((art) => art.category === category.id)
                      .length;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 sm:px-5 py-2 border text-xs font-semibold uppercase tracking-widest transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-studio-charcoal text-gallery-ivory border-studio-charcoal shadow-sm"
                      : "bg-transparent text-studio-charcoal/70 border-studio-charcoal/15 hover:border-burnt-orange hover:text-burnt-orange"
                  }`}
                  aria-pressed={isActive}
                >
                  {category.name}
                  <span className="ml-1 opacity-70">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ARTWORK GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="mb-8 flex items-center justify-between border-b border-studio-charcoal/15 pb-4 text-xs tracking-widest text-studio-charcoal/65 uppercase">
          <span>
            Showing {filteredArtworks.length}{" "}
            {filteredArtworks.length === 1 ? "Work" : "Works"}
          </span>

          <span className="hidden sm:inline italic text-studio-charcoal/45 lowercase">
            Click an image for details
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArtworks.map((artwork) => (
            <button
              key={artwork.id}
              type="button"
              onClick={() => setSelectedArtwork(artwork)}
              aria-label={`View details for ${artwork.title}`}
              className="group cursor-pointer text-left space-y-3 bg-white/60 p-3 border border-studio-charcoal/10 hover:border-burnt-orange/60 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-3/4 overflow-hidden bg-soft-stone/30 w-full">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                <div className="absolute inset-0 bg-studio-charcoal/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 bg-gallery-ivory text-studio-charcoal text-xs font-semibold uppercase tracking-widest">
                    Expand Piece →
                  </span>
                </div>

                {artwork.featured && (
                  <div className="absolute top-3 left-3 bg-burnt-orange text-gallery-ivory text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 shadow-sm">
                    Featured
                  </div>
                )}
              </div>

              <div className="pt-2 space-y-1">
                <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-wider text-burnt-orange font-semibold">
                  <span>{artwork.category.replace("-", " ")}</span>

                  <span className="text-studio-charcoal/50 text-right">
                    {artwork.dimensions}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-studio-charcoal group-hover:text-burnt-orange transition-colors">
                  {artwork.title}
                </h3>

                <p className="text-xs text-studio-charcoal/65 line-clamp-1 font-sans">
                  {artwork.medium}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE LIGHTBOX */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-50 bg-studio-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto"
          onClick={() => setSelectedArtwork(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedArtwork.title}
        >
          <div
            className="relative bg-studio-charcoal border border-gallery-ivory/20 max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 my-auto text-gallery-ivory"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedArtwork(null)}
              className="absolute top-4 right-4 z-10 p-2 text-gallery-ivory/70 hover:text-gallery-ivory hover:bg-gallery-ivory/10 transition-colors"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
              <div className="lg:col-span-7 flex justify-center bg-black/40 p-2 border border-gallery-ivory/10">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="max-h-[60vh] sm:max-h-[70vh] w-auto max-w-full object-contain mx-auto"
                />
              </div>

              <div className="lg:col-span-5 space-y-6 text-left">
                <div>
                  <span className="text-xs uppercase tracking-widest text-burnt-orange font-semibold">
                    {selectedArtwork.category.replace("-", " ")}
                  </span>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gallery-ivory mt-1 leading-tight">
                    {selectedArtwork.title}
                  </h2>
                </div>

                <div className="space-y-3 text-xs border-y border-gallery-ivory/10 py-4 font-sans text-soft-stone">
                  <div className="flex justify-between gap-4">
                    <span className="text-gallery-ivory/50">Medium:</span>
                    <span className="text-gallery-ivory text-right">
                      {selectedArtwork.medium}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-gallery-ivory/50">Dimensions:</span>
                    <span className="text-gallery-ivory text-right">
                      {selectedArtwork.dimensions}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-gallery-ivory/50">Year:</span>
                    <span className="text-gallery-ivory text-right">
                      {selectedArtwork.year}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-soft-stone leading-relaxed">
                  {selectedArtwork.description}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gallery-ivory/10">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={!hasPrev}
                      onClick={() =>
                        setSelectedArtwork(filteredArtworks[activeIndex - 1])
                      }
                      className="px-3 py-2 border border-gallery-ivory/20 text-xs font-semibold uppercase tracking-wider disabled:opacity-30 hover:bg-gallery-ivory/10 transition-colors"
                    >
                      ← Prev
                    </button>

                    <button
                      type="button"
                      disabled={!hasNext}
                      onClick={() =>
                        setSelectedArtwork(filteredArtworks[activeIndex + 1])
                      }
                      className="px-3 py-2 border border-gallery-ivory/20 text-xs font-semibold uppercase tracking-wider disabled:opacity-30 hover:bg-gallery-ivory/10 transition-colors"
                    >
                      Next →
                    </button>
                  </div>

                  <Link
                    to="/contact"
                    onClick={() => setSelectedArtwork(null)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-burnt-orange text-gallery-ivory text-xs font-semibold uppercase tracking-widest hover:bg-gallery-ivory hover:text-studio-charcoal transition-colors text-center"
                  >
                    Inquire About Piece
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. PROJECT ENQUIRY CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="bg-[#183D2B] text-gallery-ivory p-8 sm:p-12 md:p-16 text-center border border-studio-charcoal/10 space-y-6">
          <span className="text-xs uppercase tracking-widest text-gallery-ivory/70 font-semibold">
            Custom Commissions
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gallery-ivory tracking-tight">
            Interested in a Custom Piece or Mural?
          </h2>

          <p className="text-base text-gallery-ivory/80 leading-relaxed max-w-2xl mx-auto font-sans">
            Whether for private residential spaces, commercial interiors, or
            outdoor public installations, Henok accepts select commissions
            throughout the year.
          </p>

          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-gallery-ivory/40 text-gallery-ivory text-xs font-semibold uppercase tracking-widest hover:bg-gallery-ivory hover:text-[#183D2B] transition-all duration-200"
            >
              Start a Conversation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
