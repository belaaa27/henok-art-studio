import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-studio-charcoal text-gallery-ivory/80 border-t border-gallery-ivory/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gallery-ivory/10">
          {/* Brand & Studio Tagline */}
          <div className="md:col-span-5 space-y-4">
            <Link
              to="/"
              className="font-serif text-3xl font-bold text-gallery-ivory tracking-wider block"
            >
              HENOK
            </Link>
            <p className="font-serif italic text-lg text-soft-stone">
              “Walls. Canvases. Stories.”
            </p>
            <p className="text-sm text-gallery-ivory/60 leading-relaxed max-w-sm">
              Contemporary visual artist specializing in original paintings,
              architectural wall murals, and fine graphite drawings.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold tracking-widest text-burnt-orange uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-burnt-orange transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-burnt-orange transition-colors"
                >
                  Portfolio Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-burnt-orange transition-colors"
                >
                  Creative Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-burnt-orange transition-colors"
                >
                  About the Artist
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-burnt-orange transition-colors"
                >
                  Contact & Commissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Inquiries & Studio Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold tracking-widest text-burnt-orange uppercase">
              Studio & Commissions
            </h4>
            <p className="text-sm text-gallery-ivory/70 leading-relaxed">
              Open for private art commissions, commercial murals, and interior
              collaborations.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-burnt-orange hover:text-gallery-ivory transition-colors gap-2"
              >
                <span>Initiate Inquiry</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Metadata Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gallery-ivory/50 gap-4">
          <p>
            © {new Date().getFullYear()} HENOK Visual Art Studio. All rights
            reserved.
          </p>
          <p className="italic text-soft-stone/60">
            Portfolio presentation website.
          </p>
        </div>
      </div>
    </footer>
  );
}
