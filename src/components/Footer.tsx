import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              <div className="header__logo-content">
                <span className="header__logo-text">WE ONE <span className="header__logo-accent">GROUP</span></span>
              </div>
            </a>
            <p className="footer__tagline">
              Connecting discerning clients with the world's most extraordinary properties. Your trusted partner in luxury real estate.
            </p>
            <div className="footer__social">
              <a href="https://instagram.com/weoneestates" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/weoneestates" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          <nav className="footer__nav" aria-label="Quick links">
            <h3 className="footer__nav-title">Quick Links</h3>
            <ul className="footer__nav-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#projects">Properties</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </nav>

          <nav className="footer__divisions" aria-label="Property types">
            <h3 className="footer__nav-title">Property Types</h3>
            <ul className="footer__nav-list">
              <li><a href="#projects">Luxury Villas</a></li>
              <li><a href="#projects">Modern Penthouses</a></li>
              <li><a href="#projects">Commercial Spaces</a></li>
              <li><a href="#projects">Waterfront Estates</a></li>
              <li><a href="#projects">Mountain Retreats</a></li>
            </ul>
          </nav>

          <div className="footer__contact">
            <h3 className="footer__nav-title">Contact</h3>
            <address className="footer__address">
              <p>Al Dafna, Doha, Qatar</p>
            </address>
            <p className="footer__contact-item">
              <span>Direct:</span> +974 4444 5555
            </p>
            <p className="footer__contact-item">
              <span>Inquiries:</span> sales@weoneestates.com
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} WE ONE GROUP. All rights reserved.
          </p>
          <nav className="footer__legal" aria-label="Legal links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}