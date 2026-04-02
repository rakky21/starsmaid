import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Auth from '../utils/auth.js';

export default function CleaningServices() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [timeFilter, setTimeFilter] = useState(null);
  const [levelFilter, setLevelFilter] = useState(null);
  const [orderedServices, setOrderedServices] = useState([]);

  const baseServices = [
    {
      id: 'standard',
      name: 'Standard Cleaning',
      desc: 'Weekly or bi-weekly maintenance clean',
      time: 'standard',
      level: 'standard',
      popularity: 95,
      icon: '🧹',
      features: ['Vacuuming & sweeping', 'Dusting', 'Mopping', 'Bathroom basics', 'Kitchen wipe-down'],
    },
    {
      id: 'deep',
      name: 'Deep Cleaning',
      desc: 'Thorough top-to-bottom refresh',
      time: 'deep',
      level: 'intensive',
      popularity: 90,
      icon: '✨',
      features: ['Everything in Standard', 'Baseboards & corners', 'Inside appliances', 'Grout cleaning', 'Window interiors'],
    },
    {
      id: 'moveout',
      name: 'Move In/Out Cleaning',
      desc: 'Complete home turnover for transitions',
      time: 'deep',
      level: 'intensive',
      popularity: 80,
      icon: '📦',
      features: ['Deep clean every room', 'Appliance details', 'Wall scrubbing', 'Final walkthrough', 'Inspection-ready'],
    },
    {
      id: 'carpet',
      name: 'Carpet & Upholstery',
      desc: 'Professional fabric & carpet care',
      time: 'standard',
      level: 'intensive',
      icon: '🛋️',
      features: ['Carpet stain removal', 'Deep extraction', 'Sofa/chair cleaning', 'Odor treatment', 'Scotchgard option'],
    },
    {
      id: 'window',
      name: 'Window Cleaning',
      desc: 'Interior & exterior window specialists',
      time: 'quick',
      level: 'light',
      icon: '🪟',
      features: ['Interior & exterior', 'Frames & sills', 'Track cleaning', 'Streak-free shine', 'Ladder work included'],
    },
    {
      id: 'office',
      name: 'Office Cleaning',
      desc: 'Commercial spaces that impress',
      time: 'standard',
      level: 'standard',
      popularity: 60,
      icon: '🏢',
      features: ['Desk sanitizing', 'Floor polish', 'Break room', 'Restroom care', 'Custom schedules'],
    },
    {
      id: 'eco',
      name: 'Eco-Friendly Cleaning',
      desc: 'Green products, zero toxins',
      time: 'standard',
      level: 'standard',
      popularity: 55,
      icon: '🌱',
      features: ['Organic products only', 'Pet & kid safe', 'Hypoallergenic', 'No harsh chemicals', 'Same effectiveness'],
    },
    {
      id: 'pet',
      name: 'Pet-Friendly Cleaning',
      desc: 'Allergy-safe, pet-approved service',
      time: 'standard',
      level: 'standard',
      popularity: 70,
      icon: '🐾',
      features: ['Pet hair removal', 'Odor elimination', 'Safe products', 'Gentle approach', 'Pets welcome'],
    },
    {
      id: 'post',
      name: 'Post-Event Cleaning',
      desc: 'After parties, gatherings, events',
      time: 'deep',
      level: 'intensive',
      popularity: 65,
      icon: '🎉',
      features: ['Debris removal', 'Floor deep clean', 'Trash haul-away', 'Quick turnaround', 'Same-day available'],
    },
    {
      id: 'commercial',
      name: 'Commercial Cleaning',
      desc: 'Custom commercial property care',
      time: 'deep',
      level: 'intensive',
      popularity: 75,
      icon: '🏗️',
      features: ['Retail spaces', 'Warehouses', 'Multi-floor buildings', 'Custom quotes', 'Flexible scheduling'],
    },
  ];

  // Reorder services based on query param
  useEffect(() => {
    const selectedService = searchParams.get('service');
    const sortBy = searchParams.get('sort');

    let workingSet = [...baseServices];

    if (sortBy === 'popularity') {
      workingSet.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    }

    if (selectedService) {
      const selected = workingSet.filter((s) => s.id === selectedService);
      const remaining = workingSet.filter((s) => s.id !== selectedService);
      workingSet = [...selected, ...remaining];
    }

    setOrderedServices(workingSet);
  }, [searchParams]);

  const filtered = orderedServices.filter((s) => {
    if (timeFilter && s.time !== timeFilter) return false;
    if (levelFilter && s.level !== levelFilter) return false;
    return true;
  });

  const handleBooking = (service) => {
    if (!Auth.loggedIn()) {
      navigate('/login');
    } else {
      navigate(`/book?service=${service.id}`);
    }
  };

  return (
    <main style={{ background: '#f8fafc' }}>
      {/* Hero */}
      <section
        style={{
          padding: '80px 40px',
          background: 'linear-gradient(135deg, #1E3A8A 0%, #0EA5E9 100%)',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🧹✨</div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '8px' }}>
            Professional Cleaning Services
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
            10 specialized cleaning solutions for your home or business. Pick your service, tell us your needs, and we'll handle the rest.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ padding: '40px 0', background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            {/* Time Filter */}
            <div>
              <h3 style={{ marginBottom: '16px', fontWeight: '700', fontSize: '0.95rem', textTransform: 'uppercase', color: '#64748b' }}>
                Duration
              </h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {[
                  { id: null, label: 'All Times' },
                  { id: 'quick', label: '⚡ Quick (< 1 hr)' },
                  { id: 'standard', label: '🕐 Standard (2-3 hrs)' },
                  { id: 'deep', label: '🔍 Deep (4-6 hrs)' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setTimeFilter(opt.id)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: `2px solid ${timeFilter === opt.id ? '#06B6D4' : '#e5e7eb'}`,
                      background: timeFilter === opt.id ? '#06B6D4' : '#f8fafc',
                      color: timeFilter === opt.id ? '#fff' : '#1e293b',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Level Filter */}
            <div>
              <h3 style={{ marginBottom: '16px', fontWeight: '700', fontSize: '0.95rem', textTransform: 'uppercase', color: '#64748b' }}>
                Intensity
              </h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {[
                  { id: null, label: 'All Levels' },
                  { id: 'light', label: '💨 Light (Surface)' },
                  { id: 'standard', label: '⭐ Standard' },
                  { id: 'intensive', label: '💪 Intensive (Deep)' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setLevelFilter(opt.id)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: `2px solid ${levelFilter === opt.id ? '#0EA5E9' : '#e5e7eb'}`,
                      background: levelFilter === opt.id ? '#0EA5E9' : '#f8fafc',
                      color: levelFilter === opt.id ? '#fff' : '#1e293b',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #e5e7eb', color: '#64748b', fontSize: '0.9rem' }}>
            Showing {filtered.length} of {services.length} services
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {filtered.map((service) => (
              <div
                key={service.id}
                style={{
                  background: '#fff',
                  border: '2px solid #06B6D4',
                  borderRadius: '14px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(6, 182, 212, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                }}
              >
                {/* Header */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{service.icon}</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '4px', color: '#1E3A8A' }}>
                    {service.name}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.4' }}>
                    {service.desc}
                  </p>
                </div>

                {/* Features */}
                <div style={{ marginBottom: '20px', flex: 1 }}>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '0.85rem',
                          color: '#475569',
                        }}
                      >
                        <span style={{ color: '#06B6D4', fontWeight: '700' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleBooking(service)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#06B6D4',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0EA5E9';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#06B6D4';
                  }}
                >
                  Schedule Cleaning
                </button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#64748b' }}>
              <p style={{ fontSize: '1.1rem' }}>No services match your filters.</p>
              <button
                onClick={() => {
                  setTimeFilter(null);
                  setLevelFilter(null);
                }}
                style={{
                  marginTop: '16px',
                  padding: '10px 20px',
                  background: '#06B6D4',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600',
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '60px 0', background: '#fff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '12px' }}>
            Still not sure which service?
          </h2>
          <p style={{ color: '#64748b', marginBottom: '24px' }}>
            Call us at (703) 555-0100 for a personalized recommendation
          </p>
          <button
            onClick={() => navigate('/contact')}
            style={{
              padding: '12px 32px',
              background: '#0EA5E9',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
