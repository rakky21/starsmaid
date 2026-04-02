import { useState } from 'react';

export default function ReferralPromo() {
  const [copied, setCopied] = useState(false);
  const referralCode = 'STARSMAID50';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section style={{ padding: '72px 0', background: '#ffffff' }}>
      <div className="container">
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, #06B6D4 0%, #0EA5E9 100%)',
            borderRadius: '16px',
            padding: '56px 40px',
            textAlign: 'center',
            color: '#ffffff',
            boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)',
          }}
        >
          <h2 style={{ fontSize: '2.2rem', fontWeight: '900', marginBottom: '12px' }}>
            Share the Stars Maid Love
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '32px', opacity: 0.95 }}>
            Refer a friend and you both get $50 credit. No limits, unlimited earning potential.
          </p>

          {/* Referral Process */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              marginBottom: '40px',
            }}
          >
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>1️⃣</div>
              <h4 style={{ fontWeight: '700', marginBottom: '8px' }}>Share</h4>
              <p>Give your friend your referral code and link</p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>2️⃣</div>
              <h4 style={{ fontWeight: '700', marginBottom: '8px' }}>They Book</h4>
              <p>They book their first cleaning with the code</p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>💰</div>
              <h4 style={{ fontWeight: '700', marginBottom: '8px' }}>You Get $50</h4>
              <p>Both of you get $50 credit applied instantly</p>
            </div>
          </div>

          {/* Copy Code Section */}
          <div>
            <p style={{ fontSize: '0.95rem', marginBottom: '12px', opacity: 0.9 }}>Your referral code:</p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  fontFamily: 'monospace',
                  border: '2px solid rgba(255, 255, 255, 0.4)',
                }}
              >
                {referralCode}
              </div>
              <button
                onClick={handleCopy}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid rgba(255, 255, 255, 0.4)',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontSize: '0.95rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                {copied ? '✓ Copied!' : '📋 Copy Code'}
              </button>
            </div>
          </div>

          {/* Terms */}
          <p style={{ fontSize: '0.85rem', marginTop: '24px', opacity: 0.8 }}>
            *$50 credit applies after first booking. Must be new customer to earn referral credit.
          </p>
        </div>
      </div>
    </section>
  );
}
