import './CTA.css';

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta__background" aria-hidden="true">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80" 
          alt="" 
          className="cta__bg-image" 
        />
        <div className="cta__overlay" />
      </div>
      <div className="container">
        <div className="cta__content fade-in visible">
          <span className="cta__label">Connect With Us</span>
          <h2 className="cta__title">Ready to Find Your Dream Estate?</h2>
          <p className="cta__subtitle">
            Whether you are buying, selling, or investing, our experts are here to guide you every step of the way.
          </p>
          <div className="cta__actions">
            <a href="#contact" className="btn btn-primary cta__btn">
              Consult an Expert
            </a>
            <a href="#projects" className="btn btn-white-outline cta__btn">
              Explore Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}