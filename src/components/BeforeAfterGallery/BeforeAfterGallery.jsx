import { useState } from 'react';

export default function BeforeAfterGallery() {
  const [expanded, setExpanded] = useState(null);

  const galleries = [
    {
      id: 'standard',
      title: 'Standard Cleaning',
      before: '🏠',
      after: '✨',
      desc: 'Everyday maintenance and freshness',
    },
    {
      id: 'deep',
      title: 'Deep Cleaning',
      before: '🧹',
      after: '🌟',
      desc: 'Thorough top-to-bottom transformation',
    },
    {
      id: 'moveout',
      title: 'Move In / Move Out',
      before: '📦',
      after: '🏡',
      desc: 'Complete pre-handover deep clean',
    },
  ];

  return (
    <section style={{ padding: '72px 0', background: '#ffffff' }}>
      <div className="container">
        <p className="section-label">Visual Proof</p>
        <h2 className="section-h2">Before & After Gallery</h2>
        <p className="section-sub">See the transformation our team delivers for every service.</p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginTop: '40px',
          }}
        >
          {galleries.map((gallery) => (
            <article
              key={gallery.id}
              style={{
                background: '#f8fbff',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onClick={() => setExpanded(expanded === gallery.id ? null : gallery.id)}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  height: '200px',
                  background: 'linear-gradient(90deg, #eef0f2, #e8f3ff)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRight: '2px solid var(--border)',
                  }}
                >
                  <span style={{ fontSize: '3rem', marginBottom: '8px' }}>{gallery.before}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--ink-3)' }}>
                    Before
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: '3rem', marginBottom: '8px' }}>{gallery.after}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--ink-3)' }}>
                    After
                  </span>
                </div>
              </div>

              <div style={{ padding: '16px' }}>
                <h3 style={{ marginBottom: '4px', fontWeight: '700' }}>{gallery.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--ink-2)', marginBottom: '12px' }}>
                  {gallery.desc}
                </p>
                <button className="btn btn-outline btn-sm">
                  {expanded === gallery.id ? 'Hide Photos' : 'View Photos'}
                </button>
              </div>

              {expanded === gallery.id && (
                <div style={{ padding: '12px', background: '#fff', borderTop: '1px solid var(--border)' }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--ink-3)', textAlign: 'center' }}>
                    📸 High-res photo gallery (coming soon — upload via admin panel)
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>

        <p
          style={{
            marginTop: '32px',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: 'var(--ink-2)',
          }}
        >
          🎥 Video walkthroughs available on individual service pages
        </p>
      </div>
    </section>
  );
}
