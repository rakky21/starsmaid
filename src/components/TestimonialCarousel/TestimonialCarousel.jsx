import { useState } from 'react';

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      avatar: '👩‍💼',
      service: 'Standard Cleaning',
      rating: 5,
      review:
        'Stars Maid transformed my home weekly. Professional, punctual, and they even remember my coffee order. Best service investment ever.',
      badge: 'verified-customer',
    },
    {
      id: 2,
      name: 'James D.',
      avatar: '👨‍💼',
      service: 'Office Cleaning',
      rating: 5,
      review:
        'Our office sparkles now. The team respects our schedule, works around client hours, and communicated every step. Highly recommend for commercial spaces.',
      badge: 'repeat-customer',
    },
    {
      id: 3,
      name: 'Maria G.',
      avatar: '👩',
      service: 'Move-Out Deep Clean',
      rating: 5,
      review:
        'Got our security deposit back in full thanks to their thorough move-out clean. Incredible attention to detail and they beat competitors on price.',
      badge: 'verified-customer',
    },
    {
      id: 4,
      name: 'Robert K.',
      avatar: '👨',
      service: 'Eco-Friendly Cleaning',
      rating: 5,
      review:
        'Love that they use organic products. My allergies have improved since switching. Service is just as thorough as chemical cleaners but guilt-free.',
      badge: 'repeat-customer',
    },
    {
      id: 5,
      name: 'Emily P.',
      avatar: '👩‍🦰',
      service: 'Pet-Friendly Deep Clean',
      rating: 5,
      review:
        'My dog has no anxiety when they arrive — they actually love the team! Odor elimination is perfect, and I trust them 100% with my pets home.',
      badge: 'verified-customer',
    },
  ];

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const testimonial = testimonials[current];

  return (
    <section
      style={{
        padding: '72px 0',
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e8f3ff 100%)',
      }}
    >
      <div className="container">
        <p className="section-label">Customer Feedback</p>
        <h2 className="section-h2">Real Stories from Real Customers</h2>
        <p className="section-sub">Join thousands of satisfied clients who trust Stars Maid.</p>

        <div
          style={{
            maxWidth: '600px',
            margin: '40px auto 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Main Testimonial Card */}
          <article
            style={{
              background: '#ffffff',
              border: '2px solid #0EA5E9',
              borderRadius: '16px',
              padding: '32px',
              textAlign: 'center',
              minHeight: '280px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Avatar & Name */}
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '12px' }}>{testimonial.avatar}</div>
              <h3 style={{ marginBottom: '4px', fontSize: '1.2rem', fontWeight: '700' }}>
                {testimonial.name}
              </h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '0.9rem', marginBottom: '12px' }}>
                {testimonial.service}
              </p>

              {/* Rating Stars */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '4px',
                  marginBottom: '16px',
                }}
              >
                {Array(testimonial.rating)
                  .fill(null)
                  .map((_, i) => (
                    <span key={i} style={{ fontSize: '1.2rem', color: '#EBC053' }}>
                      ⭐
                    </span>
                  ))}
              </div>
            </div>

            {/* Review Text */}
            <blockquote style={{ fontSize: '1rem', lineHeight: '1.6', fontStyle: 'italic', margin: '16px 0' }}>
              "{testimonial.review}"
            </blockquote>

            {/* Badge */}
            <div style={{ marginTop: '16px' }}>
              <span
                style={{
                  display: 'inline-block',
                  background: 'var(--accent)',
                  color: '#ffffff',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                }}
              >
                ✓ {testimonial.badge === 'verified-customer' ? 'Verified Customer' : 'Repeat Customer'}
              </span>
            </div>
          </article>

          {/* Navigation Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginTop: '24px',
            }}
          >
            <button
              onClick={handlePrev}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '2px solid var(--ink)',
                background: '#ffffff',
                cursor: 'pointer',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--accent)';
                e.target.style.color = '#ffffff';
                e.target.style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.color = 'inherit';
                e.target.style.borderColor = 'var(--ink)';
              }}
            >
              ←
            </button>

            {/* Dots Indicator */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    background: i === current ? 'var(--accent)' : '#ccc',
                    transition: 'background 0.2s',
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '2px solid var(--ink)',
                background: '#ffffff',
                cursor: 'pointer',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--accent)';
                e.target.style.color = '#ffffff';
                e.target.style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.color = 'inherit';
                e.target.style.borderColor = 'var(--ink)';
              }}
            >
              →
            </button>
          </div>

          {/* Counter */}
          <p
            style={{
              marginTop: '16px',
              fontSize: '0.85rem',
              color: 'var(--ink-2)',
            }}
          >
            {current + 1} / {testimonials.length}
          </p>
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: '48px',
            padding: '24px',
            background: '#ffffff',
            borderRadius: '12px',
            textAlign: 'center',
          }}
        >
          <h3 style={{ marginBottom: '12px', fontSize: '1rem' }}>⭐ See more reviews on</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ padding: '8px 12px', background: '#f0f0f0', borderRadius: '6px', fontSize: '0.9rem' }}>
              Google Reviews
            </span>
            <span style={{ padding: '8px 12px', background: '#f0f0f0', borderRadius: '6px', fontSize: '0.9rem' }}>
              Yelp
            </span>
            <span style={{ padding: '8px 12px', background: '#f0f0f0', borderRadius: '6px', fontSize: '0.9rem' }}>
              Trustpilot
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
