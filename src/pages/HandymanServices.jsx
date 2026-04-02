import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Auth from '../utils/auth.js';

export default function HandymanServices() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [orderedServices, setOrderedServices] = useState([]);

  const baseServices = [
    { id: 'assembly', name: 'Furniture Assembly', desc: 'IKEA, bed frames, shelving, more', icon: '🪑' },
    { id: 'drywall', name: 'Drywall & Painting', desc: 'Repairs, patches, full paint jobs', icon: '🎨' },
    { id: 'repairs', name: 'General Repairs', desc: 'Doors, locks, hinges, fixtures', icon: '🔧' },
    { id: 'plumbing', name: 'Minor Plumbing', desc: 'Faucet fixes, clogs, leaks', icon: '🚰' },
    { id: 'electrical', name: 'Electrical Fixes', desc: 'Outlet repair, light fixtures', icon: '💡' },
    { id: 'mounting', name: 'TV/Shelving Mounting', desc: 'Wall mounting, bracket installation', icon: '📺' },
    { id: 'caulking', name: 'Caulking & Sealant', desc: 'Bathroom, kitchen, window sealing', icon: '🔲' },
    { id: 'weatherstrip', name: 'Weather Stripping', desc: 'Door/window seals for winter, spring', icon: '🪟' },
    { id: 'lawn', name: 'Lawn Maintenance', desc: 'Seasonal yard prep, cleanup', icon: '🌳' },
    { id: 'gutter', name: 'Gutter Cleaning', desc: 'Leaf removal, downspout check', icon: '💧' },
    { id: 'moving', name: 'Moving Assistance', desc: 'Heavy lifting, furniture placement', icon: '📦' },
    { id: 'maintenance', name: 'Seasonal Maintenance', desc: 'AC filters, winterization, prep', icon: '🏠' },
  ];

  // Reorder services based on query param
  useEffect(() => {
    const selectedService = searchParams.get('service');
    if (selectedService) {
      const filtered = baseServices.filter((s) => s.id === selectedService);
      const remaining = baseServices.filter((s) => s.id !== selectedService);
      setOrderedServices([...filtered, ...remaining]);
    } else {
      setOrderedServices(baseServices);
    }
  }, [searchParams]);

  const handleWaitlist = (serviceId) => {
    setSelectedService(serviceId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send to backend/email service
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedService(null);
      setWaitlistEmail('');
    }, 3000);
  };

  return (
    <main style={{ background: '#f8fafc' }}>
      {/* Hero */}
      <section
        style={{
          padding: '80px 40px',
          background: 'linear-gradient(135deg, #1E3A8A 0%, #06B6D4 100%)',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🔧⚡</div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '8px' }}>
            Handyman Services (Coming Soon)
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
            Join our waitlist for furniture assembly, repairs, painting, lawn care, and more. Starting Q2 2026.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {orderedServices.map((service) => (
              <div
                key={service.id}
                style={{
                  background: '#fff',
                  border: '2px solid #cbd5e1',
                  borderRadius: '14px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  opacity: 0.7,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}
              >
                {/* Header */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '12px', opacity: 0.6 }}>{service.icon}</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '4px', color: '#64748b' }}>
                    {service.name}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.4' }}>
                    {service.desc}
                  </p>
                </div>

                {/* Badge + Button */}
                <div style={{ marginTop: 'auto' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      background: '#f1f5f9',
                      color: '#64748b',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      marginBottom: '12px',
                    }}
                  >
                    Coming Q2 2026
                  </div>

                  {selectedService === service.id && !submitted ? (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={waitlistEmail}
                        onChange={(e) => setWaitlistEmail(e.target.value)}
                        required
                        style={{
                          padding: '8px 12px',
                          border: '1px solid #e2e8f0',
                          borderRadius: '6px',
                          fontSize: '0.9rem',
                        }}
                      />
                      <button
                        type="submit"
                        style={{
                          padding: '8px',
                          background: '#06B6D4',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '6px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                        }}
                      >
                        Join Waitlist
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedService(null)}
                        style={{
                          padding: '8px',
                          background: 'transparent',
                          color: '#94a3b8',
                          border: '1px solid #e2e8f0',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '0.85rem',
                        }}
                      >
                        Cancel
                      </button>
                    </form>
                  ) : submitted && selectedService === service.id ? (
                    <div
                      style={{
                        padding: '8px 12px',
                        background: '#dcfce7',
                        color: '#15803d',
                        borderRadius: '6px',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        textAlign: 'center',
                      }}
                    >
                      ✓ Added to waitlist!
                    </div>
                  ) : (
                    <button
                      onClick={() => handleWaitlist(service.id)}
                      style={{
                        width: '100%',
                        padding: '8px',
                        background: '#e2e8f0',
                        color: '#64748b',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                      }}
                    >
                      Join Waitlist
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section style={{ padding: '60px 0', background: '#fff', marginTop: '40px' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '24px', textAlign: 'center' }}>
            Why Handyman Services Are Coming
          </h2>

          <div style={{ display: 'grid', gap: '24px' }}>
            <div>
              <h3 style={{ fontWeight: '700', marginBottom: '8px', color: '#1E3A8A' }}>🎯 One-Stop-Shop</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                No more juggling multiple contractors. Clean home + handyman service from the same trusted team.
              </p>
            </div>

            <div>
              <h3 style={{ fontWeight: '700', marginBottom: '8px', color: '#1E3A8A' }}>⚡ Background Checked</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Same vetting, training, and accountability as our cleaning team. Not sketchy handymen off Craigslist.
              </p>
            </div>

            <div>
              <h3 style={{ fontWeight: '700', marginBottom: '8px', color: '#1E3A8A' }}>💰 Fair Pricing</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                No upcharges. Transparent quotes before work. Subscription discounts available.
              </p>
            </div>

            <div>
              <h3 style={{ fontWeight: '700', marginBottom: '8px', color: '#1E3A8A' }}>📅 Flexible Scheduling</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Book during your cleaning appointment or separately. Same-day estimates by phone.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center', padding: '24px', background: '#f0f9ff', borderRadius: '12px' }}>
            <p style={{ color: '#0c4a6e', fontWeight: '600' }}>
              💌 Join the waitlist above to be notified when handyman services launch!
            </p>
          </div>
        </div>
      </section>

      {/* Cleaning Link */}
      <section style={{ padding: '60px 0', background: '#fff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '12px' }}>
            Ready to book a cleaning service now?
          </h2>
          <p style={{ color: '#64748b', marginBottom: '24px' }}>
            We have 10 cleaning services available today
          </p>
          <button
            onClick={() => navigate('/services/cleaning')}
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
            Browse Cleaning Services
          </button>
        </div>
      </section>
    </main>
  );
}
