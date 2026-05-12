import './WhyChooseUs.css';

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Multi-Industry Expertise',
    description: 'Deep knowledge and proven methodologies across five distinct sectors.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Quality Assurance',
    description: 'Rigorous standards ensure every service meets our exacting benchmarks.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Customer-First Approach',
    description: 'Your needs drive our decisions. We deliver tailored solutions.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
    title: 'Experienced Team',
    description: 'Dedicated professionals bringing passion and expertise to every engagement.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Competitive Pricing',
    description: 'Premium quality at fair prices, delivering genuine value.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Reliable Service',
    description: 'Consistent delivery on time, every time. Your trusted partner.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us section fade-in">
      <div className="container">
        <div className="why-choose-us__header">
          <span className="why-choose-us__label">Why WeOne</span>
          <h2 className="why-choose-us__title">What Sets Us Apart</h2>
          <p className="why-choose-us__subtitle">
            Six pillars that define our commitment to excellence
          </p>
        </div>

        <div className="why-choose-us__grid">
          {reasons.map((reason) => (
            <div key={reason.title} className="why-choose-us__card">
              <div className="why-choose-us__icon">
                {reason.icon}
              </div>
              <h3 className="why-choose-us__card-title">{reason.title}</h3>
              <p className="why-choose-us__card-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}