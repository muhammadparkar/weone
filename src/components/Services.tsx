import './Services.css';

interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 'buying',
    name: 'Property Acquisition',
    description: 'Expert guidance through the entire buying process, from selection to closing.',
    features: ['Market Analysis', 'Private Viewings', 'Negotiation Strategy', 'Legal Support'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    id: 'selling',
    name: 'Global Marketing',
    description: 'Elevating your property with high-end visuals and global exposure.',
    features: ['Professional Staging', 'HD Videography', 'Global Reach', 'Targeted Ads'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    id: 'management',
    name: 'Estate Management',
    description: 'Hassle-free property management for owners and investors.',
    features: ['Tenant Screening', 'Maintenance', 'Rent Collection', 'Financial Reports'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
  },
  {
    id: 'investment',
    name: 'Investment Strategy',
    description: 'Identifying high-yield opportunities in emerging and established markets.',
    features: ['ROI Analysis', 'Portfolio Growth', 'Asset Diversification', 'Risk Assessment'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10"/>
        <line x1="18" y1="20" x2="18" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="16"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="services section fade-in">
      <div className="container">
        <div className="services__header">
          <span className="services__label">Our Expertise</span>
          <h2 className="services__title">Specialized Real Estate Solutions</h2>
          <p className="services__subtitle">
            We provide a comprehensive suite of services designed to elevate your real estate experience.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="service-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="service-card__number">{(index + 1).toString().padStart(2, '0')}</div>
              <div className="service-card__icon-wrapper">
                <div className="service-card__icon">
                  {service.icon}
                </div>
              </div>
              <h3 className="service-card__title">{service.name}</h3>
              <p className="service-card__description">{service.description}</p>
              <ul className="service-card__list">
                {service.features.map((feature) => (
                  <li key={feature} className="service-card__list-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="service-card__footer">
                <a href="#contact" className="service-card__link">
                  Consult Specialist
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}