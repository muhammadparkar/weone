import { useState, useEffect } from 'react';
import './Testimonials.css';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  division: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'WeOne transformed our office space into something truly remarkable. Their attention to detail and understanding of our brand made all the difference.',
    author: 'Ahmad Al-Rashid',
    role: 'CEO',
    division: 'Real Estate',
  },
  {
    id: '2',
    quote: 'The laundry service quality is consistently exceptional. Their commercial solutions have streamlined our hotel operations significantly.',
    author: 'Fatima Hassan',
    role: 'Operations Director',
    division: 'Laundry Services',
  },
  {
    id: '3',
    quote: 'Every celebration has been elevated by their stunning custom cakes. The artistry and taste are beyond compare.',
    author: 'Sara Al-Mansoori',
    role: 'Event Planner',
    division: 'Bakery',
  },
  {
    id: '4',
    quote: 'Finding the perfect piece for our wedding was effortless. Their bridal collection and custom design service created exactly what we envisioned.',
    author: 'Mohammed & Layla',
    role: 'Newlyweds',
    division: 'Jewellery',
  },
  {
    id: '5',
    quote: 'Reliable, professional, and always on time. Their fleet services have become essential to our logistics operations.',
    author: 'Karim Boueri',
    role: 'Logistics Manager',
    division: 'Transportation',
  },
];

function StarRating() {
  return (
    <div className="testimonials__stars" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
          <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsFading(false);
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsFading(false);
    }, 300);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="testimonials section fade-in">
      <div className="container">
        <div className="testimonials__header">
          <span className="testimonials__label">Testimonials</span>
          <h2 className="testimonials__title">What Our Clients Say</h2>
        </div>

        <div className={`testimonials__carousel ${isFading ? 'testimonials__carousel--fading' : ''}`}>
          <div className="testimonials__quote-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>

          <blockquote className="testimonials__quote">
            <p className="testimonials__text">{testimonial.quote}</p>
            <footer className="testimonials__author">
              <div className="testimonials__author-info">
                <cite className="testimonials__name">{testimonial.author}</cite>
                <span className="testimonials__role">{testimonial.role}</span>
              </div>
              <span className="testimonials__division">{testimonial.division}</span>
            </footer>
          </blockquote>

          <StarRating />
        </div>

        <div className="testimonials__dots" role="tablist">
          {testimonials.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`testimonials__dot ${index === currentIndex ? 'testimonials__dot--active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}