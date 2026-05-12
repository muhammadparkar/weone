import { useState, useEffect, useCallback } from 'react';
import './Hero.css';

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
}

const slides: Slide[] = [
  {
    id: 'luxury-villas',
    title: 'Architectural Masterpieces',
    subtitle: 'Discover an exclusive collection of high-end villas in prime locations',
    category: 'Luxury Villas',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80',
  },
  {
    id: 'modern-apartments',
    title: 'Sky-High Sophistication',
    subtitle: 'Premium penthouses and apartments with breathtaking city views',
    category: 'Modern Apartments',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1920&q=80',
  },
  {
    id: 'commercial-spaces',
    title: 'Strategic\nBusiness Hubs',
    subtitle: 'State-of-the-art office spaces and retail outlets for your venture',
    category: 'Commercial Real Estate',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
  },
  {
    id: 'waterfront-estates',
    title: 'Serene Waterfront Living',
    subtitle: 'Exquisite properties along the coastline for the ultimate retreat',
    category: 'Waterfront Estates',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  };

  const slide = slides[currentSlide];

  return (
    <section
      id="hero"
      className="hero"
      aria-label="Real Estate Hero Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
    >
      <div className="hero__slides">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`hero__slide ${index === currentSlide ? 'hero__slide--active' : ''}`}
            aria-hidden={index !== currentSlide}
          >
            <div
              className="hero__slide-bg"
              style={{ backgroundImage: `url(${s.imageUrl})` }}
            />
            <div className="hero__slide-overlay" />
          </div>
        ))}
      </div>

      <div className="hero__content container">
        <div className="hero__text fade-in visible">
          <h1 className="hero__title">{slide.title}</h1>
          <p className="hero__subtitle">{slide.subtitle}</p>
          
          <div className="hero__search-card">
            <div className="hero__search-tabs">
              <button className="hero__search-tab hero__search-tab--active">Buy</button>
              <button className="hero__search-tab">Rent</button>
              <button className="hero__search-tab">Sell</button>
            </div>
            <div className="hero__search-inputs">
              <div className="hero__input-group">
                <label htmlFor="property-search">Location</label>
                <input 
                  id="property-search"
                  type="text" 
                  placeholder="Enter city or neighborhood..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="hero__input-group">
                <label htmlFor="property-type">Property Type</label>
                <select id="property-type">
                  <option>All Types</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>Office</option>
                </select>
              </div>
              <button className="btn btn-primary hero__search-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span>Find Properties</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__controls">
        <div className="hero__slide-info">
          <span className="hero__slide-number">{String(currentSlide + 1).padStart(2, '0')}</span>
          <div className="hero__slide-progress">
            <div className="hero__slide-progress-inner" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
          </div>
          <span className="hero__slide-total">{String(slides.length).padStart(2, '0')}</span>
        </div>
        <div className="hero__arrows">
          <button className="hero__arrow" onClick={prevSlide} aria-label="Previous property">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button className="hero__arrow" onClick={nextSlide} aria-label="Next property">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      <div className="hero__floating-tags">
        {slides.map((s, index) => (
          <button
            key={s.id}
            className={`hero__tag ${index === currentSlide ? 'hero__tag--active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            {s.category}
          </button>
        ))}
      </div>
    </section>
  );
}