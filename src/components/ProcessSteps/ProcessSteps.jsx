export default function ProcessSteps() {
  const steps = [
    {
      num: 1,
      icon: '📱',
      title: 'Book Online',
      desc: 'Select your service, date, and time — takes less than 60 seconds.',
    },
    {
      num: 2,
      icon: '✓',
      title: 'Expert Arrives',
      desc: 'Our certified, insured team shows up on time with all supplies ready.',
    },
    {
      num: 3,
      icon: '✨',
      title: 'Relax & Enjoy',
      desc: 'Sit back while we transform your space into a spotless sanctuary.',
    },
  ];

  return (
    <section style={{ padding: '72px 0', background: '#ffffff' }}>
      <div className="container">
        <p className="section-label">Simple Process</p>
        <h2 className="section-h2">How It Works</h2>
        <p className="section-sub">Three simple steps to a cleaner home.</p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            marginTop: '48px',
          }}
        >
          {steps.map((step) => (
            <div key={step.num} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '3.5rem',
                  marginBottom: '12px',
                  lineHeight: 1,
                }}
              >
                {step.icon}
              </div>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--accent)',
                  color: '#fff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 14px',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                }}
              >
                {step.num}
              </div>
              <h3 style={{ marginBottom: '6px', fontSize: '1.1rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
