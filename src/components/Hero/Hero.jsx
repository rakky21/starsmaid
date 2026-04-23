import { useState, React } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth.js';
import styles from './Hero.module.css';

const FEATURED = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
    name: 'Standard Cleaning',
    price: 'From $89 · 2–3 hrs',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </svg>
    ),
    name: 'Deep Cleaning',
    price: 'From $149 · 4–6 hrs',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    name: 'Handyman Repairs',
    price: 'From $75 · 1–2 hrs',
  },
];

export default function Hero() {
  const navigate = useNavigate();
  const [sel, setSel] = useState(0);

  const handleBook = () => {
    if (Auth.loggedIn()) navigate('/book');
    else navigate('/login');
  };

  return (
    <section className={styles.hero}>
      <div className={styles.gridBg} />
      <div className={styles.blob} />
      <div className={styles.inner}>
        {/* Left copy */}
        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span className="tag tag-accent">
              <svg width="8" height="8" viewBox="0 0 10 10" fill="currentColor"><circle cx="5" cy="5" r="5" /></svg>
              DMV Area · Family-Owned
            </span>
          </div>
          <h1 className={styles.h1}>
            Spotless spaces,<br />
            <em className={styles.em}>on your schedule.</em>
          </h1>
          <p className={styles.sub}>
            Professional cleaning and renovation services designed around your
            life. Book in minutes, delivered with care.
          </p>
          <div className={styles.cta}>
            <button className="btn btn-primary" onClick={handleBook}>
              Book an Appointment
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => document.getElementById('section-services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
          {/* <div className={styles.trust}>
            <div className={styles.avatars}>
              {['JR','ML','SK','+'].map((i) => <span key={i}>{i}</span>)}
            </div>
            <div className={styles.trustText}>
              <strong>Clients</strong> trust StarsMaid<br />across the DMV area
            </div>
          </div> */}
        </div>

        {/* Right card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Top Services</span>
            <span className="tag tag-accent">Book Now</span>
          </div>
          <div className={styles.svcList}>
            {FEATURED.map((s, i) => (
              <div
                key={s.name}
                className={`${styles.svcItem} ${sel === i ? styles.svcSel : ''}`}
                onClick={() => setSel(i)}
              >
                <div className={`${styles.svcIcon} ${sel === i ? styles.svcIconSel : ''}`}>
                  {s.icon}
                </div>
                <div>
                  <div className={styles.svcName}>{s.name}</div>
                  <div className={styles.svcPrice}>{s.price}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-primary btn-full" onClick={handleBook}>
            Book Selected Service
          </button>
        </div>
      </div>
    </section>
  );
}
