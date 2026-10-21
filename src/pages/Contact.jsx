import React, { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  projectType: "Mural Painting",
  message: "",
};

const projectTypes = [
  "Mural Painting",
  "Canvas Painting",
  "Drawing & Illustration",
  "Custom Wall Art",
  "Other",
];

const demoContacts = [
  {
    name: "Email",
    value: "henok.artstudio@example.com",
    note: "Demo email — not a real contact address",
    icon: "✉",
  },
  {
    name: "Phone",
    value: "+251 9XX XXX XXX",
    note: "Demo number — replace before launch",
    icon: "☎",
  },
  {
    name: "Telegram",
    value: "@henok_artstudio_demo",
    note: "Demo username — not a verified account",
    icon: "➤",
  },
  {
    name: "Instagram",
    value: "@henok_artstudio_demo",
    note: "Demo username — not a verified account",
    icon: "◎",
  },
];

const contactOptions = [
  {
    title: "Email Inquiry",
    description:
      "A convenient format for sharing project ideas, requirements, and questions.",
    action: "Email preview",
    icon: "✉",
    image: "/images/contact-email.jpg",
  },
  {
    title: "Telegram Chat",
    description:
      "A messaging-style option for discussing your creative project.",
    action: "Telegram preview",
    icon: "➤",
    image: "/images/contact-telegram.jpg",
  },
  {
    title: "Instagram DM",
    description:
      "A social messaging option for discussing artwork and inspiration.",
    action: "Instagram preview",
    icon: "◎",
    image: "/images/contact-instagram.jpg",
  },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [notice, setNotice] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setNotice("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    setNotice(
      "Demo only: your message has not been sent or stored. Henok's real contact method will be added here later.",
    );
  }

  return (
    <main className="bg-gallery-ivory text-studio-charcoal">
      {/* Light Studio hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-studio-charcoal/5">
          <img
            src="/images/studio-tools.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gallery-ivory via-gallery-ivory/95 to-gallery-ivory/55" />

        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-burnt-orange">
              Start a Conversation
            </span>

            <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Let’s Create Something Meaningful.
            </h1>

            <p className="max-w-2xl text-base leading-8 text-studio-charcoal/75 sm:text-lg">
              Have an idea for a mural, painting, drawing, or custom wall art?
              Share a little about your project and explore the possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact details and enquiry form */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <aside className="space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-burnt-orange">
              Contact Information
            </span>

            <h2 className="mt-3 font-serif text-2xl font-semibold sm:text-3xl">
              Let’s bring your vision to life.
            </h2>

            <p className="mt-4 leading-7 text-studio-charcoal/70">
              Explore the temporary contact options below. These demo details
              must be replaced with Henok’s verified contact information before
              the website is launched.
            </p>
          </div>

          <div className="divide-y divide-studio-charcoal/10 border-y border-studio-charcoal/10">
            {demoContacts.map((contact) => (
              <div key={contact.name} className="flex items-start gap-4 py-5">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#183D2B] text-xl text-white"
                >
                  {contact.icon}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-studio-charcoal/60">
                    {contact.name}
                  </p>

                  <p className="mt-1 break-words text-sm font-medium sm:text-base">
                    {contact.value}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-studio-charcoal/60">
                    {contact.note}
                  </p>
                </div>

                <span className="shrink-0 pt-1 text-[10px] uppercase tracking-wider text-burnt-orange">
                  Demo
                </span>
              </div>
            ))}
          </div>

          <div className="border-l-2 border-burnt-orange pl-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-burnt-orange">
              Prefer to browse first?
            </p>

            <p className="mt-2 text-sm leading-6 text-studio-charcoal/70">
              Explore the portfolio to discover the available artwork
              categories.
            </p>

            <a
              href="/portfolio"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-burnt-orange"
            >
              View Portfolio <span aria-hidden="true">→</span>
            </a>
          </div>
        </aside>

        <div className="border border-studio-charcoal/10 bg-white/70 p-5 sm:p-8 lg:p-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-burnt-orange">
            Project Enquiry
          </span>

          <h2 className="mt-3 font-serif text-2xl font-semibold sm:text-3xl">
            Tell Us About Your Project
          </h2>

          <p className="mt-3 text-sm leading-6 text-studio-charcoal/70">
            Fill in the form to preview how a project enquiry will look.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-studio-charcoal/20 bg-gallery-ivory px-4 py-3 text-sm outline-none transition focus:border-burnt-orange"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border border-studio-charcoal/20 bg-gallery-ivory px-4 py-3 text-sm outline-none transition focus:border-burnt-orange"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="projectType"
                className="block text-sm font-medium"
              >
                Type of Project
              </label>

              <select
                id="projectType"
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                className="w-full border border-studio-charcoal/20 bg-gallery-ivory px-4 py-3 text-sm outline-none transition focus:border-burnt-orange"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Tell Us About Your Project
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your idea, space, preferred style, or project requirements..."
                className="w-full resize-y border border-studio-charcoal/20 bg-gallery-ivory px-4 py-3 text-sm outline-none transition focus:border-burnt-orange"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-3 bg-[#183D2B] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#245238]"
            >
              Preview Enquiry <span aria-hidden="true">→</span>
            </button>

            {notice && (
              <p
                role="status"
                aria-live="polite"
                className="border-l-2 border-burnt-orange pl-4 text-sm leading-6 text-studio-charcoal/70"
              >
                {notice}
              </p>
            )}

            <p className="text-xs leading-5 text-studio-charcoal/60">
              Demo form only. Submitting does not send, email, or store your
              message.
            </p>
          </form>
        </div>
      </section>

      {/* Three contact-method preview cards */}
      <section className="border-t border-studio-charcoal/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-burnt-orange">
              Contact Preview Options
            </span>

            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              Choose Your Preferred Way to Get in Touch
            </h2>

            <p className="mt-4 leading-7 text-studio-charcoal/70">
              Preview three possible ways to contact the studio. These are
              visual examples; their demo links are not connected to real
              accounts.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contactOptions.map((option) => (
              <article
                key={option.title}
                className="group overflow-hidden border border-studio-charcoal/10 bg-white/70 transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-studio-charcoal/5">
                  <img
                    src={option.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-studio-charcoal/40 to-transparent" />

                  <span className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#183D2B] text-xl text-white">
                    {option.icon}
                  </span>
                </div>

                <div className="space-y-3 p-5">
                  <h3 className="font-serif text-xl font-semibold">
                    {option.title}
                  </h3>

                  <p className="text-sm leading-6 text-studio-charcoal/70">
                    {option.description}
                  </p>

                  <p className="inline-flex items-center gap-2 pt-1 text-xs font-semibold uppercase tracking-wider text-burnt-orange">
                    {option.action}
                    <span aria-hidden="true">→</span>
                  </p>

                  <p className="text-xs text-studio-charcoal/50">
                    Demo preview — no external account connected
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Forest-green closing CTA */}
      <section className="relative isolate overflow-hidden bg-[#183D2B] px-4 py-16 text-white sm:px-6 sm:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/10 via-transparent to-black/20"
        />

        <div className="mx-auto max-w-4xl space-y-5 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            Your Idea, Your Space
          </span>

          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Every Great Project Starts with an Idea.
          </h2>

          <p className="mx-auto max-w-2xl leading-7 text-white/80">
            Explore the artwork and discover the possibilities for your next
            creative project.
          </p>

          <a
            href="/portfolio"
            className="inline-flex items-center gap-3 border border-white/50 px-6 py-3 text-sm font-medium transition-colors hover:bg-white hover:text-[#183D2B]"
          >
            Explore Artwork <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
