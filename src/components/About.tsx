import { useEffect, useRef, useState } from 'react';
import './About.css';

const stats = [
  { value: 12, label: 'Years of Excellence', suffix: '+' },
  { value: 240, label: 'Properties Sold', suffix: '+' },
  { value: 180, label: 'Happy Families', suffix: '+' },
  { value: 98, label: 'Client Satisfaction', suffix: '%' },
];

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Market Mastery',
    description: 'Our deep-rooted expertise in local and global markets ensures you get the most accurate valuation and strategic advice.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Unrivaled Integrity',
    description: 'We believe in transparent transactions and honest communication, building relationships that last beyond the closing date.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
    title: 'Elite Service',
    description: 'Every client receives a bespoke experience tailored to their unique lifestyle requirements and investment goals.',
  },
];

function Counter({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOut * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target]);

  return (
    <span className="about__stat-number">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about section fade-in" ref={sectionRef}>
      <div className="container">
        <div className="about__grid">
          <div className="about__image-wrapper">
            <div className="about__image">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Modern luxury property interior"
                loading="lazy"
              />
              <div className="about__image-experience">
                <span className="about__experience-number">12</span>
                <span className="about__experience-text">Years of Trust</span>
              </div>
            </div>
          </div>
          
          <div className="about__content">
            <span className="about__label">Our Legacy</span>
            <h2 className="about__title">
              Redefining Luxury Living Through Excellence
            </h2>
            <p className="about__text">
              WE ONE GROUP is a premier real estate firm dedicated to connecting discerning clients with the world's most extraordinary properties. Our legacy is built on a foundation of trust, sophistication, and an unwavering commitment to quality.
            </p>
            <p className="about__text">
              From contemporary penthouses to sprawling waterfront estates, we curate a portfolio that represents the pinnacle of architectural achievement and lifestyle design. Our team of experts brings global perspective and local insight to every transaction.
            </p>
            
            <div className="about__values-list">
              {values.map((value) => (
                <div key={value.title} className="about__value-item">
                  <div className="about__value-icon-small">
                    {value.icon}
                  </div>
                  <div className="about__value-text">
                    <h4 className="about__value-title-small">{value.title}</h4>
                    <p className="about__value-desc-small">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="about__stat">
              <Counter target={stat.value} suffix={stat.suffix} isVisible={isStatsVisible} />
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}