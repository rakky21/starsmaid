import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function InteractiveFeaturedServices() {
  const navigate = useNavigate();
  const [selectedIdx, setSelectedIdx] = useState(0);
  const scrollContainerRef = useRef(null);

  const services = [
    {
      id: 1,
      name: 'Standard Cleaning',
      price: 'From $89',
      time: '2-3 hours',
      description: 'Weekly or bi-weekly maintenance for a fresh, organized home',
      icon: '🧹',
      color: '#0EA5E9',
      features: ['Vacuuming & mopping', 'Dusting all surfaces', 'Bathroom cleaning', 'Kitchen refresh'],
    },
    {
      id: 2,
      name: 'Deep Cleaning',
      price: 'From $149',
      time: '4-6 hours',
      description: 'Thorough top-to-bottom refresh when you need it most',
      icon: '✨',
      color: '#06B6D4',
      features: ['Baseboards & corners', 'Inside appliances', 'Grout cleaning', 'Window interiors'],
    },
    {
      id: 3,
      name: 'Move In/Out Cleaning',
      price: 'From $199',
      time: '3-4 hours',
      description: 'Complete home prep for transitions — perfect for getting deposits back',
      icon: '📦',
      color: '#14B8A6',
      features: ['Every room pristine', 'Appliance details', 'Wall touch-ups', 'Final walkthrough'],
    },
    {
      id: 4,
      name: 'Pet-Friendly Cleaning',
      price: 'From $110',
      time: '2-3 hours',
      description: 'Allergy-safe, pet-approved cleaning without the stress',
      icon: '🐾',
      color: '#0EA5E9',
      features: ['Pet hair removal', 'Odor elimination', 'Safe products', 'Gentle on pets'],
    },
    {
      id: 5,
      name: 'Office Cleaning',
      price: 'From $150',
      time: '2-4 hours',
      description: 'Professional workspaces that boost productivity & morale',
      icon: '🏢',
      color: '#06B6D4',
      features: ['Desk sanitizing', 'Floor polish', 'Break room', 'Restroom care'],
    },
    {
      id: 6,
      name: 'Eco-Friendly Cleaning',
      price: 'From $99',
      time: '2-3 hours',
      description: 'Green cleaning products that work just as hard as chemicals',
      icon: '🌱',
      color: '#14B8A6',
      features: ['Organic products', 'Zero toxins', 'Safe for kids', 'Better for Earth'],
    },
  ];

  const handleScroll = (e) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollPosition = container.scrollTop;
    const itemHeight = container.clientHeight;
    const newIdx = Math.round(scrollPosition / itemHeight);

    if (newIdx !== selectedIdx && newIdx < services.length) {
      setSelectedIdx(newIdx);
    }
  };

  const scrollToService = (idx) => {
    setSelectedIdx(idx);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = idx * scrollContainerRef.current.clientHeight;
    }
  };

  const selected = services[selectedIdx];

  return (
    <section style={{ padding: '72px 0', background: '#f8fafc' }}>
      <div className="container">
        <p className="section-label">Featured Services</p>
        <h2 className="section-h2">What We Do Best</h2>
        <p className="section-sub">Explore our most popular services trusted by hundreds of DMV families</p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            marginTop: '48px',
            alignItems: 'stretch',
          }}
        >
          {/* Left: Scrollable List */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '500px',
              overflowY: 'auto',
              gap: '12px',
              paddingRight: '12px',
              scrollBehavior: 'smooth',
              scrollSnapType: 'y mandatory',
            }}
          >
            {services.map((service, idx) => (
              <div
                key={service.id}
                onClick={() => scrollToService(idx)}
                style={{
                  padding: '20px',
                  borderRadius: '12px',
                  background: selectedIdx === idx ? service.color : '#ffffff',
                  border: `2px solid ${selectedIdx === idx ? service.color : '#e5e7eb'}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  color: selectedIdx === idx ? '#ffffff' : '#1e293b',
                  transform: selectedIdx === idx ? 'scale(1.02)' : 'scale(1)',
                  boxShadow:
                    selectedIdx === idx
                      ? `0 10px 25px rgba(${parseInt(service.color.slice(1, 3), 16)}, ${parseInt(service.color.slice(3, 5), 16)}, ${parseInt(service.color.slice(5, 7), 16)}, 0.2)`
                      : 'none',
                  scrollSnapAlign: 'start',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '1.5rem' }}>{service.icon}</span>
                  <div>
                    <h3 style={{ fontWeight: '700', marginBottom: '2px' }}>{service.name}</h3>
                    <p style={{ fontSize: '0.9rem', opacity: selectedIdx === idx ? 0.9 : 0.7 }}>
                      {service.price} · {service.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Large Service Card with Details */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '40px',
              border: `3px solid ${selected.color}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            }}
          >
            {/* Header */}
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '12px' }}>{selected.icon}</div>
              <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '8px', color: selected.color }}>
                {selected.name}
              </h2>
              <p style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '16px', color: '#64748b' }}>
                {selected.price} · {selected.time}
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#475569', marginBottom: '24px' }}>
                {selected.description}
              </p>

              {/* Features */}
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: '700', color: '#64748b', marginBottom: '12px' }}>
                  What's Included
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selected.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: '#475569',
                      }}
                    >
                      <span style={{ color: selected.color, fontWeight: '700' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => window.location.href = '/book'}
              className="btn btn-primary"
              style={{
                background: selected.color,
                border: 'none',
                width: '100%',
                padding: '14px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              Book {selected.name}
            </button>
          </div>
        </div>

        {/* Mobile-friendly dots for navigation */}
        <div
          style={{
            display: 'none',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '32px',
          }}
        >
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToService(idx)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                background: idx === selectedIdx ? '#0EA5E9' : '#cbd5e1',
                transition: 'background 0.2s',
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .interactive-featured-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .featured-scroll-list {
            flex-direction: row !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
