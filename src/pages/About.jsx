import React from "react";

export default function About() {
  return (
    <main className="bg-gallery-ivory text-studio-charcoal">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Artist / studio image */}
        <div className="relative">
          <div className="absolute -left-3 -top-3 h-24 w-24 border-l border-t border-burnt-orange sm:-left-5 sm:-top-5" />

          <div className="aspect-[4/5] overflow-hidden bg-studio-charcoal/5">
            <img
              src="/images/henok-studio.jpg"
              alt="Artist working on a painting in a studio"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-studio-charcoal/60">
            Creativity through color, form, and texture
          </p>
        </div>

        {/* Artist introduction */}
        <div className="space-y-7">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-burnt-orange">
            The Artist Behind the Vision
          </span>

          <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            About Henok
          </h1>

          <div className="h-px w-16 bg-burnt-orange" />

          <p className="max-w-xl text-base leading-8 text-studio-charcoal/70 sm:text-lg">
            Art is a way to explore ideas, express emotion, and transform the
            spaces around us. Through paintings, drawings, murals, and custom
            wall art, this portfolio brings together different forms of visual
            expression.
          </p>

          <p className="max-w-xl text-base leading-8 text-studio-charcoal/70 sm:text-lg">
            Every project begins with an idea. The aim is to explore color,
            texture, scale, and composition to create artwork that connects with
            its surroundings and the people who experience it.
          </p>

          <a
            href="/portfolio"
            className="inline-flex items-center gap-3 border border-studio-charcoal/25 px-6 py-3 text-sm font-medium transition-colors duration-300 hover:border-burnt-orange hover:bg-burnt-orange hover:text-white"
          >
            Explore the Portfolio
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* Closing statement */}
      <section className="border-t border-studio-charcoal/10 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-burnt-orange">
            The Creative Approach
          </span>

          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Every space has a story worth telling.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-studio-charcoal/70">
            From a canvas to an expansive wall, artwork can bring character,
            energy, and a distinctive visual identity to a space.
          </p>
        </div>
      </section>

      {/* Project enquiry CTA */}
      <section className="bg-[#183D2B] px-4 py-16 text-white sm:px-6 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              Have a Project in Mind?
            </h2>

            <p className="leading-7 text-white/80">
              Let's discuss your ideas for a painting, mural, or custom artwork.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 border border-white/50 px-6 py-3 text-sm font-medium transition-colors duration-300 hover:bg-white hover:text-[#183D2B]"
          >
            Get in Touch
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
