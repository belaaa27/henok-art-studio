const services = [
  {
    number: "01",
    title: "Mural Painting",
    description:
      "Transform walls into expressive visual experiences for homes, businesses, and public spaces.",
  },
  {
    number: "02",
    title: "Canvas Paintings",
    description:
      "Original and commissioned paintings created to bring character and emotion into your space.",
  },
  {
    number: "03",
    title: "Drawing & Illustration",
    description:
      "Detailed drawings and expressive illustrations shaped around your ideas and creative vision.",
  },
  {
    number: "04",
    title: "Custom Wall Art",
    description:
      "Personalized artwork designed to complement your interior and make your space distinctive.",
  },
];

export default function Services() {
  return (
    <main className="bg-gallery-ivory text-studio-charcoal">
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
        {/* Studio image */}
        <div className="relative">
          <div className="absolute -left-3 -top-3 h-24 w-24 border-l border-t border-burnt-orange sm:-left-5 sm:-top-5" />

          <div className="aspect-[4/5] overflow-hidden bg-white/5">
            <img
              src="/images/studio-tools.jpg"
              alt="Artist's brushes, paints, and studio tools"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-studio-charcoal/70">
            A practice built around creativity
          </p>
        </div>

        {/* Service descriptions */}
        <div className="space-y-8 sm:space-y-10">
          <header className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-burnt-orange">
              Creative Practice
            </span>

            <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Art for Every Space
            </h1>

            <p className="max-w-xl text-base leading-8 text-studio-charcoal/70 sm:text-lg">
              From expressive murals to thoughtful canvas pieces, explore
              creative services tailored to different spaces and ideas.
            </p>
          </header>

          <div className="divide-y divide-studio-charcoal/15 border-y border-studio-charcoal/15">
            {services.map((service) => (
              <article
                key={service.number}
                className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5"
              >
                <span className="pt-1 text-sm text-burnt-orange">
                  {service.number}
                </span>

                <div className="space-y-2">
                  <h2 className="font-serif text-xl font-semibold sm:text-2xl">
                    {service.title}
                  </h2>

                  <p className="max-w-lg text-sm leading-7 text-studio-charcoal/70 sm:text-base">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#183D2B] border border-gallery-ivory/30 px-6 py-3 text-sm font-medium transition-colors duration-300 hover:border-burnt-orange hover:bg-burnt-orange hover:text-white"
          >
            Discuss a Project
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
