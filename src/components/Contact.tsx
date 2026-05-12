import { useState } from 'react';
import './Contact.css';

const divisions = [
  'Residential Buying',
  'Commercial Leasing',
  'Property Management',
  'Investment Consulting',
  'Listing My Property',
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  division: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  division?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    division: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[+]?[\d\s-]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.division) {
      newErrors.division = 'Please select a division';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="contact section">
        <div className="container">
          <div className="contact__success">
            <div className="contact__success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h2 className="contact__success-title">Message Sent Successfully</h2>
            <p className="contact__success-text">
              Thank you for reaching out. Our team will get back to you within 24 hours.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', phone: '', division: '', message: '' });
              }}
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact section fade-in">
      <div className="container">
        <div className="contact__header">
          <span className="contact__label">Contact Us</span>
          <h2 className="contact__title">Get in Touch</h2>
          <p className="contact__subtitle">
            Have a question or need assistance? Our team is ready to help.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__form-wrapper">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name" className="contact__label-field">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
                    placeholder="Your full name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className="contact__error" role="alert">{errors.name}</span>
                  )}
                </div>

                <div className="contact__field">
                  <label htmlFor="email" className="contact__label-field">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
                    placeholder="your@email.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className="contact__error" role="alert">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="phone" className="contact__label-field">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`contact__input ${errors.phone ? 'contact__input--error' : ''}`}
                    placeholder="+974 XXXX XXXX"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <span id="phone-error" className="contact__error" role="alert">{errors.phone}</span>
                  )}
                </div>

                <div className="contact__field">
                  <label htmlFor="division" className="contact__label-field">Inquiry Type</label>
                  <select
                    id="division"
                    name="division"
                    value={formData.division}
                    onChange={handleChange}
                    className={`contact__select ${errors.division ? 'contact__input--error' : ''}`}
                    aria-invalid={!!errors.division}
                    aria-describedby={errors.division ? 'division-error' : undefined}
                  >
                    <option value="">Select inquiry type</option>
                    {divisions.map((div) => (
                      <option key={div} value={div}>{div}</option>
                    ))}
                  </select>
                  {errors.division && (
                    <span id="division-error" className="contact__error" role="alert">{errors.division}</span>
                  )}
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="message" className="contact__label-field">Property Details / Questions</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`contact__textarea ${errors.message ? 'contact__input--error' : ''}`}
                  placeholder="Tell us about the property you are looking for or the one you want to list..."
                  rows={5}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="contact__error" role="alert">{errors.message}</span>
                )}
              </div>

              <button type="submit" className="btn btn-primary contact__submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending Request...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>

          <div className="contact__info">
            <div className="contact__info-card">
              <h3 className="contact__info-title">Contact Information</h3>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <strong>Address</strong>
                  <p>Al Dafna, Doha<br />Qatar</p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <strong>Phone</strong>
                  <p>+974 4444 5555</p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <p>info@weone.qa</p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <strong>Business Hours</strong>
                  <p>Sunday - Thursday<br />8:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="contact__social">
                <a href="https://instagram.com/weoneqa" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="Follow us on Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/weone" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="Connect on LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="https://twitter.com/weoneqa" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="Follow us on X">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2394854939!2d51.4937!3d25.2854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzA0LjAiTiA1McKwMjknNDAuMCJF!5e0!3m2!1sen!2sqa!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WeOne location map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}