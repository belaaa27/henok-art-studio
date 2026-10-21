import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-studio-charcoal/90 backdrop-blur-md border-b border-gallery-ivory/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Name / Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3"
        >
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-gallery-ivory group-hover:text-burnt-orange transition-colors">
            HENOK
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange group-hover:scale-125 transition-transform"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-sm font-medium tracking-widest uppercase transition-colors hover:text-burnt-orange ${
                  isActive
                    ? "text-burnt-orange border-b-2 border-burnt-orange pb-1"
                    : "text-gallery-ivory/80"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Primary CTA Link */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-gallery-ivory text-studio-charcoal text-xs font-semibold uppercase tracking-widest hover:bg-burnt-orange hover:text-gallery-ivory transition-colors"
          >
            Commission Art
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-sm text-gallery-ivory hover:text-burnt-orange focus:outline-hidden"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-studio-charcoal border-b border-gallery-ivory/10 px-6 pt-4 pb-8 space-y-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium tracking-wider uppercase transition-colors ${
                    isActive
                      ? "text-burnt-orange font-semibold"
                      : "text-gallery-ivory/80"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="pt-4 border-t border-gallery-ivory/10">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-burnt-orange text-gallery-ivory text-xs font-semibold uppercase tracking-widest py-3 hover:bg-gallery-ivory hover:text-studio-charcoal transition-colors"
            >
              Commission Art
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
