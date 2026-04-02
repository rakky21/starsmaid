export default function FeaturesBadges() {
  const features = [
    { icon: '⚡', title: 'Same-Day Scheduling', desc: 'Book instantly, we arrive ready.' },
    { icon: '📱', title: 'Real-Time Updates', desc: 'SMS alerts for arrivals & departures.' },
    { icon: '🏘️', title: 'Local DMV Business', desc: 'Your money supports local folks.' },
    { icon: '💰', title: 'Recurring Discounts', desc: 'Subscribe & save 15% on services.' },
    { icon: '🎯', title: 'Price Guarantee', desc: 'Beat any competitor quote.' },
    { icon: '🐾', title: 'Pet & Allergy Friendly', desc: 'Safe, hypoallergenic products.' },
  ];

  return (
    <section style={{ padding: '72px 0', background: 'linear-gradient(135deg, #f0f9ff 0%, #e8f3ff 100%)' }}>
      <div className="container">
        <p className="section-label">Why Choose Stars Maid</p>
        <h2 className="section-h2">Trusted by DMV Families</h2>
        <p className="section-sub">6 reasons hundreds of families book us again & again</p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            marginTop: '40px',
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                background: '#ffffff',
                border: '2px solid #06B6D4',
                borderRadius: '14px',
                padding: '28px 20px',
                textAlign: 'center',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(6, 182, 212, 0.15)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = '#0EA5E9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = '#06B6D4';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '8px', color: '#1E3A8A' }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.5' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
