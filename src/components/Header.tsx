import { useState, useEffect } from 'react';
import './Header.css';

const navLinks = [
  { label: 'Properties', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <a href="#hero" className="skip-link">Skip to main content</a>
      <div className="header__container container">
        <a href="#hero" className="header__logo" aria-label="WE ONE GROUP Home">
          <div className="header__logo-content">
            <span className="header__logo-text">WE ONE <span className="header__logo-accent">GROUP</span></span>
          </div>
        </a>

        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="header__nav-item">
                <a href={link.href} className="header__nav-link" onClick={handleLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <button className="header__search-toggle" aria-label="Search properties">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <a href="#contact" className="btn btn-primary header__cta" onClick={handleLinkClick}>
            List Property
          </a>
        </div>

        <button
          className={`header__mobile-toggle ${isMobileMenuOpen ? 'header__mobile-toggle--open' : ''}`}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="header__mobile-bar"></span>
          <span className="header__mobile-bar"></span>
          <span className="header__mobile-bar"></span>
        </button>
      </div>

      <div
        className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="header__mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="header__mobile-nav-link"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="header__mobile-cta-wrapper">
              <a href="#contact" className="btn btn-primary" onClick={handleLinkClick}>
                List Property
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}