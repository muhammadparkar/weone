import { useState } from 'react';
import './Projects.css';

interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
  imageUrl: string;
  tag: string;
}

const properties: Property[] = [
  {
    id: '1',
    title: 'The Azure Villa',
    price: '$4,250,000',
    location: 'West Bay Lagoon, Doha',
    beds: 5,
    baths: 6,
    area: '750 sqm',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    tag: 'For Sale',
  },
  {
    id: '2',
    title: 'Modern Penthouse',
    price: '$2,800,000',
    location: 'The Pearl, Qatar',
    beds: 3,
    baths: 4,
    area: '420 sqm',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    tag: 'For Sale',
  },
  {
    id: '3',
    title: 'Oceanfront Mansion',
    price: '$8,500,000',
    location: 'Lusail City',
    beds: 7,
    baths: 9,
    area: '1,200 sqm',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    tag: 'New Listing',
  },
  {
    id: '4',
    title: 'Minimalist Glass House',
    price: '$12,000/mo',
    location: 'Msheireb Downtown',
    beds: 4,
    baths: 5,
    area: '580 sqm',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    tag: 'For Rent',
  },
  {
    id: '5',
    title: 'Sunset Ridge Estate',
    price: '$5,400,000',
    location: 'Al Waab',
    beds: 6,
    baths: 7,
    area: '920 sqm',
    imageUrl: 'https://images.unsplash.com/photo-1600607687940-c52fb0729a5c?w=800&q=80',
    tag: 'Sold',
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <section id="projects" className="projects section fade-in">
      <div className="container">
        <div className="projects__header">
          <div className="projects__title-group">
            <span className="projects__label">Exquisite Collection</span>
            <h2 className="projects__title">Featured Estates</h2>
          </div>
          <div className="projects__filters">
            {['All', 'For Sale', 'For Rent'].map((tab) => (
              <button 
                key={tab} 
                className={`projects__filter ${activeTab === tab ? 'projects__filter--active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="projects__grid">
          {properties
            .filter(p => activeTab === 'All' || p.tag === activeTab)
            .map((property) => (
            <article key={property.id} className="property-card">
              <div className="property-card__image-wrapper">
                <img src={property.imageUrl} alt={property.title} className="property-card__image" loading="lazy" />
                <div className="property-card__tag">{property.tag}</div>
                <button className="property-card__wishlist" aria-label="Add to wishlist">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="property-card__content">
                <div className="property-card__header">
                  <h3 className="property-card__title">{property.title}</h3>
                  <span className="property-card__price">{property.price}</span>
                </div>
                <p className="property-card__location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {property.location}
                </p>
                <div className="property-card__details">
                  <div className="property-card__detail">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 20h20M2 14v1h20v-1M2 8V7h20v1M2 14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2"></path>
                    </svg>
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="property-card__detail">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                    </svg>
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="property-card__detail">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18"></path>
                    </svg>
                    <span>{property.area}</span>
                  </div>
                </div>
                <button className="btn btn-secondary property-card__btn">View Details</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}